$(document).ready(function(){

    $('form').on('submit', function(e) {
        e.preventDefault()
        const tarefa = $('#novaTarefa').val()
        const novoItem = $(`<li></li>`)
        let lista = $('lista')
        $(tarefa).appendTo(novoItem)
        $(novoItem).appendTo(lista)
        $('#novaTarefa').val('')        
    })

    $('li').click(function(){
        $(this).addClass('item-completado')
    })
})


