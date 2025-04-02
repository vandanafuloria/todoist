import { handleAddTask, taskElement } from "./index.js";

import { deleteTask, saveEditedTask } from "./taskCreate.js";
import { editTask } from "./taskCreate.js";

const projectBtn = document.querySelector(".project-btn-continue");
const projectSet = document.querySelector(".project");
const projectInfoEl = document.querySelector(".project-info");

import { projectContainerEl } from "./index.js";

/**
 *
 * @param {*} newTask
 * @returns  complete task bar which is formed by the user with edit and delete fucntionality;
 */

export let ProjectTask = {};

export function projectSaveToLocalStorage(json) {
  localStorage.setItem("project", json);
}

function loadStorageProjects() {
  const parseProjects = localStorage.getItem("projects");
  const parsedTasks = JSON.parse(parseProjects);

  for (const taskId in ProjectTask) {
    if (ProjectTask.hasOwnProperty(taskId)) {
      // Checks if property belongs to the object itself
      console.log(`ID: ${taskId}, Value: ${ProjectTask[taskId]}`);
      // Or use the values in your UI
      const taskElement = listProject(ProjectTask[taskId], taskId);
      projectContainerEl.appendChild(taskElement);
    }
  }

  // for (let task in parsedTasks) {
  //   console.log(parsedTasks[task]);
  //   const task_ = listProject(parsedTasks[task]);
  //   projectContainerEl.appendChild(task_);
  // }
  // ProjectTask = parsedTasks;
}
export function saveProject() {
  const json = JSON.stringify(ProjectTask);
  projectSaveToLocalStorage(json);
}
export function addTaskBar(newTask) {
  const taskBarEl = document.createElement("div");
  taskBarEl.classList.add("task-box");

  // task name and check box addition
  const taskBox = document.createElement("div");
  taskBox.classList.add("task-box");
  const taskBoxCheckbox = document.createElement("input");
  taskBoxCheckbox.setAttribute("type", "checkbox");
  const taskEl = document.createElement("input");
  taskEl.classList.add("task-readonly-input");

  taskEl.value = newTask.taskName;
  taskEl.readOnly = true; // readonly value set ;

  taskBox.append(taskBoxCheckbox, taskEl);

  // task due date addtion

  const dueDateEl = document.createElement("div");
  dueDateEl.classList.add("dueDate");

  const lastDate = document.createElement("input");
  lastDate.classList.add("due-date-input");
  lastDate.setAttribute("type", "date");
  lastDate.readOnly = true;

  if (newTask.dueDate === "") {
    lastDate.value = "No Due Date";
  } else {
    lastDate.value = newTask.dueDate;
  }
  dueDateEl.appendChild(lastDate);

  // Setting the background color based on priority
  const priorityColors = {
    high: "red",
    medium: "orange",
    low: "green",
  };

  const priority = newTask.priority || "low"; // Default to "low" if priority is not set
  dueDateEl.style.backgroundColor = priorityColors[priority] || "white";

  const iconContainer = document.createElement("div");
  iconContainer.classList.add("editing");
  const editEl = document.createElement("i");
  const deleteEl = document.createElement("i");
  const saveEl = document.createElement("i");
  saveEl.classList.add("fa-solid", "fa-floppy-disk");
  editEl.classList.add("fa-solid", "fa-pen-to-square");
  deleteEl.classList.add("fa-solid", "fa-trash", "delete-btn");

  iconContainer.append(saveEl, editEl, deleteEl);

  taskBarEl.append(taskBox, dueDateEl, iconContainer);

  //   deleteEl.addEventListener("click", (e) => {
  //     // console.log(e.target.parentElement);
  //     deleteTask(e);
  // });

  deleteEl.addEventListener("click", deleteTask);

  editEl.addEventListener("click", editTask);
  saveEl.addEventListener("click", saveEditedTask);

  return taskBarEl;
}

/**
 *@brief added project will add to dom of project info container;
 * @param {} task
 * @returns created task element with all info;
 */
export function addNewTask(task) {
  const taskNameDiv = document.createElement("div");
  taskNameDiv.classList.add("taskName");
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  const taskName = document.createElement("input");
  taskName.value = task;
  taskNameDiv.append(checkBox, taskName);
  console.log(taskNameDiv);

  return taskNameDiv;
}

/**
 *
 */

function AddProjectTasks() {
  const projectBox = document.querySelector(".project-view-container");

  projectBox.style.display = "block";
  console.log("Project tasks view shown");
}

export function listProject(name) {
  console.log(name);
  let projectTitle = document.createElement("div");
  projectTitle.classList.add("project-heading");

  // Create the i element
  let i = document.createElement("i");
  i.classList.add("fa-solid", "fa-list-check");
  const title = document.createElement("h3");
  title.innerText = name;

  projectTitle.appendChild(i);
  projectTitle.appendChild(title);
  const timestamp = Date.now();
  ProjectTask[timestamp] = name;
  saveProject();

  projectTitle.addEventListener("click", AddProjectTasks);

  return projectTitle;
}

export function getFormattedToday() {
  const today = new Date();
  const day = today.getDate(); // 28
  const month = today.toLocaleString("default", { month: "long" }); // "March"
  const year = today.getFullYear(); // 2025

  return `${day} ${month} ${year}`; // "28 March 2025"
}

window.addEventListener("DOMContentLoaded", loadStorageProjects);
