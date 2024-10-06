// Import styles
import './styles/styles.css';
import '/node_modules/modern-normalize/modern-normalize.css';
import dom from './modules/ui.js';
import lists from './modules/list.js';
import staticHtml from './modules/staticHtml.js';
import { loadData,saveData } from './modules/storage.js';
import eventHandler from './modules/eventHandler.js';
import activeTab from './modules/tabHandler.js';

// Render static UI on page load
//loadData('lists');
staticHtml.initializeHtml();
saveData('lists',lists.listsArray);
dom.showLists();


eventHandler.addTabSwitchingEvent();
eventHandler.addListCardEvent();
activeTab.setActiveTab('all');
