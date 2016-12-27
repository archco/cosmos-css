/*!
 * cosmos-css - personal practice css framework.
 * @version v0.5.1
 * @link https://github.com/archco/cosmos-css#readme
 * @license MIT
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
