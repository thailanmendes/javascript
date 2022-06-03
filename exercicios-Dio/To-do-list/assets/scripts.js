var form = document.getElementById('task-form');
var taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();
	var inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

function addTask(description) {
	var taskContainer = document.createElement('div');
	var newTask = document.createElement('input');
	var taskLabel = document.createElement('label');
	var taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}