$(document).ready(function (){
    $('.n1').click(function (event) {
        horizontalNavigation(0, event);
    });
    $('.n2').click(function (event) {
        horizontalNavigation(600, event);
    });
    $('.n3').click(function (event) {
        horizontalNavigation(900, event);
    });

    $('.n4').click(function (event) {
        horizontalNavigation(1100, event);
    });

    $('.n5').click(function (event) {
        horizontalNavigation(1900, event);
    });

    $('.n6').click(function (event) {
        horizontalNavigation(2200, event);
    });

    $('.n7').click(function (event) {
        horizontalNavigation(2800, event);
    });

    $('.n8').click(function (event) {
        horizontalNavigation(3600, event);
    });

    $('.n9').click(function (event) {
        horizontalNavigation(4200, event);
    });

    $('.n10').click(function (event) {
        horizontalNavigation(4500, event);
    });

    $('.n11').click(function (event) {
        horizontalNavigation(5000, event);
    });

    $('.n12').click(function (event) {
        horizontalNavigation(5600, event);
    });

    $('.n13').click(function (event) {
        horizontalNavigation(6200, event);
    });

    $('.n14').click(function (event) {
        horizontalNavigation(6600, event);
    });

    $('.n15').click(function (event) {
        horizontalNavigation(7100, event);
    });

    $('.n16').click(function (event) {
        horizontalNavigation(7700, event);
    });

    $('.n17').click(function (event) {
        horizontalNavigation(8150, event);
    });

    $('.n18').click(function (event) {
        horizontalNavigation(8600, event);
    });

    $('.n19').click(function (event) {
        horizontalNavigation(9100, event);
    });

    $('.n20').click(function (event) {
        horizontalNavigation(10000, event);
    });

});

function horizontalNavigation(position, event) {
    $('#gentags').animate({scrollLeft: position}, 800);
    event.preventDefault();
}

$(".text").hide();
$("#text21").show();
$("#text22").show();
$('a').on('click', function(){
    var target = $(this).attr('rel');
    $("#"+target).show().siblings("div").hide();
});



	(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('gentags').scrollLeft -= (delta*40); // Multiplied by 40

    var rt = ($(window).width() - ($(".active_05").offset().left ));
        if(rt>200)
        {
           
          $(".about_menu").addClass("active");
        }
        else
        {
                    
        $(".about_menu").removeClass("active");
        }
        e.preventDefault();
    }
    if (document.getElementById('gentags').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('gentags').addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementById('gentags').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('gentags').attachEvent("onmousewheel", scrollHorizontally);
    }
})();