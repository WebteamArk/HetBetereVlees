/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 * @author Jacek Szmit
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

Drupal.behaviors.hbvAnimateObjects = {
  attach: function(context, settings) {
    $('.view-id-recipes .views-row', context).once('npx-animate-objects').each(function() {
      $(this).fadeTo(0, 0);
      $(this).waypoint(function(event, direction) {
        var $parentColumn = $(this).closest('div.views-column');
        if($parentColumn.hasClass('views-column-2')) {
          Drupal.behaviors.hbvAnimateObjects.animateObject(this, 500);
        }
        else if($parentColumn.hasClass('views-column-3')) {
          Drupal.behaviors.hbvAnimateObjects.animateObject(this, 1000);
        }
        else {
          Drupal.behaviors.hbvAnimateObjects.animateObject(this, 0);
        }
      }, 
      { offset: '100%', triggerOnce: true});
    });
    $('.view-distributors .views-row', context).once('npx-animate-objects').each(function() {
      $(this).fadeTo(0, 0);
      $(this).waypoint(function(event, direction) {
        var $parentColumn = $(this).closest('div.views-column');
        if($parentColumn.hasClass('views-column-2')) {
          Drupal.behaviors.hbvAnimateObjects.animateObject(this, 500);
        }
        else if($parentColumn.hasClass('views-column-3')) {
          Drupal.behaviors.hbvAnimateObjects.animateObject(this, 1000);
        }
        else if($parentColumn.hasClass('views-column-4')) {
          Drupal.behaviors.hbvAnimateObjects.animateObject(this, 1500);
        }
        else {
          Drupal.behaviors.hbvAnimateObjects.animateObject(this, 0);
        }
      }, 
      { offset: '100%', triggerOnce: true});
    });
    $('.view-recipe-to-front .views-row', context).once('npx-animate-objects').each(function() {
      $(this).fadeTo(0, 0);
      $(this).waypoint(function(event, direction) {
        var $parentColumn = $(this).closest('div.views-column');
        if($parentColumn.hasClass('views-column-2')) {
          Drupal.behaviors.hbvAnimateObjects.animateObject(this, 500);
        }
        else if($parentColumn.hasClass('views-column-3')) {
          Drupal.behaviors.hbvAnimateObjects.animateObject(this, 1000);
        }
        else {
          Drupal.behaviors.hbvAnimateObjects.animateObject(this, 0);
        }
      }, 
      { offset: '100%', triggerOnce: true});
    });
    $('.view-search-by-zip .views-row', context).once('npx-animate-objects').each(function() {
      $(this).fadeTo(0, 0);
      $(this).waypoint(function(event, direction) {
        var $parentColumn = $(this).closest('div.views-column');
        if($parentColumn.hasClass('views-column-2')) {
          Drupal.behaviors.hbvAnimateObjects.animateObject(this, 500);
        }
        else if($parentColumn.hasClass('views-column-3')) {
          Drupal.behaviors.hbvAnimateObjects.animateObject(this, 1000);
        }
        else if($parentColumn.hasClass('views-column-4')) {
          Drupal.behaviors.hbvAnimateObjects.animateObject(this, 1500);
        }
        else {
          Drupal.behaviors.hbvAnimateObjects.animateObject(this, 0);
        }
      }, 
      { offset: '100%', triggerOnce: false});
    });
    $('body:not(.page-node-62) .paragraphs-items > .field > .field-items > .field-item', context).once('npx-animate-objects').each(function() {
      $(this).fadeTo(0, 0);
      $(this).waypoint(function(event, direction) {
        var $parentColumn = $(this).closest('div.views-column');
        if($parentColumn.hasClass('views-column-2')) {
          Drupal.behaviors.hbvAnimateObjects.animateObject(this, 500);
        }
        else if($parentColumn.hasClass('views-column-3')) {
          Drupal.behaviors.hbvAnimateObjects.animateObject(this, 1000);
        }
        else {
          Drupal.behaviors.hbvAnimateObjects.animateObject(this, 0);
        }
      }, 
      { offset: '105%', triggerOnce: true});
    });
  },
  animateObject: function(object, delay) {
    if($(window).width() < 768) {
      delay = 0;
    }
    setTimeout( function() {
      $(object).fadeTo(1000, 1);
      $(object).addClass('come-in');
    }, delay);
  },
};

Drupal.behaviors.hbvAnimateAssets = {
  attach: function(context, settings) {
//    $('.view-top-paragraph img', context).once('npx-animate-assets').each(function() {
//      $(this).css('margin-left', -$('body').outerWidth());
//      $(this).waypoint(function(event, direction) {
//        Drupal.behaviors.hbvAnimateAssets.slideIn(this);
//      },
//      { offset: '100%', triggerOnce: true});
//    });
    $('.field-name-field-asset-1 .field-item', context).once('npx-animate-assets').each(function() {
      $(this).waypoint(function(event, direction) {
        $(this).addClass('animate');
      },
      { offset: '100%', triggerOnce: true});
    });
    $('.views-field-field-slogan .div-image img', context).once('npx-animate-assets').each(function() {
      if ($(this).closest('div.view-recipes').length) {
        return;
      }
      var $parentColumn = $(this).closest('div.views-column');
      if($parentColumn.hasClass('views-column-2') || $parentColumn.hasClass('views-column-3')) {
        $(this).css('margin-left', $('body').outerWidth());
      }
      else {
        $(this).css('margin-left', -$('body').outerWidth());
      }
      $(this).waypoint(function(event, direction) {
        Drupal.behaviors.hbvAnimateAssets.slideIn(this);
      },
      { offset: '50%', triggerOnce: true});
    });
    $('.field-name-field-upper-layer-with-image img', context).once('npx-animate-assets').each(function() {
      var $parentColumn = $(this).closest('div.views-column');
      if($parentColumn.hasClass('views-column-2') || $parentColumn.hasClass('views-column-3')) {
        $(this).css('margin-left', $('body').outerWidth());
      }
      else {
        $(this).css('margin-left', -$('body').outerWidth());
      }
      $(this).waypoint(function(event, direction) {
        Drupal.behaviors.hbvAnimateAssets.slideIn(this);
      },
      { offset: '50%', triggerOnce: true});
    });
    $('.field-name-field-background-image', context).once('npx-animate-assets').each(function() {
      var $parentColumn = $(this).closest('div.views-column');
      if($parentColumn.hasClass('views-column-2') || $parentColumn.hasClass('views-column-3')) {
        $(this).css('right', -$('body').outerWidth());
      }
      else {
        $(this).css('right', $('body').outerWidth());
      }
      $(this).waypoint(function(event, direction) {
        Drupal.behaviors.hbvAnimateAssets.slideInAbsolute(this);
      },
      { offset: '50%', triggerOnce: true});
    });
  },
  slideIn: function (asset) {
    var duration = 1000;
    $(asset).animate({
      'margin-left': 0
    }, { duration: duration });
  },
  slideInAbsolute: function (asset) {
    var duration = 1000;
    $(asset).animate({
      'right': 0
    }, { duration: duration });
  },
};

Drupal.behaviors.hbvSvgWithText = {
  attach: function(context, settings) {
    $('.paragraphs-item-responsive-text-on-image', context).once('npx-svg-with-text').each( function () {
      Drupal.behaviors.hbvSvgWithText.calculateHeights(this);
    });
  },
  calculateHeights: function(parentElem) {
    var $body = $(parentElem).find('.field-name-field-body');
    var $content = $(parentElem).find('> .content');
    var width = $(parentElem).width();
    var height = $(parentElem).height();
    var x = Math.ceil(0.23 * (0.83 * height - width));
    var h = Math.ceil(width * 1.2);
    var $field = $(parentElem).find('.field-name-field-sp-field-2b');
    
    if( width/height < 0.83) {
      $field.css('height', height + x);
      $content.css('height', 'auto');
      $body.css('height', 'auto');
    } else {
      $field.css('height', h);
      $content.css('height', h);
      $body.css('height', h);
    }
  },
};

Drupal.behaviors.hbvLangSwitcher = {
  attach: function(context, settings) {
    $('.responsive-menus.responsified .responsive-menus-simple', context).once('npx-lang-switcher').each( function () {
//      $langBlock = $('div#hbv-locale-wrapper', context);
//      $(this).append($langBlock.html());
    });
  },
};

Drupal.behaviors.hbvFixCow = {
  attach: function(context, settings) {
    $('body.front .paragraphs-items-field-front-m1', context).once('npx-fix-cow').each( function () {
      Drupal.behaviors.hbvFixCow.fixCowHeight(this);
    });
  },
  fixCowHeight: function(parent) {
    var mt = '-8vw';
    if($(window).width() > 1300) {
      mt = '-130px';
    }
    var $svg = $(parent).closest('.l-r').find('.group-left svg');
    if($(window).width() < 960) {
      $(parent).closest('.l-r').find('.group-left .paragraphs-item-svg-big').css('margin-top', '-100px');
    } else {
      $(parent).closest('.l-r').find('.group-left .paragraphs-item-svg-big').css('margin-top', '0');
    }
    if($(window).width() > 1024 || $(window).width() < 450) {
      $svg.css({'margin-top': mt, 'height': 'auto'});
      $(parent).css('height', 'auto');
      return;
    }
    var $text = $(parent).closest('.l-r').find('.group-right');
    if($text.length) {
      var width = $svg.width();
      var height = $text.outerHeight();;
      var x = Math.ceil(0.225 * (0.83 * height - width));
      var h = Math.ceil(width * 1.2);
      
      if( width/height < 0.83) {
        $svg.css({'margin-top': mt, 'height': height + x});
        $(parent).css('height', height + x);
      } else {
        $svg.css({'margin-top': mt, 'height': h});
        $(parent).css('height', h);
      }
    }
  },
};

Drupal.behaviors.hbvLimitTextWidth = {
  attach: function(context, settings) {
    $('.paragraphs-item-intro-text', context).once('npx-lang-switcher').each( function () {
      Drupal.behaviors.hbvLimitTextWidth.setContainerWidth(this);
    });
  },
  setContainerWidth: function(container) {
    $button = $(container).find('a.ebutton');
    if($button.length) {
      var width = ($button.outerWidth() > 230 ? $button.outerWidth() : 230);
      $(container).css('max-width', width);
    }
  },
};

Drupal.behaviors.hbvMobileClick = {
  attach: function(context, settings) {
    $('.view-id-recipes .views-row a.link-absolute', context).once('npx-mobile-click').each( function () {
      Drupal.behaviors.hbvMobileClick.processClick(this);
    });
    $('.view-id-recipe_to_front .views-row a.link-absolute', context).once('npx-mobile-click').each( function () {
      Drupal.behaviors.hbvMobileClick.processClick(this);
    });
    $('.view-recipes-3-random .views-row a.link-absolute', context).once('npx-mobile-click').each( function () {
      Drupal.behaviors.hbvMobileClick.processClick(this);
    });
  },
  isMobile: function () {
    return (('ontouchstart' in document.documentElement) && ($(window).width() <= 768));
  },
  processClick: function (elem) {
    var $row = $(elem).closest('div.views-row');
    $(elem).click( function(e) {
      if(Drupal.behaviors.hbvMobileClick.isMobile() && !$row.hasClass('is-hover')) {
        e.preventDefault();
        $row.addClass('is-hover');
      } else {
        $row.removeClass('is-hover');
      }
    });
  },
};

Drupal.behaviors.hbvSingleRecipeMin = {
  attach: function(context, settings) {
    $('.node-type-recipe div.node-recipe.view-mode-full', context).once('npx-single-recipe-min').each( function () {
      Drupal.behaviors.hbvSingleRecipeMin.setMinHeight(this);
    });
  },
  setMinHeight: function (parent) {
    var $g1 = $(parent).find('.group-g1');
    var $measurement = $(parent).find('.miara');
    var $ytable = $(parent).find('.group-ytable');
    
    if($measurement.height() < $g1.height()) {
      $ytable.css('height', $g1.height());
    }
    
    var $img = $(parent).find('.field-name-field-top-image');
    $g2.css('min-height', $img.height());
  },
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

  $('.paragraphs-item-responsive-text-on-image').each( function () {
    Drupal.behaviors.hbvSvgWithText.calculateHeights(this);
  });

  $('.paragraphs-item-intro-text').each( function () {
    Drupal.behaviors.hbvLimitTextWidth.setContainerWidth(this);
  });
  
  $('body.front .paragraphs-items-field-front-m1').each( function () {
    Drupal.behaviors.hbvFixCow.fixCowHeight(this);
  });

  $('.node-type-recipe div.node-recipe.view-mode-full').each( function () {
    Drupal.behaviors.hbvSingleRecipeMin.setMinHeight(this);
  });

});

})(jQuery, Drupal, this, this.document);
