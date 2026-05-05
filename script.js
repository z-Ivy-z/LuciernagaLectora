const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    estado: "disponible",

    capitulos: [],

    describirLibro: function () {
        return `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`;
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
};
console.log(libro.describirLibro());

libro.agregarCapitulo("El inicio del tiempo");
libro.agregarCapitulo("La familia Buendía");
libro.agregarCapitulo("El amor y la soledad");

console.log(libro.capitulos);

libro.eliminarCapitulo("El inicio del tiempo");

console.log(libro.capitulos);