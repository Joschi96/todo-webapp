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
                activeTab.setActiveTab(card.querySelector('.list-name').textContent);
            });
        });
    }

    return {
        addTabSwitchingEvent,
        addListCardEvent,
    };

})();

export default eventHandler;