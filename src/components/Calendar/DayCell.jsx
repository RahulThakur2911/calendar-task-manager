import React from "react";
import { formatDateKey, isSameDate } from "../../utils/calendar";

const DayCell = ({
  day,
  tasksByDate,
  onDropTask,
  onDeleteTask,
  selectedDate,
  setSelectedDate,
}) => {
  const actualDate = day?.date;
  const isCurrentMonth = day?.currentMonth;

  if (!actualDate) {
    return null;
  }

  const dateKey = formatDateKey(actualDate);
  const dayTasks = tasksByDate?.[dateKey] || [];

  const today = new Date();
  const isToday = isSameDate(today, actualDate);
  const isSelected = selectedDate && isSameDate(selectedDate, actualDate);

  const handleDrop = (e) => {
    e.preventDefault();
    const task = JSON.parse(e.dataTransfer.getData("task"));
    onDropTask(task, dateKey);
  };

  return (
    <div
      onClick={() => setSelectedDate(actualDate)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className={`rounded-xl min-h-[95px] sm:min-h-[115px] p-2 sm:p-3 border cursor-pointer transition-all box-border
        ${
          isSelected
            ? "bg-blue-50 border-blue-500 shadow-sm"
            : isCurrentMonth
            ? "bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm"
            : "bg-gray-100 border-gray-200 text-gray-400"
        }
        ${isToday ? "ring-2 ring-indigo-400" : ""}
      `}
    >
      {/* Date Header */}
      <div className="flex justify-between items-center mb-2">
        <span
          className={`text-xs sm:text-sm font-semibold ${
            isCurrentMonth ? "text-gray-700" : "text-gray-400"
          }`}
        >
          {actualDate.getDate()}
        </span>

        {isToday && (
          <span className="text-[10px] text-indigo-500 font-semibold">
            Today
          </span>
        )}
      </div>

      <div className="space-y-1">
        {dayTasks.map((task) => (
          <div
            key={task.id}
            className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-lg flex justify-between items-center gap-2"
          >
            <span className="truncate block flex-1">{task.title}</span>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteTask(dateKey, task.id);
              }}
              className="text-red-500 hover:text-red-700 text-xs font-bold shrink-0"
              title="Remove task"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayCell;