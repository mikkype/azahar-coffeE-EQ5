document.addEventListener("DOMContentLoaded", init);
/* Variables globales de cada variable q contendra la base de datos de cada carta */
let saladosDataCarta;
let bebidasDataCarta;
let dulcesDataCarta;
let premiadosDataCarta;
/* Funcion init que arranca los fecth y la funcion que alberga cada uno */

function init() {
                /* Traigo el json Bebidas*/

    fetch("/json/cartaBebidas.json")
    /* Lo transformo en un objeto */
        .then(response => response.json())
        /* Meto todos los datos del json en una variable data */
        .then(data => {
            /* cambio la variable data por otra para que no se sobreescriban datos por tener varias del mismo nombre */
            bebidasDataCarta = data.bebidas;
            /* Condicion que tenga esta clase para que se lanze la funcion */
            if (document.querySelector('.pagina-completaB')) {
                infocompletaBebidas();
            }
        })
        .catch(error => console.error("Error al cargar el JSON: " + error));
                /* Traigo el json Salados*/

    fetch("/json/cartaSalados.json")
        .then(response => response.json())
        .then(data => {
            saladosDataCarta = data.salados;
            if (document.querySelector('.pagina-completaS')) {
                infocompletaSalados();
            }
        })
        .catch(error => console.error("Error al cargar el JSON: " + error));
                /* Traigo el json Premiados*/

    fetch("/json/cartaPremiados.json")
        .then(response => response.json())
        .then(data => {
            premiadosDataCarta = data.premiados;
            if (document.querySelector('.pagina-completaP')) {
                infocompletaPremiados();
                popo();

            }
        })
        .catch(error => console.error("Error al cargar el JSON: " + error));
                /* Traigo el json Dulces*/

    fetch("/json/cartaDulces.json")
        .then(response => response.json())
        .then(data => {
            dulcesDataCarta = data.dulces;
            if (document.querySelector('.pagina-completaD')) {
                infocompletaDulces();
            }
        })
        .catch(error => console.error("Error al cargar el JSON: " + error));
}

                                    /* FUNCIONES */


function infocompletaBebidas() {
    // Cojer la base de datos correpondientes para hacer el foreach
    bebidasDataCarta.forEach(function (producto, index) {
        var nombreElement = document.getElementById("nombreb" + (index + 1));
        var imagenElement = document.getElementById("imageb" + (index + 1));
        var descripcionElement = document.getElementById("Descripcionb" + (index + 1));
        var precio = document.getElementById("preciob" + (index + 1));

        // Asignar la información del producto a los elementos HTML
        precio.innerText ='Precio: '+ producto.Precio + '€';
        nombreElement.innerText = producto.Nombre;
        imagenElement.src = producto.image;
        imagenElement.alt = producto.Nombre + " Image";
        descripcionElement.innerText = producto.Descripción;
    });
}
function infocompletaSalados() {
    // Cojer la base de datos correpondientes para hacer el foreach
    saladosDataCarta.forEach(function (producto, index) {
        var nombreElement = document.getElementById("nombres" + (index + 1));
        var imagenElement = document.getElementById("images" + (index + 1));
        var descripcionElement = document.getElementById("Descripcions" + (index + 1));
        var precio = document.getElementById("precios" + (index + 1));

        // Asignar la información del producto a los elementos HTML
        nombreElement.innerText = producto.Nombre;
        imagenElement.src = producto.image;
        imagenElement.alt = producto.Nombre + " Image";
        descripcionElement.innerText = producto.Descripción;        
        precio.innerText = 'Precio: '+producto.Precio + '€';

    });
}
function infocompletaDulces() {
    // Cojer la base de datos correpondientes para hacer el foreach
    dulcesDataCarta.forEach(function (producto, index) {
        var nombreElement = document.getElementById("nombred" + (index + 1));
        var imagenElement = document.getElementById("imaged" + (index + 1));
        var descripcionElement = document.getElementById("Descripciond" + (index + 1));
        var precio = document.getElementById("preciod" + (index + 1));

        // Asignar la información del producto a los elementos HTML
        precio.innerText = 'Precio: '+producto.Precio + '€';
        nombreElement.innerText = producto.Nombre;
        imagenElement.src = producto.image;
        imagenElement.alt = producto.Nombre + " Image";
        descripcionElement.innerText = producto.Descripción + ' ';            
    });
}
function infocompletaPremiados() {
    // Cojer la base de datos correpondientes para hacer el foreach
    premiadosDataCarta.forEach(function (producto, index) {
        var nombreElement = document.getElementById("nombrep" + (index + 1));
        var imagenElement = document.getElementById("imagep" + (index + 1));
        var descripcionElement = document.getElementById("Descripcionp" + (index + 1));
        var precio = document.getElementById("preciop" + (index + 1));

        // Asignar la información del producto a los elementos HTML
        precio.innerText ='Precio: '+producto.Precio + '€';
        nombreElement.innerText = producto.Nombre;
        imagenElement.src = producto.image;
        imagenElement.alt = producto.Nombre + " Image";
        descripcionElement.innerText = producto.Descripción + ' ';            

    });
    
}
function popo() {
    var ratingItems = document.querySelectorAll('.rating input');

    ratingItems.forEach(function(item) {
      var popover = new bootstrap.Popover(item, {
        placement: 'top',
        trigger: 'hover',
        title: 'Calificación',
        content: 'Haz clic para calificar'
      });
    });
}