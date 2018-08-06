addList.addEventListener('click', () => {
  inputList.classList.remove('d-none');
  addList.classList.add('d-none');
});


function newList() {
  let listName = document.getElementById('listText').value;
  first.innerHTML = `<div id="newList" class="listContainer">
  <div id="listHeader">
    <h6>${listName}</h6>
    <i class="fas fa-ellipsis-h"></i>
  </div>
  <div id="listBody">
    <button id="addTask" type="button" class="btn" onclick="addTask()"><i class="fas fa-plus"></i>Añada una tarjeta</button>
  </div>
</div>`
  second.innerHTML = `<button id="addList" type="button" class="btn btn-light">
  <i class="fas fa-plus"></i>Añadir una lista</button>`
};

function close() {
  inputList.classList.add('d-none');
  addList.classList.remove('d-none');
};
