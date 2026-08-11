import { build } from "esbuild";
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const client = path.join(dist, "client");

await rm(dist, { recursive: true, force: true });
await mkdir(path.join(dist, "server"), { recursive: true });
await mkdir(client, { recursive: true });

const [htmlSource, tweaks, data, sections] = await Promise.all([
  readFile(path.join(root, "index.html"), "utf8"),
  readFile(path.join(root, "tweaks-panel.jsx"), "utf8"),
  readFile(path.join(root, "data.jsx"), "utf8"),
  readFile(path.join(root, "sections.jsx"), "utf8"),
]);

const inlineApp = [...htmlSource.matchAll(/<script type="text\/babel">([\s\S]*?)<\/script>/g)]
  .map((match) => match[1])
  .join("\n")
  .replace(/const \{ useState, useEffect \} = React;\s*/, "");

if (!inlineApp.trim()) throw new Error("Could not find the portfolio app entrypoint");

const bundleSource = `
import React from "react";
import ReactDOM from "react-dom/client";
${tweaks}
${data}
${sections}
${inlineApp}
`;

await build({
  stdin: {
    contents: bundleSource,
    loader: "jsx",
    sourcefile: "portfolio.jsx",
    resolveDir: root,
  },
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: path.join(client, "app.js"),
  platform: "browser",
  format: "iife",
  jsx: "transform",
});

const html = htmlSource
  .replace(/\s*<script[^>]+coding-unpkg-sdk[^>]*><\/script>/g, "")
  .replace(/\s*<script type="text\/babel" src="[^"]+"><\/script>/g, "")
  .replace(/\s*<script type="text\/babel">[\s\S]*?<\/script>/g, "")
  .replace("styles.css?v=8", "/styles.css")
  .replace("</body>", '  <script src="/app.js" defer></script>\n</body>');

await Promise.all([
  writeFile(path.join(client, "index.html"), html),
  cp(path.join(root, "styles.css"), path.join(client, "styles.css")),
  cp(path.join(root, "assets"), path.join(client, "assets"), { recursive: true }),
  cp(path.join(root, "thumbnail.png"), path.join(client, "thumbnail.png")),
  writeFile(
    path.join(dist, "server", "index.js"),
    'export default { async fetch(request, env) { return env.ASSETS.fetch(request); } };\n',
  ),
]);

console.log("Portfolio build complete: dist/client + dist/server");
