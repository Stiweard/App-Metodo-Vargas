// const informacionRT = '<ul id="ul-title-resumen"><li class="li-title-resumen"><i class="fa-solid fa-calendar-days iconoTitle"></i></li><li id="titleElemento">resumen</li><li class="li-title-resumen"><i class="fa-regular fa-user iconoTitle"></i></li></ul>'

// const informacionIT = '<ul id="ul-title-resumen"><li class="li-title-resumen"><i class="fa-solid fa-calendar-days iconoTitle"></i></li><li id="titleElemento">Inicio</li><li class="li-title-resumen"><i class="fa-regular fa-user iconoTitle"></i></li></ul>'

// const informacionAT = '<ul id="ul-title-resumen"><li style="z-index: -1;" class="li-title-resumen"><i class="fa-solid fa-calendar-days iconoTitle"></i></li><li id="titleElemento">Avances físicos</li><li class="li-title-resumen"><i class="fa-regular fa-user iconoTitle"></i></li></ul>'

const containerResumenEvent = document.querySelector('.containerEvento')


containerResumenEvent.addEventListener('click', (e) => {
    console.log(e.target.className)
    if (e.target.className == 'fa-regular fa-user iconoTitle') {
        return document.querySelector('.continerInfoUser').style.display = 'block'
    } else if (e.target.className == 'fa-solid fa-bars iconoTitle') {

    }
})

document.querySelector('.continerInfoUser').addEventListener('click', (e) => {
    console.log(e.target.className)
    if (e.target.className == 'fa-solid fa-chevron-left iconFleUserback') {
        return document.querySelector('.continerInfoUser').style.display = 'none'
    }
}
)

function titleIR() {
    if (window.location.pathname == 'resumen.html') {
        return document.getElementById('title-divR-1').innerHTML = informacionRT

    } else if (window.location.pathname == 'inicio.html') {
        return document.getElementById('title-divI-1').innerHTML = informacionIT

    } else if (window.location.pathname == 'ficha-medica.html') {
        return document.getElementById('title-divF-1').innerHTML = informacionFT

    } else if (window.location.pathname == 'carpetas.html') {
        return document.getElementById('title-divC-1').innerHTML = informacionCT

    } else if (window.location.pathname == 'notas-para-ti.html') {
        return document.getElementById('title-divN-1').innerHTML = informacionNT

    } else if (window.location.pathname == 'avances-fisicos.html') {
        return document.getElementById('title-divA-1').innerHTML = informacionAT

    }
}
titleIR()
const nombre = 'Jesus'




