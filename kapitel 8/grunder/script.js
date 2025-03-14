// var dag = "fredag";
// alert(dag);
// console.log("Idag är det " + dag);


// var stad = prompt("Var är du född?");
// console.log("Du är född i" + stad)

// var gissning = prompt("Vad är 23 + 43")
// if (gissning == 68) {
//     alert("Du är en människa")
// }
// else {
//     alert("Du är en robot")
// }


// var slumptal1 = Math.floor(Math.random() * 100);
// var slumptal2 = Math.floor(Math.random() * 100);
// document.writeln("<h1>Slumptal 1 =" + slumptal1 + "</h1>");

// var gissning = prompt("Vad är" + " " + slumptal1 + "+" + slumptal2 + "?");
// var facit = slumptal1 + slumptal2
// if (gissning == facit) {
//     alert("De här är korrekt");
// }
// else {
//     alert("Det är fel");
// }

// var tal1 = prompt("Skriv in ett tal")
// var tal2 = prompt("Skriv in ett annat tal")

// var svar = (Number(tal1) + Number(tal2));

// alert(tal1 + "+" + tal2 + "=" + svar)

// let ålder = prompt("Hur gammal är du")

// if (ålder >= 15) {
//     alert("Du får se filmen");
// } else {
//     alert("Du får inte se filmen");
// }

// let grader = prompt("Hur många grader är det ute?")

// if (grader >= 20) {
//     alert("Det är varmt");
// } else {
//     alert("Det är kallt");
// }

// let djur = prompt("Vad är ditt favorit djur")
// var hund = "hund"
// var hundar = "Hund"
// if (djur == hund || hundar) {
//     alert("Jag gillar också hundar");
// } else {
//     alert("Jag gillar det "+ djur + "också");
// }
var loop = true;
while (loop == true) {
    var brutto = prompt("Vad är din lön före skatt?");
    var skatt = prompt("Vad är din skatt?");
    var inkomst = Number(brutto) * (100 - Number(skatt)) / 100;
    if (inkomst < brutto) {
        alert("Din lön är " + inkomst);
        loop = false;
    }
    else (alert("du måste skriva in en siffra mer symboler eller bokstäver"))
}