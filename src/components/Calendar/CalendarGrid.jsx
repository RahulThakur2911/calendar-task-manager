import React from "react";
import DayCell from "./DayCell";
import { getDaysInMonth, monthNames } from "../../utils/calendar";

const CalendarGrid = ({
  currentDate,
  tasksByDate,
  onDropTask,
  onDeleteTask,
  selectedDate,
  setSelectedDate,
  changeMonth,
}) => {
  const year = currentDate?.getFullYear();
  const month = currentDate?.getMonth();
  const days = getDaysInMonth(year, month);

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="bg-white rounded-xl shadow p-3 sm:p-4 transition hover:shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 sm:gap-4 mb-4 sm:mb-5 border-b pb-3">
        <button
          onClick={() => changeMonth?.(-1)}
          className="px-3 sm:px-4 py-2 bg-gray-100 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-200 transition"
        >
          Prev
        </button>

        <h2 className="text-base sm:text-xl font-bold text-gray-800 text-center">
          {monthNames?.[month]} {year}
        </h2>

        <button
          onClick={() => changeMonth?.(1)}
          className="px-3 sm:px-4 py-2 bg-gray-100 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-200 transition"
        >
          Next
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[700px]">
          {/* Weekdays */}
          <div className="grid grid-cols-7 gap-2 mb-3">
            {weekDays?.map((day, index) => {
              const isWeekend = index === 0 || index === 6;

              return (
                <div
                  key={day}
                  className={`text-center font-semibold py-2 rounded-md text-xs sm:text-sm
                    ${
                      isWeekend
                        ? "bg-red-50 text-red-500"
                        : "bg-gray-50 text-gray-600"
                    }
                  `}
                >
                  {day}
                </div>
              );
            })}
          </div>

          {/* Dates */}
          <div className="grid grid-cols-7 gap-2 pb-1">
            {days?.map((day, index) => (
              <DayCell
                key={day?.date?.toISOString?.() || index}
                day={day}
                tasksByDate={tasksByDate}
                onDropTask={onDropTask}
                onDeleteTask={onDeleteTask}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarGrid;