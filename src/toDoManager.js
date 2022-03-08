import { displayController } from "./displayController";
// Export auto running toDoManager module
// -----To Do-------
// When creating a task in the all task page, add task to default project
// Create add project button, creates and object with a title and an array and adds it to the projects array onclick
// Add the title of projects to the the sidebar
// Display all the todos from the project when sidebar link is clicked
// Always add todo to default project as well as current project
// Edit Todos and project, recreate form filled with data from item being edited

export const toDoManager = (() => {

    let currentProject = 'Default';
    let projects = []; // an array of objects containing an array of objects
    let todos = []; // array of all todos

    const changeProject = (newProject) => {
        currentProject = newProject;
    }

    const getProject = () => {
        return currentProject;
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
        todos.push(data);
        console.log(todos);
        console.log(todos[0]);
        displayController.renderAll();
    }

    function removeToDo(e) {
        e.preventDefault();

        let num = this.getAttribute('key');
        todos.splice(num, 1);
        console.log(todos);
        displayController.renderAll();
    }

    function createProject(e) {
        // create a class Project that includes title and empty array
        e.preventDefault();

        const data = this;
    }

    return { addToDo, getToDos, removeToDo, createProject }

})();