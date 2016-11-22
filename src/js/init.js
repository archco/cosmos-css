/*!
 * cosmos-css
 *
 * @version: v0.2.1
 * @updated: 2016-11-22
 * @link: https://github.com/archco/cosmos-css
 */

// Check for jQuery.
if (typeof(jQuery) === 'undefined') {
  var jQuery;
  // Check if require is a defined function.
  if (typeof(require) === 'function') {
    jQuery = $ = require('jquery');
  // Else use the dollar sign alias.
  } else {
  	if (typeof($) === 'undefined') {
  		throw new Error("jQuery required");
  	}
    jQuery = $;
  }
}