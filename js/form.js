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
    alert("¡Gracias por dejarnos tu comentario! En breve podrás leerlo en esta sección.")
    
    var elemento = document.getElementById('elemento1').value;
    var comentario = document.getElementById('mostrar').value;

    if (elemento && comentario) {
        var comentarioMostrado = document.getElementById('comentarioMostrado');
        comentarioMostrado.innerHTML = '<p><b>' + elemento + '</b> dejó su comentario :</p> ' + comentario;
    }else {
        alert("Por favor, complete tanto el campo de nombre como el campo de comentario.");
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
  