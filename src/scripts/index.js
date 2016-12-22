jQuery(document).ready(function ($) {



    var tl = new TimelineLite();
    tl.from(".section1", 0.8, {top: -500, autoAlpha: 0})
            .from(".section1 h1", 0.8, {scale: 0.5, autoAlpha: 0, ease: Back.easeOut})
            .from(".section1 img", 0.8, {top: -500, autoAlpha: 0, ease: Back.easeOut})
            .from(".section1 p", 0.3, {scale: 0.5, autoAlpha: 0})
//            .staggerFrom("#nav img", 0.5, {scale: 0, rotation: -180, autoAlpha: 0}, 0.2, "stagger");


    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({triggerElement: ".section2"})
            .setTween(TweenMax.staggerFromTo(".section2 p", 0.4, {force3D: true, opacity: 0, left: -200}, {opacity: 1, left: 0, ease: Back.easeOut}, 0.3))
            .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".section2"})
            .setTween(TweenMax.from(".rocket", 0.5, {right: -620, autoAlpha: 0}))
            .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".rotatedback img"})
            .setTween(TweenMax.from(".rotatedback img", 0.5, {autoAlpha: 0}))
            .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".rotatedback", duration: 400, offset: -150})
            .setTween(TweenMax.from(".leftspan", 0.5, {force3D: true, left: -1000, autoAlpha: 0}))
            .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".rotatedback", duration: 400, offset: -150})
            .setTween(TweenMax.from(".rightspan", 0.5, {right: -1000, autoAlpha: 0}))
            .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".section3 p"})
            .setTween(TweenMax.staggerFromTo(".section3 p", 0.4, {opacity: 0, left: 200}, {opacity: 1, left: 0, ease: Back.easeOut}, 0.3))
            .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".section4", duration: 400, offset: -300})
            .setTween(TweenMax.from(".section4 .tenisphoto", 0.5, {bottom: -1000, autoAlpha: 0}))
//            .addIndicators()
            .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".section4 .collumnleft img", duration: 400})
            .setTween(TweenMax.staggerFromTo(".section4 .collumnleft img", 0.6, {opacity: 0, left: -200}, {opacity: 1, left: 0, ease: Back.easeOut}, 0.3))
            .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".section5 .quite", duration: 400})
            .setTween(TweenMax.staggerFromTo(".section5 h1", 0.6, {opacity: 0, left: 200}, {opacity: 1, left: 0}, 0.3))
            .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".section5 .quite", duration: 400, offset: 30})
            .setTween(TweenMax.from(".section5 .doubleline", 0.5, {width: 0}))
//            .addIndicators()
            .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".section5  p"})
            .setTween(TweenMax.staggerFromTo(".section5 p", 0.4, {opacity: 0, left: 200}, {opacity: 1, left: 0, ease: Back.easeOut}, 0.3))
            .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".section5 .quite", offset: 430})
            .setTween(TweenMax.from(".section5 .AGASSI", 0.5, {autoAlpha: 0}))
//            .addIndicators()
            .addTo(controller);

    var tl2 = new TimelineLite();
    new ScrollMagic.Scene({triggerElement: ".section6", offset: 200, triggerHook: 'onEnter'})
            .setTween(
                    tl2.from(".section6 .bannerwrap", 0.8, {top: -500, autoAlpha: 0})
                    .from(".section6 .logo_big", 0.8, {scale: 0.5, autoAlpha: 0, ease: Back.easeOut})
                    .from(".section6 p", 0.8, {top: -500, autoAlpha: 0, ease: Back.easeOut})
                    .from(".section6 .watch", 0.3, {scale: 0.5, autoAlpha: 0, ease: Back.easeOut})
                    )
//            .addIndicators()
            .addTo(controller);
});