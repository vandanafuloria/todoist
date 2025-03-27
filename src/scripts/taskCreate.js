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

// export
