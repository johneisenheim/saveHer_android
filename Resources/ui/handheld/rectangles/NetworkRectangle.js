function NetworkRectangle(){
	
	var utils = require('com.telogis.utils');
	var postLayoutCheck = false;
	var module = null, location = null;
	var preStatus = 'Memorizza';
	var interval = null;
	
	var container = Ti.UI.createView({
		width:'95%',
		height:60,
		backgroundColor:'transparent',
		layout:'vertical',
		top:5
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
	
	var leftIcon = Titanium.UI.createView({
		width:25,
		height:25,
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_icon_network.png',
		top:15,
		left:10
	});
	
	var foldLabel = Titanium.UI.createLabel({
		text:'Memorizza',
		font:{
     		fontSize:21,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#89B47F',
   		textAlign:'center',
   		width:Ti.UI.FILL,
   		left:15,
   		top:15
	}); 
	
	var rightIcon = Titanium.UI.createView({
		width:27,
		height:27,
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_tap.png',
		top:15,
		right:10
	});
	
	
	var shadow = Ti.UI.createView({
		width:'100%',
		height:2,
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
	
	container.getButtonStatus = function(){
		return foldLabel.text;
	};
	
	container.setModulesPassed = function(_module, _location){
		module = _module;
		location = _location;
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
	
	var interval = setInterval(function(){
		Ti.API.info('started interval');
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
		clearInterval(interval);
		interval = 0;
	};
	
	return container;
	
}

module.exports = NetworkRectangle;
