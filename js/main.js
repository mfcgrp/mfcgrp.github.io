/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 * Modifications copyright (C) 2016 Laura Mun.
 */
 
// Preloader
$(document).ready(function() {
    $(window).on('load', function(){
        $('#loading-image').fadeOut(1000, function() {
            $(this).hide();
            $('#content').fadeIn(1500);
        });
    });
    
    // Change navBar opacity on scroll.
    $(window).scroll(collapseNavbar);
});

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

// jQuery for page scrolling feature - requires jQuery Easing plugin
$( function() {
    $( 'a.page-scroll' ).bind( 'click' , function( event ) {
        var $anchor = $( this );
        $( 'html, body' ).stop().animate({
            scrollTop: $( $anchor.attr( 'href' ) ).offset().top
        }, 1500, 'easeInOutExpo' );
        event.preventDefault();
    } );
} );

// Closes the Responsive Menu on Menu Item Click
$( '.navbar-collapse ul li a' ).click( function() {
    if ( window.innerWidth < 768 ) {
        $( this ).closest( '.collapse' ).collapse( 'toggle' );
    }
} );

$( '.navbar-header a' ).click( function() {
    if ( window.innerWidth < 768 && $( '.navbar-collapse ul li a' ).is( ':visible' ) ) {
        $( '.navbar-collapse ul li a' ).closest( '.collapse' ).collapse( 'toggle' );
    }
} );

// Make each element the same height
$( function() {
	$( '.team-bio' ).matchHeight();
} );
$( function() {
	$( '.team-name' ).matchHeight();
} );

/* Stuff to do upon load. */
$( document ).ready( function() {
	$( window ).on( 'load resize' , function(){
        /* Set video width. */
        var galleryWidth = $( '#gallery-container' ).width()
		$( '#gallery-video' ).width( galleryWidth );
	});
    
	$( window ).on( 'load' , function(){
        /* Content swap functionality. 
        Sauce: http://jsfiddle.net/FtS8u/7/ */
        $( '.pages' ).hide();
        
        var inTransition = false;
        $( '.navbar a' ).click( function ( e ) {
            e.preventDefault();
            if( inTransition ) { $( 'section' ).stop(); }
            inTransition = true;
            var item = this.href.split( '#' )[1];
            $( '.pages:visible' ).fadeOut( 1000 , function() {
                window.scrollTo( 0, 0 );
                $( '#' + item ).fadeIn( 1000, function() { inTransition = false; } );
            });
            
            /* Switches active state. */
            $( '.navbar' ).find( '.active' ).removeClass( 'active' );
            $( this ).parent().addClass( 'active' );
        });
        
        $( '#intro' ).show();
    });
});