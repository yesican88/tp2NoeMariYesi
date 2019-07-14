let allTasks = []

// AGREGAR TAREAS
const addTask = () => {
  let input = document.getElementById('taskInput')
  let newTask = input.value

  if (input.value !== "") {
    input.value = ''
    allTasks.unshift({
      text: newTask,
      isPending: true
    })
  }

  let parsedData = JSON.stringify(allTasks)
  window.localStorage.setItem('tasks', parsedData)
  printTasks()
}

const handleKeyPress = (event) => {
  if (event.code === 'Enter') {
    addTask()
  }
}

// TOGGLE PENDIENTE A COMPLETADA
const toggleTask = (button) => {
  allTasks[button.id].isPending = !allTasks[button.id].isPending
  printTasks()
}

// IMPRIMIR TAREAS
const printTasks = () => {
  let pendingTasks = document.getElementById('pendingTasks')
  pendingTasks.innerHTML = ''
  let completedTasks = document.getElementById('completedTasks')
  completedTasks.innerHTML = ''

  createButtons()
  displayNotice()
}

const createButtons = () => {
  allTasks.map((task, index) => {
    let taskItem = document.createElement('li')
    taskItem.classList.add('task')
    taskItem.innerText = task.text

    let buttons = document.createElement('div')
    buttons.classList.add('btn-container')
    taskItem.appendChild(buttons)

    let completeBtn = document.createElement('a')
    btn = document.createElement ('div')
    taskItem.appendChild(btn)
    completeBtn.href = '#'
    completeBtn.id = index
    completeBtn.classList.add('complete')
    completeBtn.onclick = function () {
      toggleTask(this)
    }
    buttons.appendChild(completeBtn)
  
    let deleteBtn = document.createElement('a')
    deleteBtn.href = '#'
    deleteBtn.id = index
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
}

// MOSTRAR U OCULTAR AVISOS
const displayNotice = () => {
  if(pendingTasks.children.length > 0) {
    let firstNotice = document.getElementById('firstNotice')
    firstNotice.classList.add('removeNotice')
  } else {
    firstNotice.classList.remove('removeNotice')
  }

  if (completedTasks.children.length > 0) {
    let secondNotice = document.getElementById('secondNotice')
    secondNotice.classList.add('removeNotice')
  } else {
    secondNotice.classList.remove('removeNotice')
  }
}

// ELIMINAR TAREA
const deleteTask = (btn) => {
  allTasks.splice(btn.id, 1)
  printTasks()
}

// LOCAL STORAGE
const checkStorage = () => {
  let aux = window.localStorage.getItem('tasks')
  allTasks = aux ? JSON.parse(aux) : allTasks // localStorage maneja texto, JS maneja datos -> stringify y después parse
}

checkStorage()