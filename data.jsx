/* ============================================================
   data.jsx — 李洲昊 真实简历内容 + 共享 SVG 图标
   Exports to window: PORTFOLIO, Icon
   ============================================================ */

// 保留原网页中的插画头像
const AVATAR = "/spark/app/app_17bwx9p5171/runtime/api/v1/storage/object/bucket_aadkpk6zu66bu_static/static%2Faadkpk4ezi2iq_ve_miaoda";

const A = (f) => "assets/" + f; // 本地真实截图

const PORTFOLIO = {
  name: "李洲昊",
  handle: "Li Zhouhao",
  role: "AI 产品经理 · Agent 方向",
  location: "北京 · 传播学硕士",
  avatar: AVATAR,

  hero: {
    kicker: "AI 产品 / Agent · 智能传播",
    title2: "在做的，是让 AI 真正“把事办成”。",
    statement:
      "传播学硕士，专注 AI 产品与 Agent 落地。实习足迹覆盖飞书 Aily、京东 JoyCode、百度客悦与智谱 AMiner，习惯用数据说话、用原型对话。",
    stickers: [
      { text: "飞书 Aily 实习中", color: "var(--orange)", x: 1,  y: 6,  rot: -7 },
      { text: "4 段大厂实习", color: "var(--blue)",  x: 58, y: 1,  rot: 5 },
      { text: "3 款独立产品", color: "var(--mint)",  x: 62, y: 74, rot: -4 },
      { text: "把想法跑通", color: "var(--pink)",  x: -3, y: 70, rot: 6 },
    ],
  },

  marquee: [
    "智能传播", "多模态 Agent", "vibe coding", "端到端智能交付",
    "AgentScope", "LangGraph", "认知神经传播", "Prompt 工程", "评测体系", "内容 Agent",
  ],

  stats: [
    { num: "4", label: "段大厂实习", color: "var(--orange)" },
    { num: "3", label: "款独立产品", color: "var(--blue)" },
    { num: "3.84", label: "本科 GPA / 4.0", color: "var(--mint)" },
  ],

  about: [
    "我是李洲昊，一名专注 AI 产品与 Agent 方向的产品经理，也是北京师范大学传播学硕士。相信好产品是“被使用出来的”，喜欢把复杂问题拆成可以被验证的小假设。",
    "从飞书 Aily 的 B 端办公智能体，到京东 JoyCode 的端到端交付 Agent、百度客悦的内容营销数字员工、智谱 AMiner 的学术工具——我习惯用数据说话、用原型对话、用评测兜底能力边界。",
  ],
  aboutLead: "把模糊的想法，变成能被信任、每天被使用的产品。",

  education: [
    {
      school: "北京师范大学",
      degree: "传播学 · 硕士",
      period: "2024 — 2027",
      detail: "主修智能传播应用与理论、计算传播研究、认知神经传播学方法与技术。研究方向：智能传播、认知神经传播。",
      img: A("bnu.jpg"),
      color: "var(--blue)",
    },
    {
      school: "中国传媒大学",
      degree: "传播学 · 本科",
      period: "2020 — 2024",
      detail: "主修传播学概论、统计学、传播研究方法、传播效果实证研究、多媒体信息设计、传播心理学等；GPA 3.84 / 4.00。",
      img: A("cuc.jpg"),
      color: "var(--orange)",
    },
  ],

  experience: [
    {
      id: "aily",
      company: "字节跳动",
      short: "字节 · 飞书 Aily",
      team: "飞书 Aily",
      role: "AI 产品实习生",
      period: "2026/07 — 至今",
      current: true,
      color: "var(--orange)",
      summary: "参与企业级办公智能体产品化，把工作台形态、豆包模型融合与基础能力评测一起推进，目标是让智能体从“能回答”走向“能执行”。",
      work: [
        { label: "工作台", body: "把工作台从单轮问答界面改造成更接近“任务台”的产品形态：用户发起目标后，智能体串联知识库、插件与工作流按步骤推进任务。定义任务状态、工具调用、阶段产物与多步推理的呈现规则，让用户知道系统在做什么、做到哪一步、哪里需要确认。" },
        { label: "豆包融合", body: "推动 Aily 接入豆包大模型能力，围绕文档处理、会议纪要、信息抽取、数据洞察等办公任务拆解模型能力边界。重点不是替换底层模型，而是把模型的理解、推理与生成映射成用户可感知的办公动作，沉淀到智能体流程中。" },
        { label: "评测体系", body: "搭建基础能力评测框架，覆盖意图识别、工具调用、知识检索、幻觉控制与端到端任务完成。用评测集、指标口径与错误案例归因，把模型与 Agent 迭代从“凭体验判断”变成“有样本、有指标、有复盘依据”的工程化过程。" },
      ],
      thinking: "B 端智能体的价值不在能不能聊，而在能不能稳定推进任务。工作台把执行过程显性化，评测体系给能力边界兜底，两者结合，智能体才有机会从黑盒对话变成企业可以信任的执行体。",
      metrics: [
        { v: "92%", l: "意图识别准确率" },
        { v: "88%", l: "工具调用成功率" },
        { v: "76%", l: "端到端任务完成率" },
      ],
    },
    {
      id: "joycode",
      company: "京东科技",
      short: "京东 · JoyCode",
      team: "京东云事业群",
      role: "AI 产品实习生",
      period: "2026/03 — 2026/07",
      color: "var(--blue)",
      summary: "基于 JoyCode Team 参与端到端智能交付 Agent 设计，把需求分析、PRD、原型、技术设计与测试用例串成一条可被 IDE 消费的交付链路。",
      work: [
        { label: "交付 Agent", body: "设计端到端智能交付 Agent，将需求拆解为 PRD、原型、TRD（支持单仓与跨仓库）和测试用例等连续产物，直接进入 IDE 端使用。关键不是“生成更多文档”，而是把上游需求变成下游工程真正能消费的结构化上下文。" },
        { label: "Harness 体系", body: "基于 AgentScope 定义 Harness 体系，拆出上下文压缩、多 Agent 协作、原子能力调用等模块。长链路任务里信息容易撑爆上下文窗口，需要先压缩成可复用的产品上下文，再交给不同 Agent 分工处理。" },
        { label: "溯源凭证", body: "设计贯穿全流程的溯源凭证机制，让 PRD、TRD、测试用例回到原始需求、业务上下文与代码依据。不是假设 AI 永远正确，而是让错误可以被定位、被审计、被人工接管。" },
        { label: "评测调优", body: "主导生成链路的评测与调优，结合产品 Wiki、CodeWiki 与真实业务样例，用结构化 Prompt、Few-Shot 与错误类型归因提升稳定性，让模糊需求到 PRD、原型、TRD 的转化在真实业务中达到 85% 可用率。" },
      ],
      thinking: "交付类 Agent 最容易“看起来产物完整，实际研发不愿意用”。所以我把业务可用性和实际采纳率放在比生成质量更关键的位置：内容写得再顺，工程师不能接着开发就是无效产物。",
      metrics: [{ v: "85%", l: "业务可用率" }],
      visuals: [{ img: A("joycode-team.png"), label: "JoyCode Team 外部开放版", caption: "面向团队协作的端到端智能交付界面。" }],
    },
    {
      id: "keyoo",
      company: "百度",
      short: "百度 · 客悦",
      team: "智能云事业群",
      role: "Agent 开发实习生",
      period: "2025/12 — 2026/03",
      color: "var(--pink)",
      summary: "主导“客悦”内容营销数字员工的内容策略与 Agent 研发，从小红书内容策略拆解、本地 MVP 实现，到 Hogee 整合形态的产品验证。",
      work: [
        { label: "内容策略", body: "拆解小红书 AI 内容生产链路，从选题、封面、标题、正文结构、种草语气到评论反馈，梳理不同账号阶段的策略差异。基于冷启、增长、稳定三阶段提出渐进式路径，让 Agent 先解决稳定产出，再逐步引入风格迁移与数据反馈优化。" },
        { label: "多模态 Agent", body: "用 Python 跑通本地 MVP，围绕品牌知识、产品卖点、历史爆文与图片素材构建多模态内容生成流程。检索层采用 BM25 + KNN 混合重排，避免纯向量召回漏掉品牌名、产品词，核心业务知识 Top-100 召回率提升 31%。" },
        { label: "Prompt 调优", body: "针对内容不稳、同质化与幻觉问题，设计多阶结构化指令与场景化 Prompt 模板，把品牌约束、平台语气、内容结构与禁区规则拆开处理。配合 CoT、Few-Shot 与人工反馈样例，内容可用率从 21% 提升到 74%。" },
      ],
      thinking: "做内容 Agent，我更看重稳定性而非单次生成的惊艳。营销知识里有大量品牌名、产品词，纯语义召回容易漏掉硬约束，所以 BM25 与 KNN 混合；Prompt 也不追求万能模板，而是按账号阶段拆成可复用模块，保证质量下限。",
      metrics: [
        { v: "+31%", l: "召回率提升" },
        { v: "21%→74%", l: "内容可用率" },
        { v: "1000W+", l: "POC 曝光" },
      ],
      visuals: [
        { img: A("keyoo-1.jpg"), label: "客悦 Keyoo", caption: "内容营销数字员工的早期产品形态。" },
        { img: A("hogee-1.png"), label: "Hogee 整合形态", caption: "客悦后续整合后的产品界面。" },
        { img: A("hogee-2.jpg"), label: "Hogee 工作台", caption: "营销内容生产链路的关联截图。" },
      ],
    },
    {
      id: "aminer",
      company: "智谱华章",
      short: "智谱 · AMiner",
      team: "工程院",
      role: "AI 产品实习生",
      period: "2025/06 — 2025/10",
      color: "var(--mint)",
      summary: "围绕 AI 学术工具 AMiner 做产品规划、交互体验与内容增长，把论文发现、阅读消化、知识沉淀与学术产出放到同一条工作流里。",
      work: [
        { label: "产品规划", body: "针对论文跨平台消化的痛点，设计学术空间与 Research Labs 核心模块的 PRD 和交互流程。重点不是再做一个搜索入口，而是把论文阅读、摘要理解、笔记沉淀、引文追踪与综述生成放进同一个空间，减少研究过程中的上下文切换。" },
        { label: "商业化调研", body: "完成 AI 学术工具付费墙、会员权益与商业模式的竞品调研，对比文献检索、AI 阅读、知识库、写作辅助等功能的付费边界。同步输出标准化用户帮助手册，为后续转化链路提供内容支撑。" },
        { label: "用户增长", body: "搭建基于 AI 前沿进展、技术论文解读与工具教程的内容矩阵，用高密度学术内容吸引真实研究用户。微信生态阅读破万，单平台精准涨粉 4000+，增长目标不是泛流量，而是让有明确需求的人留下来。" },
      ],
      thinking: "AMiner 让我看到，AI 学术工具的留存不在搜索结果数量，而在用户能不能更快把论文变成自己的知识资产。产品上围绕“消化场”做深，增长上用技术论文做精准钩子，吸引真正会长期使用的人。",
      metrics: [
        { v: "4000+", l: "单平台涨粉" },
        { v: "破万", l: "微信阅读" },
      ],
      visuals: [
        { img: A("aminer-1.png"), label: "AMiner 界面", caption: "AI 学术工具相关产品界面。" },
        { img: A("aminer-3.png"), label: "Research Labs", caption: "Research Labs 相关产品界面。" },
        { img: A("aminer-4.png"), label: "学术空间", caption: "学术空间界面展示。" },
      ],
    },
  ],

  filters: ["全部", "已发布", "黑客马拉松", "创业尝试"],

  projects: [
    {
      id: "exitem",
      title: "Exitem",
      en: "Zotero-Exitem",
      tag: "已发布",
      cat: "AI 辅助文献提取与综述管理 · Zotero 插件",
      period: "个人项目 · 已发布",
      color: "var(--orange)",
      cover: A("exitem-1.png"),
      images: [A("exitem-1.png"), A("exitem-2.png"), A("exitem-3.png"), A("exitem-4.png")],
      desc: "围绕 Zotero 的文献提取与综述管理插件，把 PDF 阅读、批注、提炼、综述写作串成一条连续动作。",
      pain: "做文献综述时，研究者要在 PDF 阅读、批注、高亮、笔记、表格和综述文档之间反复切换。单篇精读、批量提炼、跨文献归纳与导出写作素材是连续动作，但现有工具经常把它们拆散——高亮沉在 PDF 里、笔记散在各处、综述时还要重新整理一遍。",
      approach: "Exitem 借助 zotero-gpt 支持单条和批量（≤5）AI 提炼，把 PDF 高亮、批注和原文上下文自动并入提取字段；同时在 Zotero 内嵌标签页里提供综述管理器，支持记录管理、文件夹合并合成、原始记录编辑与导出，让文献从阅读材料直接变成可复用的综述素材。",
      highlights: ["AI 单条/批量提炼", "综述管理器", "文件夹合成", "Zotero 8"],
      stack: ["Zotero 插件", "TypeScript", "zotero-gpt", "AI 提炼"],
      metrics: [
        { v: "≤5", l: "单次批量提炼上限" },
        { v: "Zotero 8", l: "兼容版本" },
      ],
    },
    {
      id: "miaobi",
      title: "妙笔",
      en: "Miaobi",
      tag: "黑客马拉松",
      cat: "自进化 Skills 引擎 · 京东客服提效与商家自运营",
      period: "黑客马拉松 · 2026/06 — 07",
      color: "var(--pink)",
      cover: A("miaobi-1.png"),
      images: [A("miaobi-1.png"), A("miaobi-2.png"), A("miaobi-3.png"), A("miaobi-4.png"), A("miaobi-5.png")],
      desc: "基于 AgentScope 的自进化 Skills 引擎，一端辅助京东主站客服，一端为商家自动生成专属 Skills 包。",
      pain: "京东主站客服每天处理大量咨询，知识库超 4000 条、每周更新 60+，一线客服很难实时消化所有政策与规则。商家自运营场景中，中小商家又缺少专业客服培训，回复质量不稳定，直接影响店铺评分与转化。更底层的问题是 Skills 创作链路太长，评测环境还经常和线上表现不一致。",
      approach: "基于 AgentScope 独立开发「妙笔」，将客服 SOP、产品知识库和商家资料结构化为可自进化的 Skills。一端部署到京东主站客服工作台实时辅助问答决策，另一端开放给商家自运营——上传知识库即可生成专属 Skills 包。系统按客服采纳/驳回、商家评分与线上反馈每天沉淀调试策略，让 Skills 随业务持续更新。",
      highlights: ["客服实时辅助", "商家 Skills 自动生成", "系统层自进化", "评测对齐线上"],
      stack: ["AgentScope", "Skills 引擎", "京东客服工作台", "自进化"],
      metrics: [
        { v: "4000+", l: "覆盖知识库条目" },
        { v: "+23%", l: "客服平均提效" },
        { v: "60+", l: "接入商家数" },
      ],
    },
    {
      id: "laifuer",
      title: "来福er",
      en: "Laifuer",
      tag: "创业尝试",
      cat: "AI 日常助手 · 网页应用",
      period: "个人创业尝试 · 2026/03 — 至今",
      color: "var(--mint)",
      cover: A("laifuer-1.png"),
      images: [A("laifuer-1.png"), A("laifuer-2.png"), A("laifuer-3.png"), A("laifuer-4.png"), A("laifuer-5.png"), A("laifuer-6.png"), A("laifuer-7.png")],
      desc: "以 AI 对话为唯一入口的日常助手，把想法、待办、阅读标记、灵感与求职信息统一收纳，用自然语言找回来。",
      pain: "日常信息的麻烦不在没有工具，而在工具太分散：点子在聊天框、待办在备忘录、阅读标记在浏览器、灵感和求职记录散在不同文档。想回顾时要先想起当时存在哪里再翻关键词。大部分人需要的不是更重的知识库，而是一个低负担入口，把碎片先收住，再用自然语言找回来。",
      approach: "「来福er」取自「来 Offer」的快读。产品以 AI 对话作为唯一入口，用户直接丢进想法、待办、阅读标记、灵感与求职信息，系统负责结构化、归档、摘要和自然语言检索。前端 React + Vite，后端 Python FastAPI + SQLite，AI 层接入 DeepSeek 做对话理解与内容结构化；靠朋友圈种子用户和社群口碑传播，保持零投放有机增长。",
      highlights: ["AI 对话式检索", "碎片信息统一收纳", "零投放有机增长", "独立全栈开发"],
      stack: ["React", "Python FastAPI", "SQLite", "DeepSeek"],
      metrics: [
        { v: "372", l: "累计注册用户" },
        { v: "46", l: "日均活跃 DAU" },
        { v: "28%", l: "7 日留存" },
        { v: "6200+", l: "累计 AI 交互" },
      ],
    },
  ],

  skills: [
    {
      icon: "pen", title: "原型 & 文档", color: "var(--orange)",
      items: [
        { name: "墨刀", desc: "快速搭建可交互原型，验证移动端产品方案。" },
        { name: "Axure", desc: "高保真原型设计，承载复杂交互与页面流程。" },
      ],
    },
    {
      icon: "spark", title: "Agent 搭建", color: "var(--blue)",
      items: [
        { name: "AgentScope", desc: "多 Agent 编排与评测，支撑智能体工程化落地。" },
        { name: "LangChain", desc: "编排 LLM 应用与工具调用，串起检索生成链路。" },
        { name: "Dify", desc: "低代码可视化构建 AI 应用与工作流。" },
        { name: "Coze", desc: "智能体搭建平台，快速发布对话式应用。" },
        { name: "SpringAI", desc: "Java 生态 AI 集成，接入企业级后端。" },
      ],
    },
    {
      icon: "compass", title: "数据 & 编程", color: "var(--pink)",
      items: [
        { name: "Python", desc: "数据分析、后端与 AI 开发的主力语言。" },
        { name: "机器学习", desc: "监督/无监督建模，覆盖特征工程与评估。" },
        { name: "深度学习", desc: "神经网络与多模态表征学习。" },
        { name: "SQL", desc: "数据查询与清洗，支撑指标取数。" },
        { name: "R / SPSS / Mplus", desc: "统计建模与潜变量分析，服务实证研究。" },
      ],
    },
    {
      icon: "layers", title: "内容编辑", color: "var(--mint)",
      items: [
        { name: "数据可视化", desc: "用 Flourish 等工具把数据讲成清晰、可传播的故事。" },
        { name: "秀米", desc: "图文排版与新媒体推文设计，承载内容运营。" },
        { name: "剪映", desc: "短视频剪辑与字幕特效，快速产出传播素材。" },
        { name: "Canva", desc: "海报、封面与演示设计，统一视觉表达。" },
      ],
    },
  ],

  tools: ["Python", "AgentScope", "LangChain", "Dify", "Coze", "Axure", "墨刀", "Flourish", "秀米", "Canva", "剪映", "SQL"],

  contact: {
    email: "alansirius@163.com",
    socials: [
      { name: "alansirius@163.com", icon: "mail", href: "mailto:alansirius@163.com" },
      { name: "GitHub", icon: "link", href: "https://github.com/alansirius" },
    ],
  },
};

/* ---------- inline SVG icons (thick stroke) ---------- */
function Icon({ name, style }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 2.4, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    compass: <g {...p}><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5 13 13l-4.5 2.5L11 11z" /></g>,
    spark: <g {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></g>,
    pen: <g {...p}><path d="M4 20l4-1L19 8a2.8 2.8 0 0 0-4-4L4 15l-1 4z" /><path d="M14 6l4 4" /></g>,
    mail: <g {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></g>,
    link: <g {...p}><path d="M9 15l6-6" /><path d="M11 6l1-1a4 4 0 0 1 6 6l-1 1" /><path d="M13 18l-1 1a4 4 0 0 1-6-6l1-1" /></g>,
    doc: <g {...p}><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 12h6M9 16h6" /></g>,
    cap: <g {...p}><path d="M12 4 2 9l10 5 10-5-10-5z" /><path d="M6 11v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" /></g>,
    arrow: <g {...p}><path d="M5 12h14M13 6l6 6-6 6" /></g>,
    layers: <g {...p}><path d="M12 3 3 8l9 5 9-5-9-5z" /><path d="M3 13l9 5 9-5M3 18l9 5 9-5" /></g>,
  };
  return <svg viewBox="0 0 24 24" style={style} aria-hidden="true">{paths[name] || null}</svg>;
}

Object.assign(window, { PORTFOLIO, Icon });
