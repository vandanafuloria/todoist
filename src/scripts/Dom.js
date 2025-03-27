import { handleAddTask } from "./index.js";
import { projectTaskAdd } from "./project.js";

const projectBtn = document.querySelector(".project-btn-continue");
const projectSet = document.querySelector(".project");
const projectInfoEl = document.querySelector(".project-info");

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

export function listProject() {
  const h3El = document.createElement("h3");
  const projectIcon = document.createElement("i");
  projectIcon.classList.add("fa-solid", "fa-list-check");
  h3El.appendChild(projectIcon);
  const x = projectTaskAdd();

  console.log(x);

  h3El.innerText = x;
  console.log(h3El);
}

projectBtn.addEventListener("click", listProject);
