import activeTab from './tabHandler.js';

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

    function addToggleCompleteEvent() {
        //const todoCheckbox = document.querySelector('#todo-checkbox');
        const todoCard = document.querySelector('.todo-card');
        todoCard.addEventListener('click', (e) => {
            if (e.target.id === 'todo-checkbox' || e.target.class === 'todo-title') {
                const todoIndex = e.target.closest('.todo-card').getAttribute('data-index');
                const listIndex = e.target.closest('.list-card').getAttribute('data-index');
                todos.toggleComplete(listIndex, todoIndex, activeTab.getActiveTab());
            }
        });
    }

    return {
        addTabSwitchingEvent,
        addToggleCompleteEvent,
    };

})();

export default eventHandler;