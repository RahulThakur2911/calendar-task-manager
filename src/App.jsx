import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/Tasks/TaskList";
import CalendarGrid from "./components/Calendar/CalendarGrid";
import { initialTasks } from "./data/tasks";

const App = () => {
  const [tasks] = useState(initialTasks);
  const [tasksByDate, setTasksByDate] = useState({});
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDropTask = (task, dateKey) => {
    setTasksByDate((prev) => {
      const existingTasks = prev[dateKey] || [];

      const alreadyExists = existingTasks.some((t) => t.id === task.id);

      if (alreadyExists) return prev;

      return {
        ...prev,
        [dateKey]: [...existingTasks, task],
      };
    });
  };

  const changeMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <TaskList tasks={tasks} />
        </div>

        {/* Calendar */}
        <div className="md:col-span-3">
          <CalendarGrid
            currentDate={currentDate}
            tasksByDate={tasksByDate}
            onDropTask={handleDropTask}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            changeMonth={changeMonth}
          />
        </div>
      </main>
    </div>
  );
};

export default App;