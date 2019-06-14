var input
var newTask
var pendingTasks
var completedTasks
var allTasks = []

// AGREGAR TAREAS
var addTask = function () {
  input = document.getElementById('taskInput')
  newTask = input.value

  if (input.value !== "") {
    input.value = ''
    allTasks.unshift({
      text: newTask,
      isPending: true
    })
  }
  printTasks()
}

var handleKeyPress = function (event) {
  if (event.code === 'Enter') {
    addTask()
  }
}

// IMPRIMIR TAREAS
// la función es demasiado extensa, se podria sacar mucho a funciones independientes
var printTasks = function () {
  pendingTasks = document.getElementById('pendingTasks')
  pendingTasks.innerHTML = ''
  completedTasks = document.getElementById('completedTasks')
  completedTasks.innerHTML = ''
  allTasks.map(function (task, index) {
    var taskItem = document.createElement('li')
    taskItem.classList.add('task')
    taskItem.innerText = task.text

    // CONTENEDOR --> debio ser una función independiente  
    var buttons = document.createElement('div')
    buttons.classList.add('btn-container')
    taskItem.appendChild(buttons)
 
    // BOTONES --> debio ser una función independiente
    var completeBtn = document.createElement('a')
    btn = document.createElement ('div')
    taskItem.appendChild(btn)
    completeBtn.id = index
    completeBtn.href = '#'
    completeBtn.classList.add('complete')
    completeBtn.onclick = function () {
      toggleTask(this)
    }
    buttons.appendChild(completeBtn)
  
    // BOTONES --> debio ser una función independiente
    var deleteBtn = document.createElement('a')
    deleteBtn.id = index
    deleteBtn.href = '#'
    deleteBtn.classList.add('delete')
    deleteBtn.onclick = function () {
      deleteTask(this)
    }
    buttons.appendChild(deleteBtn)

    if (task.isPending) {
      pendingTasks.appendChild(taskItem)
    } else {
      completedTasks.appendChild(taskItem)
      completeBtn.classList.add('completedColor')
    }
  })

  // --> debio ser una función independiente
  if(pendingTasks.children.length > 0) {
    var firstNotice = document.getElementById('firstNotice')
    firstNotice.classList.add('removeNotice')
  } else {
    var firstNotice = document.getElementById('firstNotice')
    firstNotice.classList.remove('removeNotice')
  }

  // --> debio ser una función independiente  
  if (completedTasks.children.length > 0) {
    var secondNotice = document.getElementById('secondNotice')
    secondNotice.classList.add('removeNotice')
  } else {
    var secondNotice = document.getElementById('secondNotice')
    secondNotice.classList.remove('removeNotice')
  }
}

// TOGGLE PENDIENTE A COMPLETADA
var toggleTask = function (button) {
  allTasks[button.id].isPending = !allTasks[button.id].isPending
  printTasks()
}

// ELIMINAR TAREA
var deleteTask = function (btn) {
  allTasks.splice(btn.id, 1)
  printTasks()
}