//your code here
const input = document.getElementById('newTodoInput');
const addButton = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// Function to add a new todo
function addTodo() {
    const taskText = input.value.trim();

    // Only add if input is not empty
    if (taskText !== "") {
        // Create the new li element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Append to the ordered list
        todoList.appendChild(li);

        // Clear the input field
        input.value = "";
    }
}

// Event listener for the button click
addButton.addEventListener('click', addTodo);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});
