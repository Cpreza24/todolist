let form = document.querySelector('.taskForm');
let inputBox = document.querySelector('.submitInput');
let inputValue;
let tasks = [];

inputBox.addEventListener('input', e => {
    inputValue = e.target.value;
    console.log(inputValue);
})

form.addEventListener('submit', e => {
    e.preventDefault();
    tasks.push(inputValue);
    console.log(tasks);
    inputBox.value = '';
})







