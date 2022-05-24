import {Category, Task} from "./types/types";
import {render} from "./helpers/render-tasks-helpers.js";
import {renderCategories} from "./helpers/render-categories-helpers.js";

const tasksContainerElement: HTMLElement = document.querySelector(".todo__container--tasks");
const taskTitleInputElement: HTMLInputElement = document.querySelector("#task-title");
const addButtonElement: HTMLButtonElement = document.querySelector("#task-add");
const categoriesContainerElement: HTMLElement = document.querySelector(".todo__container--categories");

let selectedCategory: Category;

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

const addTask = (task: Task) => {
    taskTitleInputElement.value = "";
    tasks.push(task)
};

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
}

addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault();
    addTask({title: taskTitleInputElement.value, done: false, category: selectedCategory,});
    render(tasks, tasksContainerElement);
});

renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, tasksContainerElement);