function ShowMarkers(){var e=Ti.UI.createView({width:"95%",height:60,backgroundColor:"transparent",layout:"vertical",top:10}),t=Ti.UI.createView({width:"100%",height:58,backgroundColor:"#ffffff",borderColor:"#DCDCDC",borderWidth:.4,top:0}),i=Titanium.UI.createView({width:35,height:35,backgroundColor:"#ffffff",backgroundImage:"/images/ic_world.png",top:7,left:15}),a=Titanium.UI.createLabel({text:"Vedi segnalazioni",font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#65686D",textAlign:"center",top:15,left:5,width:Ti.UI.FILL}),o=Titanium.UI.createView({width:25,height:25,backgroundColor:"#ffffff",backgroundImage:"/images/ic_arrow.png",top:15,right:10}),r=Ti.UI.createView({width:"100%",height:2,backgroundColor:"#DBDBDB"});return e.setLabelTitle=function(e){a.text=e},t.add(i),t.add(a),t.add(o),e.add(t),e.add(r),e}module.exports=ShowMarkers;