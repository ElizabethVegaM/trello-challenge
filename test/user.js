const assert = require('chai').assert;

describe(
  'Modelo de la lista de tareas',
  () => {
    describe(
      'La lista me debería permitir agregar tareas',
      () => {
        it('Debería agregar una tarea'), 
        () => {
          addTask('Comprar pan').then(
            () => {
              return getTaskList();
            }
          ).then(
            (taskList) => {
              const comprarPan = taskList.find(
                task =>task.title == 'Comprar pan'
              );
              assert.exists(comprarPan);
            }
          ).catch(
            () => {
              assert.exists(undefined);
            }
          );
          assert.exists();
        }
      }
    );

    describe(
      'La lista me debería permitir colocarle un progreso a una tarea',
      () => {

      }
    );

    describe(
      'La lista me debería permitir editar una tarea',
      () => {

      }
    );

    describe(
      'La lista me debería permitir borrar tarea',
      () => {

      }
    );

  });