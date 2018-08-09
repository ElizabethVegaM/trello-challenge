addList.addEventListener('click', () => {
  inputList.classList.remove('d-none');
  addList.classList.add('d-none');
});

// contador para definir las ids de cada lista
let counter = 0;
addNewListBtn.addEventListener('click', () => {
  counter++;
  let newContainer = document.createElement('div');
  boardBody.insertBefore(newContainer, list);
  if (listTitle.value.length > 2) {
    newContainer.innerHTML = `<div id="newList${counter}" class="containers">
    <div class="listHeader">
      <h6>${listTitle.value}</h6>
      <i class="fas fa-ellipsis-h"></i>
    </div>
    <div id="listBody${counter}">
      <button id="addTaskBtn${counter}" type="button" class="btn add-task-btn"><i class="fas fa-plus"></i>Añada una tarjeta</button>
      <div id="inputTask${counter}" class="task task-padding d-none">
        <textarea id="taskArea${counter}" autofocus name="" cols="36" rows="3" placeholder="Introduzca un título para esta tarjeta..."></textarea>
        <button id="addBtn${counter}" type="button" class="btn green-btn">Añadir tarjeta</button>
        <button id="cancelTaskBtn${counter}" class="btn cancel-btn">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>`;
    inputList.classList.add('d-none');
    addList.classList.remove('d-none');
    listTitle.value = '';
    const addNewTaskBtn = document.getElementById(`addTaskBtn${counter}`);
    const taskContainer = document.getElementById(`inputTask${counter}`);
    const createTask = document.getElementById(`addBtn${counter}`);
    const tasksContainer = document.getElementById(`listBody${counter}`);
    const cancelTask = document.getElementById(`cancelTaskBtn${counter}`);
    let newTask = document.getElementById(`taskArea${counter}`);
    addNewTaskBtn.addEventListener('click', () => {
      addNewTaskBtn.classList.add('d-none');
      taskContainer.classList.remove('d-none');
    });
    createTask.addEventListener('click', () => {  
      let newTaskContainer = document.createElement('div');
      tasksContainer.insertBefore(newTaskContainer, addNewTaskBtn);
      if (newTask.value.length > 1) {
        newTaskContainer.innerHTML = `<div class="task">
          <button class="btn taskName">${newTask.value}
            <i class="fas fa-pen"></i>
          </button>
        </div>`;
        taskContainer.classList.add('d-none');
        addNewTaskBtn.classList.remove('d-none');
        newTask.value = '';
      }
    });
    cancelTask.addEventListener('click', () => {
      newTask.value = '';
      taskContainer.classList.add('d-none');
      addNewTaskBtn.classList.remove('d-none');
    });
  }
})

closeBtn.addEventListener('click', () => { // cierra el formulario de agregar lista
  listTitle.value = '';
  inputList.classList.add('d-none');
  addList.classList.remove('d-none');
});
