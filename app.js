let jatekosP = 0 
let gepP = 0
let jatekosNev = ""

function ellenorzes(event) {

    event.preventDefault();

    const nev = document.getElementById("fnev").value.trim();
    const email = document.getElementById("email").value.trim();
    const hiba = document.getElementById("hibauzenet");
    const emailMinta = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    hiba.innerHTML = "";

    if (nev.length < 8 || nev.length > 20) {
        hiba.innerHTML = "A felhasználónév 8-20 karakter hosszú legyen!";
        return;
    }
    else if(!emailMinta.test(email)){
        hiba.innerHTML = "Hibás email címet adtál meg!";
        return;
    }
    else if (/^[a-zA-Z]+$/.test(nev)) {
        hiba.innerHTML = "A felhasznaonev csak betuket tartalmazhat";
        return;
    }
    else{
        jatekosNev = nev;

        document.getElementById("regisztracio").style.display = "none";
        document.getElementById("container").style.display = "block";

        document.getElementById("jatekosPont").innerHTML = jatekosNev + " pontjai"
    }
}

function jatszas(elem){
    document.getElementById("ko").style.border= "0"
    document.getElementById("papir").style.border= "0"
    document.getElementById("ollo").style.border= "0"
    document.getElementById(elem).style.border = "2px solid red"

    let rnd = Math.floor(Math.random()*3)
    let valasztas = ["ko", "papir", "ollo"]
    let gepValasztas = valasztas[rnd]   
    let eredmeny 
    const gepkep = document.getElementById("gep_valasztas")

    gepkep.src = `img/${gepValasztas}.png`

    if (elem == "papir" && gepValasztas == "ollo" || 
        elem == "ollo" && gepValasztas == "ko" ||
        elem == "ko" && gepValasztas == "papir"
    ){
        eredmeny = "gep nyert"
        gepP++  
        document.getElementById("gep_pontok").innerHTML = gepP
    }
    else if (elem == gepValasztas){
        eredmeny = "dontetlen"
    }
    else{
        eredmeny = jatekosNev +  "nyertel"
        jatekosP++
        document.getElementById("te_pontod").innerHTML = jatekosP
    }
    document.getElementById("eredmeny").innerHTML = "Eredmeny " + eredmeny
    
    if (jatekosP == 10) {
        document.getElementById("eredmeny").innerHTML = "Gratulálok " + jatekosNev + "! Megnyerted a játékot!";
        document.getElementById("valasztasok").style.pointerEvents = "none";
    }
    else if (gepP == 10) {
        document.getElementById("eredmeny").innerHTML = "A gép nyerte az egész játékot! Vesztettél!";
        document.getElementById("valasztasok").style.pointerEvents = "none";
    }
}

function ujJatek() {
    jatekosP = 0;
    gepP = 0;

    document.getElementById("te_pontod").innerHTML = 0;
    document.getElementById("gep_pontok").innerHTML = 0;

    document.getElementById("eredmeny").innerHTML = "Eredmény:";

    document.getElementById("gep_valasztas").src = "img/ko.png";

    document.getElementById("ko").style.border = "0";
    document.getElementById("papir").style.border = "0";
    document.getElementById("ollo").style.border = "0";

    document.getElementById("valasztasok").style.pointerEvents = "auto";
}