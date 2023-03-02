// elementos selecionados

const navegation = document.getElementById('navegation');
const resumen = document.getElementById('resumen');
const inicio = document.getElementById('inicio');
const fichaMedica = document.getElementById('ficha-medica');
const carpetas = document.getElementById('carpetas');
const notas = document.getElementById('notas');
const avanceFisico = document.getElementById('avance -fisico');
// variable que contine el mavegador

const htmlNavegation = `
<ul id="navegacion-ul">
<li class="navegation-li" id="resumenIndicador"><i id="resumen" class="fa-regular fa-circle-user icono"></i></li>
<li class="navegation-li" id="inicioIndicador"><i id="inicio" class="fa-solid fa-envelope-open-text icono"></i></li>
<li class="navegation-li" id="ficha-medicaIndicador"><i id="ficha-medica" class="fa-regular fa-clipboard icono"></i></li>
<li class="navegation-li" id="notasIndicador"><i id="notas" class="fa-regular fa-file-lines icono"></i></li>
<li class="navegation-li" id="userIndicador"><i id="user" class="fa-regular fa-user icono"></i></li>
</ul>`

function navegacion() {
    return navegation.innerHTML = htmlNavegation;
}
// enlaces
function enlaces() {
    navegation.addEventListener('click', (e) => {
        console.log(e.target.id)
        if (e.target.id == 'resumen') {
            window.open("resumen.html", "_self");
        } else if (e.target.id == 'inicio') {
            window.open("inicio.html", "_self");
        } else if (e.target.id == 'ficha-medica') {
            window.open("ficha-medica.html", "_self");
        } else if (e.target.id == 'notas') {
            window.open("notas-para-ti.html", "_self");
        } else if (e.target.id == 'user') {
            window.open("infoUser.html", "_self");
        }

    })
    console.log(window.location.pathname)


}
function indicadorIcono() {
    if (window.location.pathname == '/resumen.html') {
        document.querySelector('.resumen-nav').classList.add("active")

    } else if (window.location.pathname == '/inicio.html') {
        document.querySelector('.inicio-nav').classList.add("active")

    } else if (window.location.pathname == '/ficha-medica.html') {
        document.querySelector('.ficha-medica-nav').classList.add("active")

    } else if (window.location.pathname == '/carpetas.html') {
        document.querySelector('.carpetas-nav').classList.add("active")

    } else if (window.location.pathname == '/notas-para-ti.html') {
        document.querySelector('.notas-nav').classList.add("active")

    } else if (window.location.pathname == '/avances-fisicos.html') {
        document.querySelector('.avance-fisico-nav').classList.add("active")

    } else if (window.location.pathname == '/infoUser.html') {
        document.querySelector('.info-user-nav').classList.add("active")

    }
}
navegacion()
enlaces()
indicadorIcono()


