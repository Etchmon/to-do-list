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




