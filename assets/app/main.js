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
        viewer.setParameter('ModelColor', '#ffffff');
        viewer.setParameter('BackgroundColor1', '#f2f2f2');
        viewer.setParameter('BackgroundColor2', '#f2f2f2');
        viewer.setParameter('RenderMode', 'smooth');

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

    $(".item > a").on("click",function(e){

        e.preventDefault();

        var hexa = $(this).attr('data-hexa');

        $("#cor").css("fill", '#' + hexa );

        viewer.setParameter('ModelColor', '#' + hexa );
        viewer.init();
        viewer.update();
    });

});