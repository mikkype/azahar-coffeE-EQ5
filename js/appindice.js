document.addEventListener("DOMContentLoaded", init);
/* Variables globales */
let dulcesData;
let saladosData;
let bebidasData;
let premiadosData;

/* Funcion init */
function init() {
    /* Conversion a objeto del json Dulces y su funcion */

    fetch("/json/cartaDulces.json")
        .then(response => response.json())
        .then(data => {
            dulcesData = data.dulces;
            infodulce();
        })
        .catch(error => console.error("Error al cargar el JSON de dulces: " + error));
    /* Conversion a objeto del json Salados y su funcion */

    fetch("/json/cartaSalados.json")
        .then(response => response.json())
        .then(data => {
            saladosData = data.salados;
            infoSalados();
        })
        .catch(error => console.error("Error al cargar el JSON de salados: " + error));
    /* Conversion a objeto del json Bebidas y su funcion */

    fetch("/json/cartaBebidas.json")
        .then(response => response.json())
        .then(data => {
            bebidasData = data.bebidas;
            infobebidas();
        })
        .catch(error => console.error("Error al cargar el JSON de salados: " + error));
    /* Conversion a objeto del json Premiados y su funcion */

    fetch("/json/cartaPremiados.json")
        .then(response => response.json())
        .then(data => {
            premiadosData = data.premiados;
            infopremiados();
        })
        .catch(error => console.error("Error al cargar el JSON de salados: " + error));
}

/* FUNCIONES */

/* Funcion para sacar los salados */

function infoSalados() {
    const listaSalados1 = document.getElementById("listaSalados1");
    const listaSalados2 = document.getElementById("listaSalados2");
    listaSalados1.classList.add('listas');
    listaSalados2.classList.add('listas2');
    saladosData.forEach((producto, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = producto.Nombre;
        listaSalados1.appendChild(listItem);
    });
    saladosData.forEach((producto, index) => {
        const listItem = document.createElement('li');
        listaSalados2.style.listStyleType = 'none';

        listItem.textContent = '€ ' + producto.Precio;
        listaSalados2.appendChild(listItem);
    });
}


/* Funcion para sacar los dulces */

function infodulce() {
    const listaDulces1 = document.getElementById("listaDulces1");
    const listaDulces2 = document.getElementById("listaDulces2");
    listaDulces1.classList.add('listas');
    listaDulces2.classList.add('listas2');
    dulcesData.forEach((producto, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = producto.Nombre;
        listaDulces1.appendChild(listItem);
    });
    dulcesData.forEach((producto, index) => {
        const listItem = document.createElement('li');
        listaDulces2.style.listStyleType = 'none';

        listItem.textContent = '€ ' + producto.Precio;
        listaDulces2.appendChild(listItem);
    });
}
/* Funcion para sacar los bebidas */

function infobebidas() {
    const listaBebidas1 = document.getElementById("listaBebidas1");
    const listaBebidas2 = document.getElementById("listaBebidas2");
    listaBebidas1.classList.add('listas');
    listaBebidas2.classList.add('listas2');
    bebidasData.forEach((producto, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = producto.Nombre;
        listaBebidas1.appendChild(listItem);
    });
    bebidasData.forEach((producto, index) => {
        const listItem = document.createElement('li');
        listaBebidas2.style.listStyleType = 'none';

        listItem.textContent = '€ ' + producto.Precio;
        listaBebidas2.appendChild(listItem);
    });
}
/* Funcion para sacar los premiados */

function infopremiados() {
    const listaPremiados1 = document.getElementById("listaPremiados1");
    const listaPremiados2 = document.getElementById("listaPremiados2");
    listaPremiados1.classList.add('listas');
    listaPremiados2.classList.add('listas2');

    premiadosData.forEach((producto, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = producto.Nombre;
        listaPremiados1.appendChild(listItem);
    });
    premiadosData.forEach((producto, index) => {
        const listItem = document.createElement('li');
        listaPremiados2.style.listStyleType = 'none';

        listItem.textContent = '€ ' + producto.Precio;
        listaPremiados2.appendChild(listItem);
    });
}
