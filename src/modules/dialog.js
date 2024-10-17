import eventHandler from "./eventHandler";
import lists from "./list";

// Module to handle dialog functionalities
const dialog = (() => {
    function openDialog(title, content, buttons) {
        const dialog = document.querySelector('dialog');
        dialog.innerHTML = `
                <h1>${title}</h1>
                <p>${content}</p>
                <div class="dialog-buttons">
                    ${buttons.map(button => `<button id="${button.id}" type="${button.type}">${button.text}</button>`).join('')}
                </div>
        `;
        dialog.showModal();
    }

    function setListIndex(listIndex) {
        const dialog = document.querySelector('dialog');
        dialog.setAttribute('data-list-index', listIndex);
    }

    function openAddTodoDialog() {
        openDialog('Add todo',
            `
            <input type="text" id="todo-title" placeholder="Title">
            <textarea id="todo-description" placeholder="Description"></textarea>
            <div class="todo-due-date">    
                <label for="todo-due-date">Due Date:</label>
                <input type="date" id="todo-due-date">
            </div>
            <div class="todo-list-container">
                <label for="todo-list">List:</label>
                <select id="todo-list">
                    ${lists.listsArray.map((list, index) => `<option value="${index}">${list.title}</option>`).join('')}
                </select>
            </div>
            <div class="important-checkbox">
                <input type="checkbox" id="todo-important">
                <label for="todo-important">Important</label>
            </div>
            `,
            [
                { id: 'dialog-cancel-btn', text: 'Cancel', type: 'button' },
                { id: 'dialog-add-btn', text: 'Add', type: 'submit' }
        ]);
        eventHandler.addDialogButtonsEvents();
    }

    function openEditTodoDialog(title, description, dueDate, important) {
        openDialog('Edit todo',
            `<input type="text" id="todo-title" value="${title}">
            <textarea id="todo-description" >${description}</textarea>
            <input type="date" id="todo-due-date" value="${dueDate}">
            <div class="todo-list-container">
                <label for="todo-list">List:</label>
                <select id="todo-list">
                    ${lists.listsArray.map((list, index) => `<option value="${index}">${list.title}</option>`).join('')}
                </select>
            </div>
            <div class="important-checkbox">
                <input type="checkbox" id="todo-important" ${important ? 'checked' : ''}>
                <label for="todo-important">Important</label>
            </div>
            `,
            [
                { id: 'dialog-cancel-btn', text: 'Cancel', type: 'button' },
                { id: 'dialog-edit-btn', text: 'Edit', type: 'submit' }
            ]);
        eventHandler.addDialogButtonsEvents();
    }

    function openShowDetailsDialog(title, description, dueDate, important) {
        openDialog('Details',
            `
            <div class="dialog-title-container">
                <p>Title:</p>
                <p>${title}</p>
            </div>
            <div class="dialog-description-container">
                <p>Description:</p>
                <p>${description}</p>
            </div>
            <p>Due Date: ${dueDate}</p>
            <p>${important ? 'Important' : ''}`,
            [
                { id: 'dialog-cancel-btn', text: 'Close', type: 'button' }
            ]);
            eventHandler.addDialogButtonsEvents();
    }

    function openAddListDialog() {
        openDialog('Add List',
            `<input type="text" id="list-title" placeholder="Title">`,
            [
                { id: 'dialog-cancel-btn', text: 'Cancel', type: 'button' },
                { id: 'dialog-add-list-btn', text: 'Add', type: 'submit' }
            ]);
            eventHandler.addDialogButtonsEvents();
    }

    function openEditListDialog(title) {
        openDialog('Edit List',
            `<input type="text" id="list-title" value="${title}">`,
            [
                { id: 'dialog-cancel-btn', text: 'Cancel', type: 'button' },
                { id: 'dialog-edit-list-btn', text: 'Edit', type: 'submit' }
            ]);
            eventHandler.addDialogButtonsEvents();
    }

    function closeDialog() {
        const dialog = document.querySelector('dialog');
        dialog.close();
    }

    return {
        openAddTodoDialog,
        openEditTodoDialog,
        openShowDetailsDialog,
        openAddListDialog,
        openEditListDialog,
        closeDialog,
        setListIndex,
    };
})();

export default dialog;