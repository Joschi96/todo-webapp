import  dom  from './ui.js';
import { saveData, loadData } from './storage.js';
import  lists  from './list.js';

const activeTab = (() => {
    let activeTab = 'all';

    function setActiveTab(tab) {
        const selectableTabs = document.querySelectorAll('.list-name, .nav-btn.tab');
        //const listTabs = document.querySelectorAll('.list-name');
        //const listCards = document.querySelectorAll('.list-card');
        const mainContentHeader = document.querySelector('.main-content-header').firstElementChild;

        selectableTabs.forEach((tab) => {
            if (tab.classList.contains('list-name')) {
            tab.closest('.list-card').classList.remove('active');
            }
            tab.classList.remove('active');
        });


        activeTab = tab;

        selectableTabs.forEach((tab) => {
            if (tab.getAttribute('data-title') === activeTab) {
            tab.classList.add('active');
            }
            if (tab.classList.contains('list-name') && tab.textContent === activeTab) {
            tab.closest('.list-card').classList.add('active');
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