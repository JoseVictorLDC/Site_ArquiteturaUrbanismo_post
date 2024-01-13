$(document).ready(function () {
    // Ao alterar o estado de qualquer checkbox
    $(":checkbox").change(function () {
        // Obter todas as categorias selecionadas
        var categoriasSelecionadas = $(":checkbox:checked").map(function () {
            return this.value;
        }).get();

        // Se não houver categorias selecionadas, recarregar a página
        if (categoriasSelecionadas.length === 0) {
            location.reload();
        } else {
            // Mostrar/ocultar itens com base nas categorias selecionadas
            $(".item").hide();
            categoriasSelecionadas.forEach(function (categoria) {
                $("." + categoria).show();
            });
        }

        // Exibir mensagem se nenhum item for encontrado
        if ($(".item:visible").length === 0) {
            $("#noItemsMessage").show();
        } else {
            $("#noItemsMessage").hide();
        }
    });
});