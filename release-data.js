window.__INKMARK_RELEASE_DATA__ = {
  "generatedAt": "2026-11-05T01:25:52.903Z",
  "brand": {
    "name": "InkMark",
    "repo": "1ATLAS0/InkMark-Release",
    "repoUrl": "https://github.com/1ATLAS0/InkMark-Release",
    "releasesUrl": "https://github.com/1ATLAS0/InkMark-Release/releases",
    "latestApiUrl": "https://api.github.com/repos/1ATLAS0/InkMark-Release/releases/latest",
    "allReleasesApiUrl": "https://api.github.com/repos/1ATLAS0/InkMark-Release/releases"
  },
  "latest": {
    "version": "1.1.0",
    "tag": "v1.1.0",
    "releaseDate": "2026-11-05",
    "releaseUrl": "https://github.com/1ATLAS0/InkMark-Release/releases/tag/v1.1.0",
    "assets": [
      {
        "name": "inkmark-win-x64-1.1.0-setup.exe",
        "size": 0,
        "sizeFormatted": "GitHub Release",
        "sha256": "",
        "downloadUrl": "https://github.com/1ATLAS0/InkMark-Release/releases/download/v1.1.0/inkmark-win-x64-1.1.0-setup.exe",
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
        "name": "inkmark-win-x64-1.1.0.zip",
        "size": 0,
        "sizeFormatted": "GitHub Release",
        "sha256": "",
        "downloadUrl": "https://github.com/1ATLAS0/InkMark-Release/releases/download/v1.1.0/inkmark-win-x64-1.1.0.zip",
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
        "name": "InkMark-v1.1.0-android.apk",
        "size": 0,
        "sizeFormatted": "GitHub Release",
        "sha256": "",
        "downloadUrl": "https://github.com/1ATLAS0/InkMark-Release/releases/download/v1.1.0/InkMark-v1.1.0-android.apk",
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
    "releaseNotesMd": "# InkMark 1.1.0\n\n## 1.1.0 — 2026-10-27 (Windows / Android)\n\n### 中文\n\n#### 功能更新\n\n- **远程文档**：Windows 支持通过 SSH 连接 Linux，浏览、打开、编辑并保存远程 Markdown 文档；支持密码与私钥登录，以及连接的添加、编辑和移除。\n- **统一打开入口**：桌面端“打开文件夹”现在同时提供本地文件夹与已保存的远程连接；选择远程连接后会连接并直接进入远程目录。\n- **默认页面**：启动后直接显示最近文档与打开入口，不再自动创建空白文档。\n- **远程文件夹工作区**：在远程面板选择目录并点击“打开此文件夹”，文件侧栏会以连接名称显示该远程目录，可像本地文件夹一样展开、浏览和打开文档；关闭文件夹不会断开连接。\n- **远程搜索**：打开远程文件夹后，可直接在搜索侧栏查找其中的 Markdown 内容，点击结果打开并定位到对应位置。\n- **远程最近记录**：最近打开同时保留远程文件与文件夹，远程文件夹会恢复准确目录；点击会自动重连并打开。\n- **关闭文件夹**：本地与远程文件夹均可一键关闭，回到打开入口。\n- **内网使用**：远程连接所需组件随应用提供，可在内网环境中直接使用，无需联网下载额外组件。\n- **全新图标**：采用融合文档与笔尖的「墨页」图标，统一桌面端、移动端与官网的品牌形象。\n\n#### 问题修复\n\n- **保存提示**：连续保存失败时显示最新原因，保存成功后清除过期提示。\n- **标签页切换**：回到之前阅读的标签页时直接停在原位置，不再从第一行闪烁到目标位置。\n- **按钮悬停**：修复部分环境下“打开文件 / 打开文件夹”按钮悬停时背景变白的问题。\n- **最近列表**：切换“全部 / 文件 / 文件夹”时页面顶部保持固定，不再上下跳动。\n- **新建文件按钮**：悬停时文字与背景保持清晰对比。\n\n### English\n\n#### Feature updates\n\n- **Remote documents**: Connect to Linux over SSH on Windows to browse, open, edit and save Markdown files. Sign in with a password or private key, and add, edit or remove saved connections.\n- **One open-folder entry**: The desktop Open Folder button now offers local folders and saved remote connections; choosing a remote connection connects and opens its directory directly.\n- **Landing page**: Starting InkMark now shows recent documents and open actions instead of creating a blank document automatically.\n- **Remote folder workspace**: Choose a directory in the Remote panel and select Open this folder. The Files sidebar shows that remote directory under its connection name with the same expand, browse and open behaviour as a local folder. Closing the folder does not disconnect.\n- **Remote search**: Search Markdown content inside the open remote folder from the search sidebar, then click a result to open it at the matching position.\n- **Remote recent history**: Recent items include remote files and folders, with remote folders restoring the exact directory; selecting one reconnects automatically and opens it.\n- **Close folder**: Local and remote folders can both be closed to return to the open actions.\n- **Intranet access**: All components required for remote connections are included with the app. No Internet access or additional component downloads are required.\n- **New app icon**: A document and pen nib form the new Inkpage icon, bringing a consistent identity to desktop, mobile and the website.\n\n#### Bug fixes\n\n- **Save feedback**: Show the latest cause when consecutive saves fail, and clear outdated errors after a successful save.\n- **Tab switching**: Returning to a tab now lands at the previous reading position instead of flashing there from the first line.\n- **Button hover**: Fixed the Open File / Open Folder buttons turning white on hover in some environments.\n- **Recent list**: The top of the landing page stays fixed when switching recent filters.\n- **New File button**: Text and background keep clear contrast on hover.\n\n",
    "sha256SumsRaw": ""
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
      "version": "1.1.0",
      "tag": "v1.1.0",
      "date": "",
      "platforms": "Windows / Android",
      "heading": "1.1.0 — 待发布 / Unreleased (Windows / Android)",
      "zh": "#### 功能更新\n\n- **远程文档**：Windows 支持通过 SSH 连接 Linux，浏览、打开、编辑并保存远程 Markdown 文档；支持密码与私钥登录，以及连接的添加、编辑和移除。\n- **统一打开入口**：桌面端“打开文件夹”现在同时提供本地文件夹与已保存的远程连接；选择远程连接后会连接并直接进入远程目录。\n- **默认页面**：启动后直接显示最近文档与打开入口，不再自动创建空白文档。\n- **远程文件夹工作区**：在远程面板选择目录并点击“打开此文件夹”，文件侧栏会以连接名称显示该远程目录，可像本地文件夹一样展开、浏览和打开文档；关闭文件夹不会断开连接。\n- **远程搜索**：打开远程文件夹后，可直接在搜索侧栏查找其中的 Markdown 内容，点击结果打开并定位到对应位置。\n- **远程最近记录**：最近打开同时保留远程文件与文件夹，远程文件夹会恢复准确目录；点击会自动重连并打开。\n- **关闭文件夹**：本地与远程文件夹均可一键关闭，回到打开入口。\n- **内网使用**：远程连接所需组件随应用提供，可在内网环境中直接使用，无需联网下载额外组件。\n- **全新图标**：采用融合文档与笔尖的「墨页」图标，统一桌面端、移动端与官网的品牌形象。\n\n#### 问题修复\n\n- **保存提示**：连续保存失败时显示最新原因，保存成功后清除过期提示。\n- **标签页切换**：回到之前阅读的标签页时直接停在原位置，不再从第一行闪烁到目标位置。\n- **按钮悬停**：修复部分环境下“打开文件 / 打开文件夹”按钮悬停时背景变白的问题。\n- **最近列表**：切换“全部 / 文件 / 文件夹”时页面顶部保持固定，不再上下跳动。\n- **新建文件按钮**：悬停时文字与背景保持清晰对比，不再变得难以辨认。",
      "en": "#### Feature updates\n\n- **Remote documents**: Connect to Linux over SSH on Windows to browse, open, edit and save Markdown files. Sign in with a password or private key, and add, edit or remove saved connections.\n- **One open-folder entry**: The desktop Open Folder button now offers local folders and saved remote connections; choosing a remote connection connects and opens its directory directly.\n- **Landing page**: Starting InkMark now shows recent documents and open actions instead of creating a blank document automatically.\n- **Remote folder workspace**: Choose a directory in the Remote panel and select Open this folder. The Files sidebar shows that remote directory under its connection name with the same expand, browse and open behaviour as a local folder. Closing the folder does not disconnect.\n- **Remote search**: Search Markdown content inside the open remote folder from the search sidebar, then click a result to open it at the matching position.\n- **Remote recent history**: Recent items include remote files and folders, with remote folders restoring the exact directory; selecting one reconnects automatically and opens it.\n- **Close folder**: Local and remote folders can both be closed to return to the open actions.\n- **Intranet access**: All components required for remote connections are included with the app. No Internet access or additional component downloads are required.\n- **New app icon**: A document and pen nib form the new Inkpage icon, bringing a consistent identity to desktop, mobile and the website.\n\n#### Bug fixes\n\n- **Save feedback**: Show the latest cause when consecutive saves fail, and clear outdated errors after a successful save.\n- **Tab switching**: Returning to a tab now lands at the previous reading position instead of flashing there from the first line.\n- **Button hover**: Fixed the Open File / Open Folder buttons turning white on hover in some environments.\n- **Recent list**: The top of the landing page stays fixed when switching between All, Files and Folders, so the buttons no longer jump.\n- **New File button**: Text and background keep clear contrast on hover.",
      "raw": "### 中文\n\n#### 功能更新\n\n- **远程文档**：Windows 支持通过 SSH 连接 Linux，浏览、打开、编辑并保存远程 Markdown 文档；支持密码与私钥登录，以及连接的添加、编辑和移除。\n- **统一打开入口**：桌面端“打开文件夹”现在同时提供本地文件夹与已保存的远程连接；选择远程连接后会连接并直接进入远程目录。\n- **默认页面**：启动后直接显示最近文档与打开入口，不再自动创建空白文档。\n- **远程文件夹工作区**：在远程面板选择目录并点击“打开此文件夹”，文件侧栏会以连接名称显示该远程目录，可像本地文件夹一样展开、浏览和打开文档；关闭文件夹不会断开连接。\n- **远程搜索**：打开远程文件夹后，可直接在搜索侧栏查找其中的 Markdown 内容，点击结果打开并定位到对应位置。\n- **远程最近记录**：最近打开同时保留远程文件与文件夹，远程文件夹会恢复准确目录；点击会自动重连并打开。\n- **关闭文件夹**：本地与远程文件夹均可一键关闭，回到打开入口。\n- **内网使用**：远程连接所需组件随应用提供，可在内网环境中直接使用，无需联网下载额外组件。\n- **全新图标**：采用融合文档与笔尖的「墨页」图标，统一桌面端、移动端与官网的品牌形象。\n\n#### 问题修复\n\n- **保存提示**：连续保存失败时显示最新原因，保存成功后清除过期提示。\n- **标签页切换**：回到之前阅读的标签页时直接停在原位置，不再从第一行闪烁到目标位置。\n- **按钮悬停**：修复部分环境下“打开文件 / 打开文件夹”按钮悬停时背景变白的问题。\n- **最近列表**：切换“全部 / 文件 / 文件夹”时页面顶部保持固定，不再上下跳动。\n- **新建文件按钮**：悬停时文字与背景保持清晰对比，不再变得难以辨认。\n\n### English\n\n#### Feature updates\n\n- **Remote documents**: Connect to Linux over SSH on Windows to browse, open, edit and save Markdown files. Sign in with a password or private key, and add, edit or remove saved connections.\n- **One open-folder entry**: The desktop Open Folder button now offers local folders and saved remote connections; choosing a remote connection connects and opens its directory directly.\n- **Landing page**: Starting InkMark now shows recent documents and open actions instead of creating a blank document automatically.\n- **Remote folder workspace**: Choose a directory in the Remote panel and select Open this folder. The Files sidebar shows that remote directory under its connection name with the same expand, browse and open behaviour as a local folder. Closing the folder does not disconnect.\n- **Remote search**: Search Markdown content inside the open remote folder from the search sidebar, then click a result to open it at the matching position.\n- **Remote recent history**: Recent items include remote files and folders, with remote folders restoring the exact directory; selecting one reconnects automatically and opens it.\n- **Close folder**: Local and remote folders can both be closed to return to the open actions.\n- **Intranet access**: All components required for remote connections are included with the app. No Internet access or additional component downloads are required.\n- **New app icon**: A document and pen nib form the new Inkpage icon, bringing a consistent identity to desktop, mobile and the website.\n\n#### Bug fixes\n\n- **Save feedback**: Show the latest cause when consecutive saves fail, and clear outdated errors after a successful save.\n- **Tab switching**: Returning to a tab now lands at the previous reading position instead of flashing there from the first line.\n- **Button hover**: Fixed the Open File / Open Folder buttons turning white on hover in some environments.\n- **Recent list**: The top of the landing page stays fixed when switching between All, Files and Folders, so the buttons no longer jump.\n- **New File button**: Text and background keep clear contrast on hover."
    },
    {
      "version": "1.0.0",
      "tag": "v1.0.0",
      "date": "2026-10-27",
      "platforms": "Windows / Android",
      "heading": "1.0.0 — 2026-10-27 (Windows / Android)",
      "zh": "InkMark 1.0.0 正式发布。\n\nInkMark 是一款面向 Windows 与 Android 的 Markdown 编辑器，专注于文档处理性能与日常编辑体验。从随手记录到技术文档，从短篇笔记到长篇阅读，InkMark 提供即时排版、清晰导航和便捷导出，让写作与整理更加从容。\n\n#### 功能更新\n\n- **即时排版**：以所见即所得的方式编辑 Markdown，支持标题、列表、任务清单、引用、表格、链接与图片；也可切换源码视图，直接调整文档结构。\n- **公式与图表**：支持常用数学公式，以及 `\\(...\\)`、`\\[...\\]` 形式的公式内容；结合 Mermaid 图表与代码高亮，便于编写技术说明、学习笔记和项目文档。\n- **文档管理**：桌面端提供多标签页、文件夹浏览、文件夹内搜索、大纲与最近打开记录，便于组织资料、查找内容和切换文档。\n- **长文档体验**：围绕大文档打开、标签切换、保存与导出持续优化，减少处理过程中的等待；桌面端打开文档与导出 PDF 时显示处理状态，并支持取消操作。\n- **阅读与外观**：桌面端内置 39 款浅色与深色主题，可调整字体、字号与正文宽度；统一的图标和清晰的操作状态，让常用功能更易辨认。\n- **导出与分享**：支持导出 PDF 与 HTML，适用于阅读、分享和归档；支持公式、图表排版，并针对长表格优化预览与打印布局。\n- **本地写作**：无需注册账号即可编辑本地文档，支持自动保存设置，文件可独立管理和备份。\n- **应用内更新**：Windows 与 Android 均可检查和下载新版本，查看下载进度、取消下载，并在确认后安装；下载期间可继续编辑。\n- **双端支持**：Windows 提供安装版与免安装便携版；Android 提供针对触控操作优化的编辑界面，支持从其他应用打开文档及保存到设备。\n\n#### 问题修复\n\n- **公式兼容**：改进反斜杠公式的识别与保存，修复 Android 部分公式预览与导出不一致，以及公式设置重启后未能保留的问题。\n- **大纲滚动**：长标题可横向滚动查看，调整侧栏宽度后仍能访问完整内容。\n- **阅读位置**：调整侧栏宽度或使用 Ctrl + 鼠标滚轮缩放时，保持当前阅读位置，减少内容跳动。\n- **主题辨识**：提高表格边框与侧栏次要文字的对比度，主题卡片可显示完整名称。\n- **侧栏布局**：改进窄侧栏中的按钮与筛选项排列，减少拥挤和内容溢出。\n- **更新体验**：下载提示不再遮挡编辑区域；改进更新检查失败时的重试与备用连接处理。\n- **任务栏分组**：Windows 下使用独立的任务栏分组，便于识别和切换 InkMark 窗口。\n\n欢迎使用 InkMark 1.0。后续版本将继续围绕性能、稳定性与易用性改进。\n\n[官方网站](https://1atlas0.github.io/InkMark-Release/) · [发布仓库](https://github.com/1ATLAS0/InkMark-Release)",
      "en": "Introducing InkMark 1.0.0, the first stable release.\n\nInkMark is a Markdown editor for Windows and Android, with a focus on performance and ease of use. From quick notes to technical documentation and long-form reading, it brings together live formatting, clear navigation and convenient export to make writing and organizing documents easier.\n\n#### Feature updates\n\n- **Live formatting**: Edit Markdown in a WYSIWYG view with headings, lists, task lists, quotes, tables, links and images, or switch to source view for direct control over the document structure.\n- **Math and diagrams**: Work with common mathematical notation, including `\\(...\\)` and `\\[...\\]` delimiters. Mermaid diagrams and syntax-highlighted code blocks support technical explanations, study notes and project documentation.\n- **Document management**: The desktop app provides multiple tabs, folder browsing, search within folders, an outline and recent documents to help organize material, find content and move between files.\n- **Long-document performance**: Improvements to document opening, tab switching, saving and export reduce waiting when working with large files. On desktop, document opening and PDF export show activity indicators and support cancellation.\n- **Reading and appearance**: Choose from 39 light and dark themes on desktop, with adjustable fonts, text size and content width. Consistent icons and clear control states make everyday actions easier to identify.\n- **Export and sharing**: Export to PDF or HTML for reading, sharing and archiving, with support for mathematical notation and diagrams, plus improved preview and print layouts for long tables.\n- **Local writing**: Edit local documents without creating an account, configure automatic saving, and manage or back up files independently.\n- **In-app updates**: Windows and Android can check for and download new versions, display download progress, cancel downloads and request confirmation before installation. Editing remains available during downloads.\n- **Desktop and mobile**: Windows offers an installer and a portable edition. Android provides an interface adapted for touch, with support for opening documents from other apps and saving them to the device.\n\n#### Bug fixes\n\n- **Math compatibility**: Improved recognition and preservation of backslash-delimited formulas. Fixed inconsistent formula rendering between Android preview and export, and a math preference that was not retained after restarting.\n- **Outline scrolling**: Long headings can be read by scrolling horizontally, and remain fully accessible after resizing the sidebar.\n- **Reading position**: Resizing the sidebar or zooming with Ctrl + mouse wheel preserves the current reading position and reduces unexpected movement.\n- **Theme readability**: Improved contrast for table borders and secondary sidebar text. Theme cards can now show their full names.\n- **Sidebar layout**: Improved button and filter layouts in narrow sidebars to reduce crowding and overflow.\n- **Update experience**: Download notifications no longer obscure the editor. Improved retries and fallback connections when update checks fail.\n- **Taskbar grouping**: InkMark windows use their own taskbar group on Windows for easier identification and switching.\n\nWelcome to InkMark 1.0. Future releases will continue to improve performance, stability and usability.\n\n[Official website](https://1atlas0.github.io/InkMark-Release/) · [Release repository](https://github.com/1ATLAS0/InkMark-Release)",
      "raw": "### 中文\n\nInkMark 1.0.0 正式发布。\n\nInkMark 是一款面向 Windows 与 Android 的 Markdown 编辑器，专注于文档处理性能与日常编辑体验。从随手记录到技术文档，从短篇笔记到长篇阅读，InkMark 提供即时排版、清晰导航和便捷导出，让写作与整理更加从容。\n\n#### 功能更新\n\n- **即时排版**：以所见即所得的方式编辑 Markdown，支持标题、列表、任务清单、引用、表格、链接与图片；也可切换源码视图，直接调整文档结构。\n- **公式与图表**：支持常用数学公式，以及 `\\(...\\)`、`\\[...\\]` 形式的公式内容；结合 Mermaid 图表与代码高亮，便于编写技术说明、学习笔记和项目文档。\n- **文档管理**：桌面端提供多标签页、文件夹浏览、文件夹内搜索、大纲与最近打开记录，便于组织资料、查找内容和切换文档。\n- **长文档体验**：围绕大文档打开、标签切换、保存与导出持续优化，减少处理过程中的等待；桌面端打开文档与导出 PDF 时显示处理状态，并支持取消操作。\n- **阅读与外观**：桌面端内置 39 款浅色与深色主题，可调整字体、字号与正文宽度；统一的图标和清晰的操作状态，让常用功能更易辨认。\n- **导出与分享**：支持导出 PDF 与 HTML，适用于阅读、分享和归档；支持公式、图表排版，并针对长表格优化预览与打印布局。\n- **本地写作**：无需注册账号即可编辑本地文档，支持自动保存设置，文件可独立管理和备份。\n- **应用内更新**：Windows 与 Android 均可检查和下载新版本，查看下载进度、取消下载，并在确认后安装；下载期间可继续编辑。\n- **双端支持**：Windows 提供安装版与免安装便携版；Android 提供针对触控操作优化的编辑界面，支持从其他应用打开文档及保存到设备。\n\n#### 问题修复\n\n- **公式兼容**：改进反斜杠公式的识别与保存，修复 Android 部分公式预览与导出不一致，以及公式设置重启后未能保留的问题。\n- **大纲滚动**：长标题可横向滚动查看，调整侧栏宽度后仍能访问完整内容。\n- **阅读位置**：调整侧栏宽度或使用 Ctrl + 鼠标滚轮缩放时，保持当前阅读位置，减少内容跳动。\n- **主题辨识**：提高表格边框与侧栏次要文字的对比度，主题卡片可显示完整名称。\n- **侧栏布局**：改进窄侧栏中的按钮与筛选项排列，减少拥挤和内容溢出。\n- **更新体验**：下载提示不再遮挡编辑区域；改进更新检查失败时的重试与备用连接处理。\n- **任务栏分组**：Windows 下使用独立的任务栏分组，便于识别和切换 InkMark 窗口。\n\n欢迎使用 InkMark 1.0。后续版本将继续围绕性能、稳定性与易用性改进。\n\n[官方网站](https://1atlas0.github.io/InkMark-Release/) · [发布仓库](https://github.com/1ATLAS0/InkMark-Release)\n\n### English\n\nIntroducing InkMark 1.0.0, the first stable release.\n\nInkMark is a Markdown editor for Windows and Android, with a focus on performance and ease of use. From quick notes to technical documentation and long-form reading, it brings together live formatting, clear navigation and convenient export to make writing and organizing documents easier.\n\n#### Feature updates\n\n- **Live formatting**: Edit Markdown in a WYSIWYG view with headings, lists, task lists, quotes, tables, links and images, or switch to source view for direct control over the document structure.\n- **Math and diagrams**: Work with common mathematical notation, including `\\(...\\)` and `\\[...\\]` delimiters. Mermaid diagrams and syntax-highlighted code blocks support technical explanations, study notes and project documentation.\n- **Document management**: The desktop app provides multiple tabs, folder browsing, search within folders, an outline and recent documents to help organize material, find content and move between files.\n- **Long-document performance**: Improvements to document opening, tab switching, saving and export reduce waiting when working with large files. On desktop, document opening and PDF export show activity indicators and support cancellation.\n- **Reading and appearance**: Choose from 39 light and dark themes on desktop, with adjustable fonts, text size and content width. Consistent icons and clear control states make everyday actions easier to identify.\n- **Export and sharing**: Export to PDF or HTML for reading, sharing and archiving, with support for mathematical notation and diagrams, plus improved preview and print layouts for long tables.\n- **Local writing**: Edit local documents without creating an account, configure automatic saving, and manage or back up files independently.\n- **In-app updates**: Windows and Android can check for and download new versions, display download progress, cancel downloads and request confirmation before installation. Editing remains available during downloads.\n- **Desktop and mobile**: Windows offers an installer and a portable edition. Android provides an interface adapted for touch, with support for opening documents from other apps and saving them to the device.\n\n#### Bug fixes\n\n- **Math compatibility**: Improved recognition and preservation of backslash-delimited formulas. Fixed inconsistent formula rendering between Android preview and export, and a math preference that was not retained after restarting.\n- **Outline scrolling**: Long headings can be read by scrolling horizontally, and remain fully accessible after resizing the sidebar.\n- **Reading position**: Resizing the sidebar or zooming with Ctrl + mouse wheel preserves the current reading position and reduces unexpected movement.\n- **Theme readability**: Improved contrast for table borders and secondary sidebar text. Theme cards can now show their full names.\n- **Sidebar layout**: Improved button and filter layouts in narrow sidebars to reduce crowding and overflow.\n- **Update experience**: Download notifications no longer obscure the editor. Improved retries and fallback connections when update checks fail.\n- **Taskbar grouping**: InkMark windows use their own taskbar group on Windows for easier identification and switching.\n\nWelcome to InkMark 1.0. Future releases will continue to improve performance, stability and usability.\n\n[Official website](https://1atlas0.github.io/InkMark-Release/) · [Release repository](https://github.com/1ATLAS0/InkMark-Release)"
    }
  ]
};
