console.log("JavaScript funguje!");

let vzdelaniNaSkoly = document.querySelector(".vzdelani");
vzdelaniNaSkoly.textContent = "Školy";

let barvaOdstavce = document.querySelector(".predstaveni-se");
barvaOdstavce.style.color = "navy";

let obrazekLary = document.querySelector(".moje-foto");
obrazekLary.src = "img/druhe-foto.jpeg";

let nastavTridu = document.querySelector(".tlacitko1");
nastavTridu.classList.add("zvyrazneny");