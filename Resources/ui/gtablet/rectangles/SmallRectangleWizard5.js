function SmallRectangleWizard5(){
	
	var postLayoutCheck = false;
	
	var container = Ti.UI.createView({
		width:'85%',
		height:73,
		backgroundColor:'transparent',
		layout:'vertical',
		top:35
	});
	
	var whiteView = Ti.UI.createView({
		width:'100%',
		height:70,
		backgroundColor:'#ffffff',
		//layout:'horizontal',
		borderColor:'#DCDCDC',
		borderWidth:0.4,
		top:0
	});
	
	var label = Titanium.UI.createLabel({
		text:'Newsletter',
		font:{
     		fontSize:26,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'left',
   		top:20,
   		left:13,
   		width:Ti.UI.FILL
	}); 
	
	var basicSwitch = Ti.UI.createSwitch({
  		titleOn:'Si',
  		titleOff:'No',
  		value:true,
  		width: 42, height:40,
  		backgroundColor:'#89b47f',
  		color:'white',
  		right:7,
  		top:15
	});
	
	basicSwitch.addEventListener('change', function(){
		if ( basicSwitch.value ){
			basicSwitch.backgroundColor = '#89b47f';
		}else{
			basicSwitch.backgroundColor = '#c45250';
		}
	});
	
	var shadow = Ti.UI.createView({
		width:'100%',
		height:3,
		backgroundColor:'#DBDBDB'
	});
	
	whiteView.add(label);
	whiteView.add(basicSwitch);
	container.add(whiteView);
	container.add(shadow);
	
	container.getSwitchValue = function(){
		return basicSwitch.value;
	};
	
	return container;
}

module.exports = SmallRectangleWizard5;
