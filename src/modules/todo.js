// Handles the creation and management of individual todo items
// Methods: functions to edit, toggle completion status, and mark as important

import dom from './ui.js';
import lists from './list.js';
import { loadData, saveData } from './storage.js';
import activeTab from './tabHandler.js';

const todos = (() => {
  
  const getTodoIndexCounter = (listIndex) => lists.listsArray[listIndex] ? lists.listsArray[listIndex].todos.length : 0;
  
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

  function addTodo(title, description, dueDate, important, listIndex) {
    const todoIndex = getTodoIndexCounter(listIndex);
    const todo = new Todo(title, description, dueDate, important, listIndex, todoIndex);

    lists.listsArray[listIndex].todos.push(todo);
    saveData('lists', lists.listsArray);
    dom.showTodos(activeTab.getActiveTab());
  }

  function editTodo(title, description, dueDate, important, listIndex, todoIndex) {
    if (lists.listsArray && lists.listsArray[listIndex] && lists.listsArray[listIndex].todos) {
      if (lists.listsArray[listIndex].todos[todoIndex]) {
        lists.listsArray[listIndex].todos[todoIndex].title = title;
        lists.listsArray[listIndex].todos[todoIndex].description = description;
        lists.listsArray[listIndex].todos[todoIndex].dueDate = dueDate;
        lists.listsArray[listIndex].todos[todoIndex].listIndex = listIndex;
        lists.listsArray[listIndex].todos[todoIndex].important = important;
  
        saveData('lists', lists.listsArray);
        dom.showTodos(activeTab.getActiveTab());
      } else {
        console.error(`Todo at index ${todoIndex} is undefined`);
      }
    } else {
      console.error('Invalid listIndex or todos array is undefined');
    }
  }

  function deleteTodo(listIndex, todoIndex) {
    if(todoIndex > -1) {
      lists.listsArray[listIndex].todos.splice(todoIndex, 1);
      for (let i = todoIndex; i < lists.listsArray[listIndex].todos.length; i++) {
        lists.listsArray[listIndex].todos[i].todoIndex = i;
      }

      saveData('lists', lists.listsArray);
      dom.showTodos(activeTab.getActiveTab());
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

  function markImportant(listIndex, todoIndex) {
    // logic to mark as important
    lists.listsArray[listIndex].todos[todoIndex].important = !lists.listsArray[listIndex].todos[todoIndex].important;

    saveData('lists', lists.listsArray);
    dom.showTodos(activeTab.getActiveTab());
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