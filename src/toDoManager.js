import { displayController } from "./displayController";
// Export auto running toDoManager module
// -----Functions to add-------
// create/removeProject, create/removeToDo, getProject, changeProject, editToDo, deleteToDo

export const toDoManager = (() => {

    let currentProject = 'Default';
    let projects = [];
    let todos = [];

    const changeProject = (newProject) => {
        currentProject = newProject;
    }

    const getProject = () => {
        return currentProject;
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

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     const data = new ToDo(this.title.value, this.description.value, this.dueDate.value, this.priority.value);
    //     addToDo(data);
    //     console.log('hi')
    // }

    const addToDo = (e) => {
        e.preventDefault();

        const title = displayController.querySelector('#task-title').value;
        console.log(title);
    }

    return { addToDo }

})();