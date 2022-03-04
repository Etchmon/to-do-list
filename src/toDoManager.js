import { displayController } from "./displayController";
// Export auto running toDoManager module
// -----Functions to add-------
// create/removeProject, create/removeToDo, getProject, changeProject, editToDo, deleteToDo

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

    // function createProject(e) {
    //     // create a class Project that includes title and empty array
    //     e.preventDefault();

    //     const data = new Project()
    // }

    return { addToDo, getToDos }

})();