# InkMark 更新日志 / Release Notes

## 0.20.23 — 2026-10-24 (Windows / Android)

### 中文

#### 功能更新

- **安装选项**：Windows 安装时可勾选文件关联，默认启用，并记住上次选择。

#### 问题修复

- **安装完成后启动**：修复勾选“运行 InkMark”后点击“完成”，安装窗口偶尔长时间无响应的问题。
- **后台下载更新**：修复下载更新时无法编辑文档的问题，下载完成后也不会打断输入。
- **检查更新入口**：恢复 Windows“帮助”菜单中的“检查更新”，安装版与便携版均可使用。
- **中文安装界面**：补全 Windows 安装程序的中文提示，修复中文显示乱码。
- **缩放阅读位置**：使用 Ctrl + 鼠标滚轮缩放时保留当前首行，避免正文跳动。

### English

#### Feature updates

- **Installation options**: Windows setup offers a file association checkbox, enabled by default, and remembers your choice.

#### Bug fixes

- **Launch after installation**: Fixed setup occasionally becoming unresponsive when finishing with “Run InkMark” selected.
- **Background update downloads**: Fixed editing being blocked during downloads; completion no longer interrupts typing.
- **Check for updates**: Restored the Help menu entry in both installed and portable Windows builds.
- **Chinese setup interface**: Completed Chinese translations in Windows setup and fixed garbled text.
- **Reading position during zoom**: Ctrl + mouse wheel zoom preserves the first visible line to prevent text from jumping.

## 0.20.22 — 2026-10-24 (Windows / Android)

### 中文

#### 功能更新

- **应用内更新**：Windows 与 Android 自动检查新版本，可查看下载进度、取消下载，并在确认后安装。

#### 问题修复

- **大纲完整滚动**：长标题超出侧栏时即可横向滚动，多级标题也能完整查看。
- **保持阅读位置**：调整侧栏宽度时保留当前首行，减少重新排版造成的跳动。

### English

#### Feature updates

- **In-app updates**: Windows and Android check for new versions automatically, with download progress, cancellation and installation confirmation.

#### Bug fixes

- **Complete outline headings**: Long and nested headings scroll horizontally as soon as they exceed the sidebar width.
- **Keep your place**: Resizing the sidebar keeps the first visible line in place as the text reflows.

## 0.20.21 — 2026-10-23 (Windows / Android)

### 中文

- **更宽的正文区域**：收窄左右页边距，提升默认正文列宽，长文档阅读与编辑更舒展。
- **大纲层级显示**：侧边栏大纲在每个标题左侧显示 H1–H6 等级标识，并以主题色高亮当前章节。
- **表格预览方式可选**：宽表格默认自动换行；可在“设置 → 编辑器 → 表格预览”中切换为横向滚动。

### English

- **Wider Writing Area**: Reduced horizontal page margins and widened the default text column for long-form reading and editing.
- **Clearer Outline Hierarchy**: Added H1–H6 level indicators next to each heading in the sidebar outline, with active section highlighting.
- **Configurable Table Preview**: Wide tables wrap cell content by default and can be switched to horizontal scrolling in Settings → Editor → Table preview.


## 0.20.16 — 2026-10-23 (Windows / Android)

### 中文

- **大文档加载与编辑提速**：大幅缩短多兆级 Markdown 文档的打开与编辑响应耗时：
  - 打开 1 MB 复杂文档耗时缩短至 **0.71 秒**；
  - 多标签页切回大文档耗时缩短至 **0.34 秒**；
  - 支持流畅打开与编辑 5 MB 至 10 MB 级长篇文档。
- **长目录高速渲染**：当文档包含超过 200 个章节标题时，侧边栏大纲自动启用高速渲染，保持章节跳转、高亮与折叠流畅响应。
- **移动端解析优化**：Android 端同步应用解析优化，提升打开大型笔记与数学公式文档的速度。

### English

- **Faster Large Document Loading & Editing**: Significantly reduced load and input latency for multi-megabyte Markdown files:
  - Opens 1 MB complex documents in **0.71 s**;
  - Switches back to large document tabs in **0.34 s**;
  - Smoothly handles 5 MB to 10 MB documents.
- **Fast Large Outlines**: Documents with more than 200 headings automatically use high-speed outline rendering with smooth navigation and section folding.
- **Mobile Parsing Improvements**: Synced parsing optimizations to Android for faster loading of long notes and math-heavy files.


## 0.20.15 — 2026-10-22 (Windows)

### 中文

- **宽表格横向滚动**：超宽表格在编辑区和导出的 HTML 页面中支持独立横向滚动与滚动条拖拽。
- **宽表格跨页 PDF 导出**：PDF 导出与打印自动按页面宽度缩放排版，支持单元格长文本换行，并在跨页时自动重复表头。
- **最近打开的文件与文件夹**：欢迎页与左侧边栏新增“最近打开的文件”历史记录，支持按“全部 / 文件 / 文件夹”筛选、单条移除与一键清空。
- **字号恢复默认按钮**：在偏好设置与导出设置中，为正文字号和代码块字号新增“恢复默认”快捷按钮。
- **文件关联改进**：完善 Windows 安装版对 `.md` 文档的默认图标与双击打开关联。

### English

- **Horizontal Scrolling for Wide Tables**: Wide tables support independent horizontal scrolling and scrollbar dragging in the editor and exported HTML files.
- **Multi-Page PDF Table Formatting**: PDF export and printing automatically scale wide tables to page width, wrap long cell text, and repeat table headers across page breaks.
- **Recent Files & Folders**: Added Recent Files alongside Recent Folders in the welcome view and sidebar, with All / Files / Folders filtering and one-click clear.
- **Font Size Reset**: Added a "Reset to default" button for body and code block font sizes in Preferences and Export Settings.
- **File Association Improvements**: Improved `.md` file icons and double-click open associations in the Windows installer.
