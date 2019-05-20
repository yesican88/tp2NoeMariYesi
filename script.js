var input
var newTask 
var taskList
var taskCompleted
var taskItem
var allTasks = [
   {text: "algo", isPending: true},
  ]


// CODIGO PARA CAPTURAR EL INPUT Y AGREGARLO ABAJO

var printTasks = function(){
    taskList = document.getElementById('taskList')
    taskList.innerHTML = ''
    taskCompleted = document.getElementById('taskCompleted')
    allTasks.map(function(task){
      var taskItem = document.createElement('li')
      taskList.classList.add('task')
      taskItem.innerText = task.text  
      if (task.isPending)  {
        taskList.appendChild(taskItem)  
      } else {
        taskCompleted.appendChild(taskItem)
      }
      
    })

  }

var addComment = function () {
    input = document.getElementById('taskInput');
    newTask = input.value;

    if (input) {
        input.value = '';
        allTasks.unshift({
            text: newTask,
            isPending: true
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

var itemBtn = document.createElement('button')
itemBtn.innerText = 'toggle'
itemBtn.onclick = function(){ toggleTask('this') }
taskItem.appendChild(itemBtn)





