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

   that.setData({
     controls:[
       {
         id:1,
         iconPath:'images/ScanCode.png'
       }
     ]
   })
  }
    
  })



