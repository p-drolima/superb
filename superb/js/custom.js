jQuery( document ).ready(function() {
    jQuery('.page_header').resizeToParent({parent: '#full-background'});
});
jQuery( window ).ready(function() {

    var height = jQuery(window).height();
    jQuery('#hit').css('margin-top', height + 'px');

    jQuery(window).resize(function () {
        var height = jQuery(window).height();
        jQuery('#hit').css('margin-top', height + 'px');
    });
});

jQuery( document ).ready(function() {
    jQuery('.page_header').resizeToParent({parent: '#half-background'});
});
jQuery( window ).ready(function() {

    var height = jQuery('#half-background').height();
    jQuery('.site-inner').css('margin-top', height + 'px');

    jQuery(window).resize(function () {
        var height = jQuery('#half-background').height();
        jQuery('.site-inner').css('margin-top', height + 'px');
    });
});