function Row2(){var e=Titanium.UI.createView({backgroundColor:"#ffffff",height:73,width:"100%",layout:"horizontal",top:0}),t=Titanium.UI.createView({backgroundColor:"#658DBB",width:10,height:"100%",left:0}),i=Ti.UI.createLabel({text:"",font:{fontSize:21,fontFamily:"Lato-BoldItalic"},color:"#75787B",textAlign:"center",top:15,left:10,width:Ti.UI.SIZE}),a=Ti.UI.createLabel({text:"",font:{fontSize:19,fontFamily:"Lato"},color:"#75787B",textAlign:"center",top:15,left:3,width:Ti.UI.SIZE});return e.setNickname=function(e){i.text=e,a.text="ha inviato un nuovo report."},e.add(t),e.add(i),e.add(a),e}module.exports=Row2;