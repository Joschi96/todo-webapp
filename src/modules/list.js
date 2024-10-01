// Manage collections of todo items
// exports a factory function that creates a new list objects containing an array of todo items
// Methods: functions to add, remove, and retrieve todo items within a list

export default function TodoList(name) {
    const todos = [];
    return {
      name,
      todos,
      addTodo(todo) {
        this.todos.push(todo);
      },
      removeTodo(todoTitle) {
        // logic to remove todo item
        const index = this.todos.findIndex((todo) => todo.title === todoTitle);
        this.todos.splice(index, 1);
      },
      getTodos() {
        return this.todos;
      },
    };
}