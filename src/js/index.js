addList.addEventListener('click', () => {
  inputList.classList.remove('d-none');
  addList.classList.add('d-none');
});

close.addEventListener('click', () => {
  inputList.classList.add('d-none');
  addList.classList.remove('d-none');
});