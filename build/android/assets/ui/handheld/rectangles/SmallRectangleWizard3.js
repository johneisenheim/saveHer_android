function SmallRectangleWizard3(){var e=Ti.UI.createView({width:"95%",height:60,backgroundColor:"transparent",layout:"vertical",top:15}),t=Ti.UI.createView({width:"100%",height:58,backgroundColor:"#ffffff",borderColor:"#DCDCDC",borderWidth:.4,top:0}),i=Ti.UI.createTextField({color:"#65686D",font:{fontSize:20,fontFamily:"CaviarDreams"},top:10,left:2,width:Ti.UI.FILL,autocorrect:!1,hintText:"Nickname",backgroundColor:"transparent",isReady:!1,softKeyboardOnFocus:Ti.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS,keyboardType:Titanium.UI.KEYBOARD_APPEARANCE_DEFAULT}),a=Titanium.UI.createView({width:30,height:30,backgroundColor:"#ffffff",backgroundImage:"/images/ic_icon_keyboard.png",top:15,right:10}),o=Ti.UI.createView({width:"100%",height:2,backgroundColor:"#DBDBDB"});return i.addEventListener("click",function(){i.softKeyboardOnFocus=Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS,i.focus()}),i.addEventListener("blur",function(){i.softKeyboardOnFocus=Ti.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS}),e.setFieldEditable=function(e){i.touchEnabled=e},e.getFieldValue=function(){return i.value},t.add(i),t.add(a),e.add(t),e.add(o),e}module.exports=SmallRectangleWizard3;