var canvas = document.getElementById('viewer');
var viewer = new JSC3D.Viewer(canvas);

var zancollor = {

    index : 0,

    models : [
        './assets/app/obj/cup.obj',
        './assets/app/obj/basket.obj',
        './assets/app/obj/spoon.obj'
    ],

    next : function() {

        this.index++;

        if (this.index > (this.models.length-1))
            this.index = 0;

        viewer.replaceSceneFromUrl(this.models[this.index]);
    },

    prev : function() {

        this.index--;

        if (this.index < 0)
            this.index = (this.models.length-1);

        viewer.replaceSceneFromUrl(this.models[this.index]);
    },

    init : function() {

        this.index = 0;

        viewer.setParameter('SceneUrl', this.models[0]);

        viewer.setParameter('InitRotationX', -30);
        viewer.setParameter('InitRotationY', 30);
        viewer.setParameter('InitRotationZ', 30);
        viewer.setParameter('ModelColor', '#94D0C4');
        viewer.setParameter('BackgroundColor1', '#e0ebef');
        viewer.setParameter('BackgroundColor2', '#e0ebef');
        viewer.setParameter('RenderMode', 'smooth');

        $(".cls-1, .cls-4").css('fill', '#94D0C4');

        if (Modernizr.webgl) {
            viewer.setParameter('MipMapping', JSC3D.PlatformInfo.supportWebGL ? 'off' : 'on');
            viewer.setParameter('Renderer', 'webgl');
        }

        viewer.init();
        viewer.update();
    }
};

$(document).ready( function(){

    zancollor.init();

    $("#canvas-next").on('click', function(e){
        e.preventDefault();
        zancollor.next();
    });

    $("#canvas-prev").on('click', function(e){
        e.preventDefault();
        zancollor.prev();
    });

    $('*').filter(function() {

        if ($(this).data('hexa') !== undefined)
            $(this).css('background-color', "#"+$(this).data('hexa'));
    });

    $(".item").on("click",function(e){

        e.preventDefault();

        $(".item").removeClass('active');
        $(this).addClass('active');

        var hexa = $(this).attr('data-hexa');

        $("#cor").css("fill", '#' + hexa);
        $(".cls-1, .cls-4").css('fill', '#' + hexa);

        $(".code").html($(this).data('code'));

        viewer.setParameter('ModelColor', '#' + hexa );
        viewer.init();
        viewer.update();
    });

    $(".item-custom-1, .item-custom-2, .item-custom-3").on("click", function(e){

        e.preventDefault();

        var item = $(this);

        $(".item-custom").removeClass('active');
        $(item).addClass('active');

        $(".custom-color").minicolors({
            inline : true,
            change : function(value, opacity) {

                $(".minicolors .example").css('background', value);
                $(item).css('background', value);


            }
        });

    });


    $(".top-right").css('border-top-width', ($(window).width() * 20 / 100) + 'px');
    $(".top-right").css('border-left-width', ($(window).width() * 20 / 100) + 'px');

    $(".left").css('border-top-width', ($(window).width() * 10 / 100) + 'px');
    $(".left").css('border-bottom-width', ($(window).width() * 10 / 100) + 'px');
    $(".left").css('border-left-width', ($(window).width() * 10 / 100) + 'px');
    $(".left").css('top', '-' + (39 + ($(window).width() * 10 / 100) + ($('footer').height())) + 'px');

    $(".right").css('border-top-width', ($('footer').height() + 119) + 'px');
    $(".right").css('border-right-width', ($('footer').height() + 119) + 'px');
    $(".right").css('top', '-' + (39 + ($('footer').height())) + 'px');

});