function SmallRectangleWizard3(){
	
	var postLayoutCheck = false;
	
	var container = Ti.UI.createView({
		width:'95%',
		height:60,
		backgroundColor:'transparent',
		layout:'vertical',
		top:15
	});
	
	var whiteView = Ti.UI.createView({
		width:'100%',
		height:58,
		backgroundColor:'#ffffff',
		//layout:'horizontal',
		borderColor:'#DCDCDC',
		borderWidth:0.4,
		top:0
	});
	
	var yetRegTextfield = Ti.UI.createTextField({
  		color: '#65686D',
  		font:{
     		fontSize:20,
      		fontFamily:"CaviarDreams"
   		},
  		top: 10,
  		left:2,
  		width: Ti.UI.FILL,
  		autocorrect:false,
  		hintText:'Nickname',
  		backgroundColor:'transparent',
  		isReady:false,
  		softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS,
  		keyboardType:Titanium.UI.KEYBOARD_APPEARANCE_DEFAULT
	});
	
	var rightIcon = Titanium.UI.createView({
		width:30,
		height:30,
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_icon_keyboard.png',
		top:15,
		right:10
	});
	
	var shadow = Ti.UI.createView({
		width:'100%',
		height:2,
		backgroundColor:'#DBDBDB'
	});
	
	/*To avoid first occurrence autoblur on textfield. Damned Android!*/
	yetRegTextfield.addEventListener('click', function() {
    	yetRegTextfield.softKeyboardOnFocus = Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS;
    	yetRegTextfield.focus();
	});
	
	yetRegTextfield.addEventListener('blur', function() {
    	yetRegTextfield.softKeyboardOnFocus = Ti.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS;
	});
	
	container.setFieldEditable = function(value){
		yetRegTextfield.touchEnabled = value;
	};
	
	container.getFieldValue = function(value){
		return yetRegTextfield.value;
	};

	whiteView.add(yetRegTextfield);
	whiteView.add(rightIcon);
	container.add(whiteView);
	container.add(shadow);
	
	
	return container;
}

module.exports = SmallRectangleWizard3;
