document.addEventListener("DOMContentLoaded", init);
let saladosDataCarta;
let bebidasDataCarta;
let dulcesDataCarta;
let premiadosDataCarta;

function init() {
    fetch("/json/cartaBebidas.json")
        .then(response => response.json())
        .then(data => {
            bebidasDataCarta = data.bebidas;
            if (document.querySelector('.pagina-completaB')) {
                infocompletaBebidas();
            }
        })
        .catch(error => console.error("Error al cargar el JSON: " + error));
    fetch("/json/cartaSalados.json")
        .then(response => response.json())
        .then(data => {
            saladosDataCarta = data.salados;
            if (document.querySelector('.pagina-completaS')) {
                infocompletaSalados();
            }
        })
        .catch(error => console.error("Error al cargar el JSON: " + error));
    fetch("/json/cartaPremiados.json")
        .then(response => response.json())
        .then(data => {
            premiadosDataCarta = data.premiados;
            if (document.querySelector('.pagina-completaP')) {
                infocompletaPremiados();
            }
        })
        .catch(error => console.error("Error al cargar el JSON: " + error));
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

function infocompletaBebidas() {
    // Obtener el primer elemento del JSON
    bebidasDataCarta.forEach(function (producto, index) {
        var nombreElement = document.getElementById("nombreb" + (index + 1));
        var imagenElement = document.getElementById("imageb" + (index + 1));
        var descripcionElement = document.getElementById("Descripcionb" + (index + 1));
        var precio = document.getElementById("preciob" + (index + 1));

        // Asignar la información del producto a los elementos HTML
        precio.innerText = producto.Precio
        nombreElement.innerText = producto.Nombre;
        imagenElement.src = producto.image;
        imagenElement.alt = producto.Nombre + " Image";
        descripcionElement.innerText = producto.Descripción;
    });
}
function infocompletaSalados() {
    // Obtener el primer elemento del JSON
    saladosDataCarta.forEach(function (producto, index) {
        var nombreElement = document.getElementById("nombres" + (index + 1));
        var imagenElement = document.getElementById("images" + (index + 1));
        var descripcionElement = document.getElementById("Descripcions" + (index + 1));
        var precio = document.getElementById("precios" + (index + 1));

        // Asignar la información del producto a los elementos HTML
        precio.innerText = producto.Precio + '€';
        nombreElement.innerText = producto.Nombre;
        imagenElement.src = producto.image;
        imagenElement.alt = producto.Nombre + " Image";
        descripcionElement.innerText = producto.Descripción;
    });
}
function infocompletaDulces() {
    // Obtener el primer elemento del JSON
    dulcesDataCarta.forEach(function (producto, index) {
        var nombreElement = document.getElementById("nombred" + (index + 1));
        var imagenElement = document.getElementById("imaged" + (index + 1));
        var descripcionElement = document.getElementById("Descripciond" + (index + 1));
        var precio = document.getElementById("preciod" + (index + 1));

        // Asignar la información del producto a los elementos HTML
        precio.innerText = producto.Precio;
        nombreElement.innerText = producto.Nombre;
        imagenElement.src = producto.image;
        imagenElement.alt = producto.Nombre + " Image";
        descripcionElement.innerText = producto.Descripción + ' ';            
    });
}
function infocompletaPremiados() {
    // Obtener el primer elemento del JSON
    premiadosDataCarta.forEach(function (producto, index) {
        var nombreElement = document.getElementById("nombrep" + (index + 1));
        var imagenElement = document.getElementById("imagep" + (index + 1));
        var descripcionElement = document.getElementById("Descripcionp" + (index + 1));
        var precio = document.getElementById("preciop" + (index + 1));

        // Asignar la información del producto a los elementos HTML
        precio.innerText =producto.Precio
        nombreElement.innerText = producto.Nombre;
        imagenElement.src = producto.image;
        imagenElement.alt = producto.Nombre + " Image";
        descripcionElement.innerText = producto.Descripción + ' ';            

    });
}