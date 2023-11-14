document.addEventListener("DOMContentLoaded",init)

function init() {
    console.log('DOM cargado')
}

function mostrarComentario() {
    
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

