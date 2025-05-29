function fondo() {
    document.body.style.backgroundColor = "black";
    const nav = document.querySelector(".navbar");

    if (nav) {
        nav.style.color = "pink";
        const links = nav.querySelectorAll("a");
        links.forEach(link => {
            link.style.color = "pink";
        });
    }

    const titulo=document.querySelector("h3");
    if(titulo){
        titulo.style.color="white"
    }

}
function fondo2() {
    document.body.style.backgroundColor = "white";
       const nav = document.querySelector(".navbar");

    if (nav) {
        nav.style.color = "";
        const links = nav.querySelectorAll("a");
        links.forEach(link => {
            link.style.color = "";
        });
    }

    const titulo=document.querySelector("h3");
    if(titulo){
        titulo.style.color=""
    }

}

function mensaje(){
     document.getElementById("parrafo").innerText =
"¡Bienvenido!"; 
}


function mostrarlista() {
  let inscribir = ["Un paso más para el futuro", "Perú es la clave", "Tú puedes","eres god","sin miedo al exito"];
  let lista = document.getElementById("listafrases");
  lista.innerHTML = "";
  let indiceAleatorio = Math.floor(Math.random() * inscribir.length);
  let fraseAleatoria = inscribir[indiceAleatorio];
  let item = document.createElement("li");
  item.textContent = fraseAleatoria;
  item.style.color = "blue";
  item.style.fontSize = "18px";
  lista.appendChild(item);
}

function ejecutarambas(){
    mostrarlista();
    mensaje();
}

const comentarioSection = document.createElement('section');
comentarioSection.innerHTML = `
    <h2>envianos tus comnetarios</h2>
    <input type="text" id="nuevoComentario" placeholder="Escribe un comentario"><br>
    <button id="agregarComentario">Agregar</button>
    <div id="listaComentarios"></div>
`;
document.querySelector('main').appendChild(comentarioSection);

const agregarComentarioBtn = document.getElementById('agregarComentario');
const nuevoComentarioInput = document.getElementById('nuevoComentario');
const listaComentarios = document.getElementById('listaComentarios');

agregarComentarioBtn.addEventListener('click', () => {
    const comentario = nuevoComentarioInput.value.trim();
    if (comentario) {
        const nuevoElemento = document.createElement('p');
        nuevoElemento.innerText = `Comentario: ${comentario}`;
        listaComentarios.appendChild(nuevoElemento);
        nuevoComentarioInput.value = ''; // Limpiar input
        // Botón para eliminar el comentario
        const eliminarBtn = document.createElement('button');
        eliminarBtn.innerText = 'Eliminar';
        eliminarBtn.addEventListener('click', () => {
            nuevoElemento.remove();
            eliminarBtn.remove();
        });
        listaComentarios.appendChild(eliminarBtn);
    }
});

function mensajecomentario(){
    document.getElementById("mencomen").innerText =
"comentarios enviados correctamente"; 
}

