const tasksContainerElement: HTMLElement = document.querySelector(".todo__container--tasks");
const taskTitleInputElement: HTMLInputElement = document.querySelector("#task-title");
const addButtonElement: HTMLButtonElement = document.querySelector("#task-add");

const tasks: {
    name: string;
    done: boolean;
}[] = [
    {
        name: "Study linux terminal",
        done: false,
    },
    {
        name: "Study React",
        done: false,
    },
    {
        name: "Study TypeScript",
        done: false,
    },
    {
        name: "Train at gym",
        done: false,
    },
    {
        name: "Make a food",
        done: false,
    },
];

const render = () => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach(task => {
        const taskElement: HTMLElement = document.createElement("li");
        taskElement.innerText = task.name;
        tasksContainerElement.appendChild(taskElement)
    });
};

const addTask = (taskName: string) => {
    tasks.push({name: taskName, done: false})
}

addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault();
    addTask(taskTitleInputElement.value);
    render();
})

render()