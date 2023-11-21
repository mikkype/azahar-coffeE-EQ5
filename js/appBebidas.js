document.addEventListener("DOMContentLoaded", init);
function init() {
    fetch("/json/cartaBebidas.json")
        .then(response => response.json())
        .then(data => {
            // Obtener el primer elemento del JSON
            data.forEach(function (producto, index) {
                var nombreElement = document.getElementById("nombreb" + (index + 1));
                var imagenElement = document.getElementById("imageb" + (index + 1));
                var descripcionElement = document.getElementById("Descripcionb" + (index + 1));
                var precio = document.getElementById("preciob" + (index + 1));

                // Asignar la información del producto a los elementos HTML
                precio.innerText =producto.Precio
                nombreElement.innerText = producto.Nombre;
                imagenElement.src = producto.image;
                imagenElement.alt = producto.Nombre + " Image";

                var contenido = producto.Descripción + ' ';
                contenido += '<span class="precio">Precio: ' + producto.Precio.toFixed(2) + ' €</span>';
            
                // Insertar el contenido en el elemento p
                descripcionElement.innerHTML = contenido;
            });
        })
        .catch(error => console.error("Error al cargar el JSON: " + error));
}