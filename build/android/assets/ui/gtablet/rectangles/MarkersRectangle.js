function MarkersRectangle(){var e=Ti.UI.createView({width:"95%",height:60,backgroundColor:"transparent",layout:"vertical",top:15}),t=Ti.UI.createView({width:"100%",height:58,backgroundColor:"#ffffff",borderColor:"#DCDCDC",borderWidth:.4,top:0}),i=Titanium.UI.createLabel({text:"Mostra solo i miei report",font:{fontSize:21,fontFamily:"CaviarDreams"},color:"#65686D",textAlign:"left",top:15,left:13}),n=Ti.UI.createSwitch({titleOn:"Si",titleOff:"No",value:!0,width:42,height:40,backgroundColor:"#89b47f",color:"white",right:10,top:10});n.addEventListener("change",function(){n.backgroundColor=n.value?"#89b47f":"#c45250"});var a=Ti.UI.createView({width:"100%",height:2,backgroundColor:"#DBDBDB"});return t.add(i),t.add(n),e.add(t),e.add(a),e.getSwitchValue=function(){return n.value},e}module.exports=MarkersRectangle;