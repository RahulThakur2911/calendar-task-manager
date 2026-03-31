import React from "react";
import { formatDateKey } from "../../utils/calendar";

const DayCell = ({ day, tasksByDate, onDropTask, selectedDate, setSelectedDate }) => {
  if (!day) {
    return <div className="bg-gray-100 rounded-xl min-h-[120px]"></div>;
  }

  const dateKey = formatDateKey(day);
  const dayTasks = tasksByDate[dateKey] || [];

  const isSelected =
    selectedDate && formatDateKey(selectedDate) === dateKey;

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const taskData = JSON.parse(e.dataTransfer.getData("task"));
    onDropTask(taskData, dateKey);
  };

  return (
    <div
      onClick={() => setSelectedDate(day)}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`rounded-xl min-h-[120px] p-2 border transition cursor-pointer ${
        isSelected
          ? "bg-blue-50 border-blue-500"
          : "bg-white border-gray-200 hover:border-blue-300"
      }`}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-gray-700">{day.getDate()}</span>
      </div>

      <div className="space-y-2">
        {dayTasks.map((task, index) => (
          <div
            key={`${task.id}-${index}`}
            className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-lg truncate"
          >
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayCell;