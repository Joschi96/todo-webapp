import  dom  from './ui.js';
import { saveData, loadData } from './storage.js';
import  lists  from './list.js';

const activeTab = (() => {
    let activeTab = 'all';

    function setActiveTab(tab) {
        const filterTabs = document.querySelectorAll('.nav-btn');
        const listTabs = document.querySelectorAll('.list-name');
        const listCards = document.querySelectorAll('.list-card');

        filterTabs.forEach((tab) => {
            tab.classList.remove('active');
        });
        listCards.forEach((tab) => {
            tab.classList.remove('active');
        });

        activeTab = tab;

        filterTabs.forEach((tab) => {
            if(tab.getAttribute('data-title') === activeTab) {
                tab.classList.add('active');
            }
        });
        listTabs.forEach((tab) => {
            if(tab.textContent === activeTab) {
            const listCard = tab.closest('.list-card');
            if (listCard) {
                listCard.classList.add('active');
            }
            }
        });

        saveData('lists', lists.listsArray);
        //dom.getTodos(activeTab);
    }

    function getActiveTab() {
        return activeTab;
    }

    return {
        setActiveTab,
        getActiveTab,
    };
})();

export default activeTab;