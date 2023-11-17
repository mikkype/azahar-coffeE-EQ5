function init() {
    fetch("/json/cartaDulces.json")
        .then(response => response.json())
        .then(data => {
            // Obtener el primer elemento del JSON
            const primerItem = data[0];

            // Insertar datos del JSON en HTML
            document.getElementById("nombre").textContent = primerItem.Nombre;
            document.getElementById("Descripcion").innerHTML = '<span class="font-weight-bold">Descripción:</span> ' + primerItem.Descripción ;
            document.getElementById("precio").textContent = primerItem.Precio + '€';
            const segundoItem = data[1];
            document.getElementById("nombre1").textContent = segundoItem.Nombre;
            document.getElementById("Descripcion1").innerHTML = '<span class="font-weight-bold">Descripción:</span> ' + segundoItem.Descripción ;
            document.getElementById("precio1").textContent = segundoItem.Precio + '€';
            const tercerItem = data[2];
            document.getElementById("nombre2").textContent = tercerItem.Nombre;
            document.getElementById("Descripcion2").innerHTML = '<span class="font-weight-bold">Descripción:</span> ' + tercerItem.Descripción ;
            document.getElementById("precio2").textContent = tercerItem.Precio + '€';
            const cuartoItem = data[3];
            document.getElementById("nombre3").textContent = cuartoItem.Nombre;
            document.getElementById("Descripcion3").innerHTML = '<span class="font-weight-bold">Descripción:</span> ' + cuartoItem.Descripción ;
            document.getElementById("precio3").textContent = cuartoItem.Precio + '€';
        })
        .catch(error => console.error("Error al cargar el JSON: " + error));
}

window.addEventListener("load", init);