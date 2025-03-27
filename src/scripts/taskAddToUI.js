import { handleAddTask } from "./index.js";

export function addTaskBar() {
  const taskBarEl = document.createElement("div");
  taskBarEl.classList.add("task-box");

  // task name and check box addition
  const taskBox = document.createElement("div");
  taskBox.classList.add("task-box");
  const taskBoxCheckbox = document.createElement("input");
  taskBoxCheckbox.setAttribute("type", "checkbox");
  const taskEl = document.createElement("h3");
  taskEl.innerText = "generated through js";

  taskBox.append(taskBoxCheckbox, taskEl);

  // task due date addtion
  const dueDateEl = document.createElement("div");
  const lastDate = document.createElement("span");
  lastDate.innerText = "2 - march - 27";
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
