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
            title: 'Enjoy my tea as much as my coding! 🍵',
            description: 'Longer description of my demo task, just to show you this surprisingly nice scrollbar and amazingly cute kitty ฅ(^◉ᴥ◉^)ฅ',
            dueDate: '2011-11-11',
            important: true,
            listIndex: 0,
            todoIndex: 0,
            isComplete: true
          },
          {
            title: 'Create magic through my mind, my heart and my keyboard.. 👩🏻‍💻',
            description: 'Another longer description of my demo task, just to show you this surprisingly nice scrollbar and cute little birdie ϵ( ‘Θ’ )϶♪♫',
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

  function addList(title) {
    const list = new List(title);
    listsArray.push(list);
    saveData('lists', listsArray);
    dom.showLists();
  }

  function deleteList(listIndex) {
    if (listIndex > -1) {
      listsArray.splice(listIndex, 1);
    }
    saveData('lists', listsArray);
    dom.showLists();
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
  };
})();

export default lists;