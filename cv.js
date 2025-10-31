let nom = document.getElementById("nom");
let texte = "";
let i = 0;

function ecrire() {
  if (i < texte.length) {
    nom.textContent += texte.charAt(i);
    i++;
    setTimeout(ecrire, 10); // vitesse d’écriture
  }
}

window.onload = ecrire;

