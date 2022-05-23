const tasksContainerElement = document.querySelector(".todo__container--tasks");
const taskTitleInputElement = document.querySelector("#task-title");
const addButtonElement = document.querySelector("#task-add");
const tasks = ["Study linux terminal", "Study React", "Study TypeScript", "Train at gym", "Make a food"];
const render = () => {
    tasks.forEach(task => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task;
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
});
render();
