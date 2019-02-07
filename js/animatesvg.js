function pathPrepare($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
}

function drawRoadLeft() {

    var $line1 = $("path#line1"); var $line2 = $("path#line2"); var $line3 = $("path#line3"); var $line4 = $("path#line4"); var $line5 = $("path#line5");
    var $line6 = $("path#line6"); var $line7 = $("path#line7"); var $line8 = $("path#line8"); var $line9 = $("path#line9");
    var $line10 = $("path#line10"); var $line11 = $("path#line11"); var $line12 = $("path#line12"); var $line13 = $("path#line13"); var $line14 = $("path#line14"); var $line15 = $("path#line15"); var $line16 = $("path#line16"); var $line17 = $("path#line17"); var $line18 = $("path#line18"); var $line19 = $("path#line19"); var $line20 = $("path#line20"); var $line21 = $("path#line21"); var $line22 = $("path#line22"); var $line23 = $("path#line23"); var $line24 = $("path#line24"); var $line25 = $("path#line25");
    var $line26 = $("path#line26"); var $line27 = $("path#line27"); var $line28 = $("path#line28"); var $line29 = $("path#line29"); var $line30 = $("path#line30");
    var $line31 = $("path#line31"); var $line32 = $("path#line32"); var $line33 = $("path#line33"); var $line34 = $("path#line34"); var $line35 = $("path#line35");
    var $line36 = $("path#line36"); var $line37 = $("path#line37"); var $line38 = $("path#line38"); var $line39 = $("path#line39"); var $line40 = $("path#line40");
    var $line41 = $("path#line41");
    var $line42 = $("path#line42");


    var $line = '';
    var hijos = document.querySelectorAll('.roadLeft path');
    // prepare SVG
    for (var i = 1; i <= hijos.length; i++) {
        $line = 'path#line' + i;
        pathPrepare($($line));
        $line = '';
    }

    // init controller
    var controller = new ScrollMagic.Controller();
    var velocity = 0.05;

    // build tween
    var tween = new TimelineMax()
        .add(TweenMax.to($line1, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line2, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line3, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line4, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line5, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line6, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line7, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line8, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line9, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line10, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line11, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line12, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line13, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line14, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line15, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line16, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line17, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line18, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line19, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line20, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line21, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line22, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line23, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line24, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line25, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line26, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line27, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line28, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line29, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line30, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line31, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line32, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line33, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line34, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line35, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line36, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line37, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line38, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line39, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line40, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line41, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line42, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to("path", 1, { stroke: "#f73439", ease: Linear.easeNone }), 0);

    // build scene
    var scene = new ScrollMagic.Scene({ triggerElement: "#trigger2", duration: 200, tweenChanges: true })
        .setTween(tween)
        .addTo(controller);

        controller = null;
        scene = null;
        tween = null;
    
}

function drawRoadRight() {

    var $line1 = $("path#lineR1"); var $line2 = $("path#lineR2"); var $line3 = $("path#lineR3"); var $line4 = $("path#lineR4"); var $line5 = $("path#lineR5");
    var $line6 = $("path#lineR6"); var $line7 = $("path#lineR7"); var $line8 = $("path#lineR8"); var $line9 = $("path#lineR9");
    var $line10 = $("path#lineR10"); var $line11 = $("path#lineR11"); var $line12 = $("path#lineR12"); var $line13 = $("path#lineR13"); var $line14 = $("path#lineR14"); var $line15 = $("path#lineR15");
    var $line16 = $("path#lineR16"); var $line17 = $("path#lineR17"); var $line18 = $("path#lineR18"); var $line19 = $("path#lineR19"); var $line20 = $("path#lineR20"); 
    var $line21 = $("path#lineR21"); var $line22 = $("path#lineR22"); var $line23 = $("path#lineR23"); var $line24 = $("path#lineR24"); var $line25 = $("path#lineR25");
    var $line26 = $("path#lineR26"); var $line27 = $("path#lineR27"); var $line28 = $("path#lineR28"); var $line29 = $("path#lineR29"); var $line30 = $("path#lineR30");
    var $line31 = $("path#lineR31"); var $line32 = $("path#lineR32"); var $line33 = $("path#lineR33"); var $line34 = $("path#lineR34"); var $line35 = $("path#lineR35");
    var $line36 = $("path#lineR36"); var $line37 = $("path#lineR37"); var $line38 = $("path#lineR38"); var $line39 = $("path#lineR39"); var $line40 = $("path#lineR40");
    var $line41 = $("path#lineR41");
    var $line42 = $("path#lineR42");
    var $line43 = $("path#lineR43");
    var $line44 = $("path#lineR44");


    var $line = '';
    var hijos = document.querySelectorAll('.roadRight path');
    // console.log(hijos.length);
    // prepare SVG
    for (var i = 1; i <= hijos.length; i++) {
        $line = 'path#lineR' + i;
        pathPrepare($($line));
        $line = '';
    }

    // init controller
    var controller = new ScrollMagic.Controller();
    var velocity = 0.05;

    // build tween
    var tween = new TimelineMax()
        .add(TweenMax.to($line1, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line2, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line3, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line4, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line5, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line6, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line7, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line8, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line9, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line10, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line11, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line12, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line13, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line14, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line15, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line16, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line17, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line18, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line19, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line20, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line21, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line22, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line23, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line24, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line25, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line26, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line27, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line28, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line29, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line30, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line31, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line32, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line33, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line34, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line35, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line36, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line37, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line38, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line39, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line40, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line41, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line42, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line43, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to($line44, velocity, { strokeDashoffset: 0, fill: "#f73439", ease: Linear.easeNone }))
        .add(TweenMax.to("path", 1, { stroke: "#f73439", ease: Linear.easeNone }), 0);

    // build scene
    var scene = new ScrollMagic.Scene({ triggerElement: "#trigger3", duration: 200, tweenChanges: true })
        .setTween(tween)
        .addTo(controller);
}

// Init Functions

drawRoadLeft();
drawRoadRight();