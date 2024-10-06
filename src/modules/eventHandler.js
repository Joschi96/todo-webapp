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


    return {
        addTabSwitchingEvent,
    };

})();

export default eventHandler;