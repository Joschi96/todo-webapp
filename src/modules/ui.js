import {format, parseISO, differenceInDays } from 'date-fns';
import lists from './list';
import todos from './todo';
import eventHandler from './eventHandler';
import activeTab from './tabHandler';

const dom = (() => {

    function showLists() {
        const listsContainer = document.querySelector('.list-card-container');
        listsContainer.innerHTML = '';
        lists.listsArray.forEach((list, index) => {
            const listCard = document.createElement('div');
            listCard.classList.add('list-card');
            listCard.classList.add('tab');
            listCard.setAttribute('data-index', index);
            if (list.title === 'My Tasks') {
                listCard.innerHTML = `
                <div class="list-name">${list.title}</div>
                <div class="list-card-button-container">
                <button id="edit-btn"><span class = "material-symbols-rounded" id="edit-icon">edit_note</span></button>
                </div>
            `;
            } else {
                listCard.innerHTML = `
                <div class="list-name">${list.title}</div>
                <div class="list-card-button-container">
                <button id="delete-btn"><span class = "material-symbols-rounded" id="delete-icon">delete</span></button>
                <button id="edit-btn"><span class = "material-symbols-rounded" id="edit-icon">edit_note</span></button>
                </div>
            `;
            }
            listsContainer.appendChild(listCard);
        });
        eventHandler.addListCardElementsEvents();
        // if active tab is on a list that has been deleted, set active tab to 'all'
        if (activeTab.getActiveTab() !== 'all' && !lists.listsArray.find(list => list.title === activeTab.getActiveTab())){
            activeTab.setActiveTab('all');
        }
    }

    function showTodos(tab) {
        const todoList = document.querySelector('.todo-list');
        todoList.innerHTML = '';

        let filteredTodos = [];

        if (tab === 'all') {
            lists.listsArray.forEach(list => {
                filteredTodos = filteredTodos.concat(list.todos);
            });
        } else if (tab === 'today') {
            lists.listsArray.forEach(list => {
                filteredTodos = filteredTodos.concat(list.todos.filter(todo => differenceInDays(parseISO(todo.dueDate), new Date()) === 0));
            });
        } else if (tab === 'week') {
            lists.listsArray.forEach(list => {
            filteredTodos = filteredTodos.concat(list.todos.filter(todo => {
                const daysDifference = differenceInDays(parseISO(todo.dueDate), new Date());
                return daysDifference >= 0 && daysDifference <= 7;
            }));
            });
        } else if (tab === 'important') {
            lists.listsArray.forEach(list => {
                filteredTodos = filteredTodos.concat(list.todos.filter(todo => todo.important));
            });
        } else if (tab === 'completed') {
            lists.listsArray.forEach(list => {
                filteredTodos = filteredTodos.concat(list.todos.filter(todo => todo.isComplete));
            });
        } else {
            const selectedList = lists.listsArray.find(list => list.title === tab);
            if (selectedList) {
                filteredTodos = selectedList.todos;
            }
        }

        filteredTodos.forEach((todo, index) => {
            const todoCard = document.createElement('div');
            todoCard.classList.add('todo-card');
            todoCard.setAttribute('data-index', todo.todoIndex);
            todoCard.setAttribute('data-list-index', todo.listIndex);
            todoCard.innerHTML = `
            <button id="mark-important"><span class="material-symbols-rounded" id=${todo.important ? "important-icon" : "important-icon-empty"}>priority_high</span></button>
            <div class="todo-card-title-container">
                <input type="checkbox" id="todo-checkbox" ${todo.isComplete ? 'checked' : ''}></input>
                <h3 class = "todo-title">${todo.title}</h3>
            </div>
            <div class="todo-card-right">
            <div class="due-date-container">${format(parseISO(todo.dueDate),'dd-MM-yyyy')}</div>
            <div class="todo-card-button-container">
                <button id="edit-btn"><span class="material-symbols-rounded" id="edit-icon">drive_file_rename_outline</span></button>
                <button id="delete-btn"><span class="material-symbols-rounded" id="delete-icon">delete_outline</span></button>
                <button id="details-btn"><span class="material-symbols-rounded" id="details-icon">info</span></button>
            </div>
            </div>
            `;
            const todoTitle = todoCard.querySelector('.todo-title');
            if (todo.isComplete) {
                todoTitle.style.textDecoration = 'line-through';
            }
            todoList.appendChild(todoCard);
        });
        eventHandler.addTodoCardElementsEvents();
        
    }
        

    return {
        showLists,
        showTodos,
    };
})();

export default dom;