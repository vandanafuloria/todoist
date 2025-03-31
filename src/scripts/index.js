import "../styles/style.css";
import { selectedPriority } from "./taskCreate.js";
import { addNewTask, addTaskBar } from "./Dom.js";
import { Task } from "./taskCreate.js";
import { generateProjectInfo } from "./project.js";
import { projectTaskAdd } from "./project.js";
import { listProject } from "./Dom.js";
import { getFormattedToday } from "./Dom.js";
import { removeRadioValue } from "./taskCreate.js";
import { deleteTask } from "./taskCreate.js";

const todayDate = document.querySelector("#day");
const dialogEl = document.querySelector("#task-bar");
const taskAdd = document.querySelector(".task");

const addTaskBtn = document.querySelector(".task-created");

const projectEl = document.querySelector(".project");
const projectName = document.querySelector("#project");
const projectStartBtn = document.querySelector(".project-adding");
console.log(projectStartBtn);
const taskContainerEl = document.querySelector(".added-task-container");

const projectBtn = document.querySelector(".project-btn-continue");
const projectSet = document.querySelector(".project");
const projectInfoEl = document.querySelector(".project-info");
const projectAddCancelEl = document.querySelector(".project-add-cancel");
const arrowBtn = document.querySelector(".fa-arrow-up");

const taskSection = document.querySelector(".project-tasks");
const cancelBtnEl = document.querySelector(".cancel-btn");
const projectContainerEl = document.querySelector("#project-container");
const mainSectionEl = document.querySelector(".main-section-container");
const taskAddCancelEl = document.querySelector(".task-add-cancel");

console.log(cancelBtnEl);

/**
 * extracting value filled by user
 * adding to ui
 */

export function handleAddTask() {
  const taskName = document.querySelector("#task");

  const dueDate = document.querySelector("#date");
  const priority = selectedPriority();
  const nameOfTask = taskName.value;
  if (!nameOfTask) {
    alert("Add task Name");
    return;
  }

  const dateOfDue = dueDate.value;
  const newTask = new Task(nameOfTask, dateOfDue, priority);
  taskName.value = "";
  dueDate.value = "";
  removeRadioValue();

  dialogEl.close();
  mainSectionEl.style.filter = "blur(0px)";
  const uiEl = addTaskBar(newTask);
  console.log(uiEl);
  taskContainerEl.appendChild(uiEl);
}
taskAddCancelEl.addEventListener("click", () => {
  dialogEl.close();
  mainSectionEl.style.filter = "blur(0px)";
});

// plus icon to add a task
taskAdd.addEventListener("click", () => {
  dialogEl.showModal();
  mainSectionEl.style.filter = "blur(30px)";
});

// inside dialog box
addTaskBtn.addEventListener("click", handleAddTask);

// project add plus icon
projectStartBtn.addEventListener("click", () => {
  projectEl.showModal();
});

// contiune button cross sign
projectAddCancelEl.addEventListener("click", () => {
  projectEl.close();
});

arrowBtn.addEventListener("click", () => {
  const task = projectTaskAdd();
  if (!task) return;
  const addTask = addNewTask(task);
  taskSection.appendChild(addTask);
});
// inside project info cross icon
cancelBtnEl.addEventListener("click", () => {
  projectInfoEl.close();
});

projectBtn.addEventListener("click", () => {
  const name = projectName.value;

  const projectHeading = listProject(name);
  projectContainerEl.appendChild(projectHeading);
});

window.addEventListener("load", () => {
  todayDate.innerText = getFormattedToday();
  console.log(todayDate);
});

// delete the task
// const deleteIcon = document.querySelector(".delete-btn");
// deleteIcon.addEventListener("click", (e) => {
//   const btn = e.target;
//   console.log(btn);
// });
