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


Drupal.behaviors.hbvImages = {
  attach: function(context, settings) {
    $('.npx-image', context).once('hbv-images').each(function() {
      Drupal.behaviors.hbvImages.calculateMargin(this);
//      var defaultMultiplier = -16;
//      var height = $(this).height();
//      var multiplier = defaultMultiplier;
//      if($(this).attr('data-topmargin')) {
//        multiplier = parseInt($(this).attr('data-topmargin'), 10);
//      }
//      var margin = Math.ceil(height * (multiplier / 100));
//      $(this).css('margin-top', margin);
    });
  },
  calculateMargin: function(elem) {
    var defaultMultiplier = -16;
    var height = $(elem).height();
    var multiplier = defaultMultiplier;
    if($(elem).attr('data-topmargin')) {
      multiplier = parseInt($(elem).attr('data-topmargin'), 10);
    }
    var margin = Math.ceil(height * (multiplier / 100));
    $(elem).css('margin-top', margin);
  }
};

Drupal.behaviors.hbvDivHeight = {
  attach: function(context, settings) {
    $('.div-table-outer', context).once('hbv-div-height').each(function() {
      Drupal.behaviors.hbvDivHeight.calculateHeight(this);
    });
  },
  calculateHeight: function(elem) {
    var height = $(elem).height();
    $(elem).find('.div-table-height').each(function() {
      $(this).css('height', height);
    });
  }
};

Drupal.behaviors.hbvHeightCalc = {
  attach: function(context, settings) {
    $('.npx-height-calc', context).once('npx-height-calc').each(function() {
      Drupal.behaviors.hbvHeightCalc.calculateHeight(this);
    });
  },
  calculateHeight: function(elem) {
    var width = $(elem).width();
    var height = width * 1.2;
    $(elem).css('height', Math.ceil(height));
  }
};

$(window).resize(function () {
  $('.hbv-div-height-processed').each(function() {
    Drupal.behaviors.hbvDivHeight.calculateHeight(this);
  });

  $('.npx-height-calc-processed').each(function() {
    Drupal.behaviors.hbvHeightCalc.calculateHeight(this);
  });

  $('.hbv-images-processed').each(function() {
    Drupal.behaviors.hbvImages.calculateMargin(this);
  });
});

})(jQuery, Drupal, this, this.document);
