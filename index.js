let num2 = Math.floor(Math.random()*100)+1;
const intentos = [];

function resultadoAleatorio(){
    const input = document.getElementById(`aleatorio`).value;
    const respuesta = document.getElementById(`resultado`);
    const mensajeError = document.getElementById(`mensajeError`);
    const historial = document.getElementById("historial");

    respuesta.textContent = "";
    mensajeError.textContent = "";

    const num = parseInt(input);

    if (isNaN(num)) {
        mensajeError.textContent= "❌ Solo puedes colocar números. Intenta de nuevo.";
        return;
    }
    if (num < 1 || num > 100) {
        mensajeError.textContent = "Recuerda que el número debe estar entre 1 y 100.";
        return;
    }
    intentos.push(num);

    if (num === num2) {
        respuesta.textContent = "Felicidades, adivinaste el número secreto.";
        historial.textContent = "Tus intentos: " + intentos.join(", ");
    } else {
        respuesta.textContent = "Ups, el número secreto es incorrecto, vuelve a intentarlo.";
        document.getElementById("aleatorio").value = "";
    }
}

function cambiarColor () {
    document.getElementById("R").style.color="white";
}
