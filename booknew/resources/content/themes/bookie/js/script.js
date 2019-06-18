jQuery(document).ready(function($){
	'use strict';
	
	/* Keyboard image navigation */
	if ( $('body').hasClass('attachment-jpg') || 
		$('body').hasClass('attachment-jpeg') || 
		$('body').hasClass('attachment-jpe') || 
		$('body').hasClass('attachment-gif') || 
		$('body').hasClass('attachment-png') 
	) {
		$( document ).keydown( function( e ) {
			var url = false;
			if ( e.which === 37 ) {  // Left arrow key code
				url = $( '.image-navigation .nav-previous a' ).attr( 'href' );
			}
			else if ( e.which === 39 ) {  // Right arrow key code
				url = $( '.image-navigation .nav-next a' ).attr( 'href' );
			}
			if ( url && ( !$( 'textarea, input' ).is( ':focus' ) ) ) {
				window.location = url;
			}
		} );
	}
	
	/* Style WordPress Default Widgets */
	$('.widget select, .woocommerce div.product form.cart .variations select').addClass('form-control');
	$('.widget input[type="text"], .widget input[type="search"], .widget input[type="email"]').addClass('form-control');
	$('.widget input[type="button"], .widget input[type="submit"], .widget input[type="reset"], .widget button').addClass('btn btn-default');
	$('.widget table#wp-calendar').addClass( 'table table-bordered').unwrap().find('th, td').addClass('text-center');
	$('.widget-title .rsswidget img').hide();
	$('.widget-title .rsswidget:first-child').append('<i class="fa fa-rss pull-right">');

	if ( $('.woocommerce div.product .summary .product-offer-box').children().length < 1 ) {
		$('.woocommerce div.product .summary .product-offer-box').hide();
	}
		
});
