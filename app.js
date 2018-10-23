const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const  taskInput = document.querySelector('#task');



loadEventListeners();

// add task event
function loadEventListeners() {
form.addEventListener('submit', addTask);
//Remove task
taskList.addEventListener('click', removeTask);
//Clear task event
clearBtn.addEventListener('click', clearTasks);
//Filter tasks event
filter.addEventListener('keyup', filterTasks);
}

//add task
function addTask(e) {
    e.preventDefault();
    if(taskInput.value === "") {
        alert('add a task');
        return false;
    }

    //Create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fas fa-trash-alt"></i>';
    //Append the link to li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);

    taskInput.value = '';

    e.preventDefault();
}

// Remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
        
    }
}

//Clear tasks
function clearTasks() {
    //taskList.innerHTML = '';

    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

//Filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';

        } else {
            task.style.display = 'none';
        }
    });
}