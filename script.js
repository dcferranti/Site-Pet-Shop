var elementosPerguntas = document.querySelectorAll('.perguntas')

elementosPerguntas.forEach(function (perguntas) {
    perguntas.addEventListener('click', function () {
        perguntas.classList.toggle('ativa')
    })
})