// Handles the creation and management of individual todo items
// Methods: functions to edit, toggle completion status, and mark as important

import dom from './ui.js';
import lists from './list.js';
import { loadData, saveData } from './storage.js';

const todos = (() => {
  class Todo {
    constructor(title, description, dueDate, important, listIndex, todoIndex) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.important = important;
      this.listIndex = listIndex;
      this.todoIndex = todoIndex;
      this.isComplete = false;
    }
  }

  function addTodo(title, description, dueDate, important, listIndex, todoIndex) {
    // logic to add todo item
    const todo = new Todo(title, description, dueDate, important, listIndex, todoIndex);

    lists.listsArray[listIndex].todos.push(todo);
    dom.getTodos('list-card', listIndex);
  }

  function editTodo(title, description, dueDate, important, listIndex, todoIndex) {
    // logic to edit todo item
    lists.listsArray[listIndex].todos[todoIndex].title = title;
    lists.listsArray[listIndex].todos[todoIndex].description = description;
    lists.listsArray[listIndex].todos[todoIndex].dueDate = dueDate;
    lists.listsArray[listIndex].todos[todoIndex].important = important;
    dom.getTodos('list-card', listIndex);
  }

  function deleteTodo(listIndex, todoIndex) {
    // logic to delete todo item
    if(todoIndex > -1) {
      lists.listsArray[listIndex].todos.splice(todoIndex, 1);
      dom.getTodos('all');
    }
  }

  function toggleComplete(listIndex, todoIndex, selectedTab) {
    // logic to toggle completion status
    if (lists.listsArray[listIndex] && lists.listsArray[listIndex].todos[todoIndex]) {
      if (lists.listsArray[listIndex].todos[todoIndex].isComplete === false) {
        lists.listsArray[listIndex].todos[todoIndex].isComplete = true;
      } else {
        lists.listsArray[listIndex].todos[todoIndex].isComplete = false;
      }

      dom.showTodos(selectedTab);
    } else {
      console.error('Invalid listIndex or todoIndex');
    }

    saveData('lists', lists.listsArray);
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