const tasks = []; // Array to store task objects

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.querySelector('.listTasks');
const clearButton = document.createElement('button'); // Create the clear button element initially

clearButton.classList.add('clear-tasks'); // Add a CSS class for styling
clearButton.innerText = "Clear";
clearButton.addEventListener('click', clearTaskList); // Add event listener to clear tasks

function addTask() {
    const taskText = taskInput.value.trim(); // Trim whitespace

    if (taskText) {
        const newTask = {
            task_id: tasks.length, // Unique ID based on array length
            text: taskText,
            done: false, // Initially not completed
        };

        tasks.push(newTask); // Add task object to the array

        // Create task element in the DOM
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.dataset.taskId = newTask.task_id; // Add data-task-id

        // Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function () {
            doneTask(newTask.task_id); // Call doneTask on checkbox change
        });
        taskElement.appendChild(checkbox);

        // Task label
        const taskLabel = document.createElement('label');
        taskLabel.innerText = taskText;
        taskElement.appendChild(taskLabel);

        // Delete button (X icon with Font Awesome)
        const deleteButton = document.createElement('i');
        deleteButton.classList.add('fa-solid', 'fa-close');
        deleteButton.addEventListener('click', function () {
            deleteTask(newTask.task_id); // Call deleteTask on button click
        });
        taskElement.appendChild(deleteButton);

        taskList.appendChild(taskElement);

        taskInput.value = ''; // Clear input field after adding task

        // Update clear button visibility and position
        updateClearButton(); // Call updateClearButton to reposition the button
    }
}

function doneTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.task_id === taskId);
    if (taskIndex !== -1) { // Check if task exists
        tasks[taskIndex].done = !tasks[taskIndex].done; // Toggle done state

        const taskElement = taskList.querySelector(`[data-task-id="${taskId}"]`);
        taskElement.classList.toggle('completed'); // Update CSS class for styling

    }
    updateClearButton();
}

function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.task_id === taskId);
    if (taskIndex !== -1) { // Check if task exists
        tasks.splice(taskIndex, 1); // Remove task from array

        const taskElement = taskList.querySelector(`[data-task-id="${taskId}"]`);
        taskList.removeChild(taskElement); // Remove task element from DOM
    }
    updateClearButton();
}

// Add event listener to the form for submitting tasks
taskForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    addTask();
});

function clearTaskList() {
    // Confirm deletion with the user
    if (confirm("Are you sure you want to clear all tasks?")) {
        // Remove all tasks from the tasks array
        tasks.length = 0; // This effectively clears the array

        // Remove all task elements from the DOM
        taskList.innerHTML = ""; // Set the inner HTML to an empty string

        // Remove the "clear" button
        const clearButton = document.querySelector('.clear-tasks');
        if (clearButton) {
            clearButton.parentNode.removeChild(clearButton);
        }
    }
    updateClearButton();
}

// Add a "clear" button to the related div
const clearTasksContainer = document.querySelector('.tasks-container'); // Adjust selector as needed
if (clearTasksContainer) {
    const clearButton = document.createElement('button');
    clearButton.classList.add('clear-tasks'); // Add a CSS class for styling
    clearButton.innerText = "Clear";
    clearButton.addEventListener('click', clearTaskList);
    clearTasksContainer.appendChild(clearButton);
}

function updateClearButton() {
    // Check if there are any tasks in the list
    const hasTasks = tasks.length > 0;

    // Toggle clear button visibility based on task existence
    if (hasTasks) {
        if (taskList.contains(clearButton)) {
            // Move the existing button to the end
            taskList.appendChild(taskList.removeChild(clearButton));
        } else {
            taskList.appendChild(clearButton); // Append a new button if needed
        }
    } else {
        taskList.removeChild(clearButton); // Remove button if no tasks
    }
}

// Add event listener to the form for submitting tasks
taskForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    addTask();
});

// Call updateClearButton initially to handle any existing tasks
updateClearButton();