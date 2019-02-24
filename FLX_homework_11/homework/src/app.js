// UI Vars
const form = document.querySelector('.task-form');
const tasks = document.querySelector('.tasks');
const addTaskBtn = document.querySelector('.add-new-action');
const taskInput = document.querySelector('.task-input');
const checkedItem = document.querySelector('.checkbox');

let divTask;
let icon;
let iconDel;
let link;

loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addTask);
    form.addEventListener('input', inputCheck);
    tasks.addEventListener('click', removeTask);
    tasks.addEventListener('click', checkedTask);
}

function addTask (e) {
    if (taskInput.value === '') {
        alert('Please enter the task!');
    } else {
        // Creating Div El
        divTask = document.createElement('div');
        divTask.className = 'tasks-item';
        // Creating checkbox icon
        icon = document.createElement('i');
        icon.className = 'material-icons checkbox m-left';
        icon.innerText = 'check_box_outline_blank';
        divTask.appendChild(icon);
        divTask.appendChild(document.createTextNode(taskInput.value));
        // Creating Del Icon
        iconDel = document.createElement('i');
        iconDel.className = 'material-icons m-right';
        iconDel.innerText = 'delete';
        // Creating link
        link = document.createElement('a');
        link.className = 'delete-item m-right';
        link.appendChild(iconDel);

        divTask.appendChild(link);

        // Appending to the Tasks List
        tasks.appendChild(divTask);
        taskInput.value = '';
    }
    e.preventDefault();
}

function inputCheck () {
    if (taskInput.value === '') {
        addTaskBtn.disabled = true;
    } else {
        addTaskBtn.disabled = false;
    }
}

function removeTask (e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }
}

function checkedTask () {
    icon.innerText = 'check_box';
}