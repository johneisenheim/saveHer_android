function Preview(){
	
	var buttonsview = Titanium.UI.createView({
		width:330,
		height:100,
		backgroundColor:'transparent',
		layout:'horizontal',
		top:15
	});
	
	var aContainer = Titanium.UI.createView({
		width:100,
		height:100,
		canDelete:false,
		left:0
	});
	
	var aLayer = Titanium.UI.createImageView({
		width:100,
		height:100,
		backgroundColor:'#ffffff'
	});
	
	var aOverlayer = Titanium.UI.createImageView({
		width:100,
		height:100,
		image:'/images/ic_preview_big.png'
	});
	aContainer.add(aLayer);
	aContainer.add(aOverlayer);
	buttonsview.add(aContainer);
	
	var bContainer = Titanium.UI.createView({
		width:100,
		height:100,
		canDelete:false,
		left:10
	});
	
	var bLayer = Titanium.UI.createImageView({
		width:100,
		height:100,
		backgroundColor:'#ffffff'
	});
	
	var bOverlayer = Titanium.UI.createImageView({
		width:100,
		height:100,
		image:'/images/ic_preview_bg.png'
	});
	bContainer.add(bLayer);
	bContainer.add(bOverlayer);
	buttonsview.add(bContainer);
	
	var cContainer = Titanium.UI.createView({
		width:100,
		height:100,
		canDelete:false,
		left:10
	});
	
	var cLayer = Titanium.UI.createImageView({
		width:100,
		height:100,
		backgroundColor:'#ffffff'
	});
	
	var cOverlayer = Titanium.UI.createImageView({
		width:100,
		height:100,
		image:'/images/ic_preview_bg.png'
	});
	cContainer.add(cLayer);
	cContainer.add(cOverlayer);
	buttonsview.add(cContainer);
	
	buttonsview.setReport = function(path){
		var aPicture = Ti.Filesystem.getFile(path+'/1.jpg');
		var bPicture = Ti.Filesystem.getFile(path+'/2.jpg');
		var cPicture = Ti.Filesystem.getFile(path+'/3.jpg');
	
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
