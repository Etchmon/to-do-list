import './reset.css';
import './style.css';
import { displayController } from './displayController';
import { toDoManager } from './toDoManager';


displayController.createDom();

window.onload = displayController.checkLocalStorage();

// Things to do
// New color scheme, font, border styles, animations
// closeView menthod
// sort methods
// Navigate to project when project card is clicked
// Change grid style when showing project cards
// Add ability to use keys for input
// Reverse colors on forms



