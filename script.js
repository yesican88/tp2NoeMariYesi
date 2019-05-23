var input
var newTask 
var taskList
var taskCompleted
var taskItem
var allTasks = [  ]



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
    taskCompleted.innerHTML = ''
    allTasks.map(function(task, index){
      var taskItem = document.createElement('li')
      var buttons = document.createElement('div')
      buttons.classList.add('buttons')
      taskItem.classList.add('task')
      taskItem.innerText = task.text  
      if (task.isPending)  {
        taskList.appendChild(taskItem)  
      } else {
        taskCompleted.appendChild(taskItem)
      }

//AGREGA BTN DE TAREA COMPLETADA
      var completeBtn = document.createElement('a')
        //completeBtn.innerText = 'Complete'
        completeBtn.id = index
        completeBtn.href ='#'
        completeBtn.classList.add('complete')
        completeBtn.onclick = function(){ toggleTask(this) }
        taskItem.appendChild(completeBtn)
        //AGREGA BTN BORRAR TAREA
        var deleteBtn = document.createElement('a')
        //deleteBtn.innerText = 'Delete'
        deleteBtn.id = index
        deleteBtn.href ='#'
        deleteBtn.classList.add('delete')
        console.log(deleteBtn)
        deleteBtn.onclick = function (){deleteTask(this)}
        taskItem.appendChild(deleteBtn)
        
        var icon = document.createElement('svg')
        task.appendChild
        //icon.innerHTML = svg
        console.log (icon)
    })

    if (taskList.length > 0){
      //no mostrar el mensaje
      //clase
    }
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

var deleteTask = function(btn){
  console.log (btn)
  allTasks.splice (btn.id, 1)
  printTasks()
}






