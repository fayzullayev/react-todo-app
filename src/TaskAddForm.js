import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TaskAddForm.css";

const TaskAddForm = ({ title, addTask, edit, isEdit }) => {
  const [taskTitle, updateTaskTitle] = useState(title ? title : "");

  const handleChange = ({ target: { value } }) => {
    updateTaskTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskTitle.length > 0) {
      let newTask = {
        title: taskTitle,
        id: uuidv4(),
        isDone: false,
      };
      addTask(newTask);
      updateTaskTitle("");
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    edit(taskTitle);
  };

  return (
    <div className="TaskAddForm">
      {!edit && <p>New Todo</p>}
      <form
        onSubmit={isEdit ? handleEdit : handleSubmit}
        className="TaskAddForm-form"
      >
        <input
          type="text"
          value={taskTitle}
          onChange={handleChange}
          name="title"
          placeholder={!isEdit ? "New Todo" : "Title"}
        />
        <button disabled={!taskTitle.length > 0}>
          {!isEdit ? "Add Task" : "Edit Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskAddForm;
