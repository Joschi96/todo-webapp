import {format, parseISO, differenceInDays } from 'date-fns';
import lists from './list';
import todos from './todo';

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
                <div class="list-name">${list.title}</h3>
                <button id="edit-btn"><span class = "material-symbols-rounded" id="edit-icon">edit_note</span></button>
            `;
            } else {
                listCard.innerHTML = `
                <div class="list-name">${list.title}</h3>
                <button id="edit-btn"><span class = "material-symbols-rounded" id="edit-icon">edit_note</span></button>
                <button id="delete-btn"><span class = "material-symbols-rounded" id="delete-icon">delete</span></button>
            `;
            }
            listsContainer.appendChild(listCard);
        });
    }

    function showTodos(tab, listIndex) {
        const todoList = document.querySelector('.todo-list');
        todoList.innerHTML = '';
        const selectedList = lists.listsArray[listIndex];
        selectedList.todos.forEach((todo, index) => {
            const todoItem = document.createElement('div');
            todoItem.classList.add('todo-item');
            todoItem.setAttribute('data-index', index);
            if (tab === 'all' || tab === 'list-card') {
                todoItem.innerHTML = `
                <div class="todo-header">
                    <div class="todo-title">${todo.title}</div>
                    <div class="todo-due-date">${format(parseISO(todo.dueDate), 'dd/MM/yyyy')}</div>
                </div>
            `;
            } else if (tab === 'today') {
                if (differenceInDays(parseISO(todo.dueDate), new Date()) === 0) {
                    todoItem.innerHTML = `
                    <div class="todo-header">
                        <div class="todo-title">${todo.title}</div>
                        <div class="todo-due-date">${format(parseISO(todo.dueDate), 'dd/MM/yyyy')}</div>
                    </div>
                `;
                }
            }
            todoList.appendChild(todoItem);
        }
        );}
        

    return {
        showLists,
    };
})();

export default dom;