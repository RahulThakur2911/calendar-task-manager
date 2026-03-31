import React from "react";
import DayCell from "./DayCell";
import { getDaysInMonth, monthNames } from "../../utils/calendar";

const CalendarGrid = ({
  currentDate,
  tasksByDate,
  onDropTask,
  selectedDate,
  setSelectedDate,
  changeMonth,
}) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const days = getDaysInMonth(year, month);

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => changeMonth(-1)}
          className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          Prev
        </button>

        <h2 className="text-xl font-bold text-gray-800">
          {monthNames[month]} {year}
        </h2>

        <button
          onClick={() => changeMonth(1)}
          className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          Next
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 gap-3 mb-3">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center font-semibold text-gray-600 py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-3">
        {days.map((day, index) => (
          <DayCell
            key={index}
            day={day}
            tasksByDate={tasksByDate}
            onDropTask={onDropTask}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;