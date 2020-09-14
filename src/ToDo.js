import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import TaskAddForm from "./TaskAddForm";
import "./ToDo.css";

const ToDo = () => {
  const [tasks, updateTasks] = useState([
    {
      id: uuidv4(),
      title: "Watch React Tutorial",
      isDone: false,
    },
    {
      id: uuidv4(),
      title: "Read Book",
      isDone: false,
    },
    {
      id: uuidv4(),
      title: "Play PUGB",
      isDone: false,
    },
  ]);

  const [isAnim, updateIsAnim] = useState(false);

  const addTask = (task) => {
    const newTask = [...tasks, task];
    updateTasks(newTask);
    updateIsAnim(true);
  };

  const editTask = (title, id) => {
    const editedTask = tasks.map((task) => {
      if (task.id === id) {
        let editedTask = { ...task, title: title };
        return editedTask;
      }
      return task;
    });

    updateTasks(editedTask);
  };

  const removeTask = (id) => {
    const editedTask = tasks.filter((task) => task.id !== id);
    updateTasks(editedTask);
    updateIsAnim(false);
  };

  const toggleIsDone = (id) => {
    const editedTask = tasks.map((task) => {
      if (task.id === id) {
        let newTask = { ...task };
        newTask.isDone = !task.isDone;
        return newTask;
      }
      return task;
    });

    updateTasks(editedTask);
  };

  let taskList = tasks.map((task, index) => (
    <Task
      {...task}
      key={task.id}
      number={index + 1}
      isAnim={isAnim}
      editTask={editTask}
      removeTask={removeTask}
      toggleIsDone={toggleIsDone}
    />
  ));

  if (tasks <= 0) {
    taskList = (
      <div className="ToDo-no-tasks">
        <div>No Tasks</div>
        <i className="fas fa-ban"></i>
      </div>
    );
  }

  return (
    <div className="ToDo">
      <div className="ToDo-title">
        <h1>Todo List!</h1>
        <p>A Simple React Todo List App.</p>
      </div>
      <div className="Todo-task-container">{taskList}</div>
      <div className="ToDo-form-container">
        <TaskAddForm addTask={addTask} />
      </div>
    </div>
  );
};

export default ToDo;
