// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];
let currentName;
let randomFriend = 0;
let randomName;

function agregarAmigo(){
    if (document.getElementById("amigo").value != ""){
        nombres.push(document.getElementById("amigo").value);
        actualizarLista(nombres.length-1);
        document.getElementById("amigo").value = "";
    }else{
        console.log("Entrada vacía");
    }
}
function actualizarLista(numId){
    currentName = document.createElement("li");
    currentName.textContent = nombres[numId];
    document.getElementById("listaAmigos").appendChild(currentName);
}

function sortearAmigo(){
    randomFriend = Math.floor(Math.random()*nombres.length);
    document.getElementById("resultado").innerHTML = "";
    randomName = document.createElement("li");
    randomName.textContent = nombres[randomFriend];
    document.getElementById("resultado").appendChild(randomName);
}