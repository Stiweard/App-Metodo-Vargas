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


