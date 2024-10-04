// Manage collections of todo items
import dom from './ui.js';
import { loadData } from './storage.js';

const lists = (() => {
  let listsArray = [];
  listsArray = loadData('lists');

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

  function editListTitle(listIndex, title) {
    listsArray[listIndex].title = title;
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