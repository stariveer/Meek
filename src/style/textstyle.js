/**
 * Created by zhangyong on 2017/6/12.
 */

import BaseObject from '../core/baseobject'

/**
 *
 * 定义文本样式
 *
 * @class TextStyle
 * @extends BaseStyle
 * @module style
 * @constructor
 * @example
 *
 *     new Datatang.TextStyle({
 *       textAlign: 'center',
 *       textBaseline: 'middle',
 *       font: 'Arial',
 *       text: '标注示例',
 *       fill: [255, 0, 0],
 *       stroke: new Datatang.LineStyle([255, 255, 255],1,3,
 *          Datatang.LineStyle.LineCap.ROUND,
 *          Datatang.LineStyle.LineJion.ROUND),
 *       offsetX: 0,
 *       offsetY: 0,
 *       rotation: 0
 *     });
 *
 */
export default class TextStyle extends BaseObject {
  
  /**
   *
   * @constructor
   * @param optOptions
   */
  constructor (optOptions) {
    super()
  
    const options = optOptions || {}
  
    /**
     *
     */
    this.text = options.text || ''
    
    /**
     * @private
     * @type {string|undefined}
     */
    this.font = options.font || TextStyle.DEFAULT_FONT
  
    /**
     * @private
     * @type {number|undefined}
     */
    this.rotation = options.rotation || 0
  
    /**
     * @private
     * @type {boolean|undefined}
     */
    this.rotateWithView = options.rotateWithView
  
    /**
     * @private
     * @type {number|undefined}
     */
    this.scale = options.scale || TextStyle.DEFAULT_SCALE
  
    /**
     * @private
     * @type {string|undefined}
     */
    this.textAlign = options.textAlign || TextStyle.DEFAULT_TEXT_ALIGN
  
    /**
     * @private
     * @type {string|undefined}
     */
    this.textBaseline = options.textBaseline || TextStyle.DEFAULT_BASE_LINE
  
    /**
     * @private
     * @type {ol.style.Fill}
     */
    this.fill = options.fill !== undefined ? options.fill : TextStyle.DEFAULT_FILL_COLOR
  
    /**
     * @private
     * @type {ol.style.Stroke}
     */
    this.stroke = options.stroke !== undefined ? options.stroke : TextStyle.DEFAULT_STROKE
  
    /**
     * @private
     * @type {number}
     */
    this.offsetX = options.offsetX !== undefined ? options.offsetX : 0
  
    /**
     * @property offsetY
     * @type {number}
     */
    this.offsetY = options.offsetY !== undefined ? options.offsetY : 0
    
  }
  
  /**
   * 要显示的文本
   *
   * @property text
   * @type {Stirng}
   */
  get text () { return this._text }
  set text (value) { this._text = value }
  
  /**
   * 显示的字体
   *
   * @property font
   * @type {Stirng}
   */
  get font () { return this._font }
  set font (value) { this._font = value }
  
  /**
   * 旋转的角度
   *
   * @property rotation
   * @type {Stirng}
   */
  get rotation () { return this._rotation }
  set rotation (value) { this._rotation = value }
  
  /**
   * 旋转视图
   *
   * @property rotateWithView
   * @type {Stirng}
   */
  get rotateWithView () { return this._rotateWithView }
  set rotateWithView (value) { this._rotateWithView = value }
  
  /**
   * 缩放比例
   *
   * @property scale
   * @type {Stirng}
   */
  get scale () { return this._scale }
  set scale (value) { this._scale = value }
  
  /**
   * 字体
   *
   * @property textAlign
   * @type {Stirng}
   */
  get textAlign () { return this._textAlign }
  set textAlign (value) { this._textAlign = value }
  
  /**
   * 字体线
   *
   * @property textBaseline
   * @type {Stirng}
   */
  get textBaseline () { return this._textBaseline }
  set textBaseline (value) { this._textBaseline = value }
  
  /**
   * 字体颜色
   *
   * @property fill
   * @type {Stirng}
   */
  get fill () { return this._fill }
  set fill (value) { this._fill = value }
  
  /**
   * 字体线的样式
   *
   * property stroke
   * @type {Stirng}
   */
  get stroke () { return this._stroke }
  set stroke (value) { this._stroke = value }
  
  /**
   * 字体x轴偏移
   *
   * @property offsetX
   * @type {Stirng}
   */
  get offsetX () { return this._offsetX }
  set offsetX (value) { this._offsetX = value }
  
  /**
   * 字体y轴偏移
   *
   * @property offsetY
   * @type {Stirng}
   */
  get offsetY () { return this._offsetY }
  set offsetY (value) { this._offsetY = value }
  
  /**
   * 克隆字体样式
   *
   * @method clone
   * @returns {TextStyle}
   */
  clone () {
    return new TextStyle({
      font: this.font,
      rotation: this.rotation,
      rotateWithView: this.rotateWithView,
      scale: this.scale,
      text: this.text,
      textAlign: this.textAlign,
      textBaseline: this.textBaseline,
      fill: this.fill ? this.fill.clone : undefined,
      stroke: this.stroke ? this.stroke.clone : undefined,
      offsetX: this.offsetX,
      offsetY: this.offsetY
    })
  }
}

/**
 *
 * 默认字体边框样式
 * @type {String} DEFAULT_STROKE
 * @static
 * @final
 *
 */
TextStyle.DEFAULT_STROKE = {
  color: [255, 255, 255],
  width: 2,
  lineCap: 'round',
  lineJion: 'round'
}

/**
 *
 * 默认字体颜色
 * @type {String} DEFAULT_FILL_COLOR
 * @static
 * @final
 *
 */
TextStyle.DEFAULT_FILL_COLOR = [0, 0, 255]

/**
 * 默认字体样式
 * @type {String} DEFAULT_FONT
 * @static
 * @final
 *
 */
TextStyle.DEFAULT_FONT = 'bold 12px Arial'


/**
 * 默认字体显示位置
 * @type {String} DEFAULT_TEXT_ALIGN
 * @static
 * @final
 *
 */
TextStyle.DEFAULT_TEXT_ALIGN = 'center'


/**
 * 默认字体显示位置
 * @type {String} DEFAULT_BASE_LINE
 * @static
 * @final
 *
 */
TextStyle.DEFAULT_BASE_LINE = 'middle'

/**
 * 默认字体缩放初始值
 * @type {String} DEFAULT_BASE_LINE
 * @static
 * @final
 *
 */
TextStyle.DEFAULT_SCALE = 10