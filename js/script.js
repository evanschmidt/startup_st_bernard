/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    // Place your code here.

   // backstretch
    if(jQuery('body.front').length > 0){
       $("#block-block-3").backstretch("/sites/default/files/images/StartUpStBernard-logoBG.jpg");
//        $("#block-views-page-blocks-block-3").backstretch("/sites/default/files/images/page/our-dough.jpg");
//        $("#block-views-our-farmers-block-1").backstretch("/sites/default/files/images/page/field.jpg");
//        $("#block-block-11").backstretch([
//            "/sites/default/files/images/homepage/slider1.jpg"
//          , "/sites/default/files/images/homepage/slider2.jpg"
//          , "/sites/default/files/images/homepage/slider3.jpg"
 //       ], {duration: 3000, fade: 750});

        //fullPage.js
        $('#fullpage').fullpage({
            scrollingSpeed: 700,
            autoScrolling: false,
            anchors:['about', '110000-prize-package', 'enter-the-challange', 'our-partners', 'register-to-attend'],
            navigationTooltips: ['about', '110000-prize-package', 'enter-the-challange', 'our-partners', 'register-to-attend'],
            verticalCentered: true,
            paddingTop: '3em',
            paddingBottom: '1em',
            resize : false,
            css3: false,
            responsize: 1
        });
    }
 

  }
};


})(jQuery, Drupal, this, this.document);
