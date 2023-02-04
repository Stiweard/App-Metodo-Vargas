const informacionRT = '<ul id="ul-title-resumen"><li class="li-title-resumen"><i class="fa-solid fa-calendar-days iconoTitle"></i></li><li id="titleElemento">resumen</li><li class="li-title-resumen"><i class="fa-regular fa-user iconoTitle"></i></li></ul>'

const informacionIT = '<ul id="ul-title-resumen"><li class="li-title-resumen"><i class="fa-solid fa-calendar-days iconoTitle"></i></li><li id="titleElemento">Inicio</li><li class="li-title-resumen"><i class="fa-regular fa-user iconoTitle"></i></li></ul>'

const informacionFT = '<ul id="ul-title-resumen"><li style="z-index: -1;" class="li-title-resumen"><i class="fa-solid fa-calendar-days iconoTitle"></i></li><li id="titleElemento">ficha medica</li><li class="li-title-resumen"><i class="fa-regular fa-user iconoTitle"></i></li></ul>'

const informacionCT = '<ul id="ul-title-resumen"><li class="li-title-resumen"><i class="fa-solid fa-bars iconoTitle"></i></li><li id="titleElemento">Carpetas</li><li class="li-title-resumen"><i class="fa-regular fa-user iconoTitle"></i></li></ul>'

const informacionNT = '<ul id="ul-title-resumen"><li style="z-index: -1;" class="li-title-resumen"><i class="fa-solid fa-calendar-days iconoTitle"></i></li><li id="titleElemento">Notas para ti</li><li class="li-title-resumen"><i class="fa-regular fa-user iconoTitle"></i></li></ul>'

const informacionAT = '<ul id="ul-title-resumen"><li style="z-index: -1;" class="li-title-resumen"><i class="fa-solid fa-calendar-days iconoTitle"></i></li><li id="titleElemento">Avances físicos</li><li class="li-title-resumen"><i class="fa-regular fa-user iconoTitle"></i></li></ul>'

const containerResumenEvent = document.querySelector('.containerEvento')


containerResumenEvent.addEventListener('click', (e) => {
    console.log(e.target.className)
    if (e.target.className == 'fa-regular fa-user iconoTitle') {
        return document.querySelector('.continerInfoUser').style.display = 'block'
    }else if(e.target.className == 'fa-solid fa-bars iconoTitle'){
        
    }
})

document.querySelector('.continerInfoUser').addEventListener('click', (e) => {
    console.log(e.target.className)
    if (e.target.className == 'fa-solid fa-chevron-left iconFleUserback'){
        return document.querySelector('.continerInfoUser').style.display = 'none'
    }
}
)

function titleIR(){
    if(window.location.pathname == '/html/resumen.html'){
       return document.getElementById('title-divR-1').innerHTML = informacionRT

    }else if(window.location.pathname == '/html/inicio.html'){
        return document.getElementById('title-divI-1').innerHTML = informacionIT

    }else if(window.location.pathname == '/html/ficha-medica.html'){
        return document.getElementById('title-divF-1').innerHTML = informacionFT

    }else if(window.location.pathname == '/html/carpetas.html'){
        return document.getElementById('title-divC-1').innerHTML = informacionCT

    }else if(window.location.pathname == '/html/notas-para-ti.html'){
        return document.getElementById('title-divN-1').innerHTML = informacionNT

    }else if(window.location.pathname == '/html/avances-fisicos.html'){
        return document.getElementById('title-divA-1').innerHTML = informacionAT

    }
}
titleIR()
const nombre = 'Jesus'
const HTMLInfoPersonal = '<div class="flechaTitle"><i class="fa-solid fa-chevron-left iconFleUserback"></i><h2 id="titleInfoUser">Informacion personal</h2><h2 id="titleInfoUser"> </h2></div><div class="titleNombreUser"><h2 id="nombreusertitle">'+ nombre +'</h2></div><div class="contenidoInformacionUser"><p class="infoUserContent">numero de documento:<span class="contentUserSpan">V-28247351</span></p><p class="infoUserContent">correo:<span class="contentUserSpan">user@gmail.com</span></p><p class="infoUserContent">sexo:<span class="contentUserSpan">mascculino</span></p><p class="infoUserContent">fecha de macimiento:<span class="contentUserSpan">13 de abril, 1999</span></p><p class="infoUserContent">edad:<span class="contentUserSpan">23 años</span></p><p class="infoUserContent">altura:<span class="contentUserSpan">1.70 centimetros</span></p><p class="infoUserContent">fecha de inicio:<span class="contentUserSpan">25 de mayo, 2021</span></p><p class="infoUserContent">fecha actual:<span class="contentUserSpan">83</span></p><p class="infoUserContent">profecion:<span class="contentUserSpan">desarrollador web</span></p></div><div class="containerBotonsecion"><button id="botonSecion">    cerrar secion</button></div>'

function InfoPersonal(){
return document.querySelector('.continerInfoUser').innerHTML = HTMLInfoPersonal
}
InfoPersonal()

