
// Get the popin
var popin = document.getElementById('id01');
// When the user clicks anywhere outside of the popin, close it
window.onclick = function(event) {
    if (event.target == popin) {
        popin.style.display = "none";
    }
}
