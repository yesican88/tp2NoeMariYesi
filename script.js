var input
var newTask
var pendingTasks
var completedTasks
var allTasks = []

// AGREGAR TAREAS
var addTask = function () {
  input = document.getElementById('taskInput')
  newTask = input.value

  if (input) { // DEJA AGREGAR TAREAS CUANDO INPUT ESTA VACIO!!
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
var printTasks = function () {
  pendingTasks = document.getElementById('pendingTasks')
  pendingTasks.innerHTML = ''
  completedTasks = document.getElementById('completedTasks')
  completedTasks.innerHTML = ''
  allTasks.map(function (task, index) {
    var taskItem = document.createElement('li')
    var buttons = document.createElement('div')
    buttons.classList.add('buttons')
    taskItem.classList.add('task')
    taskItem.innerText = task.text
    if (task.isPending) {
      pendingTasks.appendChild(taskItem)
    } else {
      completedTasks.appendChild(taskItem)
    }

    // AGREGAR BOTONES
    var completeBtn = document.createElement('a')
    completeBtn.id = index
    completeBtn.href = '#'
    completeBtn.classList.add('complete')
    completeBtn.onclick = function () {
      toggleTask(this)
    }
    taskItem.appendChild(completeBtn)

    var deleteBtn = document.createElement('a')
    deleteBtn.id = index
    deleteBtn.href = '#'
    deleteBtn.classList.add('delete')
    console.log(deleteBtn)
    deleteBtn.onclick = function () {
      deleteTask(this)
    }
    taskItem.appendChild(deleteBtn)
  })
  var lista = document.getElementById('pendingTasks')
  console.log(lista);

  if(lista.children.length > 0) {
    var zeroTasks = document.getElementById('zeroTasks')
    zeroTasks.classList.add('removeNotice')
  }

  var taskCompleted = document.getElementById('taskCompleted')
  if (taskCompleted.children.length > 0) {
    var manyTasks = document.getElementById('manyTasks')
    manyTasks.classList.add('removeNotice')
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