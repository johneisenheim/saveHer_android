function ProfileReportsRectangle(){
	
	var dirpath = Titanium.Filesystem.getFile('appdata://','reports');
	var dirpathList = dirpath.getDirectoryListing();
	var dirpathLen = dirpathList.length;
	var photofile = Titanium.Filesystem.getFile('appdata://', 'photo.jpg');
	var tinyPhotoFile = Titanium.Filesystem.getFile('appdata://', 'tinyphoto.jpg');
	
	var currentPath = null;
	
	var container = Ti.UI.createView({
		width:'95%',
		height:320, //161
		backgroundColor:'transparent',
		layout:'vertical',
		top:25
	});
	
	var whiteView = Ti.UI.createView({
		width:'100%',
		height:318,
		backgroundColor:'#ffffff',
		layout:'vertical',
		borderColor:'#DCDCDC',
		borderWidth:0.4,
		top:0
	});
	
	var shadow = Ti.UI.createView({
		width:'100%',
		height:2,
		backgroundColor:'#DBDBDB'
	});
	
	var separator = Ti.UI.createView({
		height:0.5,
		width:'97%',
		backgroundColor:'#DCDCDC',
		top:20
	});
	
	var photoContainer = Titanium.UI.createView({
		width:120,
		height:120,
		backgroundColor:'#ffffff',
		top:15
	});
	
	var profilePhoto = Titanium.UI.createView({
		width:120,
		height:120,
		backgroundColor:'#89b47f',
		backgroundImage: photofile.getNativePath()
	});
	
	var photoOverlayer = Titanium.UI.createView({
		width:120,
		height:120,
		backgroundColor:'transparent',
		backgroundImage:'/images/ic_preview_big.png'
	});
	
	photoContainer.add(profilePhoto);
	photoContainer.add(photoOverlayer);
	
	var helloLabel = Titanium.UI.createLabel({
		text: Ti.App.Properties.getString('first_name') +' '+Ti.App.Properties.getString('last_name'),
		font:{
     		fontSize:26,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:15
	}); 
	
	var nickLabel = Titanium.UI.createLabel({
		text: 'nickname: '+Ti.App.Properties.getString('nickname'),
		font:{
     		fontSize:17,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:5
	}); 
	
	var reportToSendLabel = Titanium.UI.createLabel({
		text: 'Hai dei report da inviare.',
		font:{
     		fontSize:18,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:15
	});
	
	var circle = Titanium.UI.createView({
		backgroundColor:'transparent',
		backgroundImage:'/images/ic_icon_notify.png',
		width:35,
		height:35,
		top:10
	});
	
	var circleLabel = Titanium.UI.createLabel({
		text:dirpathLen,
		font:{
     		fontSize:16,
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
	
	Ti.App.addEventListener('reload_circle',function(e){
		dirpath = Titanium.Filesystem.getFile('appdata://','reports');
	 	dirpathList = dirpath.getDirectoryListing();
		dirpathLen = dirpathList.length;
		circleLabel.text = dirpathLen;
	});
	

	whiteView.add(photoContainer);
	whiteView.add(helloLabel);
	whiteView.add(nickLabel);
	whiteView.add(separator);
	whiteView.add(reportToSendLabel);
	whiteView.add(circle);
	//whiteView.add(customCombo);
	//whiteView.add(preview);
	//whiteView.add(sendButton);
	//whiteView.add(deleteButton);
	container.add(whiteView);
	container.add(shadow);
	
	return container;
}

module.exports = ProfileReportsRectangle;
