const tasksContainerElement: HTMLElement = document.querySelector(".todo__container--tasks");
const taskTitleInputElement: HTMLInputElement = document.querySelector("#task-title");
const addButtonElement: HTMLButtonElement = document.querySelector("#task-add");

type Category = "linux" | 'react' | 'study' | 'gym' | 'general';

interface  Task {
    title: string;
    done: boolean;
    category?: Category;
}

const categories: Category[] = ["linux", "react", "study", "gym", "general"]

const tasks: Task[] = [
    {
        title: "Study linux terminal",
        done: false,
        category: "linux",
    },
    {
        title: "Study React",
        done: false,
        category: "react",
    },
    {
        title: "Study TypeScript",
        done: false,
        category: "study",
    },
    {
        title: "Train at gym",
        done: false,
        category: 'gym',
    },
    {
        title: "Make a food",
        done: false,
    },
];

const render = () => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement: HTMLElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const id: string = `task-${index}`;

        const labelElement: HTMLLabelElement = document.createElement('label');
        labelElement.innerText = task.title;
        labelElement.setAttribute("for", id);

        const checkboxElement: HTMLInputElement = document.createElement("input");
        checkboxElement.type = 'checkbox';
        checkboxElement.name = task.title;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", () => {
            task.done = !task.done;
        })

        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);

        tasksContainerElement.appendChild(taskElement);
    });
};

const addTask = (task: Task) => {
    tasks.push(task)
};

addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault();
    addTask({ title: taskTitleInputElement.value, done: false });
    render();
});

render()