(function($){
    /**
     * Plugin to create the waves effect
     */
    $.fn.jkWavesEffect = function(){
        var namespace = 'click.material-boot.waves';
        $(".ripple").remove();
        $(".wave").unbind(namespace).bind(namespace, function(e){
            var px = $(this).offset().left,
                py = $(this).offset().top,
                bw = $(this).width(),
                bh = $(this).height();
            var r = $("<div/>");
            $(this).append(r);
            var rd = 20;
            var x = e.pageX - px - rd / 2;
            var y = e.pageY - py - rd / 2;
            r.css({top : y + "px", left : x + "px"})
                .addClass("ripple");
            setTimeout(function(){ r.remove() }, 1000);
        });
    };
}(jQuery));