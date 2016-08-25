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

/*
Drupal.behaviors.hbvForceFocus = {
  attach: function(context, settings) {
    $('#views-exposed-form-distributors-block #edit-combine', context).once('npx-force-focus').each(function() {
      //$(this).focus();
      $(this).keypress(function(event){
        if (event.keyCode === 10 || event.keyCode === 13) 
          event.preventDefault();
      });
    });
  },
};
*/

Drupal.behaviors.hbvMultiselect = {
  attach: function(context, settings) {
    $('#edit-field-merk-tid', context).once('npx-multiselect').each(function() {
      $(this).multiselect({
        columns: 1,
        placeholder: Drupal.t('merk'),
        onLoad: function (element) {
          $(element).hide();
          var $optionsWrapper = $(element).next('.ms-options-wrap').find('.ms-options');
          $optionsWrapper.append('<input type="submit" value="' + Drupal.t('bevestigen') + '" />');
          $optionsWrapper.append('<input type="button" class="reset" value="' + Drupal.t('reset') + '" />');
          $optionsWrapper.find('.reset').click(function(){
            $optionsWrapper.find('input[type="checkbox"]:checked').click();
          });
          $optionsWrapper.find('input[type="submit"]').click(function(e){
            e.preventDefault();
            $('#edit-submit-recipes').click();
          });
        },
      });
    });
    $('#edit-field-gang-tid', context).once('npx-multiselect').each(function() {
      $(this).multiselect({
        columns: 1,
        placeholder: Drupal.t('gang'),
        onLoad: function (element) {
          $(element).hide();
          var $optionsWrapper = $(element).next('.ms-options-wrap').find('.ms-options');
          $optionsWrapper.append('<input type="submit" value="' + Drupal.t('bevestigen') + '" />');
          $optionsWrapper.append('<input type="button" class="reset" value="' + Drupal.t('reset') + '" />');
          $optionsWrapper.find('.reset').click(function(){
            $optionsWrapper.find('input[type="checkbox"]:checked').click();
          });
          $optionsWrapper.find('input[type="submit"]').click(function(e){
            e.preventDefault();
            $('#edit-submit-recipes').click();
          });
        },
      });
    });
    $('#edit-field-ingredienten-tid', context).once('npx-multiselect').each(function() {
      $(this).multiselect({
        columns: 1,
        placeholder: Drupal.t('ingrediënten'),
        onLoad: function (element) {
          $(element).hide();
          var $optionsWrapper = $(element).next('.ms-options-wrap').find('.ms-options');
          $optionsWrapper.append('<input type="submit" value="' + Drupal.t('bevestigen') + '" />');
          $optionsWrapper.append('<input type="button" class="reset" value="' + Drupal.t('reset') + '" />');
          $optionsWrapper.find('.reset').click(function(){
            $optionsWrapper.find('input[type="checkbox"]:checked').click();
          });
          $optionsWrapper.find('input[type="submit"]').click(function(e){
            e.preventDefault();
            $('#edit-submit-recipes').click();
          });
        },
      });
    });
    $('#edit-field-budget-tid', context).once('npx-multiselect').each(function() {
      $(this).multiselect({
        columns: 1,
        placeholder: Drupal.t('budget'),
        onLoad: function (element) {
          $(element).hide();
          var $optionsWrapper = $(element).next('.ms-options-wrap').find('.ms-options');
          $optionsWrapper.append('<input type="submit" value="' + Drupal.t('bevestigen') + '" />');
          $optionsWrapper.append('<input type="button" class="reset" value="' + Drupal.t('reset') + '" />');
          $optionsWrapper.find('.reset').click(function(){
            $optionsWrapper.find('input[type="checkbox"]:checked').click();
          });
          $optionsWrapper.find('input[type="submit"]').click(function(e){
            e.preventDefault();
            $('#edit-submit-recipes').click();
          });
        },
      });
    });
    $('#edit-field-moeilijkheidsgraad-tid', context).once('npx-multiselect').each(function() {
      $(this).multiselect({
        columns: 1,
        placeholder: Drupal.t('moeilijkheidsgraad'),
        onLoad: function (element) {
          $(element).hide();
          var $optionsWrapper = $(element).next('.ms-options-wrap').find('.ms-options');
          $optionsWrapper.append('<input type="submit" value="' + Drupal.t('bevestigen') + '" />');
          $optionsWrapper.append('<input type="button" class="reset" value="' + Drupal.t('reset') + '" />');
          $optionsWrapper.find('.reset').click(function(){
            $optionsWrapper.find('input[type="checkbox"]:checked').click();
          });
          $optionsWrapper.find('input[type="submit"]').click(function(e){
            e.preventDefault();
            $('#edit-submit-recipes').click();
          });
        },
      });
    });
  },
};

Drupal.behaviors.hbvAnimateAssets = {
  attach: function(context, settings) {
    var duration = 500;
    $('.view-top-paragraph img', context).once('npx-animate-assets').each(function() {
      $(this).css('margin-left', -$('body').outerWidth());
      $(this).waypoint(function(event, direction) {
        $(this).animate({
          'margin-left': 0
        }, { duration: duration });
      }, 
      { offset: '100%', triggerOnce: true});
    });
    $('.views-field-field-slogan .div-image img', context).once('npx-animate-assets').each(function() {
      $(this).css('margin-left', -$('body').outerWidth());
      $(this).waypoint(function(event, direction) {
        $(this).animate({
          'margin-left': 0
        }, { duration: duration });
      }, 
      { offset: '50%', triggerOnce: true});
    });
    $('.field-name-field-upper-layer-with-image img', context).once('npx-animate-assets').each(function() {
      $(this).css('margin-left', -$('body').outerWidth());
      $(this).waypoint(function(event, direction) {
        $(this).animate({
          'margin-left': 0
        }, { duration: duration });
      }, 
      { offset: '50%', triggerOnce: true});
    });
    $('.field-name-field-background-image', context).once('npx-animate-assets').each(function() {
      $(this).css('margin-right', $('body').outerWidth());
      $(this).waypoint(function(event, direction) {
        $(this).animate({
          'margin-right': 0
        }, { duration: duration });
      }, 
      { offset: '50%', triggerOnce: true});
    });
//    $('.field-name-field-intro-text img', context).once('npx-animate-assets').each(function() {
//      $(this).css('margin-left', -$('body').outerWidth());
//      $(this).waypoint(function(event, direction) {
//        $(this).animate({
//          'margin-left': 0
//        }, { duration: duration });
//      }, 
//      { offset: '50%', triggerOnce: true});
//    });
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
