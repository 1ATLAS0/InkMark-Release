# InkMark 更新日志 / Release Notes

## 1.0.0 — 2026-10-27 (Windows / Android)

### 中文

InkMark 1.0.0 正式发布。

InkMark 是一款面向 Windows 与 Android 的 Markdown 编辑器，专注于文档处理性能与日常编辑体验。从随手记录到技术文档，从短篇笔记到长篇阅读，InkMark 提供即时排版、清晰导航和便捷导出，让写作与整理更加从容。

#### 功能更新

- **即时排版**：以所见即所得的方式编辑 Markdown，支持标题、列表、任务清单、引用、表格、链接与图片；也可切换源码视图，直接调整文档结构。
- **公式与图表**：支持常用数学公式，以及 `\(...\)`、`\[...\]` 形式的公式内容；结合 Mermaid 图表与代码高亮，便于编写技术说明、学习笔记和项目文档。
- **文档管理**：桌面端提供多标签页、文件夹浏览、文件夹内搜索、大纲与最近打开记录，便于组织资料、查找内容和切换文档。
- **长文档体验**：围绕大文档打开、标签切换、保存与导出持续优化，减少处理过程中的等待；桌面端打开文档与导出 PDF 时显示处理状态，并支持取消操作。
- **阅读与外观**：桌面端内置 39 款浅色与深色主题，可调整字体、字号与正文宽度；统一的图标和清晰的操作状态，让常用功能更易辨认。
- **导出与分享**：支持导出 PDF 与 HTML，适用于阅读、分享和归档；支持公式、图表排版，并针对长表格优化预览与打印布局。
- **本地写作**：无需注册账号即可编辑本地文档，支持自动保存设置，文件可独立管理和备份。
- **应用内更新**：Windows 与 Android 均可检查和下载新版本，查看下载进度、取消下载，并在确认后安装；下载期间可继续编辑。
- **双端支持**：Windows 提供安装版与免安装便携版；Android 提供针对触控操作优化的编辑界面，支持从其他应用打开文档及保存到设备。

#### 问题修复

- **公式兼容**：改进反斜杠公式的识别与保存，修复 Android 部分公式预览与导出不一致，以及公式设置重启后未能保留的问题。
- **大纲滚动**：长标题可横向滚动查看，调整侧栏宽度后仍能访问完整内容。
- **阅读位置**：调整侧栏宽度或使用 Ctrl + 鼠标滚轮缩放时，保持当前阅读位置，减少内容跳动。
- **主题辨识**：提高表格边框与侧栏次要文字的对比度，主题卡片可显示完整名称。
- **侧栏布局**：改进窄侧栏中的按钮与筛选项排列，减少拥挤和内容溢出。
- **更新体验**：下载提示不再遮挡编辑区域；改进更新检查失败时的重试与备用连接处理。
- **任务栏分组**：Windows 下使用独立的任务栏分组，便于识别和切换 InkMark 窗口。

欢迎使用 InkMark 1.0。后续版本将继续围绕性能、稳定性与易用性改进。

[官方网站](https://1atlas0.github.io/InkMark-Release/) · [发布仓库](https://github.com/1ATLAS0/InkMark-Release)

### English

Introducing InkMark 1.0.0, the first stable release.

InkMark is a Markdown editor for Windows and Android, with a focus on performance and ease of use. From quick notes to technical documentation and long-form reading, it brings together live formatting, clear navigation and convenient export to make writing and organizing documents easier.

#### Feature updates

- **Live formatting**: Edit Markdown in a WYSIWYG view with headings, lists, task lists, quotes, tables, links and images, or switch to source view for direct control over the document structure.
- **Math and diagrams**: Work with common mathematical notation, including `\(...\)` and `\[...\]` delimiters. Mermaid diagrams and syntax-highlighted code blocks support technical explanations, study notes and project documentation.
- **Document management**: The desktop app provides multiple tabs, folder browsing, search within folders, an outline and recent documents to help organize material, find content and move between files.
- **Long-document performance**: Improvements to document opening, tab switching, saving and export reduce waiting when working with large files. On desktop, document opening and PDF export show activity indicators and support cancellation.
- **Reading and appearance**: Choose from 39 light and dark themes on desktop, with adjustable fonts, text size and content width. Consistent icons and clear control states make everyday actions easier to identify.
- **Export and sharing**: Export to PDF or HTML for reading, sharing and archiving, with support for mathematical notation and diagrams, plus improved preview and print layouts for long tables.
- **Local writing**: Edit local documents without creating an account, configure automatic saving, and manage or back up files independently.
- **In-app updates**: Windows and Android can check for and download new versions, display download progress, cancel downloads and request confirmation before installation. Editing remains available during downloads.
- **Desktop and mobile**: Windows offers an installer and a portable edition. Android provides an interface adapted for touch, with support for opening documents from other apps and saving them to the device.

#### Bug fixes

- **Math compatibility**: Improved recognition and preservation of backslash-delimited formulas. Fixed inconsistent formula rendering between Android preview and export, and a math preference that was not retained after restarting.
- **Outline scrolling**: Long headings can be read by scrolling horizontally, and remain fully accessible after resizing the sidebar.
- **Reading position**: Resizing the sidebar or zooming with Ctrl + mouse wheel preserves the current reading position and reduces unexpected movement.
- **Theme readability**: Improved contrast for table borders and secondary sidebar text. Theme cards can now show their full names.
- **Sidebar layout**: Improved button and filter layouts in narrow sidebars to reduce crowding and overflow.
- **Update experience**: Download notifications no longer obscure the editor. Improved retries and fallback connections when update checks fail.
- **Taskbar grouping**: InkMark windows use their own taskbar group on Windows for easier identification and switching.

Welcome to InkMark 1.0. Future releases will continue to improve performance, stability and usability.

[Official website](https://1atlas0.github.io/InkMark-Release/) · [Release repository](https://github.com/1ATLAS0/InkMark-Release)
