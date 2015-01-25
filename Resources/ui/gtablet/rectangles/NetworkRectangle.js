function NetworkRectangle(){

	var utils = require('com.telogis.utils');
	var postLayoutCheck = false;
	var module = null, location = null;
	
	var container = Ti.UI.createView({
		width:'95%',
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
		width:35,
		height:35,
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_icon_network.png',
		top:15,
		left:10
	});
	
	var foldLabel = Titanium.UI.createLabel({
		text:'Memorizza',
		font:{
     		fontSize:26,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#89B47F',
   		textAlign:'center',
   		width:Ti.UI.FILL,
   		left:25,
   		top:15
	}); 
	
	var rightIcon = Titanium.UI.createView({
		width:37,
		height:37,
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_tap.png',
		top:15,
		right:10
	});
	
	
	var shadow = Ti.UI.createView({
		width:'100%',
		height:3,
		backgroundColor:'#DBDBDB'
	});
	
	whiteView.add(leftIcon);
	whiteView.add(foldLabel);
	whiteView.add(rightIcon);
	container.add(whiteView);
	container.add(shadow);

	container.setButtonStatus = function(status){
		foldLabel.text = status;
	};
	
	container.setModulesPassed = function(_module, _location){
		module = _module;
		location = _location;
	};
	
	container.getButtonStatus = function(){
		return foldLabel.text;
	};
	
	switch(utils.getConnectionType()){
		case 'Wifi':
			foldLabel.color = '#89B47F'; 
		break;
		case "GPRS":
			foldLabel.color = '#E54D4D'; 
		break;
        case "EDGE":
            foldLabel.color = '#F1BB54'; 
        break;
        case "UMTS":
          	foldLabel.color = '#89B47F'; 
        break;
        case "HSDPA":
           	foldLabel.color = '#89B47F'; 
        break;
        case "HSUPA":
           	foldLabel.color = '#89B47F'; 
        break;
        case "HSPA":
           	foldLabel.color = '#89B47F'; 
        break;
         case "None":
	           	foldLabel.color = '#E54D4D'; 
	        break;
	}
	
	var myInterval = setInterval(function(){
		Ti.API.info(utils.getConnectionType());
		switch(utils.getConnectionType()){
			case 'Wifi':
				foldLabel.color = '#89B47F'; 
			break;
			case "GPRS":
				foldLabel.color = '#E54D4D'; 
			break;
	        case "EDGE":
	            foldLabel.color = '#F1BB54'; 
	        break;
	        case "UMTS":
	          	foldLabel.color = '#89B47F'; 
	        break;
	        case "HSDPA":
	           	foldLabel.color = '#89B47F'; 
	        break;
	        case "HSUPA":
	           	foldLabel.color = '#89B47F'; 
	        break;
	        case "HSPA":
	           	foldLabel.color = '#89B47F'; 
	        break;
	         case "None":
	           	foldLabel.color = '#E54D4D'; 
	        break;
		}
	},10000);
	
	container.removeInterval = function(){
		clearInterval(myInterval);
		myInterval = 0;
	};
	
	return container;
	
}

module.exports = NetworkRectangle;
