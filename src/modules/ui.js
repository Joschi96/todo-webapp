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

    return {
        showLists,
    };
})();

export default dom;