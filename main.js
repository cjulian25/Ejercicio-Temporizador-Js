const divValorTiempo = document.getElementById('valorTiempo')
const divValorTemporizado = document.getElementById('valorTemporizado')
let start
let pause
let reanudar
let bandera = true

/*---- ocultar botones desde el inicio----*/
botonPausar.style.visibility = 'hidden'
botonBorrar.style.visibility = 'hidden'

function iniciar(divValorTiempo) {
    if ((divValorTiempo >= 999999999999999) || (divValorTiempo < 0)) {
        divValorTiempo.value = "";
        alert("Error al digitar el número");
    } else {
        if (divValorTiempo == 0) {
            divValorTemporizado.textContent = "Finish";
            botonPausar.disabled = true;
            return
        } else {
            divValorTemporizado.textContent = divValorTiempo;
            start = setTimeout(iniciar, 1000, divValorTiempo - 1);
            botonPausar.disabled = false;
            botonIniciar.style.visibility = 'hidden';
            botonPausar.style.visibility = 'visible';
            botonBorrar.style.visibility = 'visible';
            return start
        }
    }
}

function pausar() {
    if (bandera == true) {
        clearTimeout(start)
        pause = divValorTemporizado.textContent;
        botonPausar.style.backgroundImage = 'url("./iconos/iconoReproducir.png")';
        bandera = false;
        return pause
    } else {
        reanudar = setTimeout(iniciar, 1000, pause - 1);
        bandera = true;
        botonPausar.style.backgroundImage = 'url("./iconos/iconoPausa.png")';
        return reanudar
    }
}

function borrar() {
    clearTimeout(start)
    divValorTiempo.value = "";
    divValorTemporizado.textContent = "";
    botonPausar.disabled = false;
    botonIniciar.style.visibility = 'visible';
    botonPausar.style.visibility = 'hidden'
    botonBorrar.style.visibility = 'hidden'
    bandera = true;
}