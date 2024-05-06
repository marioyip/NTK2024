function generateFooter() {
    const footerContainer = document.getElementById('footer-container');
  
    // Maak een footer element aan
    const footer = '<footer class="bg-primary backgroundBlueGrey  text-center fixed-bottom" style="max-height: 70px;">' +
    '<div class="container d-flex justify-content-between align-items-center h-100">' +
    '<a href="https://emsi.nl/ntk/index.html" target="_blank"><img  src="assets/NTK gotwisdom footer grijs.png" class="image-box img-fluid" style="max-height: 50px;"></a>' +
    '<div class="text-right">' +
    '<img class="img-fluid" style="max-height: 40px;" src="assets/emsi.png" alt="EMSI logo"><p style="font-size:12px" sans-serif" class="mb-0"><a class="text-decoration-none text-white" href="http://www.emsionline.org/emsiweb/home" target="_blank">&copy; 2024 Stichting EMSI in Europe </a></p>' +
    ''
    '</div>' +
    '</div>' +
    '</footer>';
    
    // voeg de HTML-code van de footer toe aan het geselecteerde HTML-element met de innerHTML eigenschap
    footerContainer.innerHTML = footer;
  }
  
  // Roep de generateFooter functie aan om de footer te genereren
  generateFooter();