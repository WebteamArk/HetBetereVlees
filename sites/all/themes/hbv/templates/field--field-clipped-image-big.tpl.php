<div class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <?php if (!$label_hidden): ?>
    <div class="field-label"<?php print $title_attributes; ?>><?php print $label ?>:&nbsp;</div>
  <?php endif; ?>
  <div class="field-items"<?php print $content_attributes; ?>>
    <?php foreach ($items as $delta => $item): ?>
      <div class="field-item npx-height-calc <?php print $delta % 2 ? 'odd' : 'even'; ?>"<?php print $item_attributes[$delta]; ?>>
        <svg viewBox="0 0 960 1152" style="width: 100%; height: auto;">
    			<clipPath id="clip-<?php print $item['#item']['fid'];?>">
      			<use xlink:href="#hbv-poly-960-1152"/>
    			</clipPath>
    			<image clip-path="url(#clip-<?php print $item['#item']['fid'];?>)" width="960" height="1152" xlink:href="<?php print image_style_url('hbv_960-1152_svg',$item['#item']['uri']); ?>"  style="width: 100%;"></image>
    			<use xlink:href="#hbv-poly-960-1152"/>
  			</svg>
      </div>
    <?php endforeach; ?>
  </div>
</div>
