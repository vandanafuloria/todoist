const projectBtn = document.querySelector(".project-btn-continue");
const projectSet = document.querySelector(".project");
const projectInfoEl = document.querySelector(".project-info");

// export function generateProjectInfo(title) {
//   const projectTitleEl = document.querySelector("#project-title");

//   projectTitleEl.innerText = title;

//   projectInfoEl.showModal();
// }

export function projectTaskAdd() {
  const taskName = document.querySelector("#task-adding");

  const task = taskName.value;

  taskName.value = "";

  return task;
}
