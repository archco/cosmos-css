/************************************************************
  Color
*************************************************************/
const Color = (() => {
  const NAME = 'Cosmos.Color';

  // public
  
  /**
   * hexToRgb
   * @link http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
   * @param  string  hex
   * @return array|null
   */
  var hexToRgb = function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1],16),
      parseInt(result[2],16),
      parseInt(result[3],16)
    ] : null;
  };

  /**
   * rgb values to hex color string
   * 
   * @param  number r
   * @param  number g
   * @param  number b
   * @return string
   */
  var rgbToHex = function rgbToHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    return "#" + r + g + b;
  };

  /**
   * get rgb color's brightness value.
   * 
   * @param  string|array  color
   * @return number  (0 ~ 255)
   */
  var brightness = function brightness(color) {
    let r,g,b;
    if (typeof color == 'string') {
      let rgb = hexToRgb(color);
      r = rgb[0];
      g = rgb[1];
      b = rgb[2];
    } else if (Array.isArray(color)) {
      r = color[0];
      g = color[1];
      b = color[2];
    } else {
      throw new Error('parameter only "hex color" or "rgb array"');
    }
    // Color brightness formula.
    // @link https://www.w3.org/TR/AERT#color-contrast
    return ((r * 299) + (g * 587) + (b * 114)) / 1000;
  };

  return {
    name: NAME,
    hexToRgb: hexToRgb,
    rgbToHex: rgbToHex,
    brightness: brightness
  };
})();

export default Color;
