function MarkersRectangle(){
	
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
	
	var label = Titanium.UI.createLabel({
		text:'Mostra solo i miei report',
		font:{
     		fontSize:21,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'left',
   		top:15,
   		left:13
	}); 
	
	var basicSwitch = Ti.UI.createSwitch({
  		titleOn:'Si',
  		titleOff:'No',
  		value:true,
  		width: 42, height:40,
  		backgroundColor:'#89b47f',
  		color:'white',
  		right:10,
  		top:10
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
		height:2,
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

module.exports = MarkersRectangle;
