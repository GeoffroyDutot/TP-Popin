
// recupérer la div Popin grâce à l'id
var popin = document.getElementById('id01');

// Affichage du popin en 1 click sur le boutton "Ouvrir"
window.onclick = function(event) {
    if (event.target == popin) {
        popin.style.display = "none";
    }
}

// Piste : recherche comment desactiver/empecher le rechargement lié au formulaire

        document.querySelector("form").addEventListener("submit", function(message_confirmation){
        span.innerHTML = 'Vous êtes bien enregistré';
        var span = document.querySelector("span");
        if(span = "Vous êtes bien enregistré")
        submit.preventDefault();


  });
 


  window.onkeydown = function(event){
    if (event.keyCode == 27) {
        popin.style.display = "none";
    }
}

function verifMail(champ)
{ 
   var regex = /^[a-zA-Z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/;
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

