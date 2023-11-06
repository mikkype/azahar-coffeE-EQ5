function init() {
    fetch("/json/cartaPrincipal.json")
        .then(response => response.json())
        .then(data => {
            // Obtener el primer elemento del JSON
            const primerItem = data[0];

            // Insertar datos del JSON en HTML
            document.getElementById("nombre").textContent = primerItem.Nombre;
            document.getElementById("Descripcion").innerHTML = '<span class="font-weight-bold">Descripción:</span> ' + primerItem.Descripción + '<span id="precio" class="text-justify float-right"></span>';
            document.getElementById("precio").textContent = primerItem.Precio;
            const segundoItem = data[1];

            document.getElementById("nombre1").textContent = segundoItem.Nombre;
            document.getElementById("Descripcion1").innerHTML = '<span class="font-weight-bold">Descripción:</span> ' + segundoItem.Descripción + '<span id="precio1" class="text-justify float-right"></span>';
            document.getElementById("precio1").textContent = segundoItem.Precio;
            const tercerItem = data[2];

            document.getElementById("nombre2").textContent = tercerItem.Nombre;
            document.getElementById("Descripcion2").innerHTML = '<span class="font-weight-bold">Descripción:</span> ' + tercerItem.Descripción + '<span id="precio2" class="text-justify float-right"></span>';
            document.getElementById("precio2").textContent = tercerItem.Precio;
            const cuartoItem = data[3];

            document.getElementById("nombre3").textContent = cuartoItem.Nombre;
            document.getElementById("Descripcion3").innerHTML = '<span class="font-weight-bold">Descripción:</span> ' + cuartoItem.Descripción + '<span id="precio3" class="text-justify float-right"></span>';
            document.getElementById("precio3").textContent = cuartoItem.Precio;
            const quintoItem = data[4];

            document.getElementById("nombre4").textContent = quintoItem.Nombre;
            document.getElementById("Descripcion4").innerHTML = '<span class="font-weight-bold">Descripción:</span> ' + tercerItem.Descripción + '<span id="precio2" class="text-justify float-right"></span>';
            document.getElementById("precio4").textContent = quintoItem.Precio;
            const sextoItem = data[5];
            
            document.getElementById("nombre5").textContent = sextoItem.Nombre;
            document.getElementById("Descripcion5").innerHTML = '<span class="font-weight-bold">Descripción:</span> ' + cuartoItem.Descripción + '<span id="precio3" class="text-justify float-right"></span>';
            document.getElementById("precio5").textContent = sextoItem.Precio;
        })
        .catch(error => console.error("Error al cargar el JSON: " + error));
}

window.addEventListener("load", init);