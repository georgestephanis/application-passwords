<?php
/**
 * Plugin Name: Omnistream Application Passwords
 * Plugin URI: https://github.com/jtosey/application-passwords
 * Description: A prototype framework to add application passwords to core
 * Author: George Stephanis
 * Version: 0.1-dev
 * Author URI: http://stephanis.info
 */

/**
 * Include the application passwords system.
 */
require_once( dirname( __FILE__ ) . '/class.application-passwords.php' );
Application_Passwords::add_hooks( plugin_basename( __FILE__ ) );
