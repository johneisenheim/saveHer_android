function Listeners(){
	var imagefactory = require('ti.imagefactory');
	var Compression = require('ti.compression');
	var Questionnaire = require('ui/tablet/pages/Questionnaire');
	var self = {};
	
	self.sendRestoredReport = function(button, path, parsed, preview, customCombo, currentPath){
		button.setButtonTitle('Attendi...');
		var zipelements = [];
		if (parsed.img1 != '')
			zipelements[0] = parsed.img1;
		if (parsed.img2 != '')
			zipelements[1] = parsed.img2;
		if (parsed.img3 != '')
			zipelements[2] = parsed.img3;
		var zipfile = Ti.Filesystem.getFile(currentPath+"/report.zip");
		var toDelete = Ti.Filesystem.getFile(currentPath);
		var zipfilepath = zipfile.getNativePath();
		var result = Compression.zip(zipfilepath, zipelements);
		if (result == 'success') {
		if (!zipfile.exists()) {
			var dialog = Ti.UI.createAlertDialog({
   				message: "C\'è stato un errore nella costruzione dei dati. Per favore, riprova!",
    			ok: 'Ok',
    			title: 'saveHer'
  			}).show();
  			button.setButtonTitle('Invia');
  			saveHer.stopExecution = false;
  			return;
		}
		var request = Titanium.Network.createHTTPClient({
			onload: function(e){
						var response = JSON.parse(this.responseText);
						if ( response.response ){
							var lastrepid = response.lastid;
							//sendButton.setButtonTitle('Inviato!');
							toDelete.deleteDirectory(true);
							setTimeout(function(){
								new Questionnaire().openWin(lastrepid, Ti.App.Properties.getString('nickname'));
								toDelete.deleteFile();
								preview.resetReport();
								customCombo.reloadCombo();
								saveHer.stopExecution = false;
							},3000);
						}else{
							var dialog = Ti.UI.createAlertDialog({
   								message: "C\'è stato un errore nell\'invio dei dati. Per favore, riprova!",
    							ok: 'Ok',
    							title: 'saveHer'
  							}).show();
  							button.setButtonTitle('Invia');
							zipfile.deleteFile();
  							customCombo.reloadCombo();
  							saveHer.stopExecution = false;
  							return;
						}
						Ti.API.info((this.responseText));
					},
			onerror: function(e){
						var dialog = Ti.UI.createAlertDialog({
   							message: "C\'è stato un errore nell\'invio dei dati. Per favore, riprova!",
    						ok: 'Ok',
    						title: 'saveHer'
  						}).show();
  						button.setButtonTitle('Invia');
						zipfile.deleteFile();
						customCombo.reloadCombo();
						saveHer.stopExecution = false;
					}
				});
				if( Titanium.Network.getOnline() ){
					var url = "http://maps.google.com/maps/api/geocode/json?latlng=" + parsed.latitude + "," + parsed.longitude + "&sensor=true";
			    	var xhr = Titanium.Network.createHTTPClient();
			    	xhr.open('GET', url);
			    	xhr.onload = function() {
			        	var json = this.responseText;
			        	var gotitems = eval('(' + json + ')');
			        	if(gotitems.results != '') {
			            	parsed.address = gotitems.results[0].address_components[2].long_name;
			            	
			       		}
			       		Ti.API.info('Indirizzo ' + parsed.address);
						request.open("POST",'http://www.appsaveheritage.com/rep.php');
						var prms = {
							nick: Ti.App.Properties.getString('nickname'),
		            		zip: zipfile.read(),
		            		latitude:parsed.latitude,
		            		longitude:parsed.longitude
						};
						Ti.API.info(JSON.stringify(prms));
						request.send(prms);			 
			    	};
			    	xhr.onerror = function(){
			    		request.open("POST",'http://www.appsaveheritage.com/rep.php');
						var prms = {
							nick: Ti.App.Properties.getString('nickname'),
		            		zip: zipfile.read(),
		            		latitude:parsed.latitude,
		            		longitude:parsed.longitude
						};
						Ti.API.info(JSON.stringify(prms));
						request.send(prms);	
			    	};
			    	xhr.send();
				}
	 	}
	};
	
	self.sendReport = function(button, reportRectangle, gpsRectangle){
		var zipelements = [];
		button.setButtonTitle('Attendi...');
		try{
			var checkdir = Titanium.Filesystem.getFile('appdata://reports');
			if ( !checkdir.exists() ){
				checkdir.createDirectory();
			}
			var folderToStore = Titanium.Filesystem.getFile(checkdir.getNativePath()+'/tmp');
			folderToStore.createDirectory();
			var tempFile = null, newBlob = null;
			if( reportRectangle.isFirstImagePresent() ){
				tempFile = Titanium.Filesystem.getFile(folderToStore.getNativePath()+"/1.jpg");
				newBlob = imagefactory.compress(reportRectangle.getFirstBigLayer(), 0.15);
				tempFile.write(newBlob);
				zipelements[0] = tempFile.getNativePath();
			}
			if( reportRectangle.isSecondImagePresent() ){
				tempFile = Titanium.Filesystem.getFile(folderToStore.getNativePath()+"/2.jpg");
				newBlob = imagefactory.compress(reportRectangle.getSecondBigLayer(), 0.15);
				tempFile.write(newBlob);
				zipelements[1] = tempFile.getNativePath();
			}
			if( reportRectangle.isThirdImagePresent() ){
				tempFile = Titanium.Filesystem.getFile(folderToStore.getNativePath()+"/3.jpg");
				newBlob = imagefactory.compress(reportRectangle.getThirdBigLayer(), 0.15);
				tempFile.write(newBlob);
				zipelements[2] = tempFile.getNativePath();
			}
		}catch(ex){
			Ti.API.info(ex);
			var dialog = Ti.UI.createAlertDialog({
   				message: "Sembra ci sia stato un problema nella memorizzazione dei files. Controlla lo spazio libero sulla tua SDCard.",
    			ok: 'Ok',
    			title: 'saveHer'
  			}).show();
  			saveHer.stopExecution = false;
  			return;
		}
		var zipfile = Ti.Filesystem.getFile(checkdir.getNativePath()+"/report.zip");
		var zipfilepath = zipfile.getNativePath();
		var result = Compression.zip(zipfilepath, zipelements);
		if (result == 'success') {
			if (!zipfile.exists()) {
				var dialog = Ti.UI.createAlertDialog({
   					message: "C\'è stato un errore nella costruzione dei dati. Per favore, riprova!",
    				ok: 'Ok',
    				title: 'saveHer'
  				}).show();
  				button.setButtonTitle('Invia');
  				saveHer.stopExecution = false;
  				return;
			}
			var request = Titanium.Network.createHTTPClient({
				onload: function(e){
					var response = JSON.parse(this.responseText);
					if ( response.response ){
						var lastrepid = response.lastid;
						if( lastrepid == 0 )
							lastrepid = 1;
						//button.setButtonTitle('Inviato!');
						folderToStore.deleteDirectory(true);
						zipfile.deleteFile();
						setTimeout(function(){
							new Questionnaire().openWin(lastrepid, Ti.App.Properties.getString('nickname'));
						},3000);		
					}else{
						var dialog = Ti.UI.createAlertDialog({
   							message: "C\'è stato un errore nell\'invio dei dati. Per favore, riprova!",
    						ok: 'Ok',
    						title: 'saveHer'
  						}).show();
  						button.setButtonTitle('Invia');
  						folderToStore.deleteDirectory(true);
						zipfile.deleteFile();
						saveHer.stopExecution = false;
  						return;
					}
							
				},
				onerror: function(e){
					var dialog = Ti.UI.createAlertDialog({
   						message: "C\'è stato un errore nell\'invio dei dati. Per favore, riprova!",
    					ok: 'Ok',
    					title: 'saveHer'
  					}).show();
  					button.setButtonTitle('Invia');
  					folderToStore.deleteDirectory(true);
					zipfile.deleteFile();
					saveHer.stopExecution = false;
				}
			});
			request.open("POST",'http://www.appsaveheritage.com/rep.php');
			var prms = {
				nick: Ti.App.Properties.getString('nickname'),
            	zip: zipfile.read(),
            	latitude:gpsRectangle.getLat(),
            	longitude:gpsRectangle.getLon()
			};
			request.send(prms);
		}else{
			var dialog = Ti.UI.createAlertDialog({
   				message: "C\'è stato un errore nell\'elaborazione dei dati. Per favore, riprova!",
    			ok: 'Ok',
    			title: 'saveHer'
  			}).show();
  			button.setButtonTitle('Invia');
  			folderToStore.deleteDirectory(true);
  			saveHer.stopExecution = false;
  			return;
		}
	};
	
	return self;
}

module.exports = Listeners;
