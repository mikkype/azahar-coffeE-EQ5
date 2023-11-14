document.addEventListener("DOMContentLoaded", function () {

    var questions = document.querySelectorAll('.question');
    var answers = document.querySelectorAll('.answer');

    questions.forEach(function (question, index) {
        question.addEventListener("click", function () {

            answers.forEach(function (answer) {
                answer.style.display = 'none';

                answers[index].style.display = 'block';


            });
        });
    });
})


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

// Función de carousel
$(document).ready(function() {
    //Set the carousel options
    $('#quote-carousel').carousel({
      pause: true,
      interval: 4000,
    });
  });
  