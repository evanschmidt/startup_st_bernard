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
//       $("#block-block-3").backstretch("/sites/default/files/images/StartUpStBernard-logoBG.jpg");
//       $(".how-it-works .block-title").backstretch("/sites/default/files/images/StartUpStBernard-worksBG.jpg");
//       $(".enter-the-challenge").backstretch("/sites/default/files/images/StartUpStBernard-registerBG.jpg");

        //fullPage.js
        $('#fullpage').fullpage({
            scrollingSpeed: 700,
            autoScrolling: false,
            anchors:['home', 'about', 'prize-package', 'how-it-works', 'sponsors', 'enter-the-challenge'],
            navigationTooltips: ['home', 'about', 'prize-package', 'how-it-works', 'sponsors', 'enter-the-challenge'],
            verticalCentered: true,
    	    resize : false
        });
    }

  }
};


})(jQuery, Drupal, this, this.document);
