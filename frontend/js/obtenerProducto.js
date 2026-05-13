const tablaHTML = document.getElementById("tabla");

tablaHTML.innerHTML = ""

const URL_BACKEND = "http://localhost:3000/task";

var listaTareas = []

const obtenerProducto = () => {
    fetch(URL_BACKEND) 
        .then((res) => res.json()).then((datos) => {
            listaTareas = datos
            if (!listaTareas || listaTareas.length == 0) {
                tablaHTML.innerHTML = "<h1>Ingresa las tareas, datos no encontrados aún</h1>"
                return;
            }

            tablaHTML.innerHTML = "";
            listaTareas.forEach((todo) => {
                tablaHTML.innerHTML += `<tr>
                       <td>${todo.descripcion}</td>
                       <td>$${todo.precio}</td>
                       <td>${todo.status}</td>
                       <td class == "buttons">
                           <button class="danger" onclick="eliminar('${todo._id}')">Eliminar</button>
                          
                       </td>
                       </tr>`
            })
        })

}

obtenerProducto()
