/**
 * Created by guojing on 2017/6/19.
 */
var drawTool,
    selectTool,
    modifyTool;

window.onload = function (){
  var Fortesting = new Datatang.FeatureLayer()
  var extent = [0,0,1280,800]


  //随机添加i个点
  for(i = 0; i<=10; i++){
    var x = parseInt(Math.random()*1280)
    var y = parseInt(Math.random()*800)
    var point = new Datatang.Point(x,y)
    var features = [new Datatang.Feature(point)]
    Fortesting.addFeatures(features)
  }



  var map = new Datatang.Map({
    layers:[new Datatang.SingleImageLayer({
      url : "source/image01450.jpg",
      imageExtent :extent,
      projection:{
        extent: extent
      }
    }),
      Fortesting
    ],
    target:'map',
    view : new Datatang.View({
      projection:{
        extent:extent
      },
      center: Datatang.ExtentUtil.getCenter(extent),
      zoom: 2,
      maxZoom: 8
    })
  })

  drawTool = new Datatang.DrawCpt({
    type: 'point',
    drawLayer: Fortesting
  });

  modifyTool = new Datatang.ModifyCpt({
    features: Fortesting.features
  });

  selectTool = new Datatang.SelectCpt({
    selectMode: Datatang.BrowserEvent.CLICK
  });

  map.addComponents(drawTool)
  map.addComponents(selectTool)
  map.addComponents(modifyTool)
  selectTool.active = false
  modifyTool.active = false

  var typeSelect = document.getElementById('type')

  typeSelect.onchange = function(){
    if(typeSelect.value === "None"){
      drawTool.active = false
      selectTool.active = true
      modifyTool.active = true
    }else{

     selectTool.selectClean()

     drawTool.active = true
     drawTool.drawMode = typeSelect.value
     selectTool.active = false
     modifyTool.active = false
    }
  }

}