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
let taskElement = {};

export function saveToLocalStorage(jsonString) {
  localStorage.setItem("notes", jsonString);
  console.log("Data has been saved to localStorage.");
  console.log(localStorage.getItem("notes"));
}

export function saveTask() {
  const jsonString = JSON.stringify(taskElement);
  saveToLocalStorage(jsonString);
}

function loadStorage() {
  const parse = localStorage.getItem("notes");
  const parsedTasks = JSON.parse(parse);
  console.log("test: ", parsedTasks);
  for (let task in parsedTasks) {
    // taskElement[task.id] = task;
    // addTaskBar(task);
    const task_ = addTaskBar(parsedTasks[task]);
    taskContainerEl.appendChild(task_);
  }
  taskElement = parsedTasks;
  console.log(taskElement);
  console.log("loading storage...");
}

// object to stores all the tasks

export function handleAddTask() {
  const taskName = document.querySelector("#task");

  const dueDate = document.querySelector("#date");
  const priority = selectedPriority();
  const nameOfTask = taskName.value;
  const id = Date.now();
  if (!nameOfTask) {
    alert("Add task Name");
    return;
  }

  const dateOfDue = dueDate.value;
  const newTask = new Task(nameOfTask, dateOfDue, priority, id);
  taskElement[newTask.id] = newTask;

  saveTask();

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
  mainSectionEl.style.filter = "blur(30px)";
});

// contiune button cross sign
projectAddCancelEl.addEventListener("click", () => {
  projectEl.close();
  mainSectionEl.style.filter = "blur(0px)";
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
  const projectName = document.querySelector("#projectName");

  const value = projectName.value;
  console.log("this is value", value);
  const projectHeading = listProject(projectName.value);
  console.log(projectHeading);
  projectContainerEl.appendChild(projectHeading);
  // Clear input after creation
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
window.addEventListener("DOMContentLoaded", loadStorage);

export { taskElement };
