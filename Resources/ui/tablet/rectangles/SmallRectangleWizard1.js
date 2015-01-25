function SmallRectangleWizard1(){
	
	var postLayoutCheck = false;
	
	var container = Ti.UI.createView({
		width:'85%',
		height:73,
		backgroundColor:'transparent',
		layout:'vertical',
		top:40
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
		text:'Procedura guidata',
		font:{
     		fontSize:28,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:18,
   		width: Ti.UI.FILL
	}); 
	
	var rightIcon = Titanium.UI.createView({
		width:45,
		height:45,
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_arrow.png',
		top:15,
		right:3
	});
	
	var leftIcon = Titanium.UI.createView({
		width:55,
		height:55,
		backgroundColor:'#ffffff',
		backgroundImage: '/images/ic_icon_wizard.png',
		top:5,
		left:10
	});
	
	var shadow = Ti.UI.createView({
		width:'100%',
		height:3,
		backgroundColor:'#DBDBDB'
	});
	
	whiteView.add(leftIcon);
	whiteView.add(label);
	whiteView.add(rightIcon);
	container.add(whiteView);
	container.add(shadow);
	
	container.addEventListener('click', function(){
		Ti.App.fireEvent('goto_page', {page:1});
	});
	
	return container;
}

module.exports = SmallRectangleWizard1;
