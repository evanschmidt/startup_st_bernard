<?php
/**
 * @file
 * Returns the HTML for a block.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728246
 */
?>
<div id="<?php print $block_html_id; ?>" class="section <?php print $title; ?> <?php print $classes; ?>"<?php print $attributes; ?> data-anchor="section<?php print $block_id; ?>" >


  <?php print render($title_prefix); ?>
  <?php if ($title): ?>
  <?php	$title = str_replace("-", " ", $title); ?>
    <h2<?php print $title_attributes; ?>>
	  <?php if ($title=="prize-package"): ?>
	    <?php print $title; ?>
	  <?php else; ?>
	    <?php print $title; ?>
	  <?php endif; ?>
    </h2>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
  <?php print $content; ?>


</div>
