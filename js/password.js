function verbergWachtwoordveld() {
  document.getElementById("geheimecode").classList.add("verborgen");
}

function handleEnter(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    checkCode();
  }
}

function checkCode() {
  var code = document.getElementById("geheimecode").value;
  if (code === "ntk2024") {
    document.getElementById("wachtwoord-formulier").classList.add("verborgen");
    document.getElementById("geheimecode").classList.add("verborgen");
    document.getElementById("beveiligde-pagina").classList.remove("verborgen");
  } else {
    alert("Probeer het even opnieuw! :)");
  }
}