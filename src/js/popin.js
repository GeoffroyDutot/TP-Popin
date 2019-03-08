// recupérer la div Popin grâce à l'id
var popin = document.getElementById('id01');
var ouvreur = document.getElementById('ouvreur');
var fermeur = document.getElementById('fermeur');
var bouton_send = document.getElementById("send"); // Affichage du popin en 1 click sur le boutton "Ouvrir"

window.onclick = function (event) {
  if (event.target == popin) {
    popin.style.display = "none";
  }
};

document.getElementById('saisie_mail').onkeydown = verifMail;

fermeur.onclick = function () {
  document.getElementById('id01').style.display = 'none';
};

ouvreur.onclick = function () {
  document.getElementById('id01').style.display = 'block';
};

function verifMail() {
  champ = document.getElementById('saisie_mail').value;
  var regex = /^[a-zA-Z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/;
  var bouton_send = document.getElementById("send");

  if (!regex.test(champ)) {
    bouton_send.disabled = true;
    bouton_send.setAttribute("class", "disabled_button");
  } else {
    document.getElementById("send").disabled = false;
    bouton_send.setAttribute("class", "none");
  }
} //  traitement Ajax -> Script Php


document.querySelector("form").addEventListener("submit", function (e) {
  $.ajax({
    url: 'script.php',
    // La ressource ciblée
    type: 'POST',
    data: 'email=' + document.getElementById('saisie_mail').value,
    dataType: 'text',
    success: function (erreur_php) {
      var span = document.querySelector("span");

      if (erreur_php == "OK") {
        span.innerHTML = "Les données ont bien été enregistrées";
      } else {
        span.innerHTML = "Il y'a eu une erreur dans le traitement pour la base de donnée (PHP)";
      }
    },
    error: function () {
      var span = document.querySelector("span");
      span.innerHTML = "Il y'a eu une erreur dans le traitement(AJAX)";
    }
  });
  e.preventDefault();
});

window.onkeydown = function (event) {
  if (event.keyCode == 27) {
    popin.style.display = "none";
  }
};

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  popin.style.display = "none";
});