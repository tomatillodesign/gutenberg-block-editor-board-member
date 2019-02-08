<?php
/**
 * Plugin Name: Custom Block - Board Member
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: Custom block for the WordPress editor created via create-guten-block
 * Author: Chris Liu-Beers
 * Author URI: https://www.tomatillodesign.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
