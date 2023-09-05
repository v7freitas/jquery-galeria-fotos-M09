$(document).ready(function(){

    $('form').on('submit', function(e) {
        e.preventDefault()

        const tarefa = $('#novaTarefa').val()
        if(tarefa !== ''){
            $('#lista').append('<li>' + tarefa + '</li>') 
            $('#novaTarefa').val('')
        }
    })

    $('ul').on('click', 'li', function(){
        $(this).toggleClass('item-completado')
    })
})


