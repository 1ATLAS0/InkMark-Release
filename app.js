/* InkMark Official Release Portal Logic */
(function () {
  const staticData = window.__INKMARK_RELEASE_DATA__ || {};

  function detectInitialLang() {
    try {
      const saved = localStorage.getItem('inkmark-site-lang');
      if (saved === 'zh' || saved === 'en') return saved;
    } catch {}
    const browserLang = (navigator.language || '').toLowerCase();
    return browserLang.startsWith('zh') ? 'zh' : 'en';
  }

  function detectInitialTheme() {
    try {
      const saved = localStorage.getItem('inkmark-site-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {}
    return 'dark';
  }

  function detectOS() {
    const ua = navigator.userAgent || '';
    if (/android/i.test(ua)) return 'android';
    return 'windows';
  }

  const state = {
    lang: detectInitialLang(),
    theme: detectInitialTheme(),
    os: detectOS(),
    release: staticData.latest || {},
    changelog: staticData.changelog || [],
    benchmarks: staticData.benchmarks || {},
    brand: staticData.brand || {
      name: 'InkMark',
      repo: '1ATLAS0/InkMark-Release',
      repoUrl: 'https://github.com/1ATLAS0/InkMark-Release',
      releasesUrl: 'https://github.com/1ATLAS0/InkMark-Release/releases'
    },
    activeVersionIndex: 0,
    activeDesktopDoc: 'document.md',
    activeDesktopBlockIndex: 1,
    activeMobileBlockIndex: 1,
    searchCaseSensitive: false,
    searchWholeWord: false,
    recentCleared: false,
    recentFilter: 'all'
  };

  const I18N = {
    zh: {
      pageTitle: 'InkMark — Markdown 编辑器',
      navDownloads: '下载',
      navPreview: '在线体验',
      navFeatures: '功能',
      navThemes: '主题',
      navBench: '性能',
      navNotes: '更新日志',
      heroTitlePrefix: '简洁、专注的 ',
      heroTitleHighlight: 'Markdown 编辑器',
      heroSubtitle: '面向 Windows 与 Android，专注于文档处理性能与日常编辑体验。',
      winCardTitle: 'Windows',
      winCardReq: 'Windows 10 / 11 (x64)',
      androidCardTitle: 'Android',
      androidCardReq: 'Android 7.0+',
      linuxCardTitle: 'Linux',
      linuxCardReq: 'x64 / ARM64 (主流发行版)',
      comingSoonBadge: '即将推出',
      comingSoonBtn: '即将推出',
      linuxPkgUniversal: '通用包 (.AppImage)',
      linuxPkgUniversalDesc: '适用于 Ubuntu、Fedora、Arch 等主流发行版，免安装即开即用。',
      linuxPkgDeb: '安装包 (.deb)',
      linuxPkgDebDesc: '适用于 Debian、Ubuntu 及衍生版，支持系统包管理器与桌面集成。',
      recommendedBadge: '推荐',
      downloadBtn: '下载',
      previewTitle: '在线体验',
      previewDesc: '点击任意段落可直接修改 Markdown 源码并实时预览排版，通过上方按钮切换视图或主题。',
      modeDesktop: '桌面端',
      modeAndroid: '移动端',
      modePdf: 'PDF 导出',
      themeLabel: '主题',
      menuFile: '文件(F)',
      menuEdit: '编辑(E)',
      menuPara: '段落(P)',
      menuFormat: '格式(O)',
      menuView: '视图(V)',
      menuTheme: '主题(T)',
      menuHelp: '帮助(H)',
      sideTocTitle: '目录',
      sideSearchTitle: '搜索',
      sideFilesTitle: '文件',
      resetDemoTitle: '重置示例文档',
      sideOpenedFiles: '已打开的文件',
      sideRecent: '最近使用',
      recentAll: '全部',
      recentFiles: '文件',
      recentFolders: '文件夹',
      recentClear: '清空',
      recentEmptyText: '暂无最近记录',
      recentRestore: '恢复示例',
      editorHintPill: '点击段落可直接编辑',
      savedLabel: '已保存',
      modifiedLabel: '已编辑',
      wordsUnit: '字/词',
      searchPlaceholder: '在文件夹中搜索…',
      searchNoResults: '未找到匹配内容',
      pdfPage1: '第 1 / 2 页',
      pdfPage2: '第 2 / 2 页',
      pdfColItem: '功能项',
      pdfColItemCont: '功能项（续页表头）',
      pdfColBehavior: '导出排版表现',
      pdfRow1Title: '字号同步',
      pdfRow1Desc: '自动继承当前设置的正文与代码块字号',
      pdfRow2Title: '宽表格缩放',
      pdfRow2Desc: '按页面可用宽度自动缩放，单元格长文本自动换行',
      pdfRow3Title: '跨页表头',
      pdfRow3Desc: '长表格翻页时自动重复顶部表头行',
      pdfRow4Title: '导出控制',
      pdfRow4Desc: '显示导出进度，支持在导出过程中取消操作',
      extTitle: '语法与排版',
      extDesc: '支持数学公式、图表、表格与代码高亮，可导出 PDF 和 HTML。',
      extMathTitle: '数学公式',
      extMathDesc: '支持 LaTeX 行内公式与独立公式块，编辑时实时预览。',
      extDiagTitle: '图表绘制',
      extDiagDesc: '支持通过 Mermaid 语法绘制流程图、时序图与状态图，修改文本即时更新图形。',
      extDiagNode1: '输入文本',
      extDiagNode2: '解析语法',
      extDiagNode3: '生成图表',
      extTableTitle: '表格编辑',
      extTableDesc: '支持快捷调整行列与对齐方式，可选单元格自动换行或横向滚动。',
      extTblH1: '功能',
      extTblH2: '桌面端',
      extTblH3: '移动端',
      extTblR1: '实时渲染',
      extTblR2: '横向滚动',
      extCodeTitle: '代码块',
      extCodeDesc: '提供主流编程语言语法高亮、代码一键复制与代码字号独立设置。',
      extFocusTitle: '编辑模式',
      extFocusDesc: '提供专注模式、打字机模式与源码模式，适应不同写作与校对需求。',
      extFocusLine1: '非当前编辑段落自动降低对比度',
      extFocusLine2: '专注模式突出当前段落，打字机模式保持光标居中',
      extFocusLine3: '支持随时切换至纯文本源码视图',
      extExportTitle: '文档导出',
      extExportDesc: '支持导出为 PDF 与独立 HTML 文件，保留当前主题样式并支持宽表格跨页排版。',
      themesTitle: '内置主题',
      themesDesc: '包含 39 款浅色与深色主题。点击右侧卡片可在上方编辑器中预览配色效果。',
      themeFeat1Title: '浅色与深色模式',
      themeFeat1Desc: '提供多种对比度与色调的预设方案，适应不同光线环境下的阅读与编辑。',
      themeFeat2Title: '实时预览切换',
      themeFeat2Desc: '在上方主题按钮悬停预览，点击右侧主题卡片即可切换配色。',
      swatchCardSample: '# 标题\n**加粗** _斜体_\n> 引用文本',
      themeMoreNote: '另含 33 款内置主题',
      themeAppliedToast: '已应用主题：',
      demoResetToast: '已恢复默认示例文档',
      benchTitle: '性能数据',
      benchDesc: '使用含多级标题、表格、代码块与公式的 Markdown 文档测试，实际耗时因设备与文档内容而异。',
      thScaleSize: '文档体积',
      thScaleOpen: '打开耗时',
      thScaleSwitch: '标签切换',
      thScaleInput: '输入响应',
      notesTitle: '更新日志',
      footerReleases: '历史版本',
      footerChangelog: '更新日志'
    },
    en: {
      pageTitle: 'InkMark — Markdown Editor',
      navDownloads: 'Download',
      navPreview: 'Interactive Demo',
      navFeatures: 'Features',
      navThemes: 'Themes',
      navBench: 'Performance',
      navNotes: 'Release notes',
      heroTitlePrefix: 'Clean, Focused ',
      heroTitleHighlight: 'Markdown Editor',
      heroSubtitle: 'A Markdown editor for Windows and Android, focused on performance and ease of use.',
      winCardTitle: 'Windows',
      winCardReq: 'Windows 10 / 11 (x64)',
      androidCardTitle: 'Android',
      androidCardReq: 'Android 7.0+',
      linuxCardTitle: 'Linux',
      linuxCardReq: 'x64 / ARM64 (Major Distros)',
      comingSoonBadge: 'Coming Soon',
      comingSoonBtn: 'Coming Soon',
      linuxPkgUniversal: 'Universal (.AppImage)',
      linuxPkgUniversalDesc: 'Universal standalone bundle for Ubuntu, Fedora, Arch, etc.',
      linuxPkgDeb: 'Package (.deb)',
      linuxPkgDebDesc: 'Native package for Debian, Ubuntu, and derivatives.',
      recommendedBadge: 'Recommended',
      downloadBtn: 'Download',
      previewTitle: 'Interactive Demo',
      previewDesc: 'Click any block to edit its Markdown source directly and preview live formatting, or switch platforms and themes above.',
      modeDesktop: 'Desktop',
      modeAndroid: 'Mobile',
      modePdf: 'PDF Export',
      themeLabel: 'Theme',
      menuFile: 'File',
      menuEdit: 'Edit',
      menuPara: 'Paragraph',
      menuFormat: 'Format',
      menuView: 'View',
      menuTheme: 'Theme',
      menuHelp: 'Help',
      sideTocTitle: 'Table of Contents',
      sideSearchTitle: 'Search',
      sideFilesTitle: 'Files',
      resetDemoTitle: 'Reset demo content',
      sideOpenedFiles: 'Opened files',
      sideRecent: 'Recent',
      recentAll: 'All',
      recentFiles: 'Files',
      recentFolders: 'Folders',
      recentClear: 'Clear',
      recentEmptyText: 'No recent items',
      recentRestore: 'Restore',
      editorHintPill: 'Click any block to edit',
      savedLabel: 'Saved',
      modifiedLabel: 'Modified',
      wordsUnit: 'words',
      searchPlaceholder: 'Search in folder…',
      searchNoResults: 'No matching results',
      pdfPage1: 'Page 1 of 2',
      pdfPage2: 'Page 2 of 2',
      pdfColItem: 'Feature',
      pdfColItemCont: 'Feature (Continued Header)',
      pdfColBehavior: 'Export Layout Behavior',
      pdfRow1Title: 'Font Size Sync',
      pdfRow1Desc: 'Inherits configured body text and code block font sizes',
      pdfRow2Title: 'Wide Table Fit',
      pdfRow2Desc: 'Scales wide tables to page width with automatic cell wrapping',
      pdfRow3Title: 'Repeated Headers',
      pdfRow3Desc: 'Repeats table header rows automatically across page breaks',
      pdfRow4Title: 'Export Controls',
      pdfRow4Desc: 'Displays export progress and supports cancellation anytime',
      extTitle: 'Markdown & Formatting',
      extDesc: 'Built-in support for math equations, diagrams, tables, code blocks, and document export.',
      extMathTitle: 'Math Equations',
      extMathDesc: 'Render inline and block LaTeX equations in real time with accurate text spacing.',
      extDiagTitle: 'Diagrams',
      extDiagDesc: 'Create flowcharts, sequence diagrams, and state charts from text using Mermaid.',
      extDiagNode1: 'Input Text',
      extDiagNode2: 'Parse Syntax',
      extDiagNode3: 'Render Diagram',
      extTableTitle: 'Table Editing',
      extTableDesc: 'Insert, resize, and align rows and columns easily, with cell wrapping or horizontal scrolling.',
      extTblH1: 'Feature',
      extTblH2: 'Desktop',
      extTblH3: 'Mobile',
      extTblR1: 'Live Render',
      extTblR2: 'Scroll / Wrap',
      extCodeTitle: 'Code Blocks',
      extCodeDesc: 'Syntax highlighting for major programming languages with one-click copy and font size controls.',
      extFocusTitle: 'Editing Modes',
      extFocusDesc: 'Switch between Focus Mode, Typewriter Mode, and Source Code Mode as needed.',
      extFocusLine1: 'Surrounding paragraphs are dimmed',
      extFocusLine2: 'Focus Mode highlights the current paragraph; Typewriter Mode centers the cursor',
      extFocusLine3: 'Switch to plain-text source view anytime',
      extExportTitle: 'Document Export',
      extExportDesc: 'Export documents to PDF and standalone HTML with current theme styles and multi-page table headers.',
      themesTitle: 'Built-in Themes',
      themesDesc: 'Includes 39 light and dark themes. Click any card to preview the color scheme in the editor above.',
      themeFeat1Title: 'Light & Dark Modes',
      themeFeat1Desc: 'Multiple contrast and color presets designed for comfortable reading and editing in any lighting.',
      themeFeat2Title: 'Live Theme Preview',
      themeFeat2Desc: 'Hover over the theme buttons above to preview colors, or click a theme card to apply them.',
      swatchCardSample: '# Heading\n**Bold** _Italic_\n> Blockquote',
      themeMoreNote: 'Plus 33 additional built-in themes',
      themeAppliedToast: 'Theme applied: ',
      demoResetToast: 'Demo documents restored',
      benchTitle: 'Performance',
      benchDesc: 'Measured with Markdown documents containing headings, tables, code blocks, and math. Results vary by device and document.',
      thScaleSize: 'File Size',
      thScaleOpen: 'Open Time',
      thScaleSwitch: 'Tab Switch',
      thScaleInput: 'Input Latency',
      notesTitle: 'Release notes',
      footerReleases: 'Releases',
      footerChangelog: 'Release notes'
    }
  };

  const DEMO_TEMPLATES = {
    zh: {
      desktop: {
        'document.md': [
          '# 所见即所得编辑',
          '## 行内语法与公式\n点击本段即可直接修改 **Markdown 标记**、_斜体_、`行内代码` 与公式 $E = mc^2$，按 Esc 或点击其他段落即可查看排版结果。',
          '## 流程图渲染\n```mermaid\ngraph LR\n  A[输入 Markdown] --> B(实时排版渲染) --> C[导出 PDF / HTML]\n```',
          '## 表格排版\n| 功能项 | 编辑区表现 | 导出与性能表现 |\n| :--- | :--- | :--- |\n| 大文档加载 | 侧边栏大纲快速定位 | 1 MB 文档约 0.71 秒打开 |\n| 宽表格排版 | 可选自动换行或横向滚动 | 导出 PDF 跨页重复表头 |'
        ],
        'guide.md': [
          '# 快速上手指南',
          '## 本地文档与工作区\n无需注册账号，直接打开本地文件夹即可通过左侧文件树、全文搜索与 `最近使用` 面板管理全部笔记。',
          '## 常用清单\n- [x] 支持 `Ctrl + 滚轮` 缩放并保持当前阅读位置\n- [x] 内置 39 款浅色与深色主题实时切换\n- [ ] 试试点击任意段落直接输入新的 Markdown 内容'
        ]
      },
      mobile: [
        '# 移动端编辑与阅读',
        '## 公式与快捷工具栏\n保持与桌面端一致的排版效果，支持 **底部快捷工具栏** 与公式 $E = mc^2$ 实时渲染。',
        '## 任务列表与导出\n- [x] 支持本地 Markdown 文件打开与保存\n- [x] 点击下方工具栏按钮快速插入格式'
      ]
    },
    en: {
      desktop: {
        'document.md': [
          '# WYSIWYG Live Editing',
          '## Inline Syntax & Math\nClick this block to edit **Markdown syntax**, _italics_, `inline code`, and math $E = mc^2$ directly. Press Esc or click another block to render.',
          '## Flowchart Rendering\n```mermaid\ngraph LR\n  A[Write Markdown] --> B(Live Formatting) --> C[Export PDF / HTML]\n```',
          '## Table Layout\n| Capability | Editor Behavior | Export & Performance |\n| :--- | :--- | :--- |\n| Large Files | Instant outline navigation | Opens 1 MB docs in ~0.71 s |\n| Wide Tables | Cell wrap or horizontal scroll | Repeats headers across PDF pages |'
        ],
        'guide.md': [
          '# Quick Start Guide',
          '## Local Files & Workspace\nEdit local Markdown files directly without an account. Browse folders, search across files, and filter `Recent` items in the sidebar.',
          '## Everyday Checklist\n- [x] `Ctrl + Wheel` zoom preserves your reading position\n- [x] 39 built-in light and dark themes with instant switching\n- [ ] Click any paragraph here to type your own Markdown'
        ]
      },
      mobile: [
        '# Mobile Reading & Editing',
        '## Math & Quick Toolbar\nConsistent formatting across devices with a **touch formatting toolbar** and live math $E = mc^2$ rendering.',
        '## Tasks & Local Storage\n- [x] Open and save local Markdown files on device\n- [x] Tap the bottom toolbar keys to insert formatting'
      ]
    }
  };

  // Live mutable document store (tracks whether user customized a doc so language toggle preserves user edits)
  const docStore = {
    desktop: {},
    mobile: [],
    dirtyDesktop: { 'document.md': false, 'guide.md': false },
    dirtyMobile: false
  };

  function initDocStore(forceReset) {
    const tpl = DEMO_TEMPLATES[state.lang] || DEMO_TEMPLATES.zh;
    ['document.md', 'guide.md'].forEach((docName) => {
      if (forceReset || !docStore.desktop[docName] || !docStore.dirtyDesktop[docName]) {
        docStore.desktop[docName] = tpl.desktop[docName].slice();
        if (forceReset) docStore.dirtyDesktop[docName] = false;
      }
    });
    if (forceReset || !docStore.mobile.length || !docStore.dirtyMobile) {
      docStore.mobile = tpl.mobile.slice();
      if (forceReset) docStore.dirtyMobile = false;
    }
  }

  function t(key) {
    const dict = I18N[state.lang] || I18N.zh;
    return dict[key] || I18N.zh[key] || key;
  }

  let toastTimer = null;
  function showToast(msg) {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function formatInlineMarkdown(raw) {
    let html = escapeHtml(raw);
    // Inline code `...`
    html = html.replace(/`([^`\n]+)`/g, '<span class="mock-inline-code">$1</span>');
    // Inline math $...$ or \(...\)
    html = html.replace(/\$([^$\n]+)\$/g, (_, expr) => {
      const pretty = expr.replace(/\^2\b/g, '²').replace(/\^3\b/g, '³');
      return `<span class="mock-math-box">${pretty}</span>`;
    });
    html = html.replace(/\\\((.+?)\\\)/g, (_, expr) => `<span class="mock-math-box">${expr}</span>`);
    // Bold **...**
    html = html.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');
    // Italic _..._ or *...*
    html = html.replace(/(^|[\s(])_([^_\n]+)_(?=[\s).,!?:;]|$)/g, '$1<em>$2</em>');
    html = html.replace(/\*([^*\n]+)\*/g, '<em>$1</em>');
    return html;
  }

  function renderBlockHtml(raw, isMobile) {
    const trimmed = (raw || '').trim();
    if (!trimmed) {
      return `<div style="color:var(--m-muted);font-size:0.85rem;">…</div>`;
    }

    const lines = trimmed.split(/\r?\n/);
    const parts = [];
    let idx = 0;

    // Optional leading heading inside a compound block
    const headingMatch = /^(#{1,6})\s+(.+)$/.exec(lines[0]);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const sizes = isMobile
        ? ['1.22rem', '1.05rem', '0.96rem', '0.9rem', '0.86rem', '0.84rem']
        : ['1.45rem', '1.14rem', '1.02rem', '0.95rem', '0.9rem', '0.86rem'];
      const marginBottom = lines.length > 1 ? 'margin-bottom:8px;' : '';
      parts.push(
        `<div style="font-size:${sizes[level - 1]};font-weight:800;letter-spacing:-0.01em;${marginBottom}">${formatInlineMarkdown(headingMatch[2])}</div>`
      );
      idx = 1;
    }

    const rest = lines.slice(idx).join('\n').trim();
    if (!rest) return parts.join('');

    // Mermaid fenced block
    if (/^```mermaid/i.test(rest)) {
      const bodyLines = rest
        .replace(/^```mermaid[^\n]*\n?/i, '')
        .replace(/```$/, '')
        .trim();
      const nodeLabels = [];
      const nodeRegex = /[A-Za-z0-9_]+\s*[\[(]([^\]\n)]+)[\])]/g;
      let m;
      while ((m = nodeRegex.exec(bodyLines)) !== null) {
        nodeLabels.push(m[1].trim());
      }
      if (nodeLabels.length > 0) {
        const flowHtml = nodeLabels
          .map((lbl) => `<span class="mermaid-node">${escapeHtml(lbl)}</span>`)
          .join('<span class="mermaid-arrow">──►</span>');
        parts.push(`<div class="mock-mermaid-diagram">${flowHtml}</div>`);
        return parts.join('');
      }
    }

    // Generic fenced code block
    if (/^```/.test(rest)) {
      const codeContent = rest
        .replace(/^```[^\n]*\n?/, '')
        .replace(/```$/, '');
      parts.push(`<pre class="mock-code-pre">${escapeHtml(codeContent)}</pre>`);
      return parts.join('');
    }

    const restLines = rest.split(/\r?\n/);

    // Markdown table
    if (restLines.length >= 2 && restLines[0].includes('|') && /^\s*\|?[\s:|-]+\|[\s:|-]*$/.test(restLines[1])) {
      const parseCells = (row) =>
        row
          .trim()
          .replace(/^\|/, '')
          .replace(/\|$/, '')
          .split('|')
          .map((c) => c.trim());
      const headers = parseCells(restLines[0]);
      const bodyRows = restLines.slice(2).filter((r) => r.trim().includes('|'));
      const thHtml = headers.map((h) => `<th>${formatInlineMarkdown(h)}</th>`).join('');
      const trsHtml = bodyRows
        .map((r) => {
          const cells = parseCells(r);
          return `<tr>${cells.map((c) => `<td>${formatInlineMarkdown(c)}</td>`).join('')}</tr>`;
        })
        .join('');
      parts.push(
        `<div class="mock-wide-table-wrap"><table class="mock-wide-table"><thead><tr>${thHtml}</tr></thead><tbody>${trsHtml}</tbody></table></div>`
      );
      return parts.join('');
    }

    // Task list / bullet list
    if (restLines.every((l) => /^-\s+(\[[ xX]\]\s+)?/.test(l.trim()))) {
      const itemsHtml = restLines
        .map((l) => {
          const tm = /^-\s+\[([ xX])\]\s+(.+)$/.exec(l.trim());
          if (tm) {
            const checked = tm[1].toLowerCase() === 'x';
            return `<div class="mock-task-row"><span class="mock-task-box">${checked ? '☑' : '☐'}</span><span>${formatInlineMarkdown(tm[2])}</span></div>`;
          }
          const bm = /^-\s+(.+)$/.exec(l.trim());
          return `<div class="mock-task-row"><span class="mock-task-box">•</span><span>${formatInlineMarkdown(bm ? bm[1] : l)}</span></div>`;
        })
        .join('');
      parts.push(`<div class="mock-task-list">${itemsHtml}</div>`);
      return parts.join('');
    }

    // Blockquote
    if (restLines.every((l) => l.trim().startsWith('>'))) {
      const qHtml = restLines
        .map((l) => formatInlineMarkdown(l.trim().replace(/^>\s?/, '')))
        .join('<br/>');
      parts.push(`<blockquote class="mock-blockquote">${qHtml}</blockquote>`);
      return parts.join('');
    }

    // Standard paragraph(s)
    const pHtml = restLines.map((l) => formatInlineMarkdown(l)).join('<br/>');
    parts.push(`<div style="font-size:${isMobile ? '0.9rem' : '0.94rem'};line-height:1.65;">${pHtml}</div>`);
    return parts.join('');
  }

  function countWordsAndChars(blocks) {
    const text = blocks
      .join('\n')
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/[#*_`|>-]/g, ' ')
      .trim();
    if (!text) return 0;
    const cjk = (text.match(/[\u4e00-\u9fff]/g) || []).length;
    const latin = (text.replace(/[\u4e00-\u9fff]/g, ' ').match(/[A-Za-z0-9]+/g) || []).length;
    return cjk + latin;
  }

  function extractHeadings(blocks) {
    const list = [];
    blocks.forEach((raw, idx) => {
      const firstLine = (raw || '').trim().split(/\r?\n/)[0] || '';
      const m = /^(#{1,6})\s+(.+)$/.exec(firstLine);
      if (m) {
        list.push({
          blockIndex: idx,
          level: m[1].length,
          text: m[2].replace(/\*\*|`|_/g, '').trim()
        });
      }
    });
    return list;
  }

  function autoResizeTextarea(ta) {
    if (!ta) return;
    ta.style.height = 'auto';
    ta.style.height = `${Math.max(ta.scrollHeight, 26)}px`;
  }

  function updateDesktopMetaUI() {
    const docName = state.activeDesktopDoc;
    const blocks = docStore.desktop[docName] || [];
    const count = countWordsAndChars(blocks);
    const wordEl = document.getElementById('mock-desktop-word-count');
    if (wordEl) {
      wordEl.textContent = `${count} ${t('wordsUnit')}`;
    }
    const winTitleEl = document.getElementById('mock-window-title');
    if (winTitleEl) {
      const dirtyMark = docStore.dirtyDesktop[docName] ? ' •' : '';
      winTitleEl.textContent = `${docName}${dirtyMark} — InkMark`;
    }

    // Update unsaved indicator dots on tabs and opened files
    document.querySelectorAll('[data-unsaved-for]').forEach((dot) => {
      const targetDoc = dot.getAttribute('data-unsaved-for');
      const isDirty = !!docStore.dirtyDesktop[targetDoc];
      if (dot.classList.contains('mock-tab-dot')) {
        dot.style.display = isDirty ? 'inline-block' : 'none';
      } else {
        dot.style.opacity = isDirty ? '1' : '0';
      }
    });

    // Update active state on tabs and file tree rows
    document.querySelectorAll('[data-doc-tab]').forEach((tab) => {
      tab.classList.toggle('active', tab.getAttribute('data-doc-tab') === docName);
    });
    document.querySelectorAll('.mock-tree-row[data-doc-switch]').forEach((row) => {
      row.classList.toggle('active', row.getAttribute('data-doc-switch') === docName);
    });

    // Render Desktop TOC
    const tocEl = document.getElementById('mock-toc-tree');
    if (tocEl) {
      const headings = extractHeadings(blocks);
      tocEl.innerHTML = '';
      headings.forEach((h) => {
        const item = document.createElement('div');
        const isActive = h.blockIndex === state.activeDesktopBlockIndex;
        item.className = `mock-toc-item ${h.level > 1 ? 'child' : ''} ${isActive ? 'active' : ''}`;
        item.innerHTML = `
          <span class="mock-tree-caret ${h.level === 1 ? 'expanded' : 'leaf'}">▸</span>
          <span class="mock-toc-level">H${h.level}</span>
          <span class="mock-toc-label">${escapeHtml(h.text)}</span>
        `;
        item.addEventListener('click', () => {
          activateDesktopBlock(h.blockIndex, true);
        });
        tocEl.appendChild(item);
      });
    }
  }

  function updateMobileMetaUI() {
    const blocks = docStore.mobile || [];
    const count = countWordsAndChars(blocks);
    const statusEl = document.getElementById('mock-android-status');
    if (statusEl) {
      const prefix = docStore.dirtyMobile ? t('modifiedLabel') : t('savedLabel');
      statusEl.textContent = `${prefix} · ${count} ${t('wordsUnit')}`;
    }

    const outlineList = document.getElementById('mock-android-outline-list');
    const outlineSheet = document.getElementById('mock-android-outline-sheet');
    if (outlineList) {
      const headings = extractHeadings(blocks);
      outlineList.innerHTML = '';
      headings.forEach((h) => {
        const item = document.createElement('div');
        const isActive = h.blockIndex === state.activeMobileBlockIndex;
        item.className = `mock-android-outline-item ${isActive ? 'active' : ''}`;
        item.innerHTML = `
          <span class="mock-toc-level">H${h.level}</span>
          <span>${escapeHtml(h.text)}</span>
        `;
        item.addEventListener('click', () => {
          activateMobileBlock(h.blockIndex, true);
          if (outlineSheet) outlineSheet.style.display = 'none';
        });
        outlineList.appendChild(item);
      });
    }
  }

  function renderDesktopCanvas() {
    const canvas = document.getElementById('mock-desktop-canvas');
    if (!canvas) return;
    const docName = state.activeDesktopDoc;
    const blocks = docStore.desktop[docName] || [];
    canvas.innerHTML = '';

    blocks.forEach((raw, idx) => {
      const blk = document.createElement('div');
      const isEditing = idx === state.activeDesktopBlockIndex;
      blk.className = `mock-block ${isEditing ? 'editing' : ''}`;
      blk.setAttribute('data-block-index', String(idx));

      const ta = document.createElement('textarea');
      ta.className = 'raw-editor';
      ta.rows = 1;
      ta.spellcheck = false;
      ta.value = raw;

      const rendered = document.createElement('div');
      rendered.className = 'rendered-view';
      rendered.innerHTML = renderBlockHtml(raw, false);

      ta.addEventListener('input', () => {
        docStore.desktop[docName][idx] = ta.value;
        docStore.dirtyDesktop[docName] = true;
        rendered.innerHTML = renderBlockHtml(ta.value, false);
        autoResizeTextarea(ta);
        updateDesktopMetaUI();
        renderSearchResults();
      });

      ta.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          state.activeDesktopBlockIndex = -1;
          blk.classList.remove('editing');
          updateDesktopMetaUI();
        }
      });

      blk.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!blk.classList.contains('editing')) {
          activateDesktopBlock(idx, true);
        }
      });

      blk.appendChild(ta);
      blk.appendChild(rendered);
      canvas.appendChild(blk);

      if (isEditing) {
        requestAnimationFrame(() => autoResizeTextarea(ta));
      }
    });

    updateDesktopMetaUI();
  }

  function activateDesktopBlock(index, focusInput) {
    state.activeDesktopBlockIndex = index;
    const canvas = document.getElementById('mock-desktop-canvas');
    if (!canvas) return;
    canvas.querySelectorAll('.mock-block').forEach((blk, idx) => {
      const active = idx === index;
      blk.classList.toggle('editing', active);
      if (active) {
        const ta = blk.querySelector('.raw-editor');
        autoResizeTextarea(ta);
        if (focusInput && ta) {
          ta.focus({ preventScroll: true });
        }
      }
    });
    updateDesktopMetaUI();
  }

  function renderMobileCanvas() {
    const canvas = document.getElementById('mock-android-canvas');
    if (!canvas) return;
    const blocks = docStore.mobile || [];
    canvas.innerHTML = '';

    blocks.forEach((raw, idx) => {
      const blk = document.createElement('div');
      const isEditing = idx === state.activeMobileBlockIndex;
      blk.className = `mock-block ${isEditing ? 'editing' : ''}`;
      blk.setAttribute('data-mobile-index', String(idx));

      const ta = document.createElement('textarea');
      ta.className = 'raw-editor';
      ta.rows = 1;
      ta.spellcheck = false;
      ta.value = raw;

      const rendered = document.createElement('div');
      rendered.className = 'rendered-view';
      rendered.innerHTML = renderBlockHtml(raw, true);

      ta.addEventListener('input', () => {
        docStore.mobile[idx] = ta.value;
        docStore.dirtyMobile = true;
        rendered.innerHTML = renderBlockHtml(ta.value, true);
        autoResizeTextarea(ta);
        updateMobileMetaUI();
      });

      ta.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          state.activeMobileBlockIndex = -1;
          blk.classList.remove('editing');
          updateMobileMetaUI();
        }
      });

      blk.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!blk.classList.contains('editing')) {
          activateMobileBlock(idx, true);
        }
      });

      blk.appendChild(ta);
      blk.appendChild(rendered);
      canvas.appendChild(blk);

      if (isEditing) {
        requestAnimationFrame(() => autoResizeTextarea(ta));
      }
    });

    updateMobileMetaUI();
  }

  function activateMobileBlock(index, focusInput) {
    state.activeMobileBlockIndex = index;
    const canvas = document.getElementById('mock-android-canvas');
    if (!canvas) return;
    canvas.querySelectorAll('.mock-block').forEach((blk, idx) => {
      const active = idx === index;
      blk.classList.toggle('editing', active);
      if (active) {
        const ta = blk.querySelector('.raw-editor');
        autoResizeTextarea(ta);
        if (focusInput && ta) {
          ta.focus({ preventScroll: true });
        }
      }
    });
    updateMobileMetaUI();
  }

  function renderSearchResults() {
    const inputEl = document.getElementById('mock-search-input');
    const infoEl = document.getElementById('mock-search-info');
    const resultsEl = document.getElementById('mock-search-results');
    if (!inputEl || !infoEl || !resultsEl) return;

    const query = inputEl.value.trim();
    resultsEl.innerHTML = '';
    if (!query) {
      infoEl.textContent = t('searchNoResults');
      return;
    }

    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = state.searchWholeWord ? `\\b${escaped}\\b` : escaped;
    const flags = state.searchCaseSensitive ? 'g' : 'gi';
    let regex;
    try {
      regex = new RegExp(pattern, flags);
    } catch {
      infoEl.textContent = t('searchNoResults');
      return;
    }

    let totalHits = 0;
    let fileCount = 0;

    ['document.md', 'guide.md'].forEach((docName) => {
      const blocks = docStore.desktop[docName] || [];
      const hits = [];
      blocks.forEach((blkText, blkIdx) => {
        blkText.split(/\r?\n/).forEach((line) => {
          regex.lastIndex = 0;
          if (regex.test(line)) {
            hits.push({ blkIdx, line: line.trim() });
          }
        });
      });

      if (hits.length > 0) {
        fileCount += 1;
        totalHits += hits.length;

        const fileHeader = document.createElement('div');
        fileHeader.className = 'mock-search-file';
        fileHeader.innerHTML = `
          <span class="mock-tree-caret expanded">▸</span>
          <span>${docName}</span>
          <span class="mock-count-badge">${hits.length}</span>
        `;
        resultsEl.appendChild(fileHeader);

        hits.forEach((hit) => {
          const row = document.createElement('div');
          row.className = 'mock-search-hit';
          regex.lastIndex = 0;
          const highlighted = escapeHtml(hit.line).replace(regex, (m) => `<mark>${m}</mark>`);
          row.innerHTML = highlighted;
          row.addEventListener('click', () => {
            if (state.activeDesktopDoc !== docName) {
              state.activeDesktopDoc = docName;
              state.activeDesktopBlockIndex = hit.blkIdx;
              renderDesktopCanvas();
            } else {
              activateDesktopBlock(hit.blkIdx, true);
            }
          });
          resultsEl.appendChild(row);
        });
      }
    });

    if (totalHits === 0) {
      infoEl.textContent = t('searchNoResults');
    } else if (state.lang === 'zh') {
      infoEl.textContent = `在 ${fileCount} 个文件中找到 ${totalHits} 处匹配`;
    } else {
      infoEl.textContent = `${totalHits} match${totalHits > 1 ? 'es' : ''} in ${fileCount} file${fileCount > 1 ? 's' : ''}`;
    }
  }

  function applyRecentListState() {
    const itemsWrap = document.getElementById('mock-recent-items');
    const emptyWrap = document.getElementById('mock-recent-empty');
    const clearBtn = document.getElementById('mock-clear-recent-btn');
    const cAll = document.getElementById('recent-count-all');
    const cFile = document.getElementById('recent-count-file');
    const cFolder = document.getElementById('recent-count-folder');

    if (state.recentCleared) {
      if (itemsWrap) itemsWrap.style.display = 'none';
      if (emptyWrap) emptyWrap.style.display = 'flex';
      if (clearBtn) clearBtn.style.visibility = 'hidden';
      if (cAll) cAll.textContent = '0';
      if (cFile) cFile.textContent = '0';
      if (cFolder) cFolder.textContent = '0';
      return;
    }

    if (itemsWrap) itemsWrap.style.display = 'flex';
    if (emptyWrap) emptyWrap.style.display = 'none';
    if (clearBtn) clearBtn.style.visibility = 'visible';
    if (cAll) cAll.textContent = '3';
    if (cFile) cFile.textContent = '2';
    if (cFolder) cFolder.textContent = '1';

    document.querySelectorAll('.mock-recent-item[data-recent-type]').forEach((row) => {
      const rType = row.getAttribute('data-recent-type');
      row.style.display = state.recentFilter === 'all' || state.recentFilter === rType ? 'flex' : 'none';
    });
  }

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    try {
      localStorage.setItem('inkmark-site-theme', state.theme);
    } catch {}
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
      if (state.lang === 'zh') {
        btn.textContent = state.theme === 'dark' ? '☀️ 浅色' : '🌙 深色';
      } else {
        btn.textContent = state.theme === 'dark' ? '☀️ Light' : '🌙 Dark';
      }
    }
  }

  function formatBytes(bytes) {
    if (!Number.isFinite(bytes) || bytes <= 0) return '—';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }

  function renderPlatformCards() {
    const assets = state.release.assets || [];
    const winAssets = assets.filter((a) => a.platform === 'windows');
    const androidAssets = assets.filter((a) => a.platform === 'android');

    const winCard = document.getElementById('card-windows');
    const androidCard = document.getElementById('card-android');
    if (winCard) winCard.classList.toggle('recommended', state.os !== 'android');
    if (androidCard) androidCard.classList.toggle('recommended', state.os === 'android');

    renderArtifactList('win-artifact-list', winAssets);
    renderArtifactList('android-artifact-list', androidAssets);
  }

  function renderArtifactList(containerId, list) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    list.forEach((asset) => {
      const item = document.createElement('div');
      item.className = `artifact-item ${asset.primary ? 'is-primary' : ''}`;

      const label = state.lang === 'zh' ? asset.labelZh : asset.labelEn;
      const desc = state.lang === 'zh' ? asset.descZh : asset.descEn;
      const btnVariant = asset.primary ? 'primary' : 'secondary';

      item.innerHTML = `
        <div class="artifact-top">
          <div class="artifact-label">
            <span>${label}</span>
            ${asset.primary ? `<span class="artifact-badge">${t('recommendedBadge')}</span>` : ''}
          </div>
          <div class="artifact-actions">
            <a class="btn-dl-sm ${btnVariant}" href="${asset.downloadUrl}" target="_blank" rel="noopener">
              ⬇ ${t('downloadBtn')} (${asset.sizeFormatted})
            </a>
          </div>
        </div>
        <div class="artifact-desc">${desc}</div>
      `;

      container.appendChild(item);
    });
  }

  function renderBenchmarks() {
    const scaleBody = document.getElementById('scale-tbody');
    if (scaleBody && Array.isArray(state.benchmarks.scaleFixtures)) {
      scaleBody.innerHTML = '';
      state.benchmarks.scaleFixtures.forEach((row) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td style="font-weight:700;">${row.size}</td>
          <td style="font-family:var(--font-mono);color:var(--accent-teal);font-weight:600;">${row.open}</td>
          <td style="font-family:var(--font-mono);">${row.switchBack}</td>
          <td style="font-family:var(--font-mono);">${row.inputUpdate}</td>
        `;
        scaleBody.appendChild(tr);
      });
    }
  }

  function simpleMarkdownToHtml(md) {
    if (!md) return '';
    const lines = md.split(/\r?\n/);
    let html = '';
    let inList = false;

    const formatInline = (text) =>
      text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          '<a href="$2" target="_blank" rel="noopener" style="color:var(--accent-teal);text-decoration:underline;">$1</a>'
        );

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) {
        if (inList) {
          html += '</ul>';
          inList = false;
        }
        continue;
      }
      const heading = /^(#{2,6})\s+(.+)$/.exec(line);
      if (heading) {
        if (inList) {
          html += '</ul>';
          inList = false;
        }
        html += `<h4>${formatInline(heading[2])}</h4>`;
      } else if (line.startsWith('- ')) {
        if (!inList) {
          html += '<ul>';
          inList = true;
        }
        html += `<li>${formatInline(line.slice(2))}</li>`;
      } else if (inList) {
        html = html.replace(/<\/li>$/, ` ${formatInline(line)}</li>`);
      } else {
        html += `<p>${formatInline(line)}</p>`;
      }
    }
    if (inList) html += '</ul>';
    return html;
  }

  function renderChangelog() {
    const layoutEl = document.getElementById('changelog-layout');
    const navEl = document.getElementById('version-nav');
    const bodyEl = document.getElementById('changelog-body');
    if (!navEl || !bodyEl) return;

    if (layoutEl) {
      layoutEl.classList.toggle('single-version', state.changelog.length <= 1);
    }

    navEl.innerHTML = '';
    state.changelog.forEach((entry, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `version-nav-btn ${idx === state.activeVersionIndex ? 'active' : ''}`;
      btn.innerHTML = `
        <span>v${entry.version}</span>
        <span class="version-date">${entry.date || ''}</span>
      `;
      btn.addEventListener('click', () => {
        state.activeVersionIndex = idx;
        renderChangelog();
      });
      navEl.appendChild(btn);
    });

    const active = state.changelog[state.activeVersionIndex];
    if (!active) return;

    const contentMd = state.lang === 'zh' ? active.zh : active.en;

    bodyEl.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
        <h3>v${active.version}</h3>
        <span style="font-size:0.84rem;color:var(--text-secondary);font-family:var(--font-mono);">${active.date || ''}</span>
      </div>
      <div class="markdown-body" style="margin-top:12px;">
        ${simpleMarkdownToHtml(contentMd)}
      </div>
    `;
  }

  function renderSwatchSamples() {
    const sampleHtml = escapeHtml(t('swatchCardSample')).replace(/\n/g, '<br/>');
    document.querySelectorAll('[data-role="swatch-sample"]').forEach((el) => {
      el.innerHTML = sampleHtml;
    });
  }

  function renderAllText() {
    document.documentElement.setAttribute('lang', state.lang === 'zh' ? 'zh-CN' : 'en');
    document.title = t('pageTitle');

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      el.setAttribute('title', t(key));
    });

    const searchInput = document.getElementById('mock-search-input');
    if (searchInput) {
      searchInput.setAttribute('placeholder', t('searchPlaceholder'));
    }

    const verBadges = document.querySelectorAll('[data-role="version-badge"]');
    verBadges.forEach((el) => {
      if (state.release.version) {
        el.textContent = `v${state.release.version}`;
      }
    });

    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.textContent = state.lang === 'zh' ? 'EN' : '中文';
    }

    document.querySelectorAll('[data-brand-link]').forEach((el) => {
      const type = el.getAttribute('data-brand-link');
      if (type === 'repo') el.href = state.brand.repoUrl;
      if (type === 'releases') el.href = state.brand.releasesUrl;
      if (type === 'changelog') el.href = `${state.brand.repoUrl}/blob/main/CHANGELOG.md`;
    });

    initDocStore(false);
    applyTheme();
    renderPlatformCards();
    renderSwatchSamples();
    renderDesktopCanvas();
    renderMobileCanvas();
    renderSearchResults();
    applyRecentListState();
    renderBenchmarks();
    renderChangelog();
  }

  async function syncWithGitHubApi() {
    const apiUrl = state.brand.latestApiUrl;
    if (!apiUrl) return;
    try {
      const res = await fetch(apiUrl, {
        headers: { Accept: 'application/vnd.github+json' }
      });
      if (!res.ok) return;
      const json = await res.json();
      if (!json || !Array.isArray(json.assets)) return;

      const currentAssetsByName = new Map(
        (state.release.assets || []).map((a) => [a.name, a])
      );
      json.assets.forEach((ra) => {
        const existing = currentAssetsByName.get(ra.name);
        if (existing) {
          existing.downloadUrl = ra.browser_download_url || existing.downloadUrl;
          if (ra.size) {
            existing.size = ra.size;
            existing.sizeFormatted = formatBytes(ra.size);
          }
        }
      });
      renderPlatformCards();
    } catch {
      // Silent fallback to built-in release data
    }
  }

  function init() {
    initDocStore(true);
    renderAllText();

    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme();
      });
    }

    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        state.lang = state.lang === 'zh' ? 'en' : 'zh';
        try {
          localStorage.setItem('inkmark-site-lang', state.lang);
        } catch {}
        renderAllText();
      });
    }

    const stageEl = document.getElementById('mockup-stage');
    const themePickerEl = document.getElementById('mock-theme-picker');
    const sidebarEl = document.getElementById('mock-sidebar');
    let lockedMockTheme = 'inkmark-dark';

    const THEME_NAMES = {
      'inkmark-dark': 'InkMark Dark',
      'github-light': 'GitHub Light',
      'one-light': 'One Light',
      cobalt2: 'Cobalt2',
      vesper: 'Vesper',
      poimandres: 'Poimandres'
    };

    function applyMockThemePreview(themeId) {
      if (stageEl) stageEl.setAttribute('data-mock-theme', themeId);
    }

    function commitMockTheme(themeId, fromSwatchGrid) {
      lockedMockTheme = themeId;
      applyMockThemePreview(themeId);
      if (themePickerEl) {
        themePickerEl.querySelectorAll('.theme-swatch-btn').forEach((b) =>
          b.classList.toggle('active', b.getAttribute('data-theme-id') === themeId)
        );
      }
      document.querySelectorAll('.swatch-card[data-swatch-theme]').forEach((c) =>
        c.classList.toggle('active', c.getAttribute('data-swatch-theme') === themeId)
      );
      if (fromSwatchGrid) {
        showToast(`${t('themeAppliedToast')}${THEME_NAMES[themeId] || themeId}`);
        if (stageEl && window.innerWidth > 768) {
          stageEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }

    // Mode switching (Desktop / Android / PDF)
    function setMockMode(mode) {
      document.querySelectorAll('.showcase-mode-btn').forEach((b) =>
        b.classList.toggle('active', b.getAttribute('data-mock-mode') === mode)
      );
      const deskEl = document.getElementById('mock-view-desktop');
      const andEl = document.getElementById('mock-view-android');
      const pdfEl = document.getElementById('mock-view-pdf');
      if (deskEl) deskEl.style.display = mode === 'desktop' ? 'block' : 'none';
      if (andEl) andEl.style.display = mode === 'android' ? 'block' : 'none';
      if (pdfEl) pdfEl.style.display = mode === 'pdf' ? 'grid' : 'none';

      // Collapse stacked desktop sidebar by default on narrow screens so editor canvas stays visible
      if (mode === 'desktop' && window.innerWidth <= 860 && sidebarEl) {
        sidebarEl.classList.add('collapsed');
      }
    }

    document.querySelectorAll('.showcase-mode-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-mock-mode');
        setMockMode(mode);
      });
    });

    // Default to Mobile online editor when accessed on mobile devices or mobile viewports
    const isMobileWeb =
      state.os === 'android' ||
      /iphone|ipad|ipod|mobile/i.test(navigator.userAgent || '') ||
      window.innerWidth <= 768;
    setMockMode(isMobileWeb ? 'android' : 'desktop');

    // Theme Hover & Click Preview (Top Picker + Split Theme Gallery)
    if (themePickerEl) {
      themePickerEl.querySelectorAll('.theme-swatch-btn').forEach((btn) => {
        const themeId = btn.getAttribute('data-theme-id');
        btn.addEventListener('mouseenter', () => applyMockThemePreview(themeId));
        btn.addEventListener('click', () => commitMockTheme(themeId, false));
      });
      themePickerEl.addEventListener('mouseleave', () => applyMockThemePreview(lockedMockTheme));
    }

    document.querySelectorAll('.swatch-card[data-swatch-theme]').forEach((card) => {
      const themeId = card.getAttribute('data-swatch-theme');
      card.addEventListener('mouseenter', () => applyMockThemePreview(themeId));
      card.addEventListener('mouseleave', () => applyMockThemePreview(lockedMockTheme));
      card.addEventListener('click', () => commitMockTheme(themeId, true));
    });

    // Click empty canvas padding to exit block editing and render live view
    const deskCanvas = document.getElementById('mock-desktop-canvas');
    if (deskCanvas) {
      deskCanvas.addEventListener('click', () => {
        if (state.activeDesktopBlockIndex !== -1) {
          state.activeDesktopBlockIndex = -1;
          deskCanvas.querySelectorAll('.mock-block').forEach((b) => b.classList.remove('editing'));
          updateDesktopMetaUI();
        }
      });
    }

    const mobCanvas = document.getElementById('mock-android-canvas');
    if (mobCanvas) {
      mobCanvas.addEventListener('click', () => {
        if (state.activeMobileBlockIndex !== -1) {
          state.activeMobileBlockIndex = -1;
          mobCanvas.querySelectorAll('.mock-block').forEach((b) => b.classList.remove('editing'));
          updateMobileMetaUI();
        }
      });
    }

    // Desktop Tab & File Switching (document.md <-> guide.md)
    function switchDesktopDoc(docName) {
      if (!docName || !docStore.desktop[docName]) return;
      state.activeDesktopDoc = docName;
      state.activeDesktopBlockIndex = 0;
      renderDesktopCanvas();
    }

    document.querySelectorAll('[data-doc-tab]').forEach((tab) => {
      tab.addEventListener('click', () => switchDesktopDoc(tab.getAttribute('data-doc-tab')));
    });

    document.querySelectorAll('[data-doc-switch]').forEach((item) => {
      item.addEventListener('click', () => switchDesktopDoc(item.getAttribute('data-doc-switch')));
    });

    // Desktop Left-Column Icon Strip (Matches sideBar/index.vue)
    document.querySelectorAll('.mock-left-icon[data-side-panel]').forEach((iconEl) => {
      iconEl.addEventListener('click', () => {
        const panel = iconEl.getAttribute('data-side-panel');
        const wasActive = iconEl.classList.contains('active');
        const isCollapsed = sidebarEl && sidebarEl.classList.contains('collapsed');

        if (wasActive && !isCollapsed && sidebarEl) {
          sidebarEl.classList.add('collapsed');
          return;
        }

        if (sidebarEl) sidebarEl.classList.remove('collapsed');

        document.querySelectorAll('.mock-left-icon[data-side-panel]').forEach((el) =>
          el.classList.toggle('active', el === iconEl)
        );

        const tocPanel = document.getElementById('mock-panel-toc');
        const searchPanel = document.getElementById('mock-panel-search');
        const filesPanel = document.getElementById('mock-panel-files');
        if (tocPanel) tocPanel.style.display = panel === 'toc' ? 'flex' : 'none';
        if (searchPanel) searchPanel.style.display = panel === 'search' ? 'flex' : 'none';
        if (filesPanel) filesPanel.style.display = panel === 'files' ? 'flex' : 'none';

        if (panel === 'search') {
          renderSearchResults();
        }
      });
    });

    // Interactive Sidebar Search Controls
    const searchInputEl = document.getElementById('mock-search-input');
    const searchCaseBtn = document.getElementById('mock-search-case');
    const searchWordBtn = document.getElementById('mock-search-word');
    if (searchInputEl) {
      searchInputEl.addEventListener('input', renderSearchResults);
    }
    if (searchCaseBtn) {
      searchCaseBtn.addEventListener('click', () => {
        state.searchCaseSensitive = !state.searchCaseSensitive;
        searchCaseBtn.classList.toggle('active', state.searchCaseSensitive);
        renderSearchResults();
      });
    }
    if (searchWordBtn) {
      searchWordBtn.addEventListener('click', () => {
        state.searchWholeWord = !state.searchWholeWord;
        searchWordBtn.classList.toggle('active', state.searchWholeWord);
        renderSearchResults();
      });
    }

    // Recent List Filter Tabs & Clear/Restore
    document.querySelectorAll('.mock-recent-tab-btn[data-recent-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.recentFilter = btn.getAttribute('data-recent-filter') || 'all';
        document.querySelectorAll('.mock-recent-tab-btn[data-recent-filter]').forEach((b) =>
          b.classList.toggle('active', b === btn)
        );
        applyRecentListState();
      });
    });

    const clearRecentBtn = document.getElementById('mock-clear-recent-btn');
    const restoreRecentBtn = document.getElementById('mock-restore-recent-btn');
    if (clearRecentBtn) {
      clearRecentBtn.addEventListener('click', () => {
        state.recentCleared = true;
        applyRecentListState();
      });
    }
    if (restoreRecentBtn) {
      restoreRecentBtn.addEventListener('click', () => {
        state.recentCleared = false;
        applyRecentListState();
      });
    }

    // Reset Demo Content Buttons (Desktop Gear Icon & Mobile Top Buttons)
    function resetDemoAll() {
      initDocStore(true);
      state.activeDesktopBlockIndex = 1;
      state.activeMobileBlockIndex = 1;
      renderDesktopCanvas();
      renderMobileCanvas();
      renderSearchResults();
      showToast(t('demoResetToast'));
    }

    ['mock-reset-demo-btn', 'mock-android-reset-btn', 'mock-android-more-btn'].forEach((id) => {
      const btn = document.getElementById(id);
      if (btn) btn.addEventListener('click', resetDemoAll);
    });

    // Mobile Android Outline Sheet Toggle
    const androidOutlineBtn = document.getElementById('mock-android-outline-btn');
    const androidOutlineClose = document.getElementById('mock-android-outline-close');
    const androidOutlineSheet = document.getElementById('mock-android-outline-sheet');
    if (androidOutlineBtn && androidOutlineSheet) {
      androidOutlineBtn.addEventListener('click', () => {
        const hidden = androidOutlineSheet.style.display === 'none';
        androidOutlineSheet.style.display = hidden ? 'block' : 'none';
      });
    }
    if (androidOutlineClose && androidOutlineSheet) {
      androidOutlineClose.addEventListener('click', () => {
        androidOutlineSheet.style.display = 'none';
      });
    }

    // Mobile Quick Formatting Toolbar Actions
    document.querySelectorAll('.mock-tb-key[data-tb-action]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-tb-action');
        if (action === 'reset') {
          resetDemoAll();
          return;
        }
        let idx = state.activeMobileBlockIndex;
        if (idx < 0 || idx >= docStore.mobile.length) idx = 0;

        let current = docStore.mobile[idx] || '';
        const snippets = {
          h2: '\n## 新章节标题',
          bold: ' **重点内容**',
          italic: ' _斜体补充_',
          math: ' $a^2 + b^2 = c^2$',
          task: '\n- [x] 新增任务项',
          code: ' `code`'
        };
        const snippetsEn = {
          h2: '\n## New Section',
          bold: ' **bold text**',
          italic: ' _italic note_',
          math: ' $a^2 + b^2 = c^2$',
          task: '\n- [x] New task item',
          code: ' `code`'
        };
        const dict = state.lang === 'zh' ? snippets : snippetsEn;
        if (dict[action]) {
          current += dict[action];
          docStore.mobile[idx] = current;
          docStore.dirtyMobile = true;
          state.activeMobileBlockIndex = idx;
          renderMobileCanvas();
          activateMobileBlock(idx, true);
        }
      });
    });

    syncWithGitHubApi();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
