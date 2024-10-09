import activeTab from './tabHandler.js';
import todo from './todo.js';
import dialog from './dialog.js';
import lists from './list.js';

const eventHandler = (() => {
// Add event listener to tabswitching buttons
    function addTabSwitchingEvent() {
        const filterTabs = document.querySelectorAll('.nav-btn');
        const listCards = document.querySelectorAll('.list-card');
        filterTabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                activeTab.setActiveTab(tab.getAttribute('data-title'));
            });
        });
        listCards.forEach((card) => {
            card.addEventListener('click', () => {
                const listNameElement = card.querySelector('.list-name');
                const listNameText = Array.from(listNameElement.childNodes)
                    .filter(node => node.nodeType === Node.TEXT_NODE)
                    .map(node => node.textContent.trim())
                    .join(' ');
                activeTab.setActiveTab(listNameText);
            });
        });
    }

    // function addToggleCompleteEvent() {
    //     //const todoCheckbox = document.querySelector('#todo-checkbox');
    //     const todoCard = document.querySelectorAll('.todo-card');
    //     todoCard.forEach((card) => {
    //         card.addEventListener('click', (e) => {
    //         if (e.target.id === 'todo-checkbox' || e.target.class === 'todo-title') {
    //             const todoIndex = e.target.closest('.todo-card').getAttribute('data-index');
    //             const listIndex = e.target.closest('.todo-card').getAttribute('data-list-index');
    //             todo.toggleComplete(listIndex, todoIndex, activeTab.getActiveTab());
    //         }
    //         });
    //     });
    // }

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
                    dialog.openEditTodoDialog(todo.title, todo.description, todo.dueDate, todo.important);
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

    function addStaticElementsEvents(){
        addTabSwitchingEvent();
        addStaticDialogButtonsEvents();
    }

    return {
        addTodoCardElementsEvents,
        addStaticElementsEvents
    };

})();

export default eventHandler;