function ProfileRectangle(){
	var postLayoutCheck = false;
	var photofile = Titanium.Filesystem.getFile('appdata://', 'photo.jpg');
	var tinyPhotoFile = Titanium.Filesystem.getFile('appdata://', 'tinyphoto.jpg');
	var dirpath = Titanium.Filesystem.getFile('appdata://','reports');
	
	if ( !dirpath.exists() )
		dirpath.createDirectory();
	
	var container = Ti.UI.createView({
		width:'90%',
		height:420, //161
		backgroundColor:'transparent',
		layout:'vertical',
		top:35
	});
	
	var whiteView = Ti.UI.createView({
		width:'100%',
		height:417,
		backgroundColor:'#ffffff',
		layout:'vertical',
		borderColor:'#DCDCDC',
		borderWidth:0.4,
		top:0
	});
	
	var shadow = Ti.UI.createView({
		width:'100%',
		height:3,
		backgroundColor:'#DBDBDB'
	});
	
	var separator = Ti.UI.createView({
		height:0.5,
		width:'97%',
		backgroundColor:'#DCDCDC',
		top:20
	});
	
	var photoContainer = Titanium.UI.createView({
		width:150,
		height:150,
		backgroundColor:'#ffffff',
		top:15
	});
	
	var profilePhoto = Titanium.UI.createView({
		width:150,
		height:150,
		backgroundColor:'#89b47f',
		backgroundImage: photofile.getNativePath()
	});
	
	var photoOverlayer = Titanium.UI.createView({
		width:150,
		height:150,
		backgroundColor:'transparent',
		backgroundImage:'/images/ic_preview_big.png'
	});
	
	photoContainer.add(profilePhoto);
	photoContainer.add(photoOverlayer);
	
	var helloLabel = Titanium.UI.createLabel({
		text: Ti.App.Properties.getString('first_name') +' '+Ti.App.Properties.getString('last_name'),
		font:{
     		fontSize:31,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:30
	}); 
	
	var nickLabel = Titanium.UI.createLabel({
		text: 'nickname: '+Ti.App.Properties.getString('nickname'),
		font:{
     		fontSize:24,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:10
	}); 
	
	var reportToSendLabel = Titanium.UI.createLabel({
		text: 'Nessun report da inviare',
		font:{
     		fontSize:25,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:30
	}); 

	
	var circle = Titanium.UI.createView({
		backgroundColor:'transparent',
		backgroundImage:'/images/ic_icon_notify.png',
		width:45,
		height:45,
		top:10
	});
	
	var circleLabel = Titanium.UI.createLabel({
		text:0,
		font:{
     		fontSize:19,
      		fontFamily:"CaviarDreams"
   		},
   		color:'white',
   		textAlign:'left'
	}); 
	
	circle.add(circleLabel);
	
	container.cleanUp = function(){
		if( dirpath.exists() )
			dirpath.deleteDirectory(true);
		if( photofile.exists() )
			photofile.deleteFile();
		if( tinyPhotoFile.exists() )
			tinyPhotoFile.deleteFile();
	};
	
	whiteView.add(photoContainer);
	whiteView.add(helloLabel);
	whiteView.add(nickLabel);
	whiteView.add(separator);
	whiteView.add(reportToSendLabel);
	whiteView.add(circle);
	container.add(whiteView);
	container.add(shadow);
	
	return container;
	
}

module.exports = ProfileRectangle;
