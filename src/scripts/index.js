import "../styles/style.css";
import { selectedPriority } from "./prioritySelection.js";
import { addTaskBar } from "./taskAddToUI.js";
import { Task } from "./taskCreate.js";
import { generateProjectInfo } from "./projectCreate.js";

const dialogEl = document.querySelector("#task-bar");
const taskAdd = document.querySelector(".task");

const addTaskBtn = document.querySelector(".task-created");

const projectEl = document.querySelector(".project");
const projectStartBtn = document.querySelector(".project-adding");
const taskContainerEl = document.querySelector(".added-task-container");

const projectBtn = document.querySelector(".project-btn-continue");
const projectSet = document.querySelector(".project");
const projectInfoEl = document.querySelector(".project-info");

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
  const uiEl = addTaskBar();
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
