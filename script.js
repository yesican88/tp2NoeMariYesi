var input
var newTask
var taskList
var allTasks = [
    {text: 'tarea de ejemplo', isCompleted: false},
]

// CODIGO PARA CAPTURAR EL INPUT Y AGREGARLO ABAJO

var printTasks = function(){
    taskList = document.getElementById('taskList')
    taskList.innerHTML = ''
    allTasks.map(function(task){
      var taskItem = document.createElement('li')
      taskItem.classList.add('task')
      taskItem.innerText = task.text    
      taskList.appendChild(taskItem)
    })
  }

var addComment = function () {
    input = document.getElementById('taskInput');
    newTask = input.value;

    if (input) {
        input.value = '';
        allTasks.unshift({
            text: newTask,
            isCompleted: false
        })
        console.log(allTasks)
        printTasks()
    }
}

var handleKeyPress = function (event) {
    if (event.code === 'Enter') {
        addComment()
    }
}