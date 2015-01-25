function ReportRectangle(){
	var postLayoutCheck = false;
	var Camera = require('ui/tablet/external/Camera');
	
	var container = Ti.UI.createView({
		width:'95%',
		height:290,
		backgroundColor:'transparent',
		layout:'vertical',
		bubbleParent:false,
		top:30
	});
	
	var whiteView = Ti.UI.createView({
		width:'100%',
		height:287,
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
	
	var description = Titanium.UI.createLabel({
		text:'Inserisci le fotografie',
		font:{
     		fontSize:24,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:15,
   		width:'95%'
	});
	
	var photoContainer = Titanium.UI.createView({
		width:390,
		height:120,
		backgroundColor:'#ffffff',
		layout:'horizontal',
		top:30
	});
	
	var alayer = new Camera();
	alayer.left = 0;
	alayer.addEventListener('click', function(){
		alayer.deletePhoto();
	});
	photoContainer.add(alayer);
	
	var blayer = new Camera();
	blayer.left = 10;
	blayer.addEventListener('click', function(){
		blayer.deletePhoto();
	});
	photoContainer.add(blayer);
	
	var clayer = new Camera();
	clayer.left = 10;
	clayer.addEventListener('click', function(){
		clayer.deletePhoto();
	});
	photoContainer.add(clayer);
	
	var separator = Ti.UI.createView({
		height:0.5,
		width:'97%',
		backgroundColor:'#DCDCDC',
		top:20
	});
	
	var underButtons = Ti.UI.createView({
		width:'100%',
		height:60,
		//layout:'horizontal',
		top:5
	});
	
	var lens = Ti.UI.createView({
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_icon_len.png',
		width:40,
		height:40,
		left:'20%'
	});
	
	var album = Ti.UI.createView({
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_icon_album.png',
		width:40,
		height:40,
		right:'20%'
	});
	
	var longSeparator = Ti.UI.createView({
		height:40,
		width:0.5,
		backgroundColor:'#DCDCDC',
		left:'50%'
	});
	
	underButtons.add(lens);
	underButtons.add(longSeparator);
	underButtons.add(album);
	
	lens.addEventListener('click', function(){
		var flag = false;
		if ( !alayer.canDelete ){
			flag = true;
			alayer.startCamera();
		}else if ( !blayer.canDelete ){
			flag = true;
			blayer.startCamera();
		}else if ( !clayer.canDelete ){
			flag = true;
			clayer.startCamera();
		}
		if (!flag){
			var a = Titanium.UI.createAlertDialog({title:'Report'});
        	a.setMessage("Hai raggiunto il numero massimo di fotografie disponibili. Tappa su una foto per cancellarla.");
        	a.show();
		}
	});
	
	album.addEventListener('click', function(){
		var flag = false;
		if ( !alayer.canDelete ){
			flag = true;
			alayer.startAlbum();
		}else if ( !blayer.canDelete ){
			flag = true;
			blayer.startAlbum();
		}else if ( !clayer.canDelete ){
			flag = true;
			clayer.startAlbum();
		}
		if (!flag){
			var a = Titanium.UI.createAlertDialog({title:'Report'});
        	a.setMessage("Hai raggiunto il numero massimo di fotografie disponibili. Tappa su una foto per cancellarla.");
        	a.show();
		}
	});
	
	container.areImagesEmpty = function(){
		if( !alayer.canDelete && !blayer.canDelete && !clayer.canDelete )
			return true;
		else return false;
	};
	
	container.isFirstImagePresent = function(){
		if( alayer.canDelete )
			return true;
		else return false;
	};
	
	container.isSecondImagePresent = function(){
		if( blayer.canDelete )
			return true;
		else return false;
	};
	
	container.isThirdImagePresent = function(){
		if( clayer.canDelete )
			return true;
		else return false;
	};
	
	container.getFirstBigLayer = function(){
		return alayer.photos.big;
	};
	
	container.getSecondBigLayer = function(){
		return blayer.photos.big;
	};
	
	container.getThirdBigLayer = function(){
		return clayer.photos.big;
	};
	
	whiteView.add(description);
	whiteView.add(photoContainer);
	whiteView.add(separator);
	whiteView.add(underButtons);
	container.add(whiteView);
	container.add(shadow);
	
	return container;
}

module.exports = ReportRectangle;