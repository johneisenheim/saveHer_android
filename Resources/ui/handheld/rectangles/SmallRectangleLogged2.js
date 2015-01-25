function SmallRectangleLogged2(){
	
	var AppInfo = require('ui/handheld/pages/AppInfo');
	
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
	
	var label = Titanium.UI.createLabel({
		text:'Informazioni',
		font:{
     		fontSize:21,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:15,
   		width:Ti.UI.FILL
	}); 
	
	var rightIcon = Titanium.UI.createView({
		width:25,
		height:25,
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_arrow.png',
		top:15,
		right:10
	});
	
	var leftIcon = Titanium.UI.createView({
		width:30,
		height:30,
		backgroundColor:'#ffffff',
		backgroundImage: '/images/ic_icon_mark.png',
		top:12,
		left:25
	});
	
	var shadow = Ti.UI.createView({
		width:'100%',
		height:2,
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
