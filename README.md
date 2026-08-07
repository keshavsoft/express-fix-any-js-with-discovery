# express-fix-any-js 🚀

**Instantly repair, structure, and align Express.js routing files with automated idempotency and strict formatting safeguards.**

[![npm version](https://img.shields.io/npm/v/express-fix-any-js.svg?style=flat-square&color=38bdf8)](https://www.npmjs.com/package/express-fix-any-js)
[![license](https://img.shields.io/npm/l/express-fix-any-js.svg?style=flat-square&color=34d399)](LICENSE)
[![GitHub workflows](https://img.shields.io/github/actions/workflow/status/keshavsoft/express-fix-any-js/npm-publish.yml?style=flat-square&label=workflows)](https://github.com/keshavsoft/express-fix-any-js/actions)

---

## 📖 Overview

`express-fix-any-js` is a lightweight, high-performance AST and file-modifier utility. It dynamically injects missing Express.js route declarations, import statements, and export configurations into your JavaScript files while ensuring complete protection against code duplication.

It acts as the foundational engine for the **KeshavSoft API Generation Suite**, seamlessly structuring routes generated via CLI tools or VS Code extensions.

---

## ✨ Features

* 🔒 **Idempotent Injection:** Checks files before altering; skips execution silently if a duplicate pattern or route already exists.
* 📐 **Strict Aesthetics:** Enforces zero-line spacing between consecutive routes while maintaining ideal breathing space after router initializations.
* ⚡ **Versatile Versioning:** Supports legacy structure modifications alongside cutting-edge AST-based insertions (V1 to V6).
* 🛠️ **Developer Diagnostics:** Emits clean, explicit inline logging for file updates and duplicate line match warnings.

---

## 🚀 Quick Start

### Installation

```bash
npm install express-fix-any-js
```

### Programmatic Usage

Safely append or insert local routes using the core `alterFile` API:

```javascript
import alterFile from 'express-fix-any-js/bin/v6/UpdateJs/common/AlterFile/index.js';

alterFile({
  jsFilePath: './routes/end-points.js',
  toInsertLine: 'router.post("/Create", express.json(), CreateFunc);',
  duplicationCheck: 'router.post("/Create"',
  insertAfter: [
    'const router = express.Router();',
    'router.post("/Alter"' // Inserts here if found, otherwise falls back to router initialization
  ],
  showLog: true
});
```

---

## 📐 Formatting Standards

The utility ensures your routing logic remains pristine by applying strict formatting:

### 1. First Route Base Layout
```javascript
const router = express.Router();

router.post("/Alter", express.json(), handler); // Injected with clean top margin

export { router };
```

### 2. Multi-Route Append Strategy
```javascript
router.post("/Alter", express.json(), handler);
router.post("/Alter1", express.json(), handler); // Appended flush below previous route
router.post("/Alter2", express.json(), handler);
```

---

## 🌐 Documentation & Guides

Explore the [Official Documentation Portal](https://keshavsoft.github.io/express-fix-any-js/) for interactive guides and deeper architectural workflows:

* 📄 **App.js Route Generation** – Automates app-level router registration.
* 📄 **Version Route Generation** – Easily sets up `/v1` or `/v2` routing scopes.
* 📄 **Table Route Generation** – Generates structured relational endpoints like `/doctors`.
* 📄 **Endpoint Generation** – Scaffolds foundational GET, POST, PUT, and DELETE methods.

Developed with ❤ by [KeshavSoft](https://github.com/keshavsoft). Distributed under the **MIT License**.
