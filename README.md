# Calendar Task Manager

A simple and interactive **Drag & Drop Calendar Task Manager** built using **React**, **Vite**, and **Tailwind CSS**.

This application allows users to manage tasks visually by dragging tasks from a pending task list and dropping them onto specific dates in a calendar. Users can also create custom tasks, delete tasks, and persist all task data locally using **localStorage** — all without any backend integration.

---

## Features

- Display a monthly calendar with selectable dates
- Show a pending task list beside the calendar
- Drag tasks and drop them onto specific dates
- Remove tasks from the pending list once assigned
- Display assigned tasks directly inside calendar date cells
- Delete assigned tasks from the calendar
- Restore deleted calendar tasks back to the pending task list
- Add custom tasks manually using an input field
- Delete pending tasks directly from the sidebar
- Prevent duplicate task assignment on the same date
- Navigate between months (Previous / Next)
- Persist tasks and assignments using localStorage
- Fully frontend-only implementation (no backend)

---

## Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **JavaScript**
- **HTML5**
- **localStorage**

---

## Folder Structure

```bash
src/
│── components/
│   │── Calendar/
│   │   │── CalendarGrid.jsx
│   │   │── DayCell.jsx
│   │── Tasks/
│   │   │── TaskItem.jsx
│   │   │── TaskList.jsx
│   │── Header.jsx
│── data/
│   │── tasks.js
│── utils/
│   │── calendar.js
│── App.jsx
│── main.jsx
│── index.css