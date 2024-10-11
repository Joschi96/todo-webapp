import activeTab from './tabHandler.js';
import todo from './todo.js';
import dialog from './dialog.js';
import lists from './list.js';
import { format, parse, parseISO } from 'date-fns';

const eventHandler = (() => {
// Add event listener to tabswitching buttons
    function addTabSwitchingEvent() {
        const filterTabs = document.querySelectorAll('.nav-btn');
        filterTabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                activeTab.setActiveTab(tab.getAttribute('data-title'));
            });
        });
    }

    function addStaticDialogButtonsEvents() {
        const dialogButtons = document.querySelectorAll('.add-btn');
        dialogButtons.forEach((button) => {
            button.addEventListener('click', () => {
                if (button.id === 'add-btn') {
                    dialog.openAddListDialog();
                } else if (button.id === 'add-todo-btn') {
                    dialog.openAddTodoDialog();
                }
            });
        });
    }

    function addTodoCardElementsEvents() {
        const todoCards = document.querySelectorAll('.todo-card');
        todoCards.forEach((card) => {
            card.addEventListener('click', (e) => {
                const targetButton = e.target.closest('button') || (e.target.classList.contains('material-symbols-rounded') ? e.target : null);
                if (targetButton && targetButton.id === 'edit-btn') {
                    const todoIndex = e.target.closest('.todo-card').getAttribute('data-index');
                    const listIndex = e.target.closest('.todo-card').getAttribute('data-list-index');
                    const todo = lists.listsArray[listIndex].todos[todoIndex];
                    dialog.openEditTodoDialog(todo.title, todo.description, todo.dueDate, todo.listIndex, todo.important);
                    // Set the data-index attribute on the dialog for later use
                    const dialogElement = document.querySelector('dialog');
                    dialogElement.setAttribute('data-index', todoIndex);
                } else if (targetButton && targetButton.id === 'delete-btn') {
                    const todoIndex = e.target.closest('.todo-card').getAttribute('data-index');
                    const listIndex = e.target.closest('.todo-card').getAttribute('data-list-index');
                    todo.deleteTodo(listIndex, todoIndex);
                } else if (e.target.id === 'todo-checkbox' || e.target.classList.contains('todo-title')) {
                    const todoIndex = e.target.closest('.todo-card').getAttribute('data-index');
                    const listIndex = e.target.closest('.todo-card').getAttribute('data-list-index');
                    todo.toggleComplete(listIndex, todoIndex, activeTab.getActiveTab());
                } else if (targetButton && targetButton.id === 'details-btn') {
                    const todoIndex = e.target.closest('.todo-card').getAttribute('data-index');
                    const listIndex = e.target.closest('.todo-card').getAttribute('data-list-index');
                    const todo = lists.listsArray[listIndex].todos[todoIndex];
                    dialog.openShowDetailsDialog(todo.title, todo.description, todo.dueDate, todo.important);
                } else if (targetButton && targetButton.id === 'mark-important') {
                    const todoIndex = e.target.closest('.todo-card').getAttribute('data-index');
                    const listIndex = e.target.closest('.todo-card').getAttribute('data-list-index');
                    todo.markImportant(listIndex, todoIndex);
                    // Change icon (.material-symbols-rounded) id to important-icon-empty/important-icon depending on important status
                    const icon = e.target.querySelector('.material-symbols-rounded');
                    if (icon) {
                        icon.id = lists.listsArray[listIndex].todos[todoIndex].important ? 'important-icon' : 'important-icon-empty';
                    }
                }
            });
        });
    }

    function addListCardElementsEvents() {
        const listCards = document.querySelectorAll('.list-card');
        listCards.forEach((card) => {
            card.addEventListener('click', (e) => {
                const targetButton = e.target.closest('button') || (e.target.classList.contains('material-symbols-rounded') ? e.target : null);
                if (targetButton && targetButton.id === 'edit-btn') {
                    const listIndex = e.target.closest('.list-card').getAttribute('data-index');
                    dialog.openEditListDialog(lists.listsArray[listIndex].title);
                    // Store the list index in the dialog for later use
                    dialog.setListIndex(listIndex);
                } else if (targetButton && targetButton.id === 'delete-btn') {
                    const listIndex = e.target.closest('.list-card').getAttribute('data-index');
                    lists.deleteList(listIndex);
                } else {
                    const listCard = e.target.closest('.list-card');
                    if (listCard) {
                        const listNameElement = listCard.querySelector('.list-name');
                        if (listNameElement) {
                            const listNameText = Array.from(listNameElement.childNodes)
                                .filter(node => node.nodeType === Node.TEXT_NODE)
                                .map(node => node.textContent.trim())
                                .join(' ')
                                .trim(); // Trim any leading or trailing whitespace
                            activeTab.setActiveTab(listNameText);
                        }
                    }
                }
            });
        });
    }

    function addDialogButtonsEvents(){
        // Add event listener to buttons inside different dialogs
        const dialog = document.querySelector('dialog');
        
        // Clone the dialog element to remove all existing event listeners
        const newDialog = dialog.cloneNode(true);
        dialog.parentNode.replaceChild(newDialog, dialog);

        newDialog.addEventListener('click', (e) => {
            if (e.target.id === 'dialog-cancel-btn') {
                newDialog.close();
            } else if (e.target.id === 'dialog-add-btn') {
                const title = document.querySelector('#todo-title').value;
                const description = document.querySelector('#todo-description').value;
                const dueDate = document.querySelector('#todo-due-date').value;
                const important = document.querySelector('#todo-important').checked;
                const listIndex = document.querySelector('#todo-list').value;
                todo.addTodo(title, description, dueDate, important, listIndex);
                newDialog.close();
            } else if (e.target.id === 'dialog-edit-btn') {
                const title = document.querySelector('#todo-title').value;
                const description = document.querySelector('#todo-description').value;
                const dueDate = document.querySelector('#todo-due-date').value;
                const important = document.querySelector('#todo-important').checked;
                const listIndex = document.querySelector('#todo-list').value;
                const todoIndex = newDialog.getAttribute('data-index');
                todo.editTodo(title, description, dueDate, important, listIndex, todoIndex);
                newDialog.close();
            } else if (e.target.id === 'dialog-edit-list-btn') {
                const listIndex = newDialog.getAttribute('data-list-index');
                if (listIndex !== null) {
                    lists.editListTitle(
                        listIndex,
                        document.querySelector('#list-title').value
                    );
                }
                newDialog.close();
            } else if (e.target.id === 'dialog-add-list-btn') {
                lists.addList(document.querySelector('#list-title').value);
                newDialog.close();
            }
        });
    }

    function addStaticElementsEvents(){
        addTabSwitchingEvent();
        addStaticDialogButtonsEvents();
    }

    return {
        addTodoCardElementsEvents,
        addStaticElementsEvents,
        addDialogButtonsEvents,
        addListCardElementsEvents,
    };

})();

export default eventHandler;