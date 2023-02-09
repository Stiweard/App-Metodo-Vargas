// javascript navegation 
let list = document.querySelectorAll(".list")
function setActiveClass() {
    list.forEach((item) =>
        item.classList.remove('active'))
    this.classList.add('active')
}
list.forEach((item) =>
    item.addEventListener('mouseover', setActiveClass))

// javascript navegation 

/* search */
let search = document.querySelector('.search')
let close = document.querySelector('.close')
let searchBox = document.querySelector('.searchBox')

search.onclick = function(){
searchBox.classList.add('active')
}

close.onclick = function(){
searchBox.classList.remove('active')
}



$(document).ready(function () {
$('#buscador').keyup(function () {
    var nombres = $('.nombres');
    var buscando = $(this).val();
    var item = '';
    for (var i = 0; i < nombres.length; i++) {
        item = $(nombres[i]).html();
        for (var x = 0; x < item.length; x++) {
            if (buscando.length == 0 || item.indexOf(buscando) > -1) {
                $(nombres[i]).parents('.item').show();
            } else {
                $(nombres[i]).parents('.item').hide();
            }
        }
    }
});
});

/* search */


/* Section deplegable */
const section1Style1 = document.querySelector(".section-1Style1")
const section1Style2 = document.querySelector(".section-1Style2")
const section1Style3 = document.querySelector(".section-1Style3")
const section1Style4 = document.querySelector(".section-1Style4")
const section1Style5 = document.querySelector(".section-1Style5")
const section1Style6 = document.querySelector(".section-1Style6")
const section1Style7 = document.querySelector(".section-1Style7")
const section1Style8 = document.querySelector(".section-1Style8")
const section1Style9 = document.querySelector(".section-1Style9")
const section1Style10 = document.querySelector(".section-1Style10")
const section1Style11 = document.querySelector(".section-1Style11")
const section1Style12 = document.querySelector(".section-1Style12")
const section1Style13 = document.querySelector(".section-1Style13")
const section1Style14 = document.querySelector(".section-1Style14")
const section1Style15 = document.querySelector(".section-1Style15")
const section1Style16 = document.querySelector(".section-1Style16")
const section1Style17 = document.querySelector(".section-1Style17")
const section1Style18 = document.querySelector(".section-1Style18")
const section1Style19 = document.querySelector(".section-1Style19")
const section1Style20 = document.querySelector(".section-1Style20")
const section1Style21 = document.querySelector(".section-1Style21")
const section1Style22 = document.querySelector(".section-1Style22")
const section1Style23 = document.querySelector(".section-1Style23")
const section1Style24 = document.querySelector(".section-1Style24")
const section1Style25 = document.querySelector(".section-1Style25")

const desplegableSection = document.querySelector(".desplegableSection").addEventListener('click',(e) =>{
    console.log(e.target.className)
if(e.target && e.target.className === 'fa-solid fa-chevron-down section-1 iconDespliegue1'){
    section1Style1.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-2 iconDespliegue2'){
    section1Style2.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-3 iconDespliegue3'){
    section1Style3.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-4 iconDespliegue4'){
    section1Style4.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-5 iconDespliegue5'){
    section1Style5.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-6 iconDespliegue6'){
    section1Style6.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-7 iconDespliegue7'){
    section1Style7.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-8 iconDespliegue8'){
    section1Style8.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-9 iconDespliegue9'){
    section1Style9.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-10 iconDespliegue10'){
    section1Style10.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-11 iconDespliegue11'){
    section1Style11.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-12 iconDespliegue12'){
    section1Style12.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-13 iconDespliegue13'){
    section1Style13.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-14 iconDespliegue14'){
    section1Style14.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-15 iconDespliegue15'){
    section1Style15.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-16 iconDespliegue16'){
    section1Style16.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-17 iconDespliegue17'){
    section1Style17.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-18 iconDespliegue18'){
    section1Style18.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-19 iconDespliegue19'){
    section1Style19.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-20 iconDespliegue20'){
    section1Style20.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-21 iconDespliegue21'){
    section1Style21.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-22 iconDespliegue22'){
    section1Style22.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-23 iconDespliegue23'){
    section1Style23.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-24 iconDespliegue24'){
    section1Style24.classList.toggle('active')

}else if(e.target && e.target.className === 'fa-solid fa-chevron-down section-25 iconDespliegue25'){
    section1Style25.classList.toggle('active')

}
})

/* Section deplegable */
