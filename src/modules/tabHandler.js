const activeTab = (() => {
    let activeTab = 'all';

    function setActiveTab(tab) {
        const filterTabs = document.querySelectorAll('.nav-btn').getAttribute('data-title');
        const listTabs = document.querySelectorAll('.list-name').textContent;
        filterTabs.forEach((tab) => {
            tab.classList.remove('active');
        });
        listTabs.forEach((tab) => {
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
                tab.classList.add('active');
            }
        });

        dom.getTodos(activeTab);
    }

    function getActiveTab() {
        return activeTab;
    }

    return {
        setActiveTab,
        getActiveTab,
    };
})();