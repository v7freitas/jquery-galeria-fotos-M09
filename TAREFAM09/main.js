$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault()
    })


    $('#botao').click(function() {
        const tarefa = $('#novaTarefa').val()
        if(tarefa !== ''){
            let lista = $('#lista')
            $(lista).appendTo('<li>' + tarefa + '</li>') 
            $('#novaTarefa').val('')
        }
    })
})


