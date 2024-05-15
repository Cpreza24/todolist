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
    deleteButton.className = 'deleteBtn'
    taskCheck.type = 'checkbox';
    newTask.appendChild(taskCheck);
    newTask.appendChild(taskValue);
    newTask.appendChild(deleteButton);
    taskItems.appendChild(newTask);
}

removeTask = document.querySelector('.deleteBtn');
//console.log(removeTask.classList);

taskList = document.querySelector('.taskItems');
taskList.addEventListener('click', e => {
    if(e.target.type === 'submit') {
        removeTask.parentNode.remove();
        console.log('button clicked', removeTask.parentNode);
    } else {
        console.log(e.target.type)
    }
})

// for(let i = 0; i <= taskItems.length; i++) {
//     console.log(i)
// }
// console.log(taskItems.length);



//do i have to iterate through the array or loop through the buttons?
//mu delete button only deletes the first item not the selecled item
// I have to somehow add an event listener to the button that was added in the LI element. 