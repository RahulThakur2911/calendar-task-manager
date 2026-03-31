import React from "react";

const TaskItem = ({ task }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("task", JSON.stringify(task));
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm cursor-grab active:cursor-grabbing hover:shadow-md transition"
    >
      <p className="font-medium text-gray-700">{task.title}</p>
    </div>
  );
};

export default TaskItem;