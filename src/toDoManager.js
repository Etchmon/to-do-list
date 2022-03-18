import { da } from "date-fns/locale";
import { get, times } from "lodash";
import { displayController } from "./displayController";
// Export auto running toDoManager module
// -----To Do-------
// Edit Todos and project, recreate form filled with data from item being edited

export const toDoManager = (() => {

    let currentProject = 'Default';
    let projects = [
        {
            title: "Default",
            array: []
        }
    ]; // an array of objects containing an array of objects
    let todos = projects[0].array; // array of default todos

    const changeProject = (newProject) => {
        currentProject = newProject;
    };

    const getProject = () => {
        return currentProject;
    };

    const getProjectsArray = () => {
        return projects;
    };

    const setLocalStorage = () => {
        localStorage.setItem('projects', JSON.stringify(projects));
    };

    const getLocalStorage = () => {
        projects = JSON.parse(localStorage.getItem('projects'));
    }

    class Project {
        constructor(title) {
            this.title = title,
                this.array = []
        };
    };

    class ToDo {
        constructor(title, description, dueDate, priority) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        };

        info() {
            console.log(this.title, this.description, this.dueDate, this.priority);
        };
    };

    const getToDos = () => {
        return todos;
    };

    function addToDo(e) {
        e.preventDefault();

        if (displayController.validateForm(this.parentElement) === false) {
            return;
        }

        const data = new ToDo(this.parentElement.title.value, this.parentElement.description.value, this.parentElement.dueDate.value, this.parentElement.priority.value);
        displayController.closeForm();

        if (currentProject != 'Default') {
            currentProject.array.push(data);
            displayController.renderProjectToDos();
        } else {
            projects[0].array.push(data);
            displayController.renderAll();
        };

        setLocalStorage();
    };

    function editTodo(e) {
        e.preventDefault();
        const element = this.parentElement.className;
        if (element === 'project-card') {
            const key = this.parentElement.getAttribute('key');
            const data = projects[key];

            displayController.editForm(data);
        } else if (currentProject != 'Default') {
            const key = this.parentElement.getAttribute('key');
            const project = getProject();

            const data = project.array[key];

            displayController.editForm(data);
        } else {
            const num = this.parentElement.getAttribute('key');
            const index = this.parentElement.getAttribute('pIndex');

            const data = projects[index].array[num];

            console.log(data);
            console.log(this);

            displayController.editForm(data);
        };

    };

    function submitEdit(e, data, title, description, dueDate, priority) {
        e.preventDefault();

        if (data.description === undefined) {
            data.title = title.value;

            displayController.closeForm();
            displayController.updateLinks();
            displayController.renderAllProjects();

            return;
        };

        data.title = title.value;
        data.description = description.value;
        data.dueDate = dueDate.value;
        data.priority = priority.value;

        displayController.closeForm();
        switch (currentProject) {
            case 'Default':
                displayController.renderAll();
                break;
            default:
                displayController.renderProjectToDos();
        };

        console.log(data);
        setLocalStorage();
    }

    function removeToDo(e) {
        e.preventDefault();

        let num = this.parentElement.getAttribute('key');
        let index = this.parentElement.getAttribute('pIndex');

        if (currentProject != 'Default') {
            const data = getProject();
            data.array.splice(num, 1);
            displayController.renderProjectToDos();
        } else {
            projects[index].array.splice(num, 1);
            displayController.renderAll();
        };

        setLocalStorage();
    };

    function createProject(e) {
        e.preventDefault();

        if (displayController.validateForm(this.parentElement) === false) {
            return;
        }

        const data = new Project(this.parentElement.title.value);
        projects.push(data);
        changeProject(data);
        console.log(currentProject);
        console.log(projects);
        this.parentElement.reset();
        displayController.closeForm();
        displayController.updateLinks();
        displayController.renderProjectToDos();

        setLocalStorage();
    };

    function removeProject(e) {
        e.preventDefault();

        let num = this.parentElement.getAttribute('key');
        const data = getProject();
        data.splice(num, 1);
        displayController.renderAllProjects();
        displayController.updateLinks();

        setLocalStorage();
    };

    return { addToDo, getToDos, removeToDo, createProject, getProject, getProjectsArray, changeProject, removeProject, editTodo, submitEdit, getLocalStorage, setLocalStorage }

})();