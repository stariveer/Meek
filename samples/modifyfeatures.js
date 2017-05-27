/**
 * Created by zhangyong on 2017/5/25.
 */


window.onload = function () {
  
  var point = new Datatang.Point(900,500)
  
  var path = [[400,200],[500,300],[500,50],[80,600]]
  var line = new Datatang.Line()
  line.path = path
  
  var rings = [[[500,400],[490,478],[350,350],[500,400]]]
  var polygon = new Datatang.Polygon(rings)
  
  var extent = new Datatang.Extent(1100, 300, 1400, 600)
  
  var features = [new Datatang.Feature(point),
    new Datatang.Feature(line),
    new Datatang.Feature(polygon),
    new Datatang.Feature(extent)]
  
  // 将会获取缺省样式
  var selectLayer = new Datatang.FeatureLayer()
  
  var map = new Datatang.Map({
    layers: [selectLayer],
    target: 'map'
  })
  
  selectLayer.addFeatures(features)
  
  var selectedFeatures = [new Datatang.Feature(point)]
  var modifyTool = new Datatang.ModifyCpt({
    features: selectedFeatures
  });
  
  map.addComponents(modifyTool)
  
  var typeSelect = document.getElementById('type')
  
  /**
   * Handle change event.
   */
  typeSelect.onchange = function() {
    var value = typeSelect.value
    if(value === 'point') {
      modifyTool.features = [new Datatang.Feature(point)]
    } else if (value === 'line') {
      modifyTool.features = [new Datatang.Feature(line)]
    } else if (value === 'polygon') {
      modifyTool.features = [new Datatang.Feature(polygon)]
    } else if (value === 'extent') {
      modifyTool.features = [new Datatang.Feature(extent)]
    }
    
  }
}
