// Handles the creation and management of individual todo items
// Methods: functions to edit, toggle completion status, and mark as important

import dom from './ui.js';
import lists from './list.js';

const todos = (() => {
  class Todo {
    constructor(title, description, dueDate, important, listId, todoId) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.important = important;
      this.listId = listId;
      this.todoId = todoId;
      this.isComplete = false;
    }
  }

  function addTodo(title, description, dueDate, important, listId, todoId) {
    // logic to add todo item
    const todo = new Todo(title, description, dueDate, important, listId, todoId);

    lists.listsArray[listId].todos.push(todo);
    dom.getTodos('list-card', listId);
  }

  function editTodo(title, description, dueDate, important, listId, todoId) {
    // logic to edit todo item
    lists.listsArray[listId].todos[todoId].title = title;
    lists.listsArray[listId].todos[todoId].description = description;
    lists.listsArray[listId].todos[todoId].dueDate = dueDate;
    lists.listsArray[listId].todos[todoId].important = important;
    dom.getTodos('list-card', listId);
  }

  function deleteTodo(listId, todoId) {
    // logic to delete todo item
    if(todoId > -1) {
      lists.listsArray[listId].todos.splice(todoId, 1);
      dom.getTodos('all');
    }
  }

  function toggleComplete(listId, todoId, selectedTab) {
    // logic to toggle completion status
    let clickedTab;

    if(lists.listsArray[listId].todos[todoId].isComplete === false) {
      lists.listsArray[listId].todos[todoId].isComplete = true;
    } else {
      lists.listsArray[listId].todos[todoId].isComplete = false;
    }

    if(selectedTab.classList.contains('list-card')) {
      clickedTab = 'list-card';
    } else {
      clickedTab = selectedTab.getAttribute('id');
    }

    dom.getTodos(clickedTab, listId);
  }

  function markImportant() {
    // logic to mark as important
  }

  return {
    addTodo,
    editTodo,
    deleteTodo,
    toggleComplete,
    markImportant
  };
})();

export default todos;