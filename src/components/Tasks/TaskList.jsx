import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, newTask, setNewTask, onAddTask, onDeleteTask }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 sticky top-6 transition hover:shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center justify-between">
        <span>Tasks</span>
        <span className="text-sm text-gray-500">{tasks?.length || 0}</span>
      </h2>

      {/* Add Task Input */}
      <div className="mb-4 space-y-2">
        <input
          type="text"
          placeholder="Enter new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onAddTask();
            }
          }}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={onAddTask}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-2">
        {tasks?.length > 0 ? (
          tasks?.map((task) => (
            <div
              key={task?.id}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg px-2 py-1 transition"
            >
              <TaskItem task={task} onDeleteTask={onDeleteTask} />
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500 text-center py-4">
            No tasks available
          </p>
        )}
      </div>
    </div>
  );
};

export default TaskList;