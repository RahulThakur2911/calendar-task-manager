import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 h-fit">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Task List</h2>

      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;