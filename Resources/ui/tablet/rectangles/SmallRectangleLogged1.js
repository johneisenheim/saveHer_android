function SmallRectangleLogged1(){
	
	var postLayoutCheck = false;
	var photoFile = Titanium.Filesystem.getFile('appdata://', 'photo.jpg');
	var repDir = Titanium.Filesystem.getFile('appdata://reports');
	var repDirList = repDir.getDirectoryListing();
	var repDirListLen = repDirList.length;
	var Profile = require('ui/tablet/pages/Profile');
	var profile = new Profile();
	
	var container = Ti.UI.createView({
		width:'90%',
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
		text:'Profilo Utente',
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
		top:18,
		right:10
	});
	
	var leftContainer = Titanium.UI.createView({
		width:65,
		height:65,
		backgroundColor:'#ffffff',
		top:2,
		left:15
	});
	
	var profilePhoto = Titanium.UI.createView({
		width:65,
		height:65,
		backgroundColor:'#89b47f'
	});
	
	var leftOverlayer = Titanium.UI.createView({
		width:65,
		height:65,
		backgroundColor:'transparent',
		backgroundImage:'/images/ic_preview_bg.png'
	});
	
	if( !photoFile.exists() ){
		var xhr = Ti.Network.createHTTPClient({
			onload: function(){
				if( Ti.Filesystem.isExternalStoragePresent() ){
					photoFile.write(xhr.responseData);
					profilePhoto.backgroundImage = photoFile.getNativePath();
				}
			},
			onerror:function(){
				//alert("error");
			}
		});
		xhr.open('GET', Ti.App.Properties.getString('picture'));
		xhr.send();
	}else{
		profilePhoto.backgroundImage = photoFile.getNativePath();
	}
	
	var circle = Titanium.UI.createView({
		backgroundColor:'transparent',
		backgroundImage:'',
		width:35,
		height:35,
		top:5,
		left:65
	});
	
	var circleLabel = Titanium.UI.createLabel({
		text:repDirListLen,
		font:{
     		fontSize:18,
      		fontFamily:"CaviarDreams"
   		},
   		color:'white',
   		textAlign:'left'
	}); 
	
	if ( repDirListLen > 0 ){
		circle.backgroundImage = '/images/ic_icon_notify.png';
		circle.add(circleLabel);
	}
	
	var shadow = Ti.UI.createView({
		width:'100%',
		height:3,
		backgroundColor:'#DBDBDB'
	});
	
	leftContainer.add(profilePhoto);
	leftContainer.add(leftOverlayer);
	
	
	whiteView.add(leftContainer);
	whiteView.add(label);
	whiteView.add(circle);
	whiteView.add(rightIcon);
	container.add(whiteView);
	container.add(shadow);
	
	Ti.App.addEventListener('profile_closed', function(){
		label.text = 'Profilo Utente';
		container.touchEnabled = true;
		var repDirList = repDir.getDirectoryListing();
		var repDirListLen = repDirList.length;
		if( repDirListLen == 0 ){
			circle.backgroundImage = '';
			circleLabel.color = '#fffffff';
		}else{
			circleLabel.text = repDirListLen;
		}
	});
	
	container.addEventListener('click', function(){
		label.text = 'Attendi...';
		new Profile().open({
			activityEnterAnimation:  Titanium.App.Android.R.anim.slide_in_right,
    		activityExitAnimation:  Titanium.Android.R.anim.slide_out_right
    	});
	});
	
	return container;
}

module.exports = SmallRectangleLogged1;
