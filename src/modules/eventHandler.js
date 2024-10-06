import activeTab from './tabHandler.js';

const eventHandler = (() => {
    // Add event listener to tabswitching buttons "nav-btn"
    function addTabSwitchingEvent() {
        const filterTabs = document.querySelectorAll('.nav-btn');
        filterTabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                activeTab.setActiveTab(tab.getAttribute('data-title'));
            });
        });
    }

    // Add event listener to list cards "list-card"
    function addListCardEvent() {
        const listCards = document.querySelectorAll('.list-card');
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

    return {
        addTabSwitchingEvent,
        addListCardEvent,
    };

})();

export default eventHandler;