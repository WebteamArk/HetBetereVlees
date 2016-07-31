<div class="div-table-outer <?php print $classes; ?>"<?php print $attributes; ?>>

  <div class="field-items"<?php print $content_attributes; ?>>

    <div class="field-item div-table div-table-height">
      <div class="div-row">
        <div class="div-cell">
          <?php foreach ($items as $delta => $item): ?>
            <div class="field-item <?php print $delta % 2 ? 'odd' : 'even'; ?>"<?php print $item_attributes[$delta]; ?>><?php print render($item); ?></div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>

  </div>
</div>
