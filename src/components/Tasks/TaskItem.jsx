import React from "react";

const TaskItem = ({ task, onDeleteTask }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("task", JSON.stringify(task));
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm cursor-grab active:cursor-grabbing hover:shadow-md hover:scale-[1.02] transition-all flex items-center justify-between gap-2"
    >
      <p className="font-medium text-gray-700 truncate flex-1">{task.title}</p>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onDeleteTask(task.id);
        }}
        className="text-red-500 hover:text-red-700 text-sm font-bold shrink-0"
        title="Delete task"
      >
        ✕
      </button>
    </div>
  );
};

export default TaskItem;