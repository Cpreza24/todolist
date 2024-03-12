let form = document.querySelector('.taskForm');
let inputBox = document.querySelector('.submitInput');
let tasksContainer = document.querySelector('.tasksContainer');
let inputValue;
let tasks = [];

inputBox.addEventListener('input', e => {
    inputValue = e.target.value;
    console.log(inputValue);
})

form.addEventListener('submit', e => {
    e.preventDefault();
    addNewTask(inputValue);
    tasks.push(inputValue);
    newTask.appendChild(inputValue[0]);
    inputBox.value = '';
    console.log(tasks);
})

function addNewTask(toDo) {
    let newTask = document.createElement('p');
    let taskValue = document.createTextNode(toDo);
    newTask.appendChild(taskValue);
    tasksContainer.appendChild(newTask);
}


