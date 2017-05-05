/************************************************************
  Color
*************************************************************/
const NAME = 'Cosmos.lib.Color';
const Config = {
  lightnessPoint: 166, // 65%
  darkDefault: '#000',
  lightDefault: '#fff'
};

class Color {
  constructor(color) {
    this._color = Color.colorToArray(color);
  }

  getContrast(dark = Config.darkDefault, light = Config.lightDefault) {
    return Color.contrast(this._color, dark, light);
  }

  // static

  static get name() {
    return NAME;
  }

  /**
   * color to rgb array.
   *
   * @param  {String|Array} color
   * @return {Array}  [red, green, blue]
   */
  static colorToArray(color) {
    let array = [];
    if (typeof color == 'string') {
      array = this.hexToRgb(color);
    } else if (Array.isArray(color)) {
      array = color;
    } else {
      throw new Error('parameter only "hex color" or "rgb array"');
    }
    return array;
  }

  /**
   * hex color to rgb array.
   * @link http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
   *
   * @param  {String}  hex
   * @return {Array|Null}
   */
  static hexToRgb(hex) {
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
  }

  /**
   * rgb values to hex color string
   *
   * @param  {Number} r
   * @param  {Number} g
   * @param  {Number} b
   * @return {String}
   */
  static rgbToHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    return "#" + r + g + b;
  }

  /**
   * get rgb color's lightness value.
   *
   * @param  {String|Array} color
   * @return {Number}  (0 ~ 255)
   */
  static lightness(color) {
    let rgb = this.colorToArray(color);
    // Color lightness formula.
    // @link https://www.w3.org/TR/AERT#color-contrast
    return ((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000;
  }

  /**
   * return contrast color of input.
   *
   * @param  {Array|String} color
   * @param  {String}  dark
   * @param  {String}  light
   * @return {String}  dark or light
   */
  static contrast(color, dark = Config.darkDefault, light = Config.lightDefault) {
    return (this.lightness(color) > Config.lightnessPoint) ? dark : light;
  }
}

export default Color;
