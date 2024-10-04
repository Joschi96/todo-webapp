// Import styles
import './styles/styles.css';
import '/node_modules/modern-normalize/modern-normalize.css';
import dom from './modules/ui.js';
import staticHtml from './modules/staticHtml.js';
import { loadData } from './modules/storage.js';

// Render static UI on page load
loadData('lists');
staticHtml.initializeHtml();
