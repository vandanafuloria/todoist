/**
 * @brief Represents a Task {taskName, dueDate}
 * @param {*} taskName
 * @param {*} dueDate
 *
 */

export function Task(taskName, dueDate, priority, id) {
  this.taskName = taskName;
  this.dueDate = dueDate;
  this.priority = priority;
  this.id = id;
}
export function selectedPriority() {
  const radios = document.getElementsByName("priority");

  for (let el of radios) {
    if (el.checked) return el.value;
  }
  return "no Priority set";
}

/**
 * @brief setting the radio value to unchecked;
 * @returns nothing;
 */
export function removeRadioValue() {
  const highEl = document.getElementById("high");
  const mediumEl = document.getElementById("medium");
  const lowEl = document.getElementById("low");

  highEl.checked = false;
  mediumEl.checked = false;
  lowEl.checked = false;
}

export function deleteTask(e) {
  const btn = e.target;
  // console.log);
  btn.parentElement.parentElement.remove();
  // console.log(btn);
  // console.log(btn.parent);
  // btn.parent?.remove();
  // btn.parent.remove();
  // e.remove();
  // console.log();
  // const taskBox = document.querySelector(".task-box");
  // taskBox.remove();
}
export function editTask(e) {
  console.log(e);
  const editBtn = e.target;
  const edit = editBtn.parentElement.parentElement;

  const taskInputBox = edit.firstChild;
  const date = taskInputBox.nextElementSibling;
  const dateInput = date.firstChild;
  dateInput.readOnly = false;
  dateInput.focus();

  const taskName = taskInputBox.childNodes[1];
  taskName.readOnly = false;
  taskName.focus();
  taskName.style.borderBottom = "yellow 1px dotted";
}
export function saveEditedTask(e) {
  const editBtn = e.target;
  const edit = editBtn.parentElement.parentElement;

  const taskInputBox = edit.firstChild;
  const date = taskInputBox.nextElementSibling;
  const dateInput = date.firstChild;
  dateInput.readOnly = true;
  dateInput.blur();

  const taskName = taskInputBox.childNodes[1];
  taskName.readOnly = true;
  taskName.blur();
  taskName.style.borderBottom = "transparent";
}
