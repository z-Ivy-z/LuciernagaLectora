const libros = [
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        pasta: "dura",
        edicion: "primera",
        anio: 1967,
        estado: "disponible",
        capitulos: ["Inicio", "Macondo", "La familia Buendía"],

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
        titulo: "El Principito",
        autor: "Antoine de Saint-Exupéry",
        pasta: "blanda",
        edicion: "segunda",
        anio: 1943,
        estado: "prestado",
        capitulos: ["El aviador", "El planeta B-612", "El zorro"],

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
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        pasta: "dura",
        edicion: "primera",
        anio: 1605,
        estado: "disponible",
        capitulos: ["Inicio", "Sancho Panza", "Los molinos"],

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