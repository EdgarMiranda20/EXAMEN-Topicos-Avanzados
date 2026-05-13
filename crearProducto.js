var URL_BACKEND = "http://localhost:3000/task";
const formularioHTML = document.getElementById("formularioNuevo");
const inputNombre = document.getElementById("InputNombre");
const inputPrecio = document.getElementById("InputPrecio");
async function manejarEntradaDeDatos(evt) {
    evt.preventDefault();
    const nombre = inputNombre.value;
    const precio = inputPrecio.value;
    try {
        const respuesta = await fetch(URL_BACKEND, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre,
                precio
            })
        });
        const datos = await respuesta.json();
        if (datos._id) {
            ObtenerProducto();
            inputNombre.value = "";
            inputPrecio.value = "";
        } else {
            alert("No se pudo agregar el producto");
        }
    } catch (error) {
        console.error(error);
        alert("Error al conectar con backend");
    }
}
formularioHTML.addEventListener("submit", manejarEntradaDeDatos);
const formularioHTML = document.getElementById("formularioNuevo");
const inputHTML = document.getElementById("inputtarea")
const productos = {
    "Sabritas": 20,
    "Coca": 18,
    "Galletas": 15,
    "Galletas Maria": 25
}
var estadoFormulario = true
var URL_ACTUALIZAR = URL_BACKEND

async function manejarEntradaDeDatos (evt){
    evt.preventDefault();

    const tarea = inputHTML.value.trim();
    const precio = productos[tarea];
    
    console.log("Tarea:", tarea);
    console.log("Precio:", precio);
    console.log(productos);

    if (estadoFormulario){


    fetch(URL_BACKEND, {
        method:"POST",
        headers:{"Content-type": "application/json"},
        body:JSON.stringify({descripcion:tarea,
            precio:precio
        })
    }).then((datosJSON)=>datosJSON.json()).
    then((respuesta)=>{
        if(respuesta._id) obtenerProducto()
        else alert ("No se pudo registrar la tarea ")

    }).catch((err)=>{
        console.error(err);
        alert("No se pudo realizar esta operación, intenta más tarde")
    })
    } else{
        estadoFormulario = true;
        try{
            const datosJSON = await fetch (URL_ACTUALIZAR, {
                method:"PATCH",
                headers:{"Content-type": "application/json"},
                body: JSON.stringify({descripcion: tarea, precio:precio})
            })
            inputHTML.value=""

            if(datosJSON.status == 200){
                const respuesta = await datosJSON.json();
                obtenerProducto()
            }
          

        } catch (error){
          alert("No se logro conectar")
          console.error(error)
        }
    }
    inputHTML.value=""
}
//Tarea muestres mensaje de error y que se actualice de forma automatica, puedes empezzar en la linea 34


const actualizar = (id,descripcion)=>{

    inputHTML.value =descripcion
    estadoFormulario = false
    URL_ACTUALIZAR = URL_BACKEND + "/" + id

}

formularioHTML.addEventListener("submit", manejarEntradaDeDatos);