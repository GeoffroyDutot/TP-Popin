

// recupérer la div Popin grâce à l'id
var popin = document.getElementById('id01');

// Affichage du popin en 1 click sur le boutton "Ouvrir"
window.onclick = function(event) {
    if (event.target == popin) {
        popin.style.display = "none";
    }
}

// Commentaire validaton inscription

        document.querySelector("form").addEventListener("submit", function(event){
        event.preventDefault()
        popin.style.display = "none";
        var span = document.querySelector('span');
        span.innerText='Vous êtes bien enregistré';
  });
 
// Fermeture du Popin grâce au bouton "Echap"
    window.onkeydown = function(event){
    if (event.keyCode == 27) {
        popin.style.display = "none";
    }
}

// Verification champ E-mail
function verifMail(champ)
{ 
   var regex = /^[a-zA-Z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{1,4}$/;
   var bouton_send = document.getElementById("send")
   if(!regex.test(champ.value))
   {
    bouton_send.disabled = true;
    bouton_send.setAttribute("class", "disabled_button");
   }
   else
   {
      document.getElementById("send").disabled = false;
      bouton_send.setAttribute("class", "none");
   }
}

