import eventHandler from "./eventHandler";

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

    function openAddTodoDialog() {
        openDialog('Add todo',
            `<input type="text" id="todo-title" placeholder="Title">
            <textarea id="todo-description" placeholder="Description"></textarea>
            <input type="date" id="todo-due-date">
            <input type="checkbox" id="todo-important">
            <label for="todo-important">Important</label>`,
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
            <input type="checkbox" id="todo-important" ${important ? 'checked' : ''}>
            <label for="todo-important">Important</label>`,
            [
                { id: 'dialog-cancel-btn', text: 'Cancel', type: 'button' },
                { id: 'dialog-edit-btn', text: 'Edit', type: 'submit' }
            ]);
        eventHandler.addDialogButtonsEvents();
    }

    function openShowDetailsDialog(title, description, dueDate, important) {
        openDialog('Details',
            `<p>Title: ${title}</p>
            <p>Description: ${description}</p>
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
                { id: 'dialog-edit-btn', text: 'Edit', type: 'submit' }
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
        closeDialog
    };
})();

export default dialog;