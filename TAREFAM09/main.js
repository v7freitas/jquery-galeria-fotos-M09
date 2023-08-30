$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault()
    })

    $('#botao').click(function() {
        const tarefa = $('#novaTarefa').val()
        let lista = $('#lista')
        const novoItem = $(`<li style="display: none">${tarefa}</li>`)
        $(tarefa).appendTo(novoItem)
        $(novoItem).appendTo(lista)      
    })

    $('li').click(function(){
        $(this).addClass('item-completado')
    })
})


