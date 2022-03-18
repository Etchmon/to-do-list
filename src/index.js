import './reset.css';
import './style.css';
import { displayController } from './displayController';
import { toDoManager } from './toDoManager';


displayController.createDom();

window.onload = displayController.checkLocalStorage();

// Things to do
// Add details button to task card that brings up a full view of the task including description and more precise date
// only use date-fns if a date is input



