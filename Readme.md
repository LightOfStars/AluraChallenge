🎉 Sorteo de Amigos 🎉
¡Bienvenido al programa de sorteo de amigos! Este es un proyecto simple que te permite agregar nombres de amigos a una lista y luego sortear uno al azar. Es una excelente manera de fortalecer tus habilidades en lógica de programación y manipulación del DOM con JavaScript.

🚀 Funcionalidades
Agregar amigos: Puedes agregar nombres de amigos a una lista.

Mostrar lista: Los nombres agregados se muestran en una lista en la interfaz.

Sortear amigo: El programa selecciona un nombre al azar de la lista y lo muestra como el ganador.

🛠️ Cómo funciona
1. Agregar un amigo
Escribe el nombre de un amigo en el campo de texto.

Haz clic en el botón "Agregar" o presiona "Enter".

El nombre se agrega a la lista y se muestra en la interfaz.

2. Sortear un amigo
Una vez que hayas agregado varios nombres, haz clic en el botón "Sortear".

El programa seleccionará un nombre al azar de la lista y lo mostrará como el ganador.

🖥️ Código explicado
Variables principales
javascript
Copy
let nombres = []; // Almacena los nombres de los amigos.
let currentName;  // Variable temporal para crear elementos <li>.
let randomFriend; // Índice del amigo sorteado.
let randomName;   // Elemento <li> para mostrar el nombre sorteado.
Función agregarAmigo
Verifica si el campo de texto no está vacío.

Agrega el nombre al array nombres.

Llama a la función actualizarLista para mostrar el nombre en la interfaz.

Limpia el campo de texto después de agregar el nombre.

javascript
Copy
function agregarAmigo() {
    if (document.getElementById("amigo").value != "") {
        nombres.push(document.getElementById("amigo").value);
        actualizarLista(nombres.length - 1);
        document.getElementById("amigo").value = "";
    } else {
        console.log("Entrada vacía");
    }
}
Función actualizarLista
Crea un nuevo elemento <li>.

Asigna el nombre agregado como contenido del <li>.

Agrega el <li> a la lista en la interfaz.

javascript
Copy
function actualizarLista(numId) {
    currentName = document.createElement("li");
    currentName.textContent = nombres[numId];
    document.getElementById("listaAmigos").appendChild(currentName);
}
Función sortearAmigo
Genera un número aleatorio entre 0 y la longitud del array nombres.

Muestra el nombre correspondiente al índice aleatorio en la sección de resultados.

javascript
Copy
function sortearAmigo() {
    randomFriend = Math.floor(Math.random() * nombres.length);
    document.getElementById("resultado").innerHTML = "";
    randomName = document.createElement("li");
    randomName.textContent = nombres[randomFriend];
    document.getElementById("resultado").appendChild(randomName);
}
🎨 Interfaz de usuario
La interfaz consta de:

Un campo de texto para ingresar nombres.

Un botón "Agregar" para añadir nombres a la lista.

Una lista donde se muestran los nombres agregados.

Un botón "Sortear" para seleccionar un nombre al azar.

Una sección donde se muestra el nombre sorteado.

🛠️ Requisitos
Navegador web moderno (Chrome, Firefox, Edge, etc.).

Editor de texto para modificar el código (opcional).

📥 Instalación
Clona este repositorio o descarga los archivos.

Abre el archivo index.html en tu navegador.

¡Listo! Puedes empezar a agregar nombres y sortear amigos.

🧑‍💻 Contribuciones
Si deseas contribuir a este proyecto, ¡eres bienvenido! Sigue estos pasos:

Haz un fork del repositorio.

Crea una rama con tu feature: git checkout -b mi-feature.

Haz commit de tus cambios: git commit -m 'Agrega mi feature'.

Haz push a la rama: git push origin mi-feature.

Abre un Pull Request.