const inputAmigo = document.getElementById("amigo"); 
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos"); 
const ulResultado = document.getElementById("resultado"); // Asegúrate de que este elemento existe en tu HTML

function agregarAmigo() {
    if (inputAmigo.value.trim() === "") {
        alert("Por favor, ingresa un nombre válido."); // Evitar agregar nombres vacíos
        return;
    }

    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`; 
    inputAmigo.value = ""; // Limpiar el campo de entrada después de agregar
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[random];

    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`; // Corregido
}

