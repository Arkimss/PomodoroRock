


function modificarTexto(){
    let boton = document.querySelector(".leerMas")
    let texto = document.getElementById("textoOculto");

    boton.addEventListener("click", () => {
        if (texto.style.display == "none"){
            mostrarTextoOculto(texto,boton);
        }else{
            ocultarTextoOculto(texto, boton);
        }
    });
    return;
}

function mostrarTextoOculto(texto,boton){
    texto.style.display = "block";
    boton.innerHTML = "Ver menos";
}

function ocultarTextoOculto(texto, boton){
    texto.style.display = "none";
    boton.innerHTML = "Leer más";
}
