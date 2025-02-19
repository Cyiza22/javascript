const taskSchedule = [];
function add_task(tittle, description, dueDate){
    taskSchedule.push({tittle, description, dueDate, completed: false})
    console.log(`added task with ${tittle} as title, ${description} as description, with duedate: ${dueDate} `)
}
function sort(dueDate){
    if (taskSchedule.length === 0) {
        console.log("No tasks available.");
    }
    const sortedTasks = taskSchedule.slice().sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    console.log("\nTasks sorted by due date:");
    sortedTasks.forEach(task => {
        console.log(`Title: ${task.tittle}, Description: ${task.description}, Due Date: ${task.dueDate}, Completed: ${task.completed}`);
    });

    
}
function update(tittle){
    const work = taskSchedule.find(task => task.tittle = tittle);
    if(!work){
        console.log('the task does not exist')
    }else if(work.completed === true){
        console.log('the task is already completed')
    }else{
        work.completed = true;
        console.log(`you just completed ${work.tittle} !!`)
    }

}
function remove_task(tittle){
    const work = taskSchedule.find(task => task.tittle = tittle);
    if(!work){
        console.log('task not found');
    }else{
        taskSchedule.splice(taskSchedule.indexOf(work), 1);
        console.log(`task ${work.tittle} removed`)
    }
}

add_task('java', 'description', '2-07-2020');
add_task('javascript', 'description', '2-06-2020');
add_task('python', 'description', '2-07-2020');
add_task('mu', 'description', '2-09-2020');
update('jamu');
update('appa');
remove_task('python');
sort()