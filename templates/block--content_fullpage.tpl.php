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

  <?php if ($title=="prize-package"): ?>

	  <?php print render($title_prefix); ?>
	  <?php if ($title): ?>
	  <?php	$title = str_replace("-", " ", $title); ?>
	    <h2<?php print $title_attributes; ?>>$110,000 Prize Package</h2>
	  <?php endif; ?>
	  <?php print render($title_suffix); ?>

  <?php else : ?>

	  <?php print render($title_prefix); ?>
	  <?php if ($title): ?>
	  <?php	$title = str_replace("-", " ", $title); ?>
	    <h2<?php print $title_attributes; ?>><?php print $title; ?></h2>
	  <?php endif; ?>
	  <?php print render($title_suffix); ?>

  <?php endif; ?>

  <?php print $content; ?>

</div>
