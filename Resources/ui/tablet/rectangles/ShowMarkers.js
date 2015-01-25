function ShowMarkers(){
	
	var container = Ti.UI.createView({
		width:'90%',
		height:73,
		backgroundColor:'transparent',
		layout:'vertical',
		top:10
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
	
	var leftIcon = Titanium.UI.createView({
		width:45,
		height:45,
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_world.png',
		top:7,
		left:15
	});
	
	var label = Titanium.UI.createLabel({
		text:'Vedi segnalazioni',
		font:{
     		fontSize:26,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:15,
   		left:5,
   		width:Ti.UI.FILL
	}); 
	
	var rightIcon = Titanium.UI.createView({
		width:35,
		height:35,
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_arrow.png',
		top:15,
		right:10
	});
	
	var shadow = Ti.UI.createView({
		width:'100%',
		height:2,
		backgroundColor:'#DBDBDB'
	});
	
	container.setLabelTitle = function(newTitle){
		label.text = newTitle;
	};
	
	whiteView.add(leftIcon);
	whiteView.add(label);
	whiteView.add(rightIcon);
	container.add(whiteView);
	container.add(shadow);

	return container;
}

module.exports = ShowMarkers;
