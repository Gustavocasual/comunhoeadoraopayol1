var inta = document.querySelector(".inta");

inta.onclick = function(){
    window.location = "https://www.instagram.com/igrejacomunhaopaiol/ss";
}


var lapix = document.querySelector(".loca");

function lapis(){
    window.location = "https://www.google.com.br/maps/@-23.4149647,-46.9811914,3a,75y,346.16h,90t/data=!3m7!1e1!3m5!1s0uFRPZ88AGL8-gjDGStOiw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D0uFRPZ88AGL8-gjDGStOiw%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D346.15715494353174%26pitch%3D0%26thumbfov%3D90!7i16384!8i8192?coh=205410&entry=ttu";
}

var cd = document.getElementById("cd");
var n = 1 ;

function ty(){
    if(n % 2 == 1){
        cd.classList.remove("cc");
        cd.classList.remove("ccoff");
        cd.classList.add("ccon");
    }
    else{
    cd.classList.remove("ccon");
    cd.classList.add("ccoff");
    }
    n++;
}

function linkyoutube(){
    window.location = "https://www.youtube.com/@comunhaopaiolofc/streams";
}

function esquerdo(){
    var fotopastor = document.querySelector(".fotopastor");
    fotopastor.scrollBy({
        left: -464, behavior: "smooth"
    });
}
function direito(){
    var fotopastor = document.querySelector(".fotopastor");
    fotopastor.scrollBy({
        left: 464, behavior: "smooth"
    });
}

function instagrampastor(){
    window.location = "https://www.instagram.com/joilson.alves/";
}

function biblia(){
    window.location = "biblias.html";
}


function whatzap(){
    window.location = "https://wa.me/5511942442175";
}
function whatzapsuporte(){
    window.location = "https://wa.me/5511943451580";
}

function intagramigraje(){
    window.location = "https://www.instagram.com/igrejacomunhaopaiol/";
}

var tel = document.getElementById("tel");
var tele = 1;


function telefoneon(){
    if(tele % 2 == 1){
        tel.classList.remove("telefonemostra");
        tel.classList.remove("telefonemostraoff");
        tel.classList.add("telefonemostraon");
    }
    else{
        tel.classList.remove("telefonemostraon");
        tel.classList.add("telefonemostraoff");
    }

    tele++;
}

