
document.addEventListener("DOMContentLoaded", () => {
    let boton = document.getElementById("leerMas")
    let texto = document.getElementById("textoOculto");
  
    boton.addEventListener("click", () => {
        const displayStyle = window.getComputedStyle(texto).display;

        if (displayStyle == "none"){
            mostrarTextoOculto(texto,boton);
           
        }else{
            ocultarTextoOculto(texto, boton);
        }
    });
  });



function mostrarTextoOculto(texto,boton){
    texto.style.display = "block";
    boton.innerHTML = "Ver menos";
}

function ocultarTextoOculto(texto, boton){
    texto.style.display = "none";
    boton.innerHTML = "Leer más";
}
