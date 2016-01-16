jQuery( document ).ready(function() {
    jQuery('.full-image').resizeToParent({parent: '#full-background'});
});
jQuery( window ).ready(function() {

    var height = jQuery(window).height();
    jQuery('#hit').css('margin-top', height + 'px');

    jQuery(window).resize(function () {
        var height = jQuery(window).height();
        jQuery('#hit').css('margin-top', height + 'px');
    });
});

/*jQuery( document ).ready(function() {
    jQuery('#half-hero').resizeToParent({parent: '#half-background'});
});
jQuery( window ).ready(function() {

    var height = jQuery('#half-background').height();
    jQuery('.site-inner').css('margin-top', height + 'px');

    jQuery(window).resize(function () {
        var height = jQuery('#half-background').height();
        jQuery('.site-inner').css('margin-top', height + 'px');
    });
});*/

jQuery(document).ready(function(){

    var header = jQuery('.full-image');
    var range = 500;

    jQuery(window).on('scroll', function () {

        var scrollTop = jQuery(this).scrollTop();
        var offset = header.offset().top;
        var height = header.outerHeight();
        offset = offset + height / 1;
        var calc = 1 - (scrollTop - offset + range) / range;

        header.css({ 'opacity': calc });

        if ( calc > '1' ) {
            header.css({ 'opacity': 1 });
        } else if ( calc < '-3' ) {
            header.css({ 'opacity': 0 });
        }

    });

});

jQuery(window).load(function() {

    /*jQuery("#status").fadeOut("slow");*/

    jQuery("#loader").delay(1).fadeOut();

});
