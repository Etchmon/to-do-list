import './reset.css';
import './style.css';
import { displayController } from './displayController';
import { toDoManager } from './toDoManager';


displayController.createDom();

document.querySelector('.add-btn').onclick = displayController.showForm;
document.querySelector('#submit-btn').onclick = toDoManager.addToDo;
document.querySelector('#close-btn').onclick = displayController.closeForm;

// displayController.querySelector('#button').addEventListener('click', toDoManager.addToDo);


