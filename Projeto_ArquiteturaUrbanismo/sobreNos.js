  // Adiciona a classe 'active' à opção de navegação correspondente com base no caminho da URL
  $(document).ready(function(){
    var currentLocation = window.location.pathname;
    $('.navbar-nav .nav-link').each(function(){
      var link = $(this).attr('href');
      var currentLink = link.substring(link.lastIndexOf('/') + 1); // obtém a última parte do link
      var currentPath = currentLocation.substring(currentLocation.lastIndexOf('/') + 1); // obtém a última parte do caminho da URL

      if (currentPath === currentLink) {
        $(this).addClass('active');
      }
    });
  });
