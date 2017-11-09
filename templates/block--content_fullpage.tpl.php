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
		  <?php if ($title=="prize package"): ?>
			    <h2<?php print $title_attributes; ?>>$100,000 <span>Prize Package</span></h2>
		  <?php elseif ($title=="sponsors"): ?>
			    <h2<?php print $title_attributes; ?>>Sponsors + <span>Partners</span></h2>
		  <?php else : ?>
			    <h2<?php print $title_attributes; ?>><span><?php print $title; ?></span></h2>
		  <?php endif; ?>
	  <?php endif; ?>
	  <?php print render($title_suffix); ?>

  <?php print $content; ?>

</div>
