// Manage collections of todo items
import dom from './ui.js';
import { loadData,saveData,deleteData } from './storage.js';

const lists = (() => {
  let listsArray = [];
  const loadedLists = loadData('lists');
  if (loadedLists === null || !loadedLists.some(list => list.title === 'My Tasks')) {
    listsArray = [
      {
        title: 'My Tasks',
        todos: [
          {
            title: 'Just hangin around',
            description: 'This is a longer description of a task, that really does not need any description.',
            dueDate: '2011-11-11',
            important: true,
            listIndex: 0,
            todoIndex: 0,
            isComplete: true
          },
          {
            title: 'Go to the Gym',
            description: 'Another longer description of my demo task, so you know that you can potentially fill this out for your own tasks.',
            dueDate: '2012-12-12',
            important: false,
            listIndex: 0,
            todoIndex: 1,
            isComplete: false
          }
        ]
      },
    ];
  } else {
    listsArray = loadData('lists');
  }


  class List {
    constructor(title) {
      this.title = title;
      this.todos = [];
    }
  }

  function getListLength() {
    return listsArray.length;
  }

  function addList(title) {
    const list = new List(title);
    listsArray.push(list);
    saveData('lists', listsArray);
    dom.showLists();
  }

  function deleteList(listIndex) {
    if (listIndex > -1) {
      listsArray.splice(listIndex, 1);
    
    for (let i = listIndex; i < listsArray.length; i++) {
      listsArray[i].listIndex = i;
    }
    saveData('lists', listsArray);
    dom.showLists();
    }
  }

  function editListTitle(listIndex, title) {
    listsArray[listIndex].title = title;
    saveData('lists', listsArray);
    dom.showLists();
  }

  return {
    listsArray,
    addList,
    deleteList,
    editListTitle,
    getListLength,
  };
})();

export default lists;