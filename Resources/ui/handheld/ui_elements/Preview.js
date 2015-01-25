function Preview(){
	
	var buttonsview = Titanium.UI.createView({
		width:260,
		height:80,
		backgroundColor:'transparent',
		layout:'horizontal',
		top:20
	});
	
	var aContainer = Titanium.UI.createView({
		width:80,
		height:80,
		canDelete:false,
		left:0
	});
	
	var aLayer = Titanium.UI.createImageView({
		width:80,
		height:80,
		backgroundColor:'#ffffff'
	});
	
	var aOverlayer = Titanium.UI.createImageView({
		width:80,
		height:80,
		image:'/images/ic_preview_bg.png'
	});
	aContainer.add(aLayer);
	aContainer.add(aOverlayer);
	buttonsview.add(aContainer);
	
	var bContainer = Titanium.UI.createView({
		width:80,
		height:80,
		canDelete:false,
		left:10
	});
	
	var bLayer = Titanium.UI.createImageView({
		width:80,
		height:80,
		backgroundColor:'#ffffff'
	});
	
	var bOverlayer = Titanium.UI.createImageView({
		width:80,
		height:80,
		image:'/images/ic_preview_bg.png'
	});
	bContainer.add(bLayer);
	bContainer.add(bOverlayer);
	buttonsview.add(bContainer);
	
	var cContainer = Titanium.UI.createView({
		width:80,
		height:80,
		canDelete:false,
		left:10
	});
	
	var cLayer = Titanium.UI.createImageView({
		width:80,
		height:80,
		backgroundColor:'#ffffff'
	});
	
	var cOverlayer = Titanium.UI.createImageView({
		width:80,
		height:80,
		image:'/images/ic_preview_bg.png'
	});
	cContainer.add(cLayer);
	cContainer.add(cOverlayer);
	buttonsview.add(cContainer);
	
	buttonsview.setReport = function(path){
		var aPicture = Ti.Filesystem.getFile(path+'/t_1.jpg');
		var bPicture = Ti.Filesystem.getFile(path+'/t_2.jpg');
		var cPicture = Ti.Filesystem.getFile(path+'/t_3.jpg');
	
		if( aPicture.exists() )
			aLayer.image = aPicture.getNativePath();
	
		if( bPicture.exists() )
			bLayer.image = bPicture.getNativePath();
	
		if( cPicture.exists() )
			cLayer.image = cPicture.getNativePath();
	};
	
	buttonsview.resetReport = function(){
		Ti.API.info('resetReport');
		aLayer.image = '';
		bLayer.image = '';
		cLayer.image = '';
	};
	
	return buttonsview;
}
module.exports = Preview;
