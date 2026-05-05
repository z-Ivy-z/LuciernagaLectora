const libros = [
    {
        titulo: "El duque y yo",
        autor: "Julia Quinn",
        pasta: "Dura",
        edicion: "Coleccionista",
        anio: 2004,
        estado: "DISPONIBLE",
        capitulos: ["Inicio", "Macondo", "La familia Buendía"],
        imagen: "https://images.cdn2.buscalibre.com/fit-in/360x360/a1/c3/a1c3bc927b097d1b748fa09111f3119c.jpg",
        comentarios: [],

        describirLibro: function () {
            return `Portada: ${this.imagen}, Libro: ${this.titulo}, Pasta: ${this.pasta}, Edición: ${this.edicion}, Autor: ${this.autor}, Año: ${this.anio}, Estado: ${this.estado}`;
        },

        agregarCapitulo: function (capitulo) {
            this.capitulos.push(capitulo);
        },

        eliminarCapitulo: function (capitulo) {
            const index = this.capitulos.indexOf(capitulo);
            if (index !== -1) {
                this.capitulos.splice(index, 1);
            }
        }
    },
    {
        titulo: "Yo antes de ti",
        autor: "Jojo Moyes",
        pasta: "Blanda",
        edicion: "Básica",
        anio: 2012,
        estado: "PRESTADO",
        capitulos: ["El aviador", "El planeta B-612", "El zorro"],
        imagen: "https://m.media-amazon.com/images/I/713KAcGeQcL.jpg",
        comentarios: [],

        describirLibro: function () {
            return `Libro: ${this.titulo}, Pasta: ${this.pasta}, Edición: ${this.edicion}, Autor: ${this.autor}, Año: ${this.anio}, Estado: ${this.estado}`;
        },

        agregarCapitulo: function (capitulo) {
            this.capitulos.push(capitulo);
        },

        eliminarCapitulo: function (capitulo) {
            const index = this.capitulos.indexOf(capitulo);
            if (index !== -1) {
                this.capitulos.splice(index, 1);
            }
        }
    },
    {
        titulo: "El color de las cosas invisibles",
        autor: "Andrea Longarela",
        pasta: "Dura",
        edicion: "Básica",
        anio: 2023,
        estado: "PRESTADO",
        capitulos: ["Inicio", "Sancho Panza", "Los molinos"],
        imagen: "https://m.media-amazon.com/images/I/816UgxSBR-L._UF1000,1000_QL80_.jpg",
        comentarios: [],

        describirLibro: function () {
            return `Libro: ${this.titulo}, Pasta: ${this.pasta}, Edición: ${this.edicion}, Autor: ${this.autor}, Año: ${this.anio}, Estado: ${this.estado}`;
        },

        agregarCapitulo: function (capitulo) {
            this.capitulos.push(capitulo);
        },

        eliminarCapitulo: function (capitulo) {
            const index = this.capitulos.indexOf(capitulo);
            if (index !== -1) {
                this.capitulos.splice(index, 1);
            }
        }
    }
];

function seleccionarLibro(indice) {
    if (indice >= 0 && indice < libros.length) {
        const libro = libros[indice];

        console.log(libro.describirLibro());
        console.log("Capítulos:");
        console.log(libro.capitulos);

        return libro; // importante para poder usarlo después
    } else {
        console.log("Libro no válido");
        return null;
    }
}

const libroElegido = seleccionarLibro(1);

// Agregar capítulos
libroElegido.agregarCapitulo("Nuevo capítulo agregado");
console.log(libroElegido.capitulos);

// Eliminar capítulos
libroElegido.eliminarCapitulo("Macondo");
console.log(libroElegido.capitulos);

let libroActual = 0;

// SELECTOR DE LIBROS
const selector = document.getElementById("selectorLibro");

libros.forEach((libro, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = libro.titulo;
    selector.appendChild(option);
});

// CAMBIO DE LIBRO
selector.addEventListener("change", function () {
    libroActual = this.value;
    mostrarLibro();
});

// MOSTRAR LIBRO EN HTML
function mostrarLibro() {
    const libro = libros[libroActual];

    document.getElementById("infoLibro").innerHTML = `
        <img src="${libro.imagen}" alt="${libro.titulo}" 
            style="width:250px; max-height:500px; object-fit:cover; border-radius:20px; margin-bottom:15px;">

        <h2>${libro.titulo}</h2>
        <p><strong>Autor:</strong> ${libro.autor}</p>
        <p><strong>Año:</strong> ${libro.anio}</p>
        <p><strong>Estado:</strong> ${libro.estado}</p>
    `;

    mostrarComentarios();
}

// AGREGAR COMENTARIO
function agregarComentario() {
    const input = document.getElementById("comentarioInput");
    const texto = input.value;

    if (texto.trim() === "") return;

    libros[libroActual].comentarios.push({
        texto: texto,
        fecha: new Date().toLocaleString()
    });

    input.value = "";
    mostrarComentarios();
}

// MOSTRAR COMENTARIOS
function mostrarComentarios() {
    const contenedor = document.getElementById("listaComentarios");
    contenedor.innerHTML = "";

    libros[libroActual].comentarios.forEach((c, index) => {
        const div = document.createElement("div");

        div.innerHTML = `
            <div class="comentarioCard">
                <p>${c.texto}</p>
                <small>${c.fecha}</small>
                <br>
                <button onclick="eliminarComentario(${index})">Eliminar</button>
            </div>

        `;

        contenedor.appendChild(div);
    });
}

// ELIMINAR COMENTARIO
function eliminarComentario(index) {
    libros[libroActual].comentarios.splice(index, 1);
    mostrarComentarios();
}

// INICIALIZAR PRIMER LIBRO
mostrarLibro();