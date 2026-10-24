/* InkMark Official Release Portal Logic */
(function () {
  const staticData = window.__INKMARK_RELEASE_DATA__ || {};
  const state = {
    lang: (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'zh',
    theme: localStorage.getItem('inkmark-site-theme') || 'dark',
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
    activeVersionIndex: 0
  };

  const I18N = {
    zh: {
      navDownloads: '下载',
      navPreview: '在线体验',
      navFeatures: '功能',
      navThemes: '主题',
      navBench: '性能',
      navNotes: '更新日志',
      heroTitlePrefix: '简洁、专注的 ',
      heroTitleHighlight: 'Markdown 编辑器',
      heroSubtitle: '支持所见即所得编辑，适用于 Windows 与 Android。',
      winCardTitle: 'Windows',
      winCardReq: 'Windows 10 / 11 (x64)',
      androidCardTitle: 'Android',
      androidCardReq: 'Android 7.0+',
      recommendedBadge: '推荐',
      downloadBtn: '下载',
      previewTitle: '在线体验',
      previewDesc: '点击文档段落可切换 Markdown 源码与渲染视图，通过上方按钮切换平台视图或主题。',
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
      tocH1: '所见即所得编辑',
      tocH2Math: '行内语法与公式',
      tocH2Diag: '流程图渲染',
      tocH2Table: '表格排版',
      searchResultInfo: '在 2 个文件中找到 3 处匹配',
      sideOpenedFiles: '已打开的文件',
      sideRecent: '最近使用',
      recentAll: '全部',
      recentFiles: '文件',
      recentFolders: '文件夹',
      recentClear: '清空',
      editorHintPill: '点击段落展开源码',
      androidSavedStatus: '已保存 · 128 词',
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
      themeFeat2Desc: '在上方主题按钮悬停预览，点击主题卡片应用配色。',
      themeMoreNote: '另含 33 款内置主题',
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
      navDownloads: 'Download',
      navPreview: 'Interactive Demo',
      navFeatures: 'Features',
      navThemes: 'Themes',
      navBench: 'Performance',
      navNotes: 'Changelog',
      heroTitlePrefix: 'Clean, Focused ',
      heroTitleHighlight: 'Markdown Editor',
      heroSubtitle: 'Real-time WYSIWYG Markdown editing for Windows and Android.',
      winCardTitle: 'Windows',
      winCardReq: 'Windows 10 / 11 (x64)',
      androidCardTitle: 'Android',
      androidCardReq: 'Android 7.0+',
      recommendedBadge: 'Recommended',
      downloadBtn: 'Download',
      previewTitle: 'Interactive Demo',
      previewDesc: 'Click any paragraph to toggle between Markdown syntax and rendered view, or switch platforms and themes above.',
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
      tocH1: 'WYSIWYG Editing',
      tocH2Math: 'Inline Syntax & Math',
      tocH2Diag: 'Flowcharts',
      tocH2Table: 'Table Formatting',
      searchResultInfo: '3 matches in 2 files',
      sideOpenedFiles: 'Opened files',
      sideRecent: 'Recent',
      recentAll: 'All',
      recentFiles: 'Files',
      recentFolders: 'Folders',
      recentClear: 'Clear',
      editorHintPill: 'Click paragraph to view source',
      androidSavedStatus: 'Saved · 128 words',
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
      themeMoreNote: 'Plus 33 additional built-in themes',
      benchTitle: 'Performance',
      benchDesc: 'Measured with Markdown documents containing headings, tables, code blocks, and math. Results vary by device and document.',
      thScaleSize: 'File Size',
      thScaleOpen: 'Open Time',
      thScaleSwitch: 'Tab Switch',
      thScaleInput: 'Input Latency',
      notesTitle: 'Changelog',
      footerReleases: 'Releases',
      footerChangelog: 'Changelog'
    }
  };

  function detectOS() {
    const ua = navigator.userAgent || '';
    if (/android/i.test(ua)) return 'android';
    return 'windows';
  }

  function t(key) {
    const dict = I18N[state.lang] || I18N.zh;
    return dict[key] || I18N.zh[key] || key;
  }

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('inkmark-site-theme', state.theme);
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
      item.className = 'artifact-item';

      const label = state.lang === 'zh' ? asset.labelZh : asset.labelEn;
      const desc = state.lang === 'zh' ? asset.descZh : asset.descEn;

      item.innerHTML = `
        <div class="artifact-top">
          <div class="artifact-label">
            <span>${label}</span>
            ${asset.primary ? `<span class="artifact-badge">${t('recommendedBadge')}</span>` : ''}
          </div>
          <div class="artifact-actions">
            <a class="btn-dl-sm" href="${asset.downloadUrl}" target="_blank" rel="noopener">
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
    const navEl = document.getElementById('version-nav');
    const bodyEl = document.getElementById('changelog-body');
    if (!navEl || !bodyEl) return;

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
        <span style="font-size:0.84rem;color:var(--text-secondary);">${active.date || ''}</span>
      </div>
      <div class="markdown-body" style="margin-top:12px;">
        ${simpleMarkdownToHtml(contentMd)}
      </div>
    `;
  }

  function renderAllText() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });

    const verBadges = document.querySelectorAll('[data-role="version-badge"]');
    verBadges.forEach((el) => {
      el.textContent = `v${state.release.version}`;
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

    applyTheme();
    renderPlatformCards();
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
        renderAllText();
      });
    }

    const stageEl = document.getElementById('mockup-stage');
    const themePickerEl = document.getElementById('mock-theme-picker');
    let lockedMockTheme = 'inkmark-dark';

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

    // Theme Hover & Click Preview
    if (themePickerEl && stageEl) {
      themePickerEl.querySelectorAll('.theme-swatch-btn').forEach((btn) => {
        const themeId = btn.getAttribute('data-theme-id');
        btn.addEventListener('mouseenter', () => {
          stageEl.setAttribute('data-mock-theme', themeId);
        });
        btn.addEventListener('click', () => {
          lockedMockTheme = themeId;
          stageEl.setAttribute('data-mock-theme', lockedMockTheme);
          themePickerEl.querySelectorAll('.theme-swatch-btn').forEach((b) =>
            b.classList.toggle('active', b === btn)
          );
        });
      });

      themePickerEl.addEventListener('mouseleave', () => {
        stageEl.setAttribute('data-mock-theme', lockedMockTheme);
      });

      document.querySelectorAll('.swatch-card[data-swatch-theme]').forEach((card) => {
        card.addEventListener('click', () => {
          const themeId = card.getAttribute('data-swatch-theme');
          lockedMockTheme = themeId;
          stageEl.setAttribute('data-mock-theme', lockedMockTheme);
          themePickerEl.querySelectorAll('.theme-swatch-btn').forEach((b) =>
            b.classList.toggle('active', b.getAttribute('data-theme-id') === themeId)
          );
          stageEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      });
    }

    // Clickable Inline Live-Preview Blocks
    document.querySelectorAll('.mock-canvas').forEach((canvas) => {
      const blocks = canvas.querySelectorAll('.mock-block');
      blocks.forEach((blk) => {
        blk.addEventListener('click', () => {
          blocks.forEach((other) => other.classList.toggle('editing', other === blk));
          const blockId = blk.getAttribute('data-block-id');
          if (blockId) {
            document.querySelectorAll('.mock-toc-item[data-target-block]').forEach((toc) => {
              toc.classList.toggle('active', toc.getAttribute('data-target-block') === blockId);
            });
          }
        });
      });
    });

    // Desktop Left-Column Icon Strip (Matches sideBar/index.vue)
    const sidebarEl = document.getElementById('mock-sidebar');
    document.querySelectorAll('.mock-left-icon[data-side-panel]').forEach((iconEl) => {
      iconEl.addEventListener('click', () => {
        const panel = iconEl.getAttribute('data-side-panel');
        const wasActive = iconEl.classList.contains('active');

        if (wasActive && sidebarEl) {
          sidebarEl.classList.toggle('collapsed');
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
      });
    });

    // TOC & Search Jump
    document
      .querySelectorAll('.mock-toc-item[data-target-block], .mock-search-hit[data-target-block]')
      .forEach((item) => {
        item.addEventListener('click', () => {
          const targetId = item.getAttribute('data-target-block');
          const targetBlock = document.querySelector(`.mock-block[data-block-id="${targetId}"]`);
          if (targetBlock) targetBlock.click();
        });
      });

    // Recent List Filter Tabs (Matches recentList.vue: All / Files / Folders)
    document.querySelectorAll('.mock-recent-tab-btn[data-recent-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-recent-filter');
        document.querySelectorAll('.mock-recent-tab-btn[data-recent-filter]').forEach((b) =>
          b.classList.toggle('active', b === btn)
        );
        document.querySelectorAll('.mock-recent-item[data-recent-type]').forEach((row) => {
          const rType = row.getAttribute('data-recent-type');
          row.style.display = filter === 'all' || filter === rType ? 'flex' : 'none';
        });
      });
    });

    // Mobile Android Outline Sheet Toggle & Jump
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
    document.querySelectorAll('.mock-android-outline-item[data-mobile-target]').forEach((item) => {
      item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-mobile-target');
        document.querySelectorAll('.mock-android-outline-item').forEach((el) =>
          el.classList.toggle('active', el === item)
        );
        const targetBlock = document.querySelector(`.mock-block[data-mobile-block="${targetId}"]`);
        if (targetBlock) targetBlock.click();
        if (androidOutlineSheet) androidOutlineSheet.style.display = 'none';
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
