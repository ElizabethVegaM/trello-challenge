addList.addEventListener('click', () => {
  inputList.classList.remove('d-none');
  addList.classList.add('d-none');
});

function newList() {
  let listName = document.getElementById('listText').value;
  if (listName.length > 1) {
    first.innerHTML = `<div id="newList" class="listContainer">
    <div id="listHeader">
      <h6>${listName}</h6>
      <i class="fas fa-ellipsis-h"></i>
    </div>
    <div id="listBody">
      <button id="addTaskBtn" type="button" class="btn" onclick="addTask()"><i class="fas fa-plus"></i>Añada una tarjeta</button>
      <div id="inputTask" class="d-none">
        <textarea name="" id="taskArea" cols="36" rows="3" placeholder="Introduzca un título para esta tarjeta..."></textarea>
        <button id="addBtn" type="button" class="btn" onclick="newTask()">Añadir tarjeta</button>
        <button id="closeCardBtn" class="btn" onclick="closeCard()">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>`
    second.innerHTML = `<button id="addList" type="button" class="btn btn-light">
  <i class="fas fa-plus"></i>Añadir una lista</button>`
  }
};

function closeList() { // no funciona
  inputList.classList.add('d-none');
  addList.classList.remove('d-none');
};

function closeCard() {
  inputTask.classList.add('d-none');
  addTaskBtn.classList.remove('d-none');
}

function addTask() {
  inputTask.classList.remove('d-none');
  addTaskBtn.classList.add('d-none'); // no funciona
}

function newTask() {
  let newTask = taskArea.value;
  if (newTask.length > 1) {
    listBody.innerHTML = `<div>
      <button class="btn taskName">${newTask}
        <i class="fas fa-pen"></i>
      </button>
    </div>` + listBody.innerHTML;
    inputTask.classList.add('d-none');
    addTaskBtn.classList.remove('d-none');
  }
}