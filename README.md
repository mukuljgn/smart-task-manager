# Smart Task Manager

A clean and modern **single-page task management application** designed to help users organize their daily work efficiently using priority-based tasks.
This project demonstrates frontend development skills, UI/UX thinking, and cloud deployment using modern tools.

---

## 🔗 Live Application

👉 https://mukul-task-manager.mukulv194.workers.dev/

---

## 📖 Project Overview

The Smart Task Manager allows users to create, manage, and organize tasks based on priority levels — **High, Medium, and Low**.
Tasks are automatically sorted so that more important items are always visible at the top, helping users stay focused and productive.

The application is fully client-side and persists data using browser storage.

---

## ✨ Key Features

* Create, complete, and delete tasks
* Priority-based task categorization (High / Medium / Low)
* Automatic sorting by priority
* Persistent storage using localStorage
* Scrollable task list for handling large data
* Responsive, colorful, and modern UI
* Smooth scrolling for better user experience

---

## 🛠️ Technology Stack

* **React** – Component-based UI development
* **Vite** – Fast build tool and development server
* **JavaScript (ES6+)**
* **Tailwind CSS** – Utility-first styling
* **Cloudflare Workers** – Serverless deployment
* **localStorage** – Client-side persistence

---

## 🧩 Application Architecture

* The application uses React state to manage tasks
* `useEffect` is used to sync task data with localStorage
* Tasks are sorted before rendering using a priority mapping
* The UI is split into reusable components for maintainability

---

## 📁 Folder Structure

```
src/
 ├── components/
 │   ├── TaskForm.jsx
 │   ├── TaskList.jsx
 │   └── TaskItem.jsx
 ├── utils/
 │   └── storage.js
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## ⚙️ Local Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/mukuljgn/smart-task-manager.git
```

2. Navigate to the project directory

```bash
cd task-manager
```

3. Install dependencies

```bash
npm install
```

4. Start development server

```bash
npm run dev
```

---

## ☁️ Deployment

The project is deployed using **Cloudflare Workers** by serving the production build files.

Build the project:

```bash
npm run build
```

Deploy using Wrangler:

```bash
wrangler deploy
```

---

## 🔮 Future Enhancements

* Task filtering (Completed / Pending)
* Dark mode support
* Drag-and-drop task ordering
* Backend integration for multi-device access

---

## 👨‍💻 Author

**Mukul Verma**
Built as part of a technical assessment to demonstrate frontend development and cloud deployment skills.

---

## 📜 License

This project is licensed under the MIT License.
