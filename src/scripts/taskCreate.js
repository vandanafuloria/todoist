/**
 * @brief Represents a Task {taskName, dueDate}
 * @param {*} taskName
 * @param {*} dueDate
 */
export function Task(taskName, dueDate, priority) {
  this.taskName = taskName;
  this.dueDate = dueDate;
  this.priority = priority;
}
export function selectedPriority() {
  const radios = document.getElementsByName("priority");

  for (let el of radios) {
    if (el.checked) return el.value;
  }
  return "no Priority set";
}
