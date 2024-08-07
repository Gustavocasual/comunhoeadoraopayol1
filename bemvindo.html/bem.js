var anima =document.getElementById("anima");
var opa = 1;

function primeiratela(){
    if(opa % 2 == 1){
        anima.classList.remove("anima");
        anima.classList.remove("animaon");
        anima.classList.add("animaoff");
    }
    else{
        anima.classList.remove("animaoff");
        anima.classList.add("animaon");
    }
    opa++;
}


var anima2 =document.getElementById("anima2");
var opas = 1;

function primeiratela2(){
    if(opas % 2 == 1){
        anima2.classList.remove("anima2");
        anima2.classList.remove("animaon2");
        anima2.classList.add("animaoff2");
    }
    else{
        anima2.classList.remove("animaoff2");
        anima2.classList.add("animaon2");
    }
    opas++;
}

function fim(){
    let seg = 4;
    var tempo = document.getElementById("tempo");

    var time = setInterval(() => {
        seg--;
        tempo.textContent = seg;

        if(seg <= 0){
            clearInterval(time);
            window.location = "index.html";
        }
    }, 1000);
}
