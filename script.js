/**
 * Cambia el diseño de la página a un modo oscuro.
 * Modifica el color de fondo del body, la barra de navegación y algunos textos.
 */
function fondo() {
    document.body.style.backgroundColor = "black";
    const nav = document.querySelector(".navbar");

    if (nav) {
        nav.style.color = "pink"; // Color de texto general de la nav
        const links = nav.querySelectorAll("a");
        links.forEach(link => {
            link.style.color = "pink"; // Color de los enlaces de la nav
        });
    }

    const titulo=document.querySelector("h3");
    if(titulo){
        titulo.style.color="white"; // Color del primer título h3
    }
}

/**
 * Restablece el diseño de la página al modo claro (colores originales).
 * Elimina los estilos aplicados por la función fondo().
 */
function fondo2() {
    document.body.style.backgroundColor = "white"; // Fondo blanco
       const nav = document.querySelector(".navbar");

    if (nav) {
        nav.style.color = ""; // Restablece color de nav
        const links = nav.querySelectorAll("a");
        links.forEach(link => {
            link.style.color = ""; // Restablece color de enlaces
        });
    }

    const titulo=document.querySelector("h3");
    if(titulo){
        titulo.style.color=""; // Restablece color de h3
    }
}

/**
 * Muestra un mensaje de bienvenida en el párrafo con ID "parrafo".
 * (Usado en la página de matrícula).
 */
function mensaje(){
     document.getElementById("parrafo").innerText = "¡Bienvenido!";
}


/**
 * Elige y muestra una frase motivacional al azar en la lista con ID "listafrases".
 * La frase se muestra en azul y con un tamaño de fuente específico.
 * (Usado en la página de matrícula).
 */
function mostrarlista() {
  let inscribir = ["Un paso más para el futuro", "Perú es la clave", "Tú puedes","eres god","sin miedo al exito"];
  let lista = document.getElementById("listafrases");
  lista.innerHTML = ""; // Limpia lista anterior
  let indiceAleatorio = Math.floor(Math.random() * inscribir.length);
  let fraseAleatoria = inscribir[indiceAleatorio];
  let item = document.createElement("li");
  item.textContent = fraseAleatoria;
  item.style.color = "blue"; // Estilo de la frase
  item.style.fontSize = "18px";
  lista.appendChild(item); // Agrega la frase a la lista
}

/**
 * Ejecuta dos funciones: mostrarlista() y mensaje().
 * (Llamada por un botón en la página de matrícula).
 */
function ejecutarambas(){
    mostrarlista();
    mensaje();
}

/*
 * Este código se ejecuta al cargar la página.
 * Añade una sección completa para dejar comentarios (input, botón y lista)
 * al elemento <main> de la página.
 */
const comentarioSection = document.createElement('section'); // Crea la sección
comentarioSection.innerHTML = `
    <h2>envianos tus comnetarios</h2>
    <input type="text" id="nuevoComentario" placeholder="Escribe un comentario"><br>
    <button id="agregarComentario">Agregar</button>
    <div id="listaComentarios"></div>
`; // Define el contenido HTML
document.querySelector('main').appendChild(comentarioSection); // Añade la sección al main

/*
 * Este código se ejecuta al cargar la página.
 * Configura el botón "Agregar" de la sección de comentarios.
 * Al hacer clic, toma el texto del input, lo añade como un comentario a la lista,
 * limpia el input y agrega un botón "Eliminar" para ese comentario.
 */
const agregarComentarioBtn = document.getElementById('agregarComentario'); // Botón Agregar
const nuevoComentarioInput = document.getElementById('nuevoComentario'); // Campo de texto
const listaComentarios = document.getElementById('listaComentarios'); // Área donde van los comentarios

// Cuando se haga clic en el botón Agregar:
agregarComentarioBtn.addEventListener('click', () => {
    const comentario = nuevoComentarioInput.value.trim(); // Obtiene el texto del input
    if (comentario) { // Si hay texto:
        const nuevoElemento = document.createElement('p'); // Crea un párrafo para el comentario
        nuevoElemento.innerText = `Comentario: ${comentario}`; // Pone el texto en el párrafo
        listaComentarios.appendChild(nuevoElemento); // Añade el párrafo a la lista
        nuevoComentarioInput.value = ''; // Limpia el input

        // Crea y configura un botón para eliminar este comentario
        const eliminarBtn = document.createElement('button');
        eliminarBtn.innerText = 'Eliminar';
        eliminarBtn.addEventListener('click', () => { // Al hacer clic en Eliminar:
            nuevoElemento.remove(); // Borra el párrafo del comentario
            eliminarBtn.remove(); // Borra el propio botón Eliminar
        });
        listaComentarios.appendChild(eliminarBtn); // Añade el botón Eliminar después del comentario
    }
});

/**
 * Muestra un mensaje de confirmación en el elemento con ID "mencomen".
 * (Usado en la página de inicio).
 */
function mensajecomentario(){
    document.getElementById("mencomen").innerText = "comentarios enviados correctamente";
}
