// Отметить текущий пункт меню.
$(document).ready(function () {
    var menuItems = $('#primary-navigation li');

    jQuery.each(menuItems, function (i, val) {
        var a = $(val).children('a:first');
        if (window.location.href.indexOf(a.attr('href')) > 0) {
            $(val).addClass('active');
        }
    });
});
