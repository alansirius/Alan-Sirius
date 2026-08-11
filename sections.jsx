/* ============================================================
   sections.jsx — presentational sections
   Exports to window: Nav, Hero, Marquee, Education,
   Experience, Work, ProjectModal, Skills, Contact, useReveal
   ============================================================ */

const { useState, useEffect, useRef } = React;

/* reveal-on-scroll hook */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-in)");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["#education", "教育"],
    ["#experience", "实习"],
    ["#work", "项目"],
    ["#skills", "技能"],
  ];
  return (
    <nav className="nav">
      <div className="nav__brand">
        <span className="nav__dot"></span>
        {PORTFOLIO.name}
      </div>
      <div className={"nav__links" + (open ? " is-open" : "")}>
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a href="#contact" className="btn nav__cta" onClick={() => setOpen(false)}>联系我</a>
      </div>
      <button className="nav__burger" aria-label="菜单" onClick={() => setOpen((o) => !o)}>
        <span></span>
      </button>
    </nav>
  );
}

/* ---------------- HERO (draggable stickers) ---------------- */
function DraggableChip({ chip, boundsRef }) {
  const ref = useRef(null);
  const drag = useRef({ active: false, dx: 0, dy: 0 });

  const onDown = (e) => {
    const el = ref.current;
    const pt = e.touches ? e.touches[0] : e;
    const rect = el.getBoundingClientRect();
    drag.current = { active: true, dx: pt.clientX - rect.left, dy: pt.clientY - rect.top };
    el.style.zIndex = 20;
  };

  useEffect(() => {
    const move = (e) => {
      if (!drag.current.active) return;
      const pt = e.touches ? e.touches[0] : e;
      const parent = boundsRef.current.getBoundingClientRect();
      let x = pt.clientX - parent.left - drag.current.dx;
      let y = pt.clientY - parent.top - drag.current.dy;
      const el = ref.current;
      x = Math.max(-20, Math.min(x, parent.width - el.offsetWidth + 20));
      y = Math.max(-20, Math.min(y, parent.height - el.offsetHeight + 20));
      el.style.left = x + "px";
      el.style.top = y + "px";
      el.style.transform = "rotate(0deg)";
      if (e.cancelable) e.preventDefault();
    };
    const up = () => { drag.current.active = false; };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
  }, [boundsRef]);

  return (
    <div
      ref={ref}
      className="chip"
      onMouseDown={onDown}
      onTouchStart={onDown}
      style={{ left: chip.x + "%", top: chip.y + "%", transform: `rotate(${chip.rot}deg)` }}
    >
      <span className="emo" style={{ background: chip.color }}></span>
      {chip.text}
    </div>
  );
}

function Hero() {
  const stageRef = useRef(null);
  const h = PORTFOLIO.hero;
  return (
    <header className="hero wrap">
      <div className="hero__grid">
        <div className="hero__intro">
          <span className="eyebrow">{h.kicker}</span>
          <h1 className="hero__title">
            你好，我是 <span className="hl">{PORTFOLIO.name}</span>。
          </h1>
          <p className="hero__tagline">{PORTFOLIO.aboutLead}</p>
          <p className="hero__lead">{h.statement}</p>
          <div className="hero__cta">
            <a href="#work" className="btn">看我的项目 <Icon name="arrow" style={{ width: 18, height: 18 }} /></a>
            <a href={PORTFOLIO.hero.primaryHref || "https://github.com/alansirius"} className="btn btn--ghost">GitHub</a>
          </div>
        </div>

        <div className="hero__stage" ref={stageRef}>
          <img className="hero__avatar" src={PORTFOLIO.avatar} alt={PORTFOLIO.name} />
          {h.stickers.map((c, i) => (
            <DraggableChip key={i} chip={c} boundsRef={stageRef} />
          ))}
          <span className="chip__hint">↑ 拖拖看这些贴纸 ✦</span>
        </div>
      </div>

      <div className="hero__stats stat-grid">
        {PORTFOLIO.stats.map((s, i) => (
          <div key={i} className="sticker stat" style={{ transitionDelay: i * 80 + "ms" }}>
            <div className="stat__num" style={{ color: s.color }}>{s.num}</div>
            <div className="stat__label">{s.label}</div>
          </div>
        ))}
      </div>
    </header>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const run = (
    <span>
      {PORTFOLIO.marquee.map((w, i) => (
        <React.Fragment key={i}>{w} <span className="marquee__star">✦</span> </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">{run}{run}</div>
    </div>
  );
}

/* ---------------- EDUCATION ---------------- */
function Education() {
  return (
    <section className="section wrap" id="education">
      <div className="section__head reveal">
        <div>
          <span className="section__num">// 02</span>
          <h2 className="section__title">教育背景</h2>
        </div>
      </div>
      <div className="edu__grid">
        {PORTFOLIO.education.map((e, i) => (
          <article key={i} className="sticker edu-card reveal" style={{ transitionDelay: i * 80 + "ms" }}>
            <div className="edu-card__media">
              <img src={e.img} alt={e.school} />
              <span className="edu-card__badge" style={{ background: e.color }}>
                <Icon name="cap" style={{ width: 18, height: 18, color: "#fff" }} />
              </span>
            </div>
            <div className="edu-card__body">
              <div className="edu-card__period">{e.period}</div>
              <h3 className="edu-card__school">{e.school}</h3>
              <div className="edu-card__degree" style={{ color: e.color }}>{e.degree}</div>
              <p className="edu-card__detail">{e.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- EXPERIENCE (tabs) ---------------- */
function ExpStack({ visuals, color, onImage }) {
  const [i, setI] = useState(0);
  const n = visuals.length;
  const go = (d) => setI((p) => (p + d + n) % n);
  const cur = visuals[i];
  const cardStyle = (rel) => {
    if (rel === 0) return { transform: "translate(0,0) rotate(0deg) scale(1)", zIndex: 30, opacity: 1 };
    if (rel === 1) return { transform: "translate(20px,15px) rotate(3.5deg) scale(.955)", zIndex: 20, opacity: 1 };
    if (rel === 2) return { transform: "translate(36px,28px) rotate(6.5deg) scale(.915)", zIndex: 10, opacity: 1 };
    return { transform: "translate(48px,38px) rotate(9deg) scale(.9)", zIndex: 0, opacity: 0, pointerEvents: "none" };
  };
  return (
    <div className="exp__stack">
      <div className="exp__deck">
        {visuals.map((v, idx) => {
          const rel = (idx - i + n) % n;
          return (
            <figure
              key={idx}
              className="exp__card"
              style={{ ...cardStyle(rel), borderColor: rel === 0 ? "var(--ink)" : "var(--ink)" }}
              onClick={rel === 0 ? () => onImage(v.img, v.caption) : () => setI(idx)}
            >
              <span className="exp__card-bar" style={{ background: color }}></span>
              <img src={v.img} alt={v.label} />
            </figure>
          );
        })}
      </div>
      <div className="exp__stack-foot">
        {n > 1 && (
          <button className="exp__nav" onClick={() => go(-1)} aria-label="上一张" style={{ borderColor: color }}>
            <Icon name="arrow" style={{ width: 18, height: 18, transform: "rotate(180deg)", color }} />
          </button>
        )}
        <div className="exp__cap">
          <span className="exp__cap-label">{cur.label}</span>
          {n > 1 && (
            <span className="exp__cap-count" style={{ color }}>
              {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
            </span>
          )}
        </div>
        {n > 1 && (
          <button className="exp__nav" onClick={() => go(1)} aria-label="下一张" style={{ borderColor: color }}>
            <Icon name="arrow" style={{ width: 18, height: 18, color }} />
          </button>
        )}
      </div>
    </div>
  );
}

function Experience({ onImage }) {
  const [active, setActive] = useState(0);
  const exp = PORTFOLIO.experience[active];
  return (
    <section className="section wrap" id="experience">
      <div className="section__head reveal">
        <div>
          <span className="section__num">// 03</span>
          <h2 className="section__title">实习经历</h2>
        </div>
        <p className="section__note reveal">4 段 AI 产品实习，从 B 端智能体到内容 Agent 与学术工具。</p>
      </div>

      <div className="exp reveal">
        <div className="exp__tabs" role="tablist">
          {PORTFOLIO.experience.map((e, i) => (
            <button
              key={e.id}
              role="tab"
              className={"exp__tab" + (i === active ? " is-active" : "")}
              onClick={() => setActive(i)}
              style={i === active ? { "--tab": e.color } : undefined}
            >
              <span className="exp__tab-dot" style={{ background: e.color }}></span>
              <span className="exp__tab-co">{e.short}</span>
              <span className="exp__tab-pd">{e.period}{e.current ? " · 在职" : ""}</span>
            </button>
          ))}
        </div>

        <div className="exp__panel sticker" key={exp.id}>
          <div className="exp__panel-head">
            <div>
              <h3 className="exp__role">{exp.role}<span className="exp__at"> @ {exp.company} · {exp.team}</span></h3>
              <div className="exp__period">{exp.period}{exp.current && <span className="exp__live">● 进行中</span>}</div>
            </div>
          </div>
          <div className={"exp__intro" + (exp.visuals ? " exp__intro--media" : "")}>
            <div className="exp__intro-text">
              <p className="exp__summary">{exp.summary}</p>
              <div className="exp__metrics">
                {exp.metrics.map((m, i) => (
                  <div key={i} className="exp__metric">
                    <b style={{ color: exp.color }}>{m.v}</b>
                    <span>{m.l}</span>
                  </div>
                ))}
              </div>
            </div>
            {exp.visuals && <ExpStack visuals={exp.visuals} color={exp.color} onImage={onImage} />}
          </div>

          <div className="exp__work">
            {exp.work.map((w, i) => (
              <div key={i} className="exp__work-item">
                <span className="exp__work-tag" style={{ borderColor: exp.color, color: exp.color }}>{w.label}</span>
                <p>{w.body}</p>
              </div>
            ))}
          </div>

          <div className="exp__think" style={{ borderColor: exp.color }}>
            <span className="exp__think-mark" style={{ background: exp.color }}>我的思考</span>
            <p>{exp.thinking}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WORK (projects) ---------------- */
function Work({ onOpen }) {
  const [filter, setFilter] = useState("全部");
  const list = PORTFOLIO.projects.filter((p) => filter === "全部" || p.tag === filter);
  return (
    <section className="section wrap" id="work">
      <div className="section__head">
        <div className="reveal">
          <span className="section__num">// 04</span>
          <h2 className="section__title">个人项目</h2>
        </div>
        <div className="work__filters reveal">
          {PORTFOLIO.filters.map((f) => (
            <button
              key={f}
              className={"filter" + (filter === f ? " is-active" : "")}
              onClick={() => setFilter(f)}
            >{f}</button>
          ))}
        </div>
      </div>
      <div className="work__grid">
        {list.map((p) => (
          <article key={p.id} className="sticker card reveal" onClick={() => onOpen(p)}>
            <div className="card__media">
              <img src={p.cover} alt={p.title} />
              <span className="card__tag">{p.tag}</span>
              {p.images.length > 1 && <span className="card__count">{p.images.length} 图</span>}
            </div>
            <div className="card__body">
              <h3 className="card__title">{p.title} <span className="card__en">{p.en}</span></h3>
              <div className="card__role">{p.cat}</div>
              <p className="card__desc">{p.desc}</p>
              <div className="card__metrics">
                {p.metrics.slice(0, 3).map((m, i) => (
                  <div key={i} className="card__metric">
                    <b style={{ color: p.color }}>{m.v}</b>
                    <span>{m.l}</span>
                  </div>
                ))}
              </div>
              <div className="card__open" style={{ marginTop: 18 }}>
                <span className="btn btn--ghost" style={{ padding: "10px 18px", fontSize: ".9rem", pointerEvents: "none" }}>
                  查看案例 <Icon name="arrow" style={{ width: 16, height: 16 }} />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- PROJECT MODAL ---------------- */
function ProjectModal({ project, onClose, onImage }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
  if (!project) return null;
  const p = project;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="关闭">×</button>
        <div className="modal__inner">
        <div className="modal__media">
          <div className="modal__stage">
            <img src={p.images[idx]} alt={p.title} onClick={() => onImage(p.images[idx])} />
          </div>
          {p.images.length > 1 && (
            <div className="modal__thumbs">
              {p.images.map((im, i) => (
                <button
                  key={i}
                  className={"modal__thumb" + (i === idx ? " is-active" : "")}
                  onClick={() => setIdx(i)}
                  style={{ backgroundImage: `url(${im})` }}
                  aria-label={"图 " + (i + 1)}
                ></button>
              ))}
            </div>
          )}
        </div>
        <div className="modal__body">
          <span className="card__tag" style={{ position: "static", display: "inline-block", marginBottom: 12 }}>{p.tag}</span>
          <h3 className="modal__title">{p.title} <span className="card__en">{p.en}</span></h3>
          <div className="modal__role">{p.cat} · {p.period}</div>

          <div className="modal__metrics">
            {p.metrics.map((m, i) => (
              <div key={i} className="sticker stat">
                <div className="stat__num" style={{ color: p.color, fontSize: "1.7rem" }}>{m.v}</div>
                <div className="stat__label">{m.l}</div>
              </div>
            ))}
          </div>

          <div className="modal__section">
            <h4>问题</h4>
            <p>{p.pain}</p>
          </div>
          <div className="modal__section">
            <h4>我的解法</h4>
            <p>{p.approach}</p>
          </div>
          <div className="modal__section">
            <h4>亮点</h4>
            <div className="chip-row">
              {p.highlights.map((h) => <span key={h} className="mini-chip" style={{ background: p.color }}>{h}</span>)}
            </div>
          </div>
          <div className="modal__section">
            <h4>技术栈</h4>
            <div className="chip-row">
              {p.stack.map((s) => <span key={s} className="mini-chip mini-chip--ghost">{s}</span>)}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- LIGHTBOX ---------------- */
function Lightbox({ src, caption, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);
  if (!src) return null;
  return (
    <div className="lightbox" onClick={onClose}>
      <button className="modal__close lightbox__close" onClick={onClose} aria-label="关闭">×</button>
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={caption || ""} />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </div>
  );
}

/* ---------------- SKILLS ---------------- */
function Skills() {
  return (
    <section className="section wrap" id="skills">
      <div className="section__head reveal">
        <div>
          <span className="section__num">// 05</span>
          <h2 className="section__title">技能栈</h2>
        </div>
      </div>
      <div className="skills__grid">
        {PORTFOLIO.skills.map((s, i) => (
          <div key={i} className="sticker skill-card reveal" style={{ transitionDelay: i * 80 + "ms" }}>
            <div className="skill-card__icon" style={{ background: s.color, color: "#fff" }}>
              <Icon name={s.icon} />
            </div>
            <h3>{s.title}</h3>
            <ul className="skill-list">
              {s.items.map((it, j) => (
                <li key={j}>
                  <b style={{ color: s.color }}>{it.name}</b>
                  <span>{it.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section className="section wrap contact" id="contact">
      <div className="contact__card reveal">
        <span className="eyebrow" style={{ background: "var(--yellow)" }}>// 06 — 保持联系</span>
        <h2 className="contact__title">有好点子？<br />一起把它做出来。</h2>
        <p className="contact__lead">
          无论是 AI 产品合作、实习/校招机会，还是单纯想聊聊 Agent，我都很乐意收到你的消息。
        </p>
        <div className="contact__links">
          {PORTFOLIO.contact.socials.map((s) => (
            <a key={s.name} className="social" href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <Icon name={s.icon} /> {s.name}
            </a>
          ))}
        </div>
      </div>
      <div className="footer">
        © 2026 {PORTFOLIO.name} · {PORTFOLIO.handle} — 用 ✦ 与好奇心搭建
      </div>
    </section>
  );
}

Object.assign(window, {
  Nav, Hero, Marquee, Education, Experience, Work, ProjectModal, Lightbox, Skills, Contact, useReveal,
});
