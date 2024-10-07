import  dom  from './ui.js';
import { saveData, loadData } from './storage.js';
import  lists  from './list.js';

const activeTab = (() => {
    let activeTab = 'all';

    function updateTabHeader(tab) {
        const mainContentHeader = document.querySelector('.main-content-header').firstElementChild;
        mainContentHeader.textContent = tab.charAt(0).toUpperCase() + tab.slice(1);
    }

    function setActiveTab(tab) {
        const selectableTabs = document.querySelectorAll('.list-name, .nav-btn.tab');

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
    
        updateTabHeader(activeTab);
        saveData('lists', lists.listsArray);
        dom.showTodos(activeTab);
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