// Manage collections of todo items
import dom from './ui.js';

const lists = (() => {
  let listsArray = [];

  if(localStorage.getItem('lists') === null) {
    listsArray = [
      {
        title: 'My Tasks',
        todos: [
          {
            title: 'Task 1',
            description: 'Description of task 1',
            dueDate: '2021-07-01',
            important: false,
            isComplete: false,
            projectId: 0
          },
          {
            title: 'Task 2',
            description: 'Description of task 2',
            dueDate: '2021-07-02',
            important: true,
            isComplete: false,
            projectId: 0
          }
        ]
      }
    ];
  } else {
    const listsFromStorage = JSON.parse(localStorage.getItem('lists'));
    listsArray = listsFromStorage;
  }

  class List {
    constructor(title) {
      this.title = title;
      this.todos = [];
    }
  }

  function addList(title) {
    const list = new List(title);
    listsArray.push(list);
    dom.showLists();
  }

  function deleteList(listIndex) {
    if (listIndex > -1) {
      listsArray.splice(listIndex, 1);
    }
    dom.showLists();
  }

  function editList(listIndex, title) {
    listsArray[listIndex].title = title;
    dom.showLists();
  }

  return {
    listsArray,
    addList,
    deleteList,
    editList,
  };
})();

export default lists;