const tasksContainerElement: HTMLElement = document.querySelector(".todo__container--tasks");
const taskTitleInputElement: HTMLInputElement = document.querySelector("#task-title");
const addButtonElement: HTMLButtonElement = document.querySelector("#task-add");

const tasks: string[] = ["Study linux terminal", "Study React", "Study TypeScript", "Train at gym", "Make a food"];

const render = () => {
    tasks.forEach(task => {
        const taskElement: HTMLElement = document.createElement("li");
        taskElement.innerText = task;
        tasksContainerElement.appendChild(taskElement)
    });
};

const addTask = (task: string) => {
    tasks.push(task)
}
addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault();
})

render()