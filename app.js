// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detener la ejecución si el campo está vacío
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista visual en el HTML
    actualizarListaAmigos();
}

// Función para actualizar la lista visual de amigos en el HTML
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Recorrer el array de amigos y agregar cada uno a la lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto (opcional)
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para realizar el sorteo.");
        return;
    }

    // Mezclar el array de amigos
    const amigosMezclados = [...amigos].sort(() => Math.random() - 0.5);

    // Mostrar el resultado del sorteo
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpiar resultados anteriores

    amigosMezclados.forEach((amigo, index) => {
        const siguienteAmigo = amigosMezclados[(index + 1) % amigosMezclados.length];
        const li = document.createElement('li');
        li.textContent = `${amigo} ➔ ${siguienteAmigo}`;
        resultado.appendChild(li);
    });
}

//implementa una función para actualizar la lista de amigos

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos(i);
        listaAmigos.appendChild(li);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // 1. Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Por favor, agrega al menos un amigo.");
        return; // Detener la ejecución si no hay amigos
    }

    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `¡El amigo sorteado es: <strong>${amigoSorteado}</strong>!`;
}