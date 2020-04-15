<?php
add_action( 'wp_enqueue_scripts', 'style_theme' ); 

function style_theme(){
	wp_enqueue_style('bootstrap', get_template_directory_uri() . '/assets/css/bootstrap.css');
	wp_enqueue_style('custom', get_template_directory_uri() . '/assets/css/custom.css');
}
?>