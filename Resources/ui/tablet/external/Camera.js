function Camera(){

	var container = Titanium.UI.createView({
		width:120,
		height:120,
		canDelete:false
	});
	
	var layer = Titanium.UI.createImageView({
		width:120,
		height:120,
		backgroundColor:'#ffffff'
	});
	
	var overlayer = Titanium.UI.createImageView({
		width:120,
		height:120,
		image:'/images/ic_preview_big.png'
	});
	
	container.photos = {
		big:''
	};
	
	container.startCamera = function(){
		Titanium.Media.showCamera({
    		success:function(event) {
        		// called when media returned from the camera
        		var blob = event.media;
        		container.photos.big = blob;
        		var thumb = blob.imageAsThumbnail(120);
        		layer.image = thumb;
        		container.canDelete = true;
        		saveHer.stopExecution = false;
        		//button.setButtonTitle('Scatta Foto');
        		//win.remove(view);
        		//item.enabled = true;
    		},
    		cancel:function() {
        		// called when user cancels taking a picture
        		//button.setButtonTitle('Scatta Foto');
        		//win.remove(view);
        		//item.enabled = true;
        		saveHer.stopExecution = false;
    		},
    		error:function(error) {
        		// called when there's an error
        		if (error.code == Titanium.Media.NO_CAMERA) {
        			var dialog = Ti.UI.createAlertDialog({
   						message: "C\'è stato un errore nell\'apertura della fotocamera. Riprova, per favore!",
    					ok: 'Ok',
    					title: 'saveHer'
  					}).show();
  					saveHer.stopExecution = false;
            		//a.setMessage('Please run this test on device');
            		//button.setButtonTitle('Scatta Foto');
            		//win.remove(view);
            		//item.enabled = true;
        		} else {
	            	var dialog = Ti.UI.createAlertDialog({
   						message: "C\'è stato un errore nell\'apertura della fotocamera. Riprova, per favore!",
    					ok: 'Ok',
    					title: 'saveHer'
  					}).show();
  					saveHer.stopExecution = false;
	            	//button.setButtonTitle('Scatta Foto');
	            	//win.remove(view);
	            	//item.enabled = true;
    	    	}
    		}
		});
	};
	
	container.startAlbum = function(){
		Titanium.Media.openPhotoGallery({
			success:function(event) {
				saveHer.stopExecution = false;
        		// called when media returned from the camera
        		var blob = event.media;
        		container.photos.big = blob;
        		var thumb = blob.imageAsThumbnail(120);
        		layer.image = thumb;
        		container.canDelete = true;
        		//button.setButtonTitle('Rullino Foto');
        		//win.remove(view);
        		//item.enabled = true;
    		},
    		cancel:function() {
    			saveHer.stopExecution = false;
        		// called when user cancels taking a picture
        		//button.setButtonTitle('Rullino Foto');
        		//win.remove(view);
        		//item.enabled = true;
    		},
    		error:function(error) {
        		// called when there's an error
        		var dialog = Ti.UI.createAlertDialog({
   					message: "C\'è stato un errore nell\'apertura della galleria. Riprova, per favore!",
    				ok: 'Ok',
    				title: 'saveHer'
  				}).show();
  				saveHer.stopExecution = false;
        		//button.setButtonTitle('Rullino Foto');
        		//win.remove(view);
        		//item.enabled = true;
    		}
		});
	};
	
	container.deletePhoto = function(){
		if( container.canDelete ){
			layer.image = '';
			container.photos.big = '';
			container.canDelete = false;
			Ti.API.info('clicked');
		}
	};
	
	container.setPhoto = function(file){
		var blob = file.read();
        container.photos.big = blob;
        var thumb = blob.imageAsThumbnail(120);
        layer.image = thumb;
        container.canDelete = true;
	};
	
	container.add(layer);
	container.add(overlayer);

	return container;
	
}

module.exports = Camera;
