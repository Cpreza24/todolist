let form = document.querySelector('.taskForm');
let inputBox = document.querySelector('.submitInput');
let tasksContainer = document.querySelector('.tasksContainer');
let taskItems = document.querySelector('.taskItems');
let inputValue;
let tasks = [];

inputBox.addEventListener('input', e => {
    inputValue = e.target.value;
})

form.addEventListener('submit', e => {
    e.preventDefault();
    inputBox.value = '';
    addNewTask(inputValue);
    tasks.push(inputValue);
    console.log(tasks, tasks.length);
})

// Handles the creation of a new task when
function addNewTask(toDo) {
    let newTask = document.createElement('li');
    let taskValue = document.createTextNode(toDo);
    let taskCheck = document.createElement('input');
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    taskCheck.type = 'checkbox';
    newTask.appendChild(taskCheck);
    newTask.appendChild(taskValue);
    newTask.appendChild(deleteButton);
    taskItems.appendChild(newTask);
}


// I think i have to loop through the array now because im getting undefined. 