/************************************************************
  Color
*************************************************************/
const Color = (() => {
  const NAME = 'Cosmos.Color';
  const Config = {
    lightnessPoint: 166, // 65%
    darkDefault: '#000000',
    lightDefault: '#FFFFFF'
  };

  class Color {
    constructor(color) {
      this._color = Color.colorToArray(color);
    }

    getContrast(dark, light) {
      return Color.contrast(this._color, dark, light);
    }

    // static methods
    
    static get name() {
      return NAME;
    }

    /**
     * color to rgb array
     * @param  string|array color
     * @return array  [red, green, blue]
     */
    static colorToArray(color) {
      let array = [];
      if (typeof color == 'string') {
        array = Color.hexToRgb(color);
      } else if (Array.isArray(color)) {
        array = color;
      } else {
        throw new Error('parameter only "hex color" or "rgb array"');
      }
      return array;
    }

    /**
     * hexToRgb
     * @link http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
     * @param  string  hex
     * @return array|null
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
     * @param  number r
     * @param  number g
     * @param  number b
     * @return string
     */
    static rgbToHex(r, g, b) {
      r = r.toString(16);
      g = g.toString(16);
      b = b.toString(16);
      return "#" + r + g + b;
    };

    /**
     * get rgb color's lightness value.
     * 
     * @param  string|array  color
     * @return number  (0 ~ 255)
     */
    static lightness(color) {
      let rgb = Color.colorToArray(color);
      // Color lightness formula.
      // @link https://www.w3.org/TR/AERT#color-contrast
      return ((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000;
    };

    /**
     * get contrast color
     * @param  array|string color
     * @param  string  dark
     * @param  string  light
     * @return string  dark or light
     */
    static contrast(color, dark = Config.darkDefault, light = Config.lightDefault) {
      let lightness = Color.lightness(color);
      if (lightness > Config.lightnessPoint) {
        return dark;
      } else {
        return light;
      }
    }
  }

  return Color;
})();

export default Color;
