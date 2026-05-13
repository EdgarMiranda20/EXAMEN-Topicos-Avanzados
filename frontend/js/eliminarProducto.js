const eliminar = async (id) => {
    const URL = `${URL_BACKEND}/${id}`;
    try{
        const datosJSON = await fetch(URL, {
            method:"DELETE",
            headers:{"Content-type": "application/json"}  //Servidor Nos comparta archivo json y nos responda con lo mismo
        })
        const resultadoFinal = await datosJSON.json();

        if(datosJSON.status == 200){
            alert(resultadoFinal.message)

            obtenerProducto()   //Actualiza los datos de la tabla


        }
    } catch (error){
         alert ("No se pudo conectar en este momento, intenta más tarde")

    }
    
}