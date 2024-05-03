function createNavbar() {
  // Maak het navigatiebalk element
  const navbar = document.createElement("nav");
  const navbarContainer = document.createElement('nav');
  navbarContainer.className = 'navbar navbar-expand-lg bg-white'; 
  
  // Voeg inhoud toe aan het navigatiebalk element
  navbarContainer.innerHTML = `
<div class="container fixed-top px-3">
  <button class="navbar-toggler custom-toggler-color" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"><i class="bi bi-list"></i></span></button>
  <a class="navbar-brand" href="index.html"></a>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mb-2 mb-lg-0" style="font-size: 14px;">
      <li class="nav-item mx-1"><a class="colorBlack nav-link" href="index.html">home</a></li>
      <li class="nav-item mx-1"><a class="colorBlack nav-link" href="agenda.html">agenda</a></li>
      <li class="nav-item mx-1"><a class="colorBlack nav-link" href="liederen.html">liederen</a></li>
      <li class="nav-item mx-1"><a class="colorBlack nav-link" href="bijbelgroep.html">bijbelgroep</a></li>
      <li class="nav-item mx-1"><a class="colorBlack nav-link" href="stilletijd.html">stille tijd</a></li>
      <li class="nav-item mx-1"><a class="colorBlack nav-link" href="naamindeling.html">naamindeling</a></li>
      <li class="nav-item mx-1"><a class="colorBlack nav-link" href="huisregels.html">huisregels</a></li>
      <li class="nav-item mx-1"><a class="colorBlack nav-link" href="medewerkerslijst.html">medewerkers</a></li>
    </ul>
  </div>
</div>
`;

  // Voeg het navigatiebalk element toe aan het container element
  const container = document.getElementById("navbar-container");
  container.appendChild(navbarContainer);
}

// Roep de createNavbar functie aan zodra de pagina is geladen
window.onload = createNavbar;
