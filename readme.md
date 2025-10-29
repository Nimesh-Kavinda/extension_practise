# 🚀 Chrome Extensions Practice Projects

A collection of Chrome extensions built to learn and practice Chrome Extension development using Manifest V3.

![Chrome Extensions](https://img.shields.io/badge/Chrome-Extensions-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-green?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📚 Table of Contents

- [Projects Overview](#-projects-overview)
- [Getting Started](#-getting-started)
- [Project Details](#-project-details)
- [Key Learnings](#-key-learnings)
- [Resources](#-resources)

---

## 🎯 Projects Overview

This repository contains **5 Chrome extensions** demonstrating different Chrome Extension APIs and concepts:

| #   | Project                                           | Description                     | Key APIs                          |
| --- | ------------------------------------------------- | ------------------------------- | --------------------------------- |
| 1   | [👋 Hello World](#1--hello-world)                 | Basic extension with popup      | Action API                        |
| 2   | [🎯 Focus Mode](#2--focus-mode)                   | Toggle distraction-free reading | Scripting API, CSS Injection      |
| 3   | [⏱️ Reading Time](#3-️-reading-time)              | Displays estimated reading time | Content Scripts, DOM Manipulation |
| 4   | [📑 Tabs Manager](#4--tabs-manager)               | Organize and group tabs         | Tabs API, Tab Groups API          |
| 5   | [🔍 Quick API Reference](#5--quick-api-reference) | Omnibox search for Chrome APIs  | Omnibox API, Service Workers      |

---

## 🚀 Getting Started

### Prerequisites

- Google Chrome browser (version 102+)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone or download this repository**

   ```bash
   git clone <your-repo-url>
   cd extension_practise
   ```

2. **Load extension in Chrome**

   - Open Chrome and navigate to `chrome://extensions/`
   - Enable **Developer mode** (toggle in top-right corner)
   - Click **Load unpacked**
   - Select the folder of the extension you want to test

3. **Test the extension**
   - Each extension has specific usage instructions (see below)

---

## 📖 Project Details

### 1. 👋 Hello World

**Directory:** `hello_world/`

A minimal Chrome extension to understand the basic structure and popup functionality.

#### Features

- ✅ Simple popup interface
- ✅ Basic manifest configuration
- ✅ Introduction to extension structure

#### File Structure

```
hello_world/
├── manifest.json          # Extension configuration
├── hello.html            # Popup HTML
├── popup.js              # Popup script
└── hello_extension.png   # Extension icon
```

#### Usage

Click the extension icon in the toolbar to see the "Hello Extensions" popup.

#### Key Concepts

- Manifest V3 basics
- Action API (`default_popup`)
- Extension icon configuration

---

### 2. 🎯 Focus Mode

**Directory:** `focus-mode/`

Enable a distraction-free reading experience on Chrome's official documentation pages by injecting custom CSS.

#### Features

- ✅ Toggle focus mode ON/OFF
- ✅ Dynamic CSS injection
- ✅ Badge text to show current state
- ✅ Works on Chrome Extension and Web Store docs

#### File Structure

```
focus-mode/
├── manifest.json       # Extension configuration
├── background.js       # Service worker (background logic)
├── focus-mode.css      # Custom CSS for focus mode
└── images/             # Extension icons
    ├── icon-16.png
    ├── icon-32.png
    ├── icon-48.png
    └── icon-128.png
```

#### Usage

1. Navigate to `https://developer.chrome.com/docs/extensions` or `https://developer.chrome.com/docs/webstore`
2. Click the extension icon to toggle focus mode
3. Badge shows "ON" or "OFF" status

#### Key Concepts

- Service Workers (`background.service_worker`)
- Scripting API (`chrome.scripting.insertCSS` / `removeCSS`)
- Action API (`chrome.action.onClicked`, `setBadgeText`)
- Permissions: `activeTab`, `scripting`

---

### 3. ⏱️ Reading Time

**Directory:** `reading_time/`

Automatically calculates and displays the estimated reading time for articles on Chrome documentation pages.

#### Features

- ✅ Calculates reading time based on word count
- ✅ Displays time estimate with emoji (⏱️)
- ✅ Works on SPA (Single Page Application) navigation
- ✅ MutationObserver for dynamic content

#### File Structure

```
reading_time/
├── manifest.json       # Extension configuration
├── scripts/
│   └── content.js     # Content script logic
└── images/             # Extension icons
    ├── icon-16.png
    ├── icon-32.png
    ├── icon-48.png
    └── icon-128.png
```

#### Usage

Visit any article on `developer.chrome.com/docs/extensions` or `developer.chrome.com/docs/webstore` to see the reading time automatically displayed.

#### Key Concepts

- Content Scripts (`content_scripts`)
- DOM Manipulation
- MutationObserver API
- Pattern matching (`matches` in manifest)
- Text analysis (word count calculation)

#### Algorithm

```
Reading Time (minutes) = Word Count / 200 words per minute
```

---

### 4. 📑 Tabs Manager

**Directory:** `tabs_manager/`

Manage and organize all Chrome developer documentation tabs with grouping functionality.

#### Features

- ✅ Lists all open Chrome docs tabs
- ✅ Click to focus any tab
- ✅ Group all docs tabs together
- ✅ Sorted alphabetically by title
- ✅ Shows page pathname

#### File Structure

```
tabs_manager/
├── manifest.json       # Extension configuration
├── popup.html         # Popup UI
├── popup.js           # Popup logic
├── popup.css          # Popup styling
└── images/             # Extension icons
    ├── icon-16.png
    ├── icon-32.png
    ├── icon-48.png
    └── icon-128.png
```

#### Usage

1. Open multiple tabs from `developer.chrome.com/docs/*`
2. Click the extension icon
3. View all relevant tabs in a sorted list
4. Click any tab to focus it
5. Click "Group tabs" to organize them

#### Key Concepts

- Tabs API (`chrome.tabs.query`, `chrome.tabs.update`)
- Windows API (`chrome.windows.update`)
- Tab Groups API (`chrome.tabs.group`, `chrome.tabGroups.update`)
- Host Permissions
- HTML Templates (`<template>` element)
- Intl.Collator for sorting

---

### 5. 🔍 Quick API Reference

**Directory:** `quick-api-reference/`

Search Chrome Extension APIs directly from the omnibox (address bar) and get helpful tips.

#### Features

- ✅ Omnibox keyword: `api`
- ✅ Search Chrome Extension API reference
- ✅ Daily development tips
- ✅ Content script enhancements on API docs
- ✅ Module-based service worker

#### File Structure

```
quick-api-reference/
├── manifest.json       # Extension configuration
├── service-worker.js   # Main service worker
├── sw-omnibox.js      # Omnibox functionality
├── sw-tips.js         # Tips functionality
├── content.js         # Content script for API pages
└── images/             # Extension icons
    ├── icon-16.png
    └── icon-128.png
```

#### Usage

1. Type `api` in the address bar and press Tab/Space
2. Type your search query (e.g., "tabs")
3. Press Enter to navigate to the API documentation

#### Key Concepts

- Omnibox API (`chrome.omnibox`)
- Service Worker modules (`type: "module"`)
- ES6 imports in service workers
- Storage API (`chrome.storage`)
- Alarms API (`chrome.alarms`)
- Content Scripts for specific pages

---

## 🎓 Key Learnings

This collection demonstrates various aspects of Chrome Extension development:

### Manifest V3 Features

- ✅ Service Workers instead of background pages
- ✅ `action` API instead of `browser_action`
- ✅ Host permissions and activeTab
- ✅ Declarative content scripts

### Chrome APIs Covered

| API                | Use Case                      | Project(s)              |
| ------------------ | ----------------------------- | ----------------------- |
| `chrome.action`    | Extension icon, popup, badges | Focus Mode, Hello World |
| `chrome.scripting` | Dynamic CSS/JS injection      | Focus Mode              |
| `chrome.tabs`      | Tab management and queries    | Tabs Manager            |
| `chrome.tabGroups` | Organize tabs into groups     | Tabs Manager            |
| `chrome.omnibox`   | Address bar search            | Quick API Reference     |
| `chrome.storage`   | Store extension data          | Quick API Reference     |
| `chrome.alarms`    | Scheduled tasks               | Quick API Reference     |
| Content Scripts    | Modify web pages              | Reading Time, Quick API |

### Best Practices

- 📝 Proper permission handling (minimal permissions)
- 🎨 Consistent icon sizes (16, 32, 48, 128)
- 🔧 Service worker lifecycle management
- 📱 MutationObserver for SPA compatibility
- 🎯 Content script pattern matching
- 🧩 Modular code structure

---

## 📚 Resources

### Official Documentation

- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 Migration Guide](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Chrome Extension Samples](https://github.com/GoogleChrome/chrome-extensions-samples)

### APIs Used

- [Action API](https://developer.chrome.com/docs/extensions/reference/action/)
- [Scripting API](https://developer.chrome.com/docs/extensions/reference/scripting/)
- [Tabs API](https://developer.chrome.com/docs/extensions/reference/tabs/)
- [Tab Groups API](https://developer.chrome.com/docs/extensions/reference/tabGroups/)
- [Omnibox API](https://developer.chrome.com/docs/extensions/reference/omnibox/)
- [Storage API](https://developer.chrome.com/docs/extensions/reference/storage/)
- [Content Scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)

---

## 🛠️ Development Tips

### Debugging

- Use `chrome://extensions/` to reload extensions after changes
- Check service worker logs in extension details page
- Use DevTools for popup and content script debugging
- Monitor network requests in DevTools

### Common Issues

- **Service worker not updating**: Click "Reload" on the extension card
- **Content script not injecting**: Check pattern matching in manifest
- **Permissions errors**: Verify required permissions in manifest.json

---

## 📝 License

These projects are for educational purposes. Feel free to use and modify them for learning.

---

## 🤝 Contributing

This is a learning repository. Feel free to:

- Report issues
- Suggest improvements
- Add more example extensions
- Share your learning experience

---

## 📧 Contact

Built with ❤️ while learning Chrome Extension development.

**Happy Coding! 🚀**

---

### 📊 Project Statistics

- **Total Extensions**: 5
- **Manifest Version**: V3
- **APIs Demonstrated**: 8+
- **Lines of Code**: ~400+
- **Difficulty Level**: Beginner to Intermediate

---

_Last Updated: October 2025_
