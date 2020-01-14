window.onload = function() {
  var flayer = new Datatang.FeatureLayer();

  var extent = [0, 0, 2783, 2125];

  var map = new Datatang.Map({
    layers: [
      new Datatang.SingleImageLayer({
        url: 'source/China_map.jpg',
        imageExtent: extent,
        projection: {
          extent: extent,
        },
      }),
      flayer,
    ],
    target: 'map',
    view: new Datatang.View({
      projection: {
        extent: extent,
      },
      center: Datatang.ExtentUtil.getCenter(extent),
      resolution: 2,
      resolutions: [4, 2, 1, 0.5, 0.25, 0.125, 0.0625, 0.03125],
    }),
  });

  // 绘图工具
  var drawTool = new Datatang.Draw({
    type: 'point',
    drawLayer: flayer,
  });

  map.addComponents(drawTool);

  var typeSelect = document.getElementById('type');

  /**
   * Handle change event.
   */
  typeSelect.onchange = function() {
    drawTool.drawMode = typeSelect.value;
  };

  drawTool.addEventListener(Datatang.DrawEvent.EventType.DRAW_END, function(e) {
    var feature = e.feature;
    feature.displayText = '测试测试';
  });
};
