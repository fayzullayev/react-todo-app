import React, { useState } from "react";
import TaskAddForm from "./TaskAddForm";
import "./Task.css";

const Task = ({
  title,
  removeTask,
  id,
  toggleIsDone,
  isAnim,
  isDone,
  number,
  editTask,
}) => {
  const [state, updateState] = useState({
    taskTitle: title,
    isEdit: false,
    isDelete: false,
  });

  const toggleEdit = () => {
    updateState((prevState) => ({
      ...prevState,
      isEdit: !prevState.isEdit,
    }));
  };

  const handleEdit = (titleForEdit) => {
    toggleEdit();
    updateState((prevState) => ({
      ...prevState,
      taskTitle: titleForEdit,
    }));
    editTask(titleForEdit, id);
  };

  const handleRemove = () => {
    updateState({
      ...state,
      isDelete: true,
    });
    setTimeout(() => {
      removeTask(id);
    }, 300);
  };

  const handleIsDone = () => {
    toggleIsDone(id);
  };

  const { taskTitle, isEdit, isDelete } = state;
  return (
    <div className={`Task ${isAnim && "Task-anim"}`}>
      <div
        className={`Task-container ${isEdit && "Task-container-anim"} ${
          isDelete && "Task-container-delete-anim"
        }`}
      >
        <div className="Task-edit-form">
          <TaskAddForm edit={handleEdit} isEdit title={taskTitle} />
        </div>
        <div className="Task-inner">
          <div
            onClick={handleIsDone}
            className={`Task-title ${isDone && "Task-title2"}`}
          >
            <span>
              {number}. {title}
            </span>
          </div>
          <div className="Task-actions">
            <i className="fas fa-pen" onClick={toggleEdit}></i>
            <i className="fas fa-trash" onClick={handleRemove}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
