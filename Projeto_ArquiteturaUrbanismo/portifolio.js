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

// Adiciona a classe 'active' à opção de navegação correspondente com base no caminho da URL
$(document).ready(function () {
    var currentLocation = window.location.pathname;
    $('.navbar-nav .nav-link').each(function () {
        var link = $(this).attr('href');
        var currentLink = link.substring(link.lastIndexOf('/') + 1); // obtém a última parte do link
        var currentPath = currentLocation.substring(currentLocation.lastIndexOf('/') + 1); // obtém a última parte do caminho da URL

        if (currentPath === currentLink) {
            $(this).addClass('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById("menuIcon");
    var menuPopup = document.getElementById("menuPopup");
    var closeButton = document.querySelector(".close-button");

    menuIcon.addEventListener("click", function () {
        toggleMenu();
    });

    closeButton.addEventListener("click", function () {
        toggleMenu();
    });

    function toggleMenu() {
        if (menuPopup.style.transform === "translateX(100%)") {
            menuPopup.style.transform = "translateX(0)";
        } else {
            menuPopup.style.transform = "translateX(100%)";
        }
    }
});