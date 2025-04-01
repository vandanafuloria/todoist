const projectBtn = document.querySelector(".project-btn-continue");
const projectSet = document.querySelector(".project");
const projectInfoEl = document.querySelector(".project-info");

export function generateProjectInfo() {
  const projectTitleEl = document.querySelector("#project-title");
  const projectValue = document.querySelector("#project");
  projectTitleEl.innerText = projectValue.value;
  if (projectTitleEl == "") {
    alert("Add Project Name");
    return;
  }
  projectValue.value = "";
  projectInfoEl.showModal();
}

projectBtn.addEventListener("click", () => {
  projectSet.close();

  generateProjectInfo();
});

export function projectTaskAdd() {
  const taskName = document.querySelector("#task-adding");

  const task = taskName.value;

  taskName.value = "";

  return task;
}
