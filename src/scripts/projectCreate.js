const projectBtn = document.querySelector(".project-btn-continue");
const projectSet = document.querySelector(".project");
const projectInfoEl = document.querySelector(".project-info");

export function generateProjectInfo() {
  projectInfoEl.showModal();
}

projectBtn.addEventListener("click", () => {
  projectSet.close();
  generateProjectInfo();
});
