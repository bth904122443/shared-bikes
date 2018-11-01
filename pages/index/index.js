Page({
  data: {
   log:0,
   lat:0,
   controls:[]
  },
  
  //首次加载页面时调用
  onLoad: function () {
   var that = this; 
   wx.getLocation({
     success: function(res) {
       var longitude = res.longitude
       var latitude = res.latitude
       that.setData({
         log:longitude,
         lat:latitude
       })
     },
   })

  wx.getSystemInfo({
    success: function(res) {
      var windowWidth = res.windowWidth;
      var windowHeight = res.windowHeight;
      that.setData({
        controls: [
          {//控件：扫码
            id: 1,
            iconPath: 'images/ScanCode.png',
            //控件相对页面的位置
            position: {
              width: 80,
              height: 80,
              left: windowWidth / 2 - 40,
              top: windowHeight -128
            },
            clickable:true
          },
          {//控件：充值
            id:3,
            iconPath:'images/Pay.png',
            position:{
              
            }

          }
        ]
      })
    },
  })
   
  }
    
  })



