import "../styles/style.css";
import { selectedPriority } from "./taskCreate.js";
import { addNewTask, addTaskBar } from "./Dom.js";
import { Task } from "./taskCreate.js";
import { generateProjectInfo } from "./project.js";
import { projectTaskAdd } from "./project.js";
import { listProject } from "./project.js";

const dialogEl = document.querySelector("#task-bar");
const taskAdd = document.querySelector(".task");

const addTaskBtn = document.querySelector(".task-created");

const projectEl = document.querySelector(".project");
const projectStartBtn = document.querySelector(".project-adding");
const taskContainerEl = document.querySelector(".added-task-container");

const projectBtn = document.querySelector(".project-btn-continue");
const projectSet = document.querySelector(".project");
const projectInfoEl = document.querySelector(".project-info");
const projectAddCancelEl = document.querySelector(".project-add-cancel");
const arrowBtn = document.querySelector(".fa-arrow-up");

const taskSection = document.querySelector(".project-tasks");
const cancelBtnEl = document.querySelector(".cancel-btn");
const projectContainerEl = document.querySelector(".project-container");

console.log(cancelBtnEl);

/**
 * handling recently added task
 */
export function handleAddTask() {
  const taskName = document.querySelector("#task");

  const dueDate = document.querySelector("#date");
  const priority = selectedPriority();
  const nameOfTask = taskName.value;
  const dateOfDue = dueDate.value;
  const newTask = new Task(nameOfTask, dateOfDue, priority);
  taskName.value = "";
  dueDate.value = "";

  dialogEl.close();
  const uiEl = addTaskBar(newTask);
  console.log(uiEl);
  taskContainerEl.appendChild(uiEl);
}

taskAdd.addEventListener("click", () => {
  dialogEl.showModal();
});

addTaskBtn.addEventListener("click", handleAddTask);

projectStartBtn.addEventListener("click", () => {
  projectEl.showModal();
});
projectAddCancelEl.addEventListener("click", () => {
  projectEl.close();
});

arrowBtn.addEventListener("click", () => {
  const task = projectTaskAdd();
  console.log(task);
  const addTask = addNewTask(task);
  taskSection.appendChild(addTask);
});

cancelBtnEl.addEventListener("click", () => {
  projectInfoEl.close();
});
