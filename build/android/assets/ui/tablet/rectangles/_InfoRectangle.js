function InfoRectangle(){var e=Ti.UI.createView({width:"90%",height:280,backgroundColor:"transparent",layout:"vertical",top:40}),t=Ti.UI.createView({width:"100%",height:277,backgroundColor:"#ffffff",layout:"vertical",borderColor:"#DCDCDC",borderWidth:.4,top:0}),i=Ti.UI.createView({width:"100%",height:3,backgroundColor:"#DBDBDB"}),a=Titanium.UI.createView({width:120,height:120,backgroundColor:"#ffffff",backgroundImage:"/images/ic_logo_big.png",top:30}),o=Titanium.UI.createLabel({text:"saveHer",font:{fontSize:31,fontFamily:"CaviarDreams"},color:"#65686D",textAlign:"center",top:20}),r=Titanium.UI.createLabel({text:"Versione: "+Titanium.App.version,font:{fontSize:19,fontFamily:"CaviarDreams"},color:"#65686D",textAlign:"center",top:10});return t.add(a),t.add(o),t.add(r),e.add(t),e.add(i),e}module.exports=InfoRectangle;