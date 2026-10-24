window.__INKMARK_RELEASE_DATA__ = {
  "generatedAt": "2026-10-24T06:32:04.538Z",
  "brand": {
    "name": "InkMark",
    "repo": "1ATLAS0/InkMark-Release",
    "repoUrl": "https://github.com/1ATLAS0/InkMark-Release",
    "releasesUrl": "https://github.com/1ATLAS0/InkMark-Release/releases",
    "latestApiUrl": "https://api.github.com/repos/1ATLAS0/InkMark-Release/releases/latest",
    "allReleasesApiUrl": "https://api.github.com/repos/1ATLAS0/InkMark-Release/releases"
  },
  "latest": {
    "version": "0.20.21",
    "tag": "v0.20.21",
    "releaseDate": "2026-10-23",
    "releaseUrl": "https://github.com/1ATLAS0/InkMark-Release/releases/tag/v0.20.21",
    "assets": [
      {
        "name": "inkmark-win-x64-0.20.21-setup.exe",
        "size": 127893404,
        "sizeFormatted": "121.97 MB",
        "sha256": "ebc9de443734db8fdbb21595b628268e081181c56d622bd4c6be3664f8f8a99a",
        "downloadUrl": "https://github.com/1ATLAS0/InkMark-Release/releases/download/v0.20.21/inkmark-win-x64-0.20.21-setup.exe",
        "id": "win-setup",
        "order": 10,
        "platform": "windows",
        "kind": "installer",
        "primary": true,
        "labelZh": "安装版 (x64)",
        "labelEn": "Installer (x64)",
        "descZh": "支持 .md 文件关联与自动更新",
        "descEn": "Includes file associations and auto-update"
      },
      {
        "name": "inkmark-win-x64-0.20.21.zip",
        "size": 176226979,
        "sizeFormatted": "168.06 MB",
        "sha256": "ae5c5edb24075e7390d5d7e7ea6cfff3346c24c62bf3c4ff6b7fc2c12384b488",
        "downloadUrl": "https://github.com/1ATLAS0/InkMark-Release/releases/download/v0.20.21/inkmark-win-x64-0.20.21.zip",
        "id": "win-zip",
        "order": 20,
        "platform": "windows",
        "kind": "portable",
        "primary": false,
        "labelZh": "便携版 (.zip)",
        "labelEn": "Portable (.zip)",
        "descZh": "解压即用，免安装",
        "descEn": "Extract and run anywhere"
      },
      {
        "name": "InkMark-v0.20.21-android.apk",
        "size": 8103166,
        "sizeFormatted": "7.73 MB",
        "sha256": "ef4dfae6e5c21f4861afa2089066f1622140a4799e5edfa420577d83df1b787b",
        "downloadUrl": "https://github.com/1ATLAS0/InkMark-Release/releases/download/v0.20.21/InkMark-v0.20.21-android.apk",
        "id": "android-release",
        "order": 30,
        "platform": "android",
        "kind": "apk-release",
        "primary": true,
        "labelZh": "正式版 (.apk)",
        "labelEn": "Official APK (.apk)",
        "descZh": "适用于 Android 手机与平板",
        "descEn": "For Android phones and tablets"
      }
    ],
    "releaseNotesMd": "# InkMark 0.20.21\n\n## 界面改进\n\n- **更宽的正文区域**：收窄左右页边距，正文默认列宽提升，长文档阅读与编辑更舒展。\n- **大纲更清晰**：每个标题左侧显示 H1/H2 等级，当前标题以主题色标记。\n- **表格预览可选**：宽表格默认自动换行，不再需要横向拖动；可在“设置 → 编辑器 → 表格预览”\n  切换为横向滚动。\n\n## English\n\n- **Wider writing area**: Page margins are narrower and the default text column is wider, giving long\n  documents more room.\n- **Clearer outline**: Each heading shows its H1/H2 level on the left, with the active heading marked\n  in the accent colour.\n- **Table preview options**: Wide tables wrap their cells by default; switch to horizontal scrolling\n  in Settings → Editor → Table preview.\n\n## 下载 / Downloads\n\n- Windows x64 安装版 / installer：`inkmark-win-x64-0.20.21-setup.exe`\n- Windows x64 免安装版 / portable：`inkmark-win-x64-0.20.21.zip`\n- Android 正式版 / release：`InkMark-v0.20.21-android.apk`\n",
    "sha256SumsRaw": "ebc9de443734db8fdbb21595b628268e081181c56d622bd4c6be3664f8f8a99a  inkmark-win-x64-0.20.21-setup.exe\nae5c5edb24075e7390d5d7e7ea6cfff3346c24c62bf3c4ff6b7fc2c12384b488  inkmark-win-x64-0.20.21.zip\nef4dfae6e5c21f4861afa2089066f1622140a4799e5edfa420577d83df1b787b  InkMark-v0.20.21-android.apk"
  },
  "benchmarks": {
    "scaleFixtures": [
      {
        "size": "1 MB",
        "open": "709 ms",
        "switchBack": "342 ms",
        "inputUpdate": "119 ms"
      },
      {
        "size": "2 MB",
        "open": "732 ms",
        "switchBack": "417 ms",
        "inputUpdate": "211 ms"
      },
      {
        "size": "5 MB",
        "open": "1,265 ms",
        "switchBack": "562 ms",
        "inputUpdate": "423 ms"
      },
      {
        "size": "10 MB",
        "open": "2,037 ms",
        "switchBack": "908 ms",
        "inputUpdate": "754 ms"
      }
    ]
  },
  "changelog": [
    {
      "version": "0.20.23",
      "tag": "v0.20.23",
      "date": "2026-10-24",
      "platforms": "Windows / Android",
      "heading": "0.20.23 — 2026-10-24 (Windows / Android)",
      "zh": "#### 功能更新\n\n- **安装选项**：Windows 安装时可勾选文件关联，默认启用，并记住上次选择。\n\n#### 问题修复\n\n- **安装完成后启动**：修复勾选“运行 InkMark”后点击“完成”，安装窗口偶尔长时间无响应的问题。\n- **后台下载更新**：修复下载更新时无法编辑文档的问题，下载完成后也不会打断输入。\n- **检查更新入口**：恢复 Windows“帮助”菜单中的“检查更新”，安装版与便携版均可使用。\n- **中文安装界面**：补全 Windows 安装程序的中文提示，修复中文显示乱码。\n- **缩放阅读位置**：使用 Ctrl + 鼠标滚轮缩放时保留当前首行，避免正文跳动。",
      "en": "#### Feature updates\n\n- **Installation options**: Windows setup offers a file association checkbox, enabled by default, and remembers your choice.\n\n#### Bug fixes\n\n- **Launch after installation**: Fixed setup occasionally becoming unresponsive when finishing with “Run InkMark” selected.\n- **Background update downloads**: Fixed editing being blocked during downloads; completion no longer interrupts typing.\n- **Check for updates**: Restored the Help menu entry in both installed and portable Windows builds.\n- **Chinese setup interface**: Completed Chinese translations in Windows setup and fixed garbled text.\n- **Reading position during zoom**: Ctrl + mouse wheel zoom preserves the first visible line to prevent text from jumping.",
      "raw": "### 中文\n\n#### 功能更新\n\n- **安装选项**：Windows 安装时可勾选文件关联，默认启用，并记住上次选择。\n\n#### 问题修复\n\n- **安装完成后启动**：修复勾选“运行 InkMark”后点击“完成”，安装窗口偶尔长时间无响应的问题。\n- **后台下载更新**：修复下载更新时无法编辑文档的问题，下载完成后也不会打断输入。\n- **检查更新入口**：恢复 Windows“帮助”菜单中的“检查更新”，安装版与便携版均可使用。\n- **中文安装界面**：补全 Windows 安装程序的中文提示，修复中文显示乱码。\n- **缩放阅读位置**：使用 Ctrl + 鼠标滚轮缩放时保留当前首行，避免正文跳动。\n\n### English\n\n#### Feature updates\n\n- **Installation options**: Windows setup offers a file association checkbox, enabled by default, and remembers your choice.\n\n#### Bug fixes\n\n- **Launch after installation**: Fixed setup occasionally becoming unresponsive when finishing with “Run InkMark” selected.\n- **Background update downloads**: Fixed editing being blocked during downloads; completion no longer interrupts typing.\n- **Check for updates**: Restored the Help menu entry in both installed and portable Windows builds.\n- **Chinese setup interface**: Completed Chinese translations in Windows setup and fixed garbled text.\n- **Reading position during zoom**: Ctrl + mouse wheel zoom preserves the first visible line to prevent text from jumping."
    },
    {
      "version": "0.20.22",
      "tag": "v0.20.22",
      "date": "2026-10-24",
      "platforms": "Windows / Android",
      "heading": "0.20.22 — 2026-10-24 (Windows / Android)",
      "zh": "#### 功能更新\n\n- **应用内更新**：Windows 与 Android 自动检查新版本，可查看下载进度、取消下载，并在确认后安装。\n\n#### 问题修复\n\n- **大纲完整滚动**：长标题超出侧栏时即可横向滚动，多级标题也能完整查看。\n- **保持阅读位置**：调整侧栏宽度时保留当前首行，减少重新排版造成的跳动。",
      "en": "#### Feature updates\n\n- **In-app updates**: Windows and Android check for new versions automatically, with download progress, cancellation and installation confirmation.\n\n#### Bug fixes\n\n- **Complete outline headings**: Long and nested headings scroll horizontally as soon as they exceed the sidebar width.\n- **Keep your place**: Resizing the sidebar keeps the first visible line in place as the text reflows.",
      "raw": "### 中文\n\n#### 功能更新\n\n- **应用内更新**：Windows 与 Android 自动检查新版本，可查看下载进度、取消下载，并在确认后安装。\n\n#### 问题修复\n\n- **大纲完整滚动**：长标题超出侧栏时即可横向滚动，多级标题也能完整查看。\n- **保持阅读位置**：调整侧栏宽度时保留当前首行，减少重新排版造成的跳动。\n\n### English\n\n#### Feature updates\n\n- **In-app updates**: Windows and Android check for new versions automatically, with download progress, cancellation and installation confirmation.\n\n#### Bug fixes\n\n- **Complete outline headings**: Long and nested headings scroll horizontally as soon as they exceed the sidebar width.\n- **Keep your place**: Resizing the sidebar keeps the first visible line in place as the text reflows."
    },
    {
      "version": "0.20.21",
      "tag": "v0.20.21",
      "date": "2026-10-23",
      "platforms": "Windows / Android",
      "heading": "0.20.21 — 2026-10-23 (Windows / Android)",
      "zh": "- **更宽的正文区域**：收窄左右页边距，提升默认正文列宽，长文档阅读与编辑更舒展。\n- **大纲层级显示**：侧边栏大纲在每个标题左侧显示 H1–H6 等级标识，并以主题色高亮当前章节。\n- **表格预览方式可选**：宽表格默认自动换行；可在“设置 → 编辑器 → 表格预览”中切换为横向滚动。",
      "en": "- **Wider Writing Area**: Reduced horizontal page margins and widened the default text column for long-form reading and editing.\n- **Clearer Outline Hierarchy**: Added H1–H6 level indicators next to each heading in the sidebar outline, with active section highlighting.\n- **Configurable Table Preview**: Wide tables wrap cell content by default and can be switched to horizontal scrolling in Settings → Editor → Table preview.",
      "raw": "### 中文\n\n- **更宽的正文区域**：收窄左右页边距，提升默认正文列宽，长文档阅读与编辑更舒展。\n- **大纲层级显示**：侧边栏大纲在每个标题左侧显示 H1–H6 等级标识，并以主题色高亮当前章节。\n- **表格预览方式可选**：宽表格默认自动换行；可在“设置 → 编辑器 → 表格预览”中切换为横向滚动。\n\n### English\n\n- **Wider Writing Area**: Reduced horizontal page margins and widened the default text column for long-form reading and editing.\n- **Clearer Outline Hierarchy**: Added H1–H6 level indicators next to each heading in the sidebar outline, with active section highlighting.\n- **Configurable Table Preview**: Wide tables wrap cell content by default and can be switched to horizontal scrolling in Settings → Editor → Table preview."
    },
    {
      "version": "0.20.16",
      "tag": "v0.20.16",
      "date": "2026-10-23",
      "platforms": "Windows / Android",
      "heading": "0.20.16 — 2026-10-23 (Windows / Android)",
      "zh": "- **大文档加载与编辑提速**：大幅缩短多兆级 Markdown 文档的打开与编辑响应耗时：\n  - 打开 1 MB 复杂文档耗时缩短至 **0.71 秒**；\n  - 多标签页切回大文档耗时缩短至 **0.34 秒**；\n  - 支持流畅打开与编辑 5 MB 至 10 MB 级长篇文档。\n- **长目录高速渲染**：当文档包含超过 200 个章节标题时，侧边栏大纲自动启用高速渲染，保持章节跳转、高亮与折叠流畅响应。\n- **移动端解析优化**：Android 端同步应用解析优化，提升打开大型笔记与数学公式文档的速度。",
      "en": "- **Faster Large Document Loading & Editing**: Significantly reduced load and input latency for multi-megabyte Markdown files:\n  - Opens 1 MB complex documents in **0.71 s**;\n  - Switches back to large document tabs in **0.34 s**;\n  - Smoothly handles 5 MB to 10 MB documents.\n- **Fast Large Outlines**: Documents with more than 200 headings automatically use high-speed outline rendering with smooth navigation and section folding.\n- **Mobile Parsing Improvements**: Synced parsing optimizations to Android for faster loading of long notes and math-heavy files.",
      "raw": "### 中文\n\n- **大文档加载与编辑提速**：大幅缩短多兆级 Markdown 文档的打开与编辑响应耗时：\n  - 打开 1 MB 复杂文档耗时缩短至 **0.71 秒**；\n  - 多标签页切回大文档耗时缩短至 **0.34 秒**；\n  - 支持流畅打开与编辑 5 MB 至 10 MB 级长篇文档。\n- **长目录高速渲染**：当文档包含超过 200 个章节标题时，侧边栏大纲自动启用高速渲染，保持章节跳转、高亮与折叠流畅响应。\n- **移动端解析优化**：Android 端同步应用解析优化，提升打开大型笔记与数学公式文档的速度。\n\n### English\n\n- **Faster Large Document Loading & Editing**: Significantly reduced load and input latency for multi-megabyte Markdown files:\n  - Opens 1 MB complex documents in **0.71 s**;\n  - Switches back to large document tabs in **0.34 s**;\n  - Smoothly handles 5 MB to 10 MB documents.\n- **Fast Large Outlines**: Documents with more than 200 headings automatically use high-speed outline rendering with smooth navigation and section folding.\n- **Mobile Parsing Improvements**: Synced parsing optimizations to Android for faster loading of long notes and math-heavy files."
    },
    {
      "version": "0.20.15",
      "tag": "v0.20.15",
      "date": "2026-10-22",
      "platforms": "Windows",
      "heading": "0.20.15 — 2026-10-22 (Windows)",
      "zh": "- **宽表格横向滚动**：超宽表格在编辑区和导出的 HTML 页面中支持独立横向滚动与滚动条拖拽。\n- **宽表格跨页 PDF 导出**：PDF 导出与打印自动按页面宽度缩放排版，支持单元格长文本换行，并在跨页时自动重复表头。\n- **最近打开的文件与文件夹**：欢迎页与左侧边栏新增“最近打开的文件”历史记录，支持按“全部 / 文件 / 文件夹”筛选、单条移除与一键清空。\n- **字号恢复默认按钮**：在偏好设置与导出设置中，为正文字号和代码块字号新增“恢复默认”快捷按钮。\n- **文件关联改进**：完善 Windows 安装版对 `.md` 文档的默认图标与双击打开关联。",
      "en": "- **Horizontal Scrolling for Wide Tables**: Wide tables support independent horizontal scrolling and scrollbar dragging in the editor and exported HTML files.\n- **Multi-Page PDF Table Formatting**: PDF export and printing automatically scale wide tables to page width, wrap long cell text, and repeat table headers across page breaks.\n- **Recent Files & Folders**: Added Recent Files alongside Recent Folders in the welcome view and sidebar, with All / Files / Folders filtering and one-click clear.\n- **Font Size Reset**: Added a \"Reset to default\" button for body and code block font sizes in Preferences and Export Settings.\n- **File Association Improvements**: Improved `.md` file icons and double-click open associations in the Windows installer.",
      "raw": "### 中文\n\n- **宽表格横向滚动**：超宽表格在编辑区和导出的 HTML 页面中支持独立横向滚动与滚动条拖拽。\n- **宽表格跨页 PDF 导出**：PDF 导出与打印自动按页面宽度缩放排版，支持单元格长文本换行，并在跨页时自动重复表头。\n- **最近打开的文件与文件夹**：欢迎页与左侧边栏新增“最近打开的文件”历史记录，支持按“全部 / 文件 / 文件夹”筛选、单条移除与一键清空。\n- **字号恢复默认按钮**：在偏好设置与导出设置中，为正文字号和代码块字号新增“恢复默认”快捷按钮。\n- **文件关联改进**：完善 Windows 安装版对 `.md` 文档的默认图标与双击打开关联。\n\n### English\n\n- **Horizontal Scrolling for Wide Tables**: Wide tables support independent horizontal scrolling and scrollbar dragging in the editor and exported HTML files.\n- **Multi-Page PDF Table Formatting**: PDF export and printing automatically scale wide tables to page width, wrap long cell text, and repeat table headers across page breaks.\n- **Recent Files & Folders**: Added Recent Files alongside Recent Folders in the welcome view and sidebar, with All / Files / Folders filtering and one-click clear.\n- **Font Size Reset**: Added a \"Reset to default\" button for body and code block font sizes in Preferences and Export Settings.\n- **File Association Improvements**: Improved `.md` file icons and double-click open associations in the Windows installer."
    }
  ]
};
