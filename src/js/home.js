console.log('Hola Alan!');
const noCambia = "Alan";

let cambia = "@pydv77"

function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}

const getUserAll = new Promise((todoBien, todoMal) => {
  setTimeout(() =>
    true ? todoBien("Todo bien getAll") : todoMal("Todo mal getAll"), 5000);
});

const getUser = new Promise((todoBien, todoMal) => {
  setTimeout(() =>
    true ? todoBien("Todo bien get") : todoMal("Todo mal get"), 6000);
});

Promise.all([
  getUser,
  getUserAll,
])
.then(response => console.log(response)) // devuelve un array con cada response
.catch(message => console.log(message)); // cacha el 1er error encontrado


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


$.ajax('https://randomuser.me/api/', {
  method: 'GET',
  success: data => console.log(data),
  error: error => console.log(error)
})

// fetch -> por defecto GET
fetch('https://randomuser.me/api/')
  .then(response => response.json()) // retorna otra promise
  .then(user => console.log('User', user.results[0].name.first))
  .catch(error => console.log("error :'("));
