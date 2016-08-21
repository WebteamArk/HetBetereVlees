<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
?>

<div id="page">
  <div class="header" id="header" role="banner">
    <?php print render($page['headermenu']); ?>
    <div class="header-inner">
        <?php if ($logo): ?>
        <div id="logo-outer">
          <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="header__logo" id="logo"><img class="header__logo-image" alt="Home" src="/sites/default/files/chandelier_logo.png"></a>
      </div>
      <?php endif; ?>
      <?php print render($page['header']); ?>
    </div>
  </div>

  <div id="main">

    <div id="highlighted">
      <?php print render($page['highlighted']); ?>
  </div>



    <div id="content" class="column" role="main">

      <a id="main-content"></a>
      <?php print $messages; ?>
      <?php print render($tabs); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>

    </div>


  </div>

  <?php print render($page['footerwhite']); ?>


  <div id="footer-dark">
    <?php print render($page['footer']); ?>
    <?php print render($page['footerblack']); ?>
  </div>

</div>

<?php print render($page['bottom']); ?>
