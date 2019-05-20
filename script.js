var input
var newTask 
var taskList
var taskCompleted
var taskItem
var allTasks = [
   {text: "primera tarea", isPending: true},
  ]



//FUNCION DE TOGGLE PENDIENTE A COMPLETADA
var toggleTask = function(button){
  console.log(button.id)
  allTasks[button.id].isPending = !allTasks[button.id].isPending

  console.log(allTasks[button.id].isPending)
  printTasks()

}


// CODIGO PARA CAPTURAR EL INPUT Y AGREGARLO ABAJO

var printTasks = function(){
    taskList = document.getElementById('taskList')
    taskList.innerHTML = ''
    taskCompleted = document.getElementById('taskCompleted')
    allTasks.map(function(task, index){
      var taskItem = document.createElement('li')
      taskList.classList.add('task')
      taskItem.innerText = task.text  
      if (task.isPending)  {
        taskList.appendChild(taskItem)  
      } else {
        taskCompleted.appendChild(taskItem)
      }

//AGREGA BTN DE TAREA COMPLETADA
      var completeBtn = document.createElement('button')
        completeBtn.innerText = 'Completada'
        completeBtn.id = index
        completeBtn.onclick = function(){ toggleTask(this) }
        taskItem.appendChild(completeBtn)
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







