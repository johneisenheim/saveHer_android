function MiniButton(){var e=Titanium.UI.createView({width:130,height:28,backgroundColor:"white",top:15}),t=Titanium.UI.createLabel({text:"",font:{fontSize:20,fontFamily:"CaviarDreams"},color:"white",textAlign:"center",width:"auto"});return e.add(t),e.setButtonTitle=function(e){t.text=e},e.setButtonTop=function(t){e.top=t},e.setButtonRight=function(t){e.right=t},e.setButtonColor=function(t){e.backgroundColor=t},e}module.exports=MiniButton;