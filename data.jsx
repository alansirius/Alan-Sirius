/* ============================================================
   data.jsx — 李洲昊 真实简历内容 + 共享 SVG 图标
   Exports to window: PORTFOLIO, Icon
   ============================================================ */

const A = (f) => "assets/" + f; // 本地真实截图
const AVATAR = A("avatar.jpg");

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
      "传播学硕士，专注 <strong>AI 产品与 Agent 落地</strong>。实习足迹覆盖飞书 Aily & 豆包办公、京东 JoyCode、百度客悦与智谱 AMiner，习惯<strong>用数据说话、用原型对话</strong>。",
    stickers: [
      { text: "飞书 Aily & 豆包办公 实习中", color: "var(--orange)", x: 1,  y: 6,  rot: -7 },
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
    "从飞书 Aily & 豆包办公 的 B 端办公智能体，到京东 JoyCode 的端到端交付 Agent、百度客悦的内容营销数字员工、智谱 AMiner 的学术工具——我习惯用数据说话、用原型对话、用评测兜底能力边界。",
  ],
  aboutLead: "把模糊的想法，变成能被信任、每天被使用的产品。",

  education: [
    {
      school: "北京师范大学",
      degree: "传播学 · 硕士",
      period: "2024 — 2027",
      detail: "主修智能传播应用与理论、计算传播研究、认知神经传播学方法与技术。研究方向：<strong>智能传播、认知神经传播</strong>。",
      img: A("bnu.jpg"),
      color: "var(--blue)",
    },
    {
      school: "中国传媒大学",
      degree: "传播学 · 本科",
      period: "2020 — 2024",
      detail: "主修传播学概论、统计学、传播研究方法、传播效果实证研究、多媒体信息设计、传播心理学等；<strong>GPA 3.84 / 4.00</strong>。",
      img: A("cuc.jpg"),
      color: "var(--orange)",
    },
  ],

  experience: [
    {
      id: "aily",
      company: "字节跳动",
      short: "字节 · 飞书 Aily & 豆包办公",
      team: "飞书 Aily & 豆包办公",
      role: "AI 产品实习生",
      period: "2026/07 — 至今",
      current: true,
      color: "var(--orange)",
      summary: "参与<strong>企业级办公智能体产品化</strong>，把工作台形态、豆包工作助手与基础能力评测一起推进，目标是让智能体<strong>从“能回答”走向“能执行”</strong>。",
      work: [
        { label: "工作台", body: "把工作台从单轮问答界面改造成更接近“任务台”的产品形态：用户发起目标后，智能体串联知识库、插件与工作流按步骤推进任务。其中重点设计了<strong>智能体小队与多智能体协作</strong>——复杂任务拆给不同专长的智能体分工推进，并定义任务状态、工具调用、阶段产物与多步推理的呈现规则，让用户看清每个智能体在做什么、做到哪一步、哪里需要确认。" },
        { label: "豆包工作助手", body: "参与打造<strong>豆包工作助手产品</strong>，负责其中<strong>专家对话模块</strong>的建设。围绕文档处理、会议纪要、信息抽取、数据洞察等办公场景，设计对话交互、意图理解与信息呈现方式，让模型的理解、推理与生成能力落成用户可直接使用的办公动作。" },
        { label: "评测体系", body: "参与评测体系建设，围绕<strong>需求覆盖度、意图识别准确度</strong>等指标定口径、建评测集，覆盖工具调用、知识检索、幻觉控制与端到端任务完成等能力项。每轮迭代用真实样本回归打分，对错误案例做归因，让模型与 Agent 的效果评估有数据可依，而不是凭感觉判断。" },
      ],
      thinking: "做办公智能体，最大的感受是办公场景的边界在模糊：B 端企业的流程化任务和 C 端普通人的日常工作，正在变成同一类需求。但 AI 产品不像互联网产品那样靠“复制即增长”——功能抄起来很快，真正的门槛在<strong>信任</strong>，用户愿不愿意把活儿真正交给它。所以<strong>执行过程是否透明、结果是否可信、一次任务要消耗多少 Token</strong>，都是用户会实际掂量的东西。落到 Aily，我在这两点上投入最多：工作台把任务拆解、智能体小队协作和阶段产物摊开给用户看，让每一步有据可查；评测体系让能力边界有数，也帮用户看清成本与底线。B 端和 C 端的融合只会继续，谁能把执行过程做得透明可信，谁就同时接住了两头。",
      metrics: [
        { v: "40W+", l: "平台 DAU" },
        { v: "3.55", l: "人均对话次数 / 天" },
      ],
      visuals: [
        { img: A("aily-1.png"), label: "飞书 Aily 工作台", caption: "把工作台从单轮问答改造为任务台的产品形态。" },
        { img: A("aily-2.png"), label: "自动化任务", caption: "自动化任务的配置与执行界面。" },
        { img: A("aily-3.png"), label: "智能体", caption: "智能体的对话与任务执行界面。" },
        { img: A("aily-4.png"), label: "智能体小队协作", caption: "智能体小队协作模式的产品界面。" },
        { img: A("aily-5.png"), label: "专家与技能市场", caption: "专家与技能市场的产品界面。" },
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
      summary: "基于 JoyCode Team 参与<strong>端到端智能交付 Agent</strong>设计，把需求分析、PRD、原型、技术设计与测试用例串成一条<strong>可被 IDE 消费的交付链路</strong>。",
      work: [
        { label: "交付 Agent", body: "设计<strong>端到端智能交付 Agent</strong>，将需求拆解为 PRD、原型、TRD（支持单仓与跨仓库）和测试用例等连续产物，直接进入 IDE 端使用。关键不是“生成更多文档”，而是把上游需求变成下游工程真正能消费的结构化上下文。" },
        { label: "Harness 体系", body: "基于 AgentScope 定义 Harness 体系，拆出<strong>上下文压缩、多 Agent 协作、原子能力调用</strong>等模块。长链路任务里信息容易撑爆上下文窗口，需要先压缩成可复用的产品上下文，再交给不同 Agent 分工处理。" },
        { label: "溯源凭证", body: "设计贯穿全流程的<strong>溯源凭证机制</strong>，让 PRD、TRD、测试用例回到原始需求、业务上下文与代码依据。不是假设 AI 永远正确，而是让错误可以被定位、被审计、被人工接管。" },
        { label: "Prompt 调优", body: "结合产品 Wiki、CodeWiki 与真实业务样例，用结构化 Prompt、Few-Shot 与错误类型归因提升稳定性，让模糊需求到 PRD、原型、TRD 的转化在真实业务中达到 <strong>85% 业务可用率</strong>。" },
        { label: "评测体系", body: "建立<strong>“输出质量—业务可用性—实际采纳率”</strong>三级指标体系：输出质量衡量产物本身是否完整准确，业务可用性衡量研发能否直接基于产物继续开发，实际采纳率衡量产物真正被采用的占比。" },
      ],
      thinking: "交付类 Agent 最容易“看起来产物完整，实际研发不愿意用”。所以我把<strong>业务可用性和实际采纳率</strong>放在比生成质量更关键的位置：内容写得再顺，工程师不能接着开发就是无效产物。",
      metrics: [
        { v: "85%", l: "业务可用率" },
        { v: "500+", l: "平台 DAU" },
        { v: "250w+", l: "日均 Token 消耗" },
      ],
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
      summary: "主导“客悦”<strong>内容营销数字员工</strong>的内容策略与 Agent 研发，从小红书内容策略拆解到<strong>本地 MVP</strong>实现，后续成果被<strong>整合进 Hogee 产品中</strong>。",
      work: [
        { label: "内容策略", body: "拆解小红书 AI 内容生产链路，从选题、封面、标题、正文结构、种草语气到评论反馈，梳理不同账号阶段的策略差异。<strong>基于冷启、增长、稳定三阶段提出渐进式路径</strong>，让 Agent 先解决稳定产出，再逐步引入风格迁移与数据反馈优化。" },
        { label: "多模态 Agent", body: "用 Python 跑通本地 MVP，围绕品牌知识、产品卖点、历史爆文与图片素材构建多模态内容生成流程。检索层采用 <strong>BM25 + KNN 混合重排</strong>，避免纯向量召回漏掉品牌名、产品词，核心业务知识 Top-100 <strong>召回率提升 31%</strong>。" },
        { label: "Prompt 调优", body: "针对内容不稳、同质化与幻觉问题，设计多阶结构化指令与场景化 Prompt 模板，把品牌约束、平台语气、内容结构与禁区规则拆开处理。配合 CoT、Few-Shot 与人工反馈样例，<strong>内容可用率从 21% 提升到 74%</strong>。" },
        { label: "评测体系", body: "建立多维打分体系，从<strong>内容准确性、物理一致性、画面质感、召回准确率、布局合理性与创意性</strong>六个维度对生成结果逐项评分，用得分与维度缺陷分布反推 Prompt 迭代方向。" },
      ],
      thinking: "内容 Agent 最难的不是生成，而是“说不清好不好”——单看几张觉得惊艳，不代表批量稳定。所以我选择<strong>把评测当作核心杠杆</strong>：把内容准确性、物理一致性、画面质感、召回准确率、布局合理性与创意性定义成可打分的维度，把“感觉不对”变成可归因的缺陷分布。分数不是终点而是诊断：某类 Prompt 反复在物理一致性上丢分，说明约束还没真正进到生成链路；召回丢分，则说明品牌名、产品词这类硬约束没被检索层兜住。评测把迭代从“凭感觉调词”变成“<strong>按缺陷反推</strong>”，质量下限靠评测守住，创意上限才敢放开。",
      metrics: [
        { v: "+31%", l: "召回率提升" },
        { v: "21%→74%", l: "内容可用率" },
        { v: "1000W+", l: "POC 曝光" },
      ],
      visuals: [
        { img: A("keyoo-1.jpg"), label: "客悦 Keyoo", caption: "内容营销数字员工的早期产品形态。" },
        { img: A("hogee-1.png"), label: "Hogee 整合形态", caption: "成果整合进 Hogee 后的产品界面。" },
        { img: A("hogee-2.jpg"), label: "Hogee 工作台", caption: "成果整合进 Hogee 后的工作台界面。" },
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
      summary: "围绕 AI 学术工具 AMiner 做<strong>产品规划、交互体验与内容增长</strong>，把论文发现、阅读消化、知识沉淀与学术产出放到<strong>同一条工作流</strong>里。",
      work: [
        { label: "产品规划", body: "针对论文跨平台消化的痛点，设计<strong>学术空间与 Research Labs</strong>核心模块的 PRD 和交互流程。重点不是再做一个搜索入口，而是把论文阅读、摘要理解、笔记沉淀、引文追踪与综述生成放进同一个空间，减少研究过程中的上下文切换。" },
        { label: "商业化调研", body: "完成 AI 学术工具<strong>付费墙、会员权益与商业模式</strong>的竞品调研，对比文献检索、AI 阅读、知识库、写作辅助等功能的付费边界。同步输出标准化用户帮助手册，为后续转化链路提供内容支撑。" },
        { label: "用户增长", body: "搭建基于 AI 前沿进展、技术论文解读与工具教程的<strong>内容矩阵</strong>，用高密度学术内容吸引真实研究用户。微信生态阅读破万，单平台精准<strong>涨粉 4000+</strong>，增长目标不是泛流量，而是让有明确需求的人留下来。" },
      ],
      thinking: "AMiner 让我看到，AI 学术工具的留存不在搜索结果数量，而在用户能不能更快<strong>把论文变成自己的知识资产</strong>。产品上围绕“消化场”做深，增长上用技术论文做精准钩子，吸引真正会长期使用的人。",
      metrics: [
        { v: "4000+", l: "单平台涨粉" },
        { v: "破万", l: "微信阅读" },
        { v: "22.1% / 31.4%", l: "上线一周功能使用率" },
        { v: "17.9% → 21.4%", l: "7 日留存率提升" },
      ],
      visuals: [
        { img: A("aminer-1.png"), label: "AMiner 界面", caption: "AI 学术工具相关产品界面。" },
        { img: A("aminer-3.png"), label: "Research Labs", caption: "Research Labs 相关产品界面。" },
        { img: A("aminer-4.png"), label: "学术空间", caption: "学术空间界面展示。" },
      ],
    },
  ],

  projects: [
    {
      id: "exitem",
      title: "Exitem",
      en: "Zotero-Exitem",
      tag: "开源项目",
      cat: "AI 辅助文献提取与综述管理 · Zotero 插件",
      period: "个人项目 · 开源项目",
      color: "var(--orange)",
      cover: A("exitem-1.png"),
      images: [A("exitem-1.png"), A("exitem-2.png"), A("exitem-3.png"), A("exitem-4.png")],
      desc: "围绕 Zotero 的文献提取与综述管理插件，<strong>把 PDF 阅读、批注、提炼、综述写作串成一条连续动作</strong>。",
      pain: [
        "做文献综述时，要在 <strong>PDF 阅读、批注、高亮、笔记、表格与综述文档之间反复切换</strong>，现有工具把这条连续链路拆散了。",
        "高亮沉在 PDF 里、笔记散落各处，跨文献归纳与导出写作素材时还得手动重新整理一遍。",
      ],
      approach: [
        "借助 zotero-gpt 支持单条和批量（≤5）<strong>AI 提炼</strong>，把 PDF 高亮、批注和原文上下文自动并入提取字段。",
        "在 Zotero 内嵌标签页提供综述管理器，支持记录管理、文件夹合并合成、原始记录编辑与导出，让文献从阅读材料直接变成可复用的综述素材。",
      ],
      highlights: ["AI 单条/批量提炼", "综述管理器", "文件夹合成", "Zotero 8"],
      stack: ["Zotero 插件", "TypeScript"],
      metrics: [
        { v: "Zotero 8", l: "兼容版本" },
      ],
      evalStandard: [
        "<strong>内容准确性</strong>：提取内容与原文语义是否一致，无错位、无幻觉、无错漏。",
        "<strong>提取完整度</strong>：高亮、批注、标题、作者与摘要等字段是否完整并入，无缺失。",
        "<strong>信息提取效率</strong>：衡量单条信息点提取的 token 消耗，控制成本与延迟。",
        "<strong>素材可用性</strong>：导出到综述管理器的记录能否直接用于写作，分类与格式是否正确。",
      ],
      evalSystem: [
        "用覆盖不同学科、版式与篇幅的论文测试集跑单条/批量提炼，固定种子文献复测。",
        "人工对照原文逐字段核对，按「完全正确 / 部分正确 / 错误」三档打分，统计字段完整率与提取准确率。",
        "每次改动 Prompt、字段规则或批量逻辑后回归测试，用分数变化判断是否回归，沉淀失败样例作为复盘依据。",
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
      desc: "基于 AgentScope 的<strong>自进化 Skills 引擎</strong>：把商家的非标准资料沉淀为标准 SOP，再转化为可直接对接到线上环境的 Skills，<strong>从真实反馈中持续自进化</strong>。",
      pain: [
        "商家资料零散、非标准，无法直接用于客服问答，需<strong>人工整理成标准 SOP</strong>，链路长、成本高。",
        "Skills 上线后普遍<strong>缺少与线上环境的评测对接</strong>，效果好坏只能凭感觉判断。",
        "线上用户反馈与人工客服处理经验<strong>无法回流</strong>，Skills 因此难以持续变好。",
      ],
      approach: [
        "基于 AgentScope 独立开发「妙笔」，将商家<strong>非标准资料自动结构化、沉淀为标准 SOP</strong>，再转化为可对接到线上客服环境的 Skills。",
        "Skills 支持接入线上环境评测，并持续<strong>从线上用户反馈数据与人工客服数据中提炼经验</strong>、沉淀调试策略，让 Skills 在真实使用中不断自进化。",
      ],
      highlights: ["商家 Skills 自动生成", "系统层自进化", "评测对齐线上"],
      stack: ["AgentScope", "TypeScript"],
      metrics: [
        { v: "+23%", l: "客服平均提效" },
        { v: "60+", l: "接入商家数" },
      ],
    },
    {
      id: "laifuer",
      title: "来福er",
      en: "Laifuer",
      tag: "商业化尝试",
      cat: "AI 求职助手 · 网页应用",
      period: "个人商业化尝试 · 2026/03 — 至今",
      color: "var(--mint)",
      cover: A("laifuer-1.png"),
      images: [A("laifuer-1.png"), A("laifuer-2.png"), A("laifuer-3.png"), A("laifuer-4.png"), A("laifuer-5.png"), A("laifuer-6.png"), A("laifuer-7.png")],
      desc: "AI 求职助手：以 <strong>AI 对话为入口</strong>，支持投递管理、AI 简历、面试 mock，并能<strong>根据面试录音/文字记录自动复盘</strong>，把求职全程串在一起。",
      pain: [
        "投递记录散落在不同平台，难以统一跟踪与管理。",
        "简历反复修改却难有抓手，缺少针对性的反馈与优化方向。",
        "面试结束只剩零散记忆，复盘无从谈起。",
      ],
      approach: [
        "以 AI 对话为唯一入口，支持<strong>投递管理、AI 简历、面试 mock</strong>，并能<strong>根据面试录音/文字记录自动复盘</strong>。",
        "系统负责结构化、归档、摘要与自然语言检索；前端 React + Vite，后端 Python FastAPI + SQLite。",
        "靠朋友圈种子用户和社群口碑传播，保持零投放有机增长。",
      ],
      highlights: ["投递管理", "AI 简历", "面试 Mock", "录音/记录复盘"],
      stack: ["React", "Python FastAPI", "SQLite"],
      metrics: [
        { v: "1500+", l: "累计注册用户" },
        { v: "137", l: "日均活跃 DAU" },
        { v: "26.1%", l: "7 日留存" },
        { v: "6800+", l: "累计 AI 交互" },
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
