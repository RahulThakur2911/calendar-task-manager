import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/Tasks/TaskList";
import CalendarGrid from "./components/Calendar/CalendarGrid";
import { initialTasks } from "./data/tasks";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("pendingTasks");
    return savedTasks ? JSON.parse(savedTasks) : initialTasks || [];
  });

  const [tasksByDate, setTasksByDate] = useState(() => {
    const saved = localStorage.getItem("tasksByDate");
    return saved ? JSON.parse(saved) : {};
  });

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasksByDate", JSON.stringify(tasksByDate));
  }, [tasksByDate]);

  useEffect(() => {
    localStorage.setItem("pendingTasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDropTask = (task, dateKey) => {
    if (!task || !dateKey) return;

    setTasksByDate((prev) => {
      const existing = prev?.[dateKey] || [];

      const alreadyExists = existing?.some((t) => t?.id === task?.id);
      if (alreadyExists) return prev;

      return {
        ...prev,
        [dateKey]: [...existing, task],
      };
    });

    setTasks((prev) => prev.filter((t) => t?.id !== task?.id));
  };

  const handleDeleteTask = (dateKey, taskId) => {
    setTasksByDate((prev) => {
      const updatedTasks = (prev?.[dateKey] || []).filter(
        (task) => task?.id !== taskId
      );

      const deletedTask = (prev?.[dateKey] || []).find(
        (task) => task?.id === taskId
      );

      const newState = { ...prev };

      if (updatedTasks?.length > 0) {
        newState[dateKey] = updatedTasks;
      } else {
        delete newState[dateKey];
      }

      if (deletedTask) {
        setTasks((prevTasks) => {
          const alreadyExists = prevTasks.some((t) => t.id === deletedTask.id);
          if (alreadyExists) return prevTasks;
          return [...prevTasks, deletedTask];
        });
      }

      return newState;
    });
  };

  const handleAddTask = () => {
    if (!newTask.trim()) return;

    const newTaskItem = {
      id: Date.now().toString(),
      title: newTask.trim(),
    };

    setTasks((prev) => [...prev, newTaskItem]);
    setNewTask("");
  };

  const changeMonth = (dir) => {
    setCurrentDate((prev) => {
      const d = new Date(prev);
      d.setMonth(prev?.getMonth() + dir);
      return d;
    });
  };

  const handleDeletePendingTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task?.id !== taskId));
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-6 items-start">
          {/* Task List */}
          <div className="lg:col-span-1">
            <TaskList
              tasks={tasks}
              newTask={newTask}
              setNewTask={setNewTask}
              onAddTask={handleAddTask}
              onDeleteTask={handleDeletePendingTask}
            />
          </div>

          {/* Calendar */}
          <div className="lg:col-span-3">
            <CalendarGrid
              currentDate={currentDate}
              tasksByDate={tasksByDate}
              onDropTask={handleDropTask}
              onDeleteTask={handleDeleteTask}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              changeMonth={changeMonth}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;