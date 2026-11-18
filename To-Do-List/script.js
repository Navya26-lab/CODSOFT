
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function updateTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');

        if (task.completed) {
            li.classList.add('completed');
        }

        li.innerHTML = `
            <div class="task-details">
                <strong>${task.title}</strong>
                <p>${task.description || 'No description'}</p>
                <p>Due: ${task.dueDate} | Priority: ${task.priority}</p>
            </div>
            <div>
                <button onclick="toggleCompletion(${index})">
                    ${task.completed ? 'Undo' : 'Complete'}
                </button>
                <button class="edit" onclick="editTask(${index})">Edit</button>
                <button class="delete" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
    const title = document.getElementById('taskTitle').value.trim();
    const description = document.getElementById('taskDescription').value.trim();
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;

    if (title) {
        const newTask = {
            title,
            description,
            dueDate,
            priority,
            completed: false
        };

        tasks.push(newTask);
        updateTaskList();

        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDescription').value = '';
        document.getElementById('dueDate').value = '';
        document.getElementById('priority').value = 'low';
    } else {
        alert('Please provide a task title.');
    }
}

function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
}

function editTask(index) {
    const task = tasks[index];

    const newTitle = prompt('Edit task title:', task.title);
    const newDescription = prompt('Edit task description:', task.description);
    const newDueDate = prompt('Edit due date:', task.dueDate);
    const newPriority = prompt('Edit priority (low, medium, high):', task.priority);

    if (newTitle) {
        tasks[index] = {
            ...task,
            title: newTitle,
            description: newDescription,
            dueDate: newDueDate,
            priority: newPriority
        };

        updateTaskList();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

updateTaskList();
