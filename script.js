const submitfunction = (event) => {
    if(!validarFormulario()){
        event.preventDefault() // previene la actualizacion de la web
    }else{
        event.preventDefault() // previene la actualizacion de la web
        alert(
            "Los datos enviados fueron" + 
            "Nombre: " + document.getElementById("nombre").value + "\n"+
            "Apellido: " + document.getElementById("apellido").value + "\n"+
            "Documento: " + document.getElementById("documento").value + "\n"+
            "Email: " + document.getElementById("email").value + "\n"+
            "Edad: " + document.getElementById("edad").value + "\n"+
            "Actividad: " + document.getElementById("actividad").value + "\n"+
            "Nivel de Estudio: " + document.getElementById("nivelestudio").value + "\n"
        )
    }
} 
    


document.getElementById("formulario").addEventListener("submit", submitfunction)// Escucha el envio del formulario

function validarFormulario(){
    let camposTexto = document.querySelectorAll('input[type="text"]')
    let validacionCorrecta = true

    camposTexto.forEach(campo => {
        const errorCampo = document.getElementById("error" + campo.id.charAt(0).toUpperCase() + campo.id.slice(1))
        if(campo.value.length == ""){
            mostrarError(errorCampo, "Este campo es requerido!")
            validacionCorrecta = false
        }else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, "Este campo debe tener mas de 3 caracteres!")
            validacionCorrecta = false
        }else {
            ocultarError(errorCampo)
        }

        })

        const email = document.getElementById("email")
        let errorEmail = document.getElementById("errorEmail")

        if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
            ocultarError(errorEmail)
            
        }else{
            mostrarError(errorEmail, "Ingrese un correo electronico valido")
            
        }

        const edad = document.getElementById("edad")
        const erroEdad = document.getElementById("errorEdad")

        if (edad.value < 18) {
            mostrarError(erroEdad, "Debes ser masyor de 18 para registrarte!")
            validacionCorrecta = false
        }else{ 
            ocultarError(erroEdad)
        }

        const actividad = document.getElementById("actividad")
        const errorActividad = document.getElementById("errorActividad")

        if (actividad.value == "") {
            mostrarError(errorActividad, "Por favor selecciona otra Actividad!")
            validacionCorrecta = false
        }else{ 
            ocultarError(errorActividad)
        }

        const nivelEstudio = document.getElementById("nivelestudio")
        const errorNivelEstudio = document.getElementById("errorNivelEstudio")

        if (nivelEstudio.value == "") {
            mostrarError(errorNivelEstudio, "Por favor selecciona un nivel de estudio!")
            validacionCorrecta = false
        }else{ 
            ocultarError(errorNivelEstudio)
        }

        const aceptoTerminos = document.getElementById("aceptoTerminos")
        const errorTerminos = document.getElementById("errorTerminos")

        if (!aceptoTerminos.checked){
            mostrarError(errorTerminos, "Debes aceptar terminos y condiciones!")
            validacionCorrecta = false
        }else {
            mostrarError(errorTerminos)
        }

        return validacionCorrecta

}

    const mostrarError = (elemento, mensaje)=> {
        elemento.textContent = mensaje
        elemento.style.display = "block"
    }

    const ocultarError = (elemento, mensaje)=> {
        elemento.textContent = mensaje
        elemento.style.display = "none"
    }