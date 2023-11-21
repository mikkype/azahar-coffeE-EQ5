document.addEventListener("DOMContentLoaded", init);
let dulcesData;
let saladosData;
let bebidasData;
let premiadosData;

function init() {
    fetch("/json/cartaDulces.json")
        .then(response => response.json())
        .then(data => {
            dulcesData = data.dulces;
            // Lógica para mostrar o utilizar estos datos        
            infodulce();
        })
        .catch(error => console.error("Error al cargar el JSON de dulces: " + error));

    fetch("/json/cartaSalados.json")
        .then(response => response.json())
        .then(data => {
            saladosData = data.salados;
            // Lógica para mostrar o utilizar estos datos
            infoSalados();
        })
        .catch(error => console.error("Error al cargar el JSON de salados: " + error));
    fetch("/json/cartaBebidas.json")
        .then(response => response.json())
        .then(data => {
            bebidasData = data.bebidas;
            // Lógica para mostrar o utilizar estos datos
            infobebidas();
        })
        .catch(error => console.error("Error al cargar el JSON de salados: " + error));
    fetch("/json/cartaPremiados.json")
        .then(response => response.json())
        .then(data => {
            premiadosData = data.premiados;
            // Lógica para mostrar o utilizar estos datos
            infopremiados();
        })
        .catch(error => console.error("Error al cargar el JSON de salados: " + error));
}
/* Funcion para sacar los salados */

function infoSalados() {
    const listaSalados = document.getElementById("listaSalados");

    saladosData.forEach((producto, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${producto.Nombre} - ${producto.Precio}€`;
        listaSalados.appendChild(listItem);
    });
}
/* Funcion para sacar los dulces */

function infodulce() {
    const listaDulces = document.getElementById("listaDulces");

    dulcesData.forEach((producto, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${producto.Nombre} - ${producto.Precio}€`;
        listaDulces.appendChild(listItem);
    });
}
/* Funcion para sacar los bebidas */

function infobebidas() {
    const listaDulces = document.getElementById("listaBebidas");

    bebidasData.forEach((producto, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${producto.Nombre} - ${producto.Precio}€`;
        listaDulces.appendChild(listItem);
    });
}
/* Funcion para sacar los premiados */

function infopremiados() {
    const listaDulces = document.getElementById("listaPremiados");

    premiadosData.forEach((producto, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${producto.Nombre} - ${producto.Precio}€`;
        listaDulces.appendChild(listItem);
    });
}