Page({
  data: {
   log:0,
   lat:0,
   controls:[],
   markers:[
     
   ]
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
            iconPath:'images/ScanCode.png',
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
            id: 2,
            iconPath:'images/Pay.png',
            position:{
              width:40,
              height:40,
              left:windowWidth /4-70,
              top:windowHeight-100,
            },
            clickable:true
          },
          {//控件：保修
            id: 3,
            iconPath:'images/Service.png',
            position:{
              width:40,
              height:40,
              left: windowWidth / 2 + 100,
              top: windowHeight - 100,
            },
            clickable:true
            },
          {//控件：当前位置
            id: 4,
            iconPath:'images/Location.png',
            position:{
            width:40,
            height:40,
            left: windowWidth / 4 -70,
            top: windowHeight - 160,
            },
            clickable:true
          },
            {//控件：中心点位置
            id: 5,
            iconPath:'images/LocationA.png',
            position:{
              width: 40,
              height: 40,
              left:windowWidth/2-20,
              top:windowHeight/2-40.
            },
            clickable:true
            },
          {//控件：添加车辆
            id: 6,
            iconPath: 'images/AddBike.png',
            position: {
              width: 40,
              height: 40,
            },
            clickable: true
          },
        ]
      })
    },
  })
   
  },
  //控件被点击事件
  controltap: function (e) {
    var that = this;
    var cid = e.controlId;
    switch(cid){
      //定位按钮
      case 4:{
        this.mapCtx.moveToLocation()
        break;
      }
      //添加车辆
      case 5:{
        //获取当前已有的车辆
        that.date.markers;
        bikes.push({
          iconPath:'images/Bikes.png',
          width:35,
          height:40,
          longitude:that.data.log,
          latitude:that.data.lat
        })
        //重新赋值
        that.setData({
          markers:bikes
        })
        break;
      }
    }
    if(cid == 4){
      this.mapCtx.moveToLocation()
    }
    if(cid == 6){
      console.log('add a bike')
    }
  },
  
  //生命周期函数--监听页面初次渲染完成
  onReady:function(){
    //创建map上下文
    this.mapCtx = wx.createMapContext('myMap')
  },
  //移动地图后视野发生变化触发的事件
  regionchange:function(e){
    var etype = e.type;
    if(etype == 'end') {
      this.mapCtx.getCenterLocation({
        success:function(res){
          console.log(res.longitude)
          console.log(res.latitude)
        }
      })
    }
  },
    
  })



