import './reset.css';
import './style.css';
import { displayController } from './displayController';
import { toDoManager } from './toDoManager';


displayController.createDom();

displayController.querySelector('#button').onclick = toDoManager.addToDo;

// displayController.querySelector('#button').addEventListener('click', toDoManager.addToDo);


