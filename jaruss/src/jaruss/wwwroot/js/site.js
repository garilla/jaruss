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

var itemGroups = [
    // 0 - gazprom
    [
        { src: 'images/gazprom/Image00003.jpg', w: 3000, h: 2000 },
        { src: 'images/gazprom/Image00002.jpg', w: 3000, h: 2000 },
        { src: 'images/gazprom/Image00004.jpg', w: 2000, h: 3000 },
        { src: 'images/gazprom/Image00001.jpg', w: 3000, h: 2000 }
    ],
    // 1 - gazprom-hall
    [
        { src: 'images/gazprom-hall/Image00002.jpg', w: 2273, h: 1530 },
        { src: 'images/gazprom-hall/Image00001.jpg', w: 1818, h: 2781 },
        { src: 'images/gazprom-hall/Image00003.jpg', w: 2894, h: 1883 },
        { src: 'images/gazprom-hall/Image00004.jpg', w: 2810, h: 2000 }
    ],
    // 2 - tib
    [
        { src: 'images/tib/Image00003.jpg', w: 2106, h: 1400 },
        { src: 'images/tib/Image00001.jpg', w: 1984, h: 1353 },
        { src: 'images/tib/Image00002.jpg', w: 1259, h: 1852 }
    ],
    // 3 - private-home3
    [
        { src: 'images/private-home3/Image00006.jpg', w: 3225, h: 2419 },
        { src: 'images/private-home3/Image00005.jpg', w: 2889, h: 2167 },
        { src: 'images/private-home3/Image00001.jpg', w: 3225, h: 2419 },
        { src: 'images/private-home3/Image00003.jpg', w: 2889, h: 2167 },
        { src: 'images/private-home3/Image00004.jpg', w: 2889, h: 2167 },
        { src: 'images/private-home3/Image00007.jpg', w: 2167, h: 2889 }
    ],
    // 4 - bed
    [
        { src: 'images/bed/1.jpg', w: 3008, h: 2000 }
    ],
    // 5 - cupboard
    [
        { src: 'images/cupboard/1.jpg', w: 2226, h: 1967 }
    ],
    // 6 - doors
    [
        { src: 'images/doors/Image00001.jpg', w: 862, h: 1285 },
        { src: 'images/doors/Image00002.jpg', w: 1037, h: 1549 },
        { src: 'images/doors/Image00003.jpg', w: 942, h: 1406 },
        { src: 'images/doors/Image00004.jpg', w: 1037, h: 1549 },
        { src: 'images/doors/Image00005.jpg', w: 844, h: 1126 },
        { src: 'images/doors/Image00006.jpg', w: 1922, h: 2966 }
    ],
    // 7 - furniture
    [
        { src: 'images/furniture/Image00001.jpg', w: 2664, h: 1940 },
        { src: 'images/furniture/Image00003.jpg', w: 2000, h: 3000 }
    ],
    // 8 - hotel1
    [
        { src: 'images/hotel1/Image00011.jpg', w: 1080, h: 762 },
        { src: 'images/hotel1/Image00008.jpg', w: 844, h: 1126 },
        { src: 'images/hotel1/Image00009.jpg', w: 844, h: 1126 },
        { src: 'images/hotel1/Image00010.jpg', w: 982, h: 734 },
        { src: 'images/hotel1/Image00015.jpg', w: 782, h: 1079 }
    ],
    // 9 - hotel2
    [
        { src: 'images/hotel2/Image00014.jpg', w: 1018, h: 821 },
        { src: 'images/hotel2/Image00012.jpg', w: 844, h: 1126 },
        { src: 'images/hotel2/Image00013.jpg', w: 1086, h: 844 }
    ],
    // 10 - private-home
    [
        { src: 'images/private-home/1.jpg', w: 3008, h: 2000 },
        { src: 'images/private-home/2.jpg', w: 3008, h: 2000 },
        { src: 'images/private-home/3.jpg', w: 3008, h: 2000 },
        { src: 'images/private-home/4.jpg', w: 3008, h: 2000 },
        { src: 'images/private-home/5.jpg', w: 2790, h: 1888 }
    ],
    // 11 - private-home2
    [
        { src: 'images/private-home2/1.jpg', w: 1843, h: 1397 },
        { src: 'images/private-home2/2.jpg', w: 2000, h: 3008 },
    ],
];

$(document).ready(function () {
    var pswpElement = document.querySelectorAll('.pswp')[0];
    var images = $('#foliowrap figure').click(function () {
        var index = $(this).attr('img-group');

        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, itemGroups[index], options);
        gallery.options.arrowKeys = true;
        gallery.options.index = 0;
        gallery.init();
    });
});
