console.log('hola mundo!');
const noCambia = "Leonidas";

let cambia = "@LeonidasEsteban"

function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}


const getUser = new Promise(function(todoBien, todoMal) {
  setTimeout(function(){
    todoMal('Se acabó el tiempo');
  }, 3000);
});

getUser
  .then(function() {
    console.log("todo esta bien en la vida");
  })
  .catch(function(message) {
    console.log(message);
  })