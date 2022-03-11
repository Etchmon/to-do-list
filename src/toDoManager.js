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
    let todos = projects[0].array; // array of all todos

    const changeProject = (newProject) => {
        currentProject = newProject;
    };

    const getProject = () => {
        return currentProject;
    };

    const getProjectsArray = () => {
        return projects;
    };

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

        const data = new ToDo(this.parentElement.title.value, this.parentElement.description.value, this.parentElement.dueDate.value, this.parentElement.priority.value);
        this.parentElement.reset();
        displayController.closeForm();

        if (currentProject != 'Default') {
            currentProject.array.push(data);
            displayController.renderProjectToDos();
        } else {
            todos.push(data);
            displayController.renderAll();
        };
    };

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
    };

    function createProject(e) {
        e.preventDefault();

        const data = new Project(this.parentElement.projectTitle.value);
        projects.push(data);
        changeProject(data);
        console.log(currentProject);
        console.log(projects);
        this.parentElement.reset();
        displayController.closeForm();
        displayController.updateLinks();
        displayController.renderProjectToDos();
    };

    function removeProject(e) {
        e.preventDefault();

        let num = this.parentElement.getAttribute('key');
        const data = getProject();
        data.splice(num, 1);
        displayController.renderAllProjects();
        displayController.updateLinks();
    };

    return { addToDo, getToDos, removeToDo, createProject, getProject, getProjectsArray, changeProject, removeProject }

})();