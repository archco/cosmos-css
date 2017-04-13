'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  Color
*************************************************************/
var NAME = 'Cosmos.lib.Color';
var Config = {
  lightnessPoint: 166, // 65%
  darkDefault: '#000000',
  lightDefault: '#FFFFFF'
};

var Color = function () {
  function Color(color) {
    _classCallCheck(this, Color);

    this._color = Color.colorToArray(color);
  }

  _createClass(Color, [{
    key: 'getContrast',
    value: function getContrast(dark, light) {
      return Color.contrast(this._color, dark, light);
    }

    // static methods

  }], [{
    key: 'colorToArray',


    /**
     * color to rgb array
     * @param  string|array color
     * @return array  [red, green, blue]
     */
    value: function colorToArray(color) {
      var array = [];
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

  }, {
    key: 'hexToRgb',
    value: function hexToRgb(hex) {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
    }

    /**
     * rgb values to hex color string
     * 
     * @param  number r
     * @param  number g
     * @param  number b
     * @return string
     */

  }, {
    key: 'rgbToHex',
    value: function rgbToHex(r, g, b) {
      r = r.toString(16);
      g = g.toString(16);
      b = b.toString(16);
      return "#" + r + g + b;
    }
  }, {
    key: 'lightness',


    /**
     * get rgb color's lightness value.
     * 
     * @param  string|array  color
     * @return number  (0 ~ 255)
     */
    value: function lightness(color) {
      var rgb = Color.colorToArray(color);
      // Color lightness formula.
      // @link https://www.w3.org/TR/AERT#color-contrast
      return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    }
  }, {
    key: 'contrast',


    /**
     * get contrast color
     * @param  array|string color
     * @param  string  dark
     * @param  string  light
     * @return string  dark or light
     */
    value: function contrast(color) {
      var dark = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Config.darkDefault;
      var light = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Config.lightDefault;

      var lightness = Color.lightness(color);
      if (lightness > Config.lightnessPoint) {
        return dark;
      } else {
        return light;
      }
    }
  }, {
    key: 'name',
    get: function get() {
      return NAME;
    }
  }]);

  return Color;
}();

exports.default = Color;