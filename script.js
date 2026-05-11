const libros = [
    {
        titulo: "El duque y yo",
        autor: "Julia Quinn",
        dueño: "María López",
        descripcion: "Puedes usar separadores y leerlo con calma, incluso compartirlo con los peques si lo cuidan 😊. Evita doblar páginas, escribir en él o dejarlo al alcance de comida y bebidas. Gracias por tratarlo con cariño; en casa los libros son para disfrutarse y también para cuidarse 📚💛",
        pasta: "Dura",
        edicion: "Coleccionista",
        estado: "DISPONIBLE",
        imagen: "https://images.cdn2.buscalibre.com/fit-in/360x360/a1/c3/a1c3bc927b097d1b748fa09111f3119c.jpg",
        comentarios: [],
    },
    {
        titulo: "Yo antes de ti",
        autor: "Jojo Moyes",
        dueño: "Javier Martínez",
        descripcion: "Se permite el uso de separadores, tomar notas en hojas aparte y transportar el libro con cuidado. No se permite doblar páginas, escribir sobre el contenido ni exponerlo a líquidos o suciedad. Agradezco que lo devuelvas en las mismas condiciones; los libros, bien cuidados, pueden disfrutarse por muchos más lectores.",
        pasta: "Blanda",
        edicion: "Básica",
        estado: "PRESTADO",
        imagen: "https://m.media-amazon.com/images/I/713KAcGeQcL.jpg",
        comentarios: [],
    },
    {
        titulo: "El color de las cosas invisibles",
        autor: "Andrea Longarela",
        dueño: "Jade Carmona",
        descripcion: "Puedes usar post-it y marcatextos para señalar partes importantes 📚, pero NO arrancar hojas ni maltratar el libro. Gracias por cuidarlo 💕, ojalá lo disfrutes tanto como yo ✨",
        pasta: "Dura",
        edicion: "Básica",
        estado: "PRESTADO",
        imagen: "https://m.media-amazon.com/images/I/816UgxSBR-L._UF1000,1000_QL80_.jpg",
        comentarios: [],
    }
];

// =======================
// VARIABLES GLOBALES
// =======================
let libroActual = 0;
let rating = 0;

// =======================
// SELECTOR DE LIBROS
// =======================
const selector = document.getElementById("selectorLibro");

libros.forEach((libro, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = libro.titulo;
    selector.appendChild(option);
});

// =======================
// CAMBIO DE LIBRO
// =======================
selector.addEventListener("change", function () {
    libroActual = this.value;
    mostrarLibro();
});

// =======================
// MOSTRAR LIBRO
// =======================
function mostrarLibro() {
    const libro = libros[libroActual];

    document.getElementById("infoLibro").innerHTML = `
        <div class="libroCard">
            <div class="imagenLibro">
                <img src="${libro.imagen}" alt="${libro.titulo}">
            </div>

            <div class="descripcionLibro">
                <h2>${libro.titulo}</h2>
                <p><strong>Autor:</strong> ${libro.autor}</p>
                <p><strong>Dueño:</strong> ${libro.dueño}</p>

                <h3>Descripción:</h3>
                <p>${libro.descripcion}</p>
                <h4>Detalles:</h4>
                <p><strong>Pasta:</strong> ${libro.pasta}</p>
                <p><strong>Edición:</strong> ${libro.edicion}</p>
                <p><strong>Estado:</strong> ${libro.estado}</p>
            </div>
        </div>
        
    `;

    mostrarComentarios();
}

// =======================
// ABRIR / CERRAR MODAL
// =======================
function abrirModal() {
    document.getElementById("modalComentario").classList.remove("hidden");
}

function cerrarModal() {
    document.getElementById("modalComentario").classList.add("hidden");
    document.getElementById("comentarioModalInput").value = "";
    rating = 0;
}

// =======================
// RATING
// =======================
function setRating(valor) {

    rating = valor;

    const libreria = document.querySelectorAll(".librito");

    libreria.forEach((librito, index) => {

        if(index < valor){
            librito.classList.add("activa");
        }else{
            librito.classList.remove("activa");
        }

    });
}

// =======================
// AGREGAR COMENTARIO (MODAL)
// =======================
function enviarComentario() {
    const input = document.getElementById("comentarioModalInput");
    const texto = input.value;

    if (texto.trim() === "") return;

    libros[libroActual].comentarios.push({
        texto,
        fecha: new Date().toLocaleString(),
        rating
    });

    cerrarModal();
    mostrarComentarios();
}

// =======================
// MOSTRAR COMENTARIOS
// =======================
function mostrarComentarios() {
    const contenedor = document.getElementById("listaComentarios");
    contenedor.innerHTML = "";

    libros[libroActual].comentarios.forEach((c, index) => {
        const div = document.createElement("div");

        div.innerHTML = `
            <div class="comentarioCard">
                <p class="comentarioTexto">${c.texto}</p>
                <p>${"📖".repeat(c.rating || 0)}</p>
                <small>${c.fecha}</small>
                <br>
                <button onclick="eliminarComentario(${index})">Eliminar</button>
            </div>
        `;

        contenedor.appendChild(div);
    });
}

// =======================
// ELIMINAR COMENTARIO
// =======================
function eliminarComentario(index) {
    libros[libroActual].comentarios.splice(index, 1);
    mostrarComentarios();
}

// =======================
// FUNCIONES EXTRA (SE CONSERVAN)
// =======================
function seleccionarLibro(indice) {
    if (indice >= 0 && indice < libros.length) {
        const libro = libros[indice];
        console.log(libro.describirLibro());
        console.log("Capítulos:", libro.capitulos);
        return libro;
    } else {
        console.log("Libro no válido");
        return null;
    }
}

// =======================
// INICIALIZAR
// =======================
mostrarLibro();