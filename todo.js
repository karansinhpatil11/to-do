
let taskList = [];


document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput').value;
    const priority = document.getElementById('prioritySelect').value;

    if (taskInput.trim() !== '') {
    
        taskList.push({
            task: taskInput,
            priority: priority
        });

      
        document.getElementById('taskInput').value = '';

        displayTasks();
    }
});


function displayTasks() {
    const taskListContainer = document.getElementById('taskList');

    taskList.sort((a, b) => {
        const priorityOrder = { 'high': 1, 'medium': 2, 'low': 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    taskListContainer.innerHTML = '';

 
    taskList.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task-item');

    
        switch (task.priority) {
            case 'high':
                taskElement.classList.add('high-priority');
                break;
            case 'medium':
                taskElement.classList.add('medium-priority');
                break;
            case 'low':
                taskElement.classList.add('low-priority');
                break;
        }

        taskElement.innerHTML = `
            <span><strong>Task:</strong> ${task.task}</span>
        `;

        taskListContainer.appendChild(taskElement);
    });
}
