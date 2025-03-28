import { handleAddTask } from "./index.js";
import { projectTaskAdd } from "./project.js";

const projectBtn = document.querySelector(".project-btn-continue");
const projectSet = document.querySelector(".project");
const projectInfoEl = document.querySelector(".project-info");

/**
 *
 * @param {*} newTask
 * @returns  complete task bar which is formed by the user with edit and delete fucntionality;
 */
export function addTaskBar(newTask) {
  const taskBarEl = document.createElement("div");
  taskBarEl.classList.add("task-box");

  // task name and check box addition
  const taskBox = document.createElement("div");
  taskBox.classList.add("task-box");
  const taskBoxCheckbox = document.createElement("input");
  taskBoxCheckbox.setAttribute("type", "checkbox");
  const taskEl = document.createElement("h3");
  taskEl.innerText = newTask.taskName;

  taskBox.append(taskBoxCheckbox, taskEl);

  // task due date addtion
  const dueDateEl = document.createElement("div");
  const lastDate = document.createElement("span");
  lastDate.innerText = newTask.dueDate;
  dueDateEl.appendChild(lastDate);

  // add edit and deltel icon

  const iconContainer = document.createElement("div");
  iconContainer.classList.add("editing");
  const editEl = document.createElement("i");
  const deleteEl = document.createElement("i");
  editEl.classList.add("fa-solid", "fa-pen-to-square");
  deleteEl.classList.add("fa-solid", "fa-trash");

  iconContainer.append(editEl, deleteEl);

  taskBarEl.append(taskBox, dueDateEl, iconContainer);

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
  const taskName = document.createElement("h3");
  taskName.innerText = task;
  taskNameDiv.append(checkBox, taskName);
  console.log(taskNameDiv);

  return taskNameDiv;
}

/**
 *
 */
export function listProject(name) {
  // Create the h3 element
  let h3 = document.createElement("h3");

  // Create the i element
  let i = document.createElement("i");
  i.classList.add("fa-solid", "fa-list-check");

  // Append the icon to the h3
  h3.appendChild(i);
  h3.appendChild(document.createTextNode(" " + name));
  console.log("this is h3", h3);
  return h3;
}

export function getFormattedToday() {
  const today = new Date();
  const day = today.getDate(); // 28
  const month = today.toLocaleString("default", { month: "long" }); // "March"
  const year = today.getFullYear(); // 2025

  return `${day} ${month} ${year}`; // "28 March 2025"
}
