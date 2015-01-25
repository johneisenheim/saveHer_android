function SmallRectangleWizard1(){
	
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
	
	var label = Titanium.UI.createLabel({
		text:'Procedura guidata',
		font:{
     		fontSize:21,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:15,
   		width: Ti.UI.FILL
	}); 
	
	var rightIcon = Titanium.UI.createView({
		width:25,
		height:25,
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_arrow.png',
		top:15,
		right:3
	});
	
	var leftIcon = Titanium.UI.createView({
		width:35,
		height:35,
		backgroundColor:'#ffffff',
		backgroundImage: '/images/ic_icon_wizard.png',
		top:5,
		left:10
	});
	
	var shadow = Ti.UI.createView({
		width:'100%',
		height:2,
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
