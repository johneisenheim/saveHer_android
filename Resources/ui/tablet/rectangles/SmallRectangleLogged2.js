function SmallRectangleLogged2(){
	
	var AppInfo = require('ui/tablet/pages/AppInfo');
	
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
	
	var label = Titanium.UI.createLabel({
		text:'Informazioni',
		font:{
     		fontSize:28,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:15,
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
	
	var leftIcon = Titanium.UI.createView({
		width:40,
		height:40,
		backgroundColor:'#ffffff',
		backgroundImage: '/images/ic_icon_mark.png',
		top:12,
		left:25
	});
	
	var shadow = Ti.UI.createView({
		width:'100%',
		height:3,
		backgroundColor:'#DBDBDB'
	});
	
	Ti.App.addEventListener('profile_closed', function(){
		label.text = 'Informazioni';
	});
	
	container.addEventListener('click', function(){
		label.text = 'Attendi...';
		new AppInfo().open({
			activityEnterAnimation:  Titanium.App.Android.R.anim.slide_in_right,
    		activityExitAnimation:  Titanium.Android.R.anim.slide_out_right
    	});
	});
	
	whiteView.add(leftIcon);
	whiteView.add(label);
	whiteView.add(rightIcon);
	container.add(whiteView);
	container.add(shadow);

	return container;
}

module.exports = SmallRectangleLogged2;
