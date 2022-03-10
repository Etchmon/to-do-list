import { displayController } from "./displayController";
// Export auto running toDoManager module
// -----To Do-------
// Create add project button, creates and object with a title and an array and adds it to the projects array onclick
// Add the title of projects to the the sidebar
// Display all the todos from the project when sidebar link is clicked
// Always add todo to default project as well as current project
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
    }

    const getProject = () => {
        return currentProject;
    }

    const getProjectsArray = () => {
        return projects;
    }

    class Project {
        constructor(title) {
            this.title = title,
                this.array = []
        }
    }

    class ToDo {
        constructor(title, description, dueDate, priority) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        }

        info() {
            console.log(this.title, this.description, this.dueDate, this.priority);
        }
    }

    const getToDos = () => {
        return todos;
    }

    function addToDo(e) {
        e.preventDefault();

        const data = new ToDo(this.parentElement.title.value, this.parentElement.description.value, this.parentElement.dueDate.value);
        displayController.closeForm();

        if (currentProject != 'Default') {
            currentProject.array.push(data);
            displayController.renderProjectToDos();
        } else {
            todos.push(data);
            displayController.renderAll();
        }
    }

    function removeToDo(e) {
        e.preventDefault();

        let num = this.getAttribute('key');
        let index = this.getAttribute('pIndex');


        if (currentProject != 'Default') {
            const data = getProject();
            data.array.splice(num, 1);
            displayController.renderProjectToDos();
        } else {
            projects[index].array.splice(num, 1);
            displayController.renderAll();
        }
    }

    function createProject(e) {
        e.preventDefault();

        const data = new Project(this.parentElement.projectTitle.value);
        projects.push(data);
        changeProject(data);
        console.log(currentProject);
        console.log(projects);
        displayController.closeForm();
        displayController.updateLinks();
        displayController.renderProjectToDos();
        // Displayer controller function to change main-header to the project title
        // create a new sidebar link with the project title
        // render the array of todos from the current project
    }

    return { addToDo, getToDos, removeToDo, createProject, getProject, getProjectsArray, changeProject }

})();