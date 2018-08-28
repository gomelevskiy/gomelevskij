$(document).ready(function(){

    // fullpage init
    new fullpage('#portfolio', {
        menu: '#menu',
        lockAnchors: false,
        anchors:['slide1', 'slide2','slide3','slide4'],
        navigation: false,
        showActiveTooltip: true,
        scrollingSpeed: 800,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        loopBottom: false,
        loopTop: false,
        loopHorizontal: false,
        continuousVertical: false,
        continuousHorizontal: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        scrollOverflow: false,
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        scrollHorizontally: true,
        css3: true,
        responsiveWidth: 992,

        afterLoad: function(anchorLink, index) {
            $('video')[0].play();
        }
    });

    // navigation
    $(".nav-btn").click(function() {
        $(".hamburger-menu .bar").toggleClass("animate");
        $(".navbox").toggleClass("show");

        if( $(".navbox").hasClass("show") ) {
            $(".nav-btn .point").text("close");
        }else {
            $(".nav-btn .point").text("menu");
        }
    });

    $("#menu a").on('click', function() {
        $(".nav-btn").trigger("click");
    });

});


