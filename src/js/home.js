console.log('Hola Alan!');
const noCambia = "Alan";

let cambia = "@pydv77"

function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}

const getUserAll = new Promise((todoBien, todoMal) => {
  setTimeout(() =>
    true ? todoBien("Todo bien getAll") : todoMal("Todo mal getAll"), 5000)
});

const getUser = new Promise((todoBien, todoMal) => {
  setTimeout(() =>
  true ? todoBien("Todo bien get") : todoMal("Todo mal get"), 6000);
});

// getUser
//   .then(function() {
//     console.log("todo esta bien en la vida");
//   })
//   .catch(function(message) {
//     console.log(message);
//   })

// Promise.race([
//   getUser,
//   getUserAll,
// ])
// .then(response => console.log(response))
// .catch(message => console.log(message));

Promise.all([
  getUser,
  getUserAll,
])
.then(response => console.log(response)) // devuelve un array con cada response
.catch(message => console.log(message)); // cacha el 1er error encontrado
