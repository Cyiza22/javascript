// Array to store tasks
const tasks = [];

// Function to add a task
function addTask(title, description, dueDate) {
  const task = {
    id: Date.now(), // Unique ID based on time
    title: title,
    description: description,
    dueDate: new Date(dueDate), // Convert string to Date object
    completed: false // Default is not completed
  };
  tasks.push(task); // Add task to the list
  console.log(`Added task: "${title}" with due date: ${dueDate}`);
}

// Function to display tasks sorted by due dates
function displayTasks() {
  if (tasks.length === 0) {
    console.log("No tasks available.");
    return;
  }

  // Sort tasks by due date
  const sortedTasks = tasks.slice().sort((a, b) => a.dueDate - b.dueDate);
  console.log("\nTasks sorted by due date:");
  sortedTasks.forEach(task => {
    console.log(`- ${task.title} (Due: ${task.dueDate.toDateString()}, Completed: ${task.completed})`);
  });
}

// Function to update a task
function updateTask(id, newTitle, newDescription, newDueDate) {
  const task = tasks.find(task => task.id === id);
  if (!task) {
    console.log("Task not found.");
    return;
  }

  // Update only if new values are provided
  if (newTitle) task.title = newTitle;
  if (newDescription) task.description = newDescription;
  if (newDueDate) task.dueDate = new Date(newDueDate);
  console.log(`Updated task with ID: ${id}`);
}

// Function to mark a task as completed
function completeTask(id) {
  const task = tasks.find(task => task.id === id);
  if (!task) {
    console.log("Task not found.");
    return;
  }
  task.completed = true;
  console.log(`Marked task as completed: "${task.title}"`);
}

// Function to delete a task
function deleteTask(id) {
  const index = tasks.findIndex(task => task.id === id);
  if (index === -1) {
    console.log("Task not found.");
    return;
  }
  const removedTask = tasks.splice(index, 1)[0];
  console.log(`Deleted task: "${removedTask.title}"`);
}

// Example usage
addTask("Study for exam", "Prepare for math and science tests", "2025-01-21");
addTask("Grocery shopping", "Buy milk, bread, and fruits", "2025-01-18");
displayTasks();
updateTask(tasks[0].id, "Study for final exam", null, "2025-01-23");
completeTask(tasks[1].id);
deleteTask(tasks[0].id);
displayTasks();
