const divValorTiempo = document.getElementById('valorTiempo')
const divValorTemporizado = document.getElementById('valorTemporizado')
let start
let pause
let reanudar
let bandera = true

/*---- ocultar botones desde el inicio----*/
botonPausar.style.display = 'none'
botonBorrar.style.display = 'none'

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
            botonIniciar.style.display = 'none';
            botonPausar.style.display = 'grid';
            botonBorrar.style.display = 'grid';
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
    botonIniciar.style.display = 'grid';
    botonPausar.style.display = 'none';
    botonBorrar.style.display = 'none';
    bandera = true;
}

