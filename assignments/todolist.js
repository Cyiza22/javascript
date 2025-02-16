const TodoList = [];
function add_task(tittle, description){
    TodoList.push({tittle, description, completed: false})
    console.log(`added ${tittle} with the description ${description}`)
}
function display(category){
    const tasks =TodoList.filter(task => task.category = category)
    if(tasks.length === 0){
        console.log('this category does not exist')
    }else{
        tasks.forEach(task =>{console.log(`- ${task.tittle} with description ${task.description}`)})
    }
}
function mark_complete(tittle){
    work = TodoList.find(task => task.tittle = tittle);
    if(!work){
        console.log('task not found')
    }else if(work.completed === true){
        console.log('task is already completed')
    }else{
        work.completed = true;
        console.log(`${work.tittle} just got completed completed`)
    }
}
function remove_task(tittle){
    work = TodoList.find(task => task.tittle = tittle);
    if(!work){
        console.log('task not found')
    } else{
        TodoList.splice(TodoList.indexOf(work), 1)
        console.log(`${work.tittle} just got removed`)
    }
}


add_task('javascript', 'study');
add_task('java', 'study');
add_task('python', 'study');
add_task('walk', 'sport');
display('study');
mark_complete('javascript');
remove_task('javascript')
