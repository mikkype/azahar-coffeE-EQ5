document.addEventListener("DOMContentLoaded",init)

function init() {
    console.log('DOM cargado')
}

function mostrarComentario() {
    var nombre = document.getElementById('form4Example1').value;
    var comentario = document.getElementById('form4Example3').value;

    if (nombre && comentario) {
        // Obtén la colección de elementos con la clase 'comentario'
        var comentariosMostrados = document.getElementsByClassName('comentario');

        // Itera sobre la colección y actualiza el contenido de cada elemento
        for (var i = 0; i < comentariosMostrados.length; i++) {
            comentariosMostrados[i].innerHTML =
                `
                <h3>${nombre} :</h3><p>dejó su comentario :</p>
                <p>${comentario}</p>
                `;
        }
    }
}


function mostrarComentario2() {
    
    var nombre = document.getElementById('form4Example1').value;
    var comentario = document.getElementById('form4Example3').value;

    if (nombre && comentario) {
        var comentarioMostrado = document.getElementsByClassName('comentario');
        comentarioMostrado.innerHTML =
        ` 
        <h3>${nombre} :</h3><p>dejó su comentario :</p>
        <p>${comentario}</p>
        `
    }
}

function mostrarComentario1() {
    
    var nombre = document.getElementById('form4Example1').value;
    var comentario = document.getElementById('form4Example3').value;

    if (nombre && comentario) {
        var comentarioMostrado = document.getElementById('comentarioMostrado');
        comentarioMostrado.innerHTML +=
        ` 
        <div class="row bg-body-tertiary alert alert-info">
        <div class=col-12>
        <p><b>${nombre}</b> dejó su comentario : ${comentario}</p>
        </div>
        </div>
        `
    }
}
