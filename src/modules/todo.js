// Handles the creation and management of individual todo items
// exports a factory function that creates a new todo item with properties title, description, dueDate, priority, and isComplete
// Methods: functions to edit, toggle completion status, and mark as important

export default function TodoItem(title, description, dueDate, priority, isComplete = false, list) {
  return {
    title,
    description,
    dueDate,
    priority,
    isComplete,
    list,
    toggleCompletion() {
      this.isComplete = !this.isComplete;
    },
    toggleImportant() {
      this.priority = !this.priority;
    },
    editTitle(newTitle) {
      this.title = newTitle;
    },
    editDescription(newDescription) {
      this.description = newDescription;
    },
    editDueDate(newDueDate) {
      this.dueDate = newDueDate;
    },
  };
}