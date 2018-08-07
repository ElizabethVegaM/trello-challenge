addList.addEventListener('click', () => {
  inputList.classList.remove('d-none');
  addList.classList.add('d-none');
});

function newList() {
  let listName = document.getElementById('listText').value;
  if (listName.length > 1) {
    first.innerHTML = `<div id="newList" class="listContainer">
    <div class="listHeader">
      <h6>${listName}</h6>
      <i class="fas fa-ellipsis-h"></i>
    </div>
    <div id="listBody">
      <button id="addTaskBtn" type="button" class="btn" onclick="addTask()"><i class="fas fa-plus"></i>Añada una tarjeta</button>
      <div id="inputTask" class="d-none">
        <textarea autofocus name="" id="taskArea" cols="36" rows="3" placeholder="Introduzca un título para esta tarjeta..."></textarea>
        <button id="addBtn" type="button" class="btn" onclick="newTask()">Añadir tarjeta</button>
        <button id="closeCardBtn" class="btn" onclick="closeCard()">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>`
    second.innerHTML = `<button id="addListSecond" type="button" class="btn btn-light" onclick="newList2()">
  <i class="fas fa-plus"></i>Añada otra lista</button>
  <div id="inputList2" class="formContainer d-none">
  <input type="text" class="form-control" id="listText2" placeholder="Introduzca el título de la lista...">
  <button id="addBtn2" type="button" class="btn btn-success" onclick="newList2()">Añadir lista</button>
  <button id="close2" class="btn" onclick="closeList2()">
    <i class="fas fa-times"></i>
  </button>
</div>`
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

function closeList2() { // no funciona
  inputList2.classList.add('d-none');
  addList2.classList.remove('d-none');
};

function closeCard2() {
  inputTask2.classList.add('d-none');
  addTaskBtn2.classList.remove('d-none');
}

function addTask() {
  inputTask.classList.remove('d-none');
  addTaskBtn.classList.add('d-none'); // no funciona
}

function addTask2() {
  inputTask2.classList.remove('d-none');
  addTaskBtn2.classList.add('d-none'); // no funciona
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

function newTask2() {
  let newTask2 = taskArea2.value;
  if (newTask2.length > 1) {
    listBody2.innerHTML = `<div>
      <button class="btn taskName">${newTask2}
        <i class="fas fa-pen"></i>
      </button>
    </div>` + listBody2.innerHTML;
    inputTask2.classList.add('d-none');
    addTaskBtn2.classList.remove('d-none');
  }
}

function newList2() {
  inputList2.classList.remove('d-none');
  addListSecond.classList.add('d-none');
  let listName2 = document.getElementById('listText2').value;
  if (listName2.length > 1) {
    second.innerHTML = `<div id="newList2" class="listContainer">
    <div class="listHeader">
      <h6>${listName2}</h6>
      <i class="fas fa-ellipsis-h"></i>
    </div>
    <div id="listBody2">
      <button id="addTaskBtn2" type="button" class="btn" onclick="addTask2()"><i class="fas fa-plus"></i>Añada una tarjeta</button>
      <div id="inputTask2" class="d-none">
        <textarea autofocus name="" id="taskArea2" cols="36" rows="3" placeholder="Introduzca un título para esta tarjeta..."></textarea>
        <button id="addBtn2" type="button" class="btn" onclick="newTask2()">Añadir tarjeta</button>
        <button id="closeCardBtn2" class="btn" onclick="closeCard2()">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>`
    third.innerHTML = `<button id="addListThird" type="button" class="btn btn-light" onclick="newList3()">
  <i class="fas fa-plus"></i>Añada otra lista</button>`
  }
};
