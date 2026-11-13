let jatekosP = 0 
let gepP = 0

function jatszas(elem){
    document.getElementById("ko").style.border= "0"
    document.getElementById("papir").style.border= "0"
    document.getElementById("ollo").style.border= "0"
    document.getElementById(elem).style.border = "2px solid red"

    let rnd = Math.floor(Math.random()*3)
    let valasztas = ["ko", "papir", "ollo"]
    let gepValasztas = valasztas[rnd]   
    const gepkep = document.getElementById("gep_valasztas")
    gepkep.src = `img/${gepValasztas}.png`
    let eredmeny 

    if (elem == "papir" && gepValasztas == "ollo" || 
        elem == "ollo" && gepValasztas == "ko" ||
        elem == "ko" && gepValasztas == "papir"
    ){
        eredmeny = "gep nyert"
    }
    else if (elem == gepValasztas){
        eredmeny = "dontetlen"
    }
    else{
        eredmeny = "te nyertel"
    }

    if (eredmeny == "te nyertel"){
        jatekosP++
        document.getElementById("te_pontod").innerHTML = jatekosP
    }
    else if (eredmeny == "gep nyert"){
        gepP++  
        document.getElementById("gep_pontok").innerHTML = gepP
    }

    document.getElementById("eredmeny").innerHTML = "Eredmeny " + eredmeny
    
}