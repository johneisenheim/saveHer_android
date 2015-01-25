function AppInfo(){
	
	var InfoRectangle = require('ui/tablet/rectangles/InfoRectangle');
	var infoRectangle = new InfoRectangle();
	
	var self = Titanium.UI.createWindow({
		backgroundColor:'#f6f6f6',
		width:'100%',
		height:'100%',
		//layout:'vertical',
		orientationModes:[Titanium.UI.PORTRAIT]
	});
	
	self.activity.onCreateOptionsMenu = function(e) { 
		var actionBar = self.activity.actionBar;
		actionBar.title = 'Informazioni';
	};
	
	var view = Titanium.UI.createScrollView({
		backgroundColor:'#f6f6f6',
		width:'100%',
		height:Ti.UI.SIZE,
		layout:'vertical'
	});
	
	var title = Titanium.UI.createLabel({
		text:'Informazioni',
		font:{
     		fontSize:60,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		top:10
	});
	
	self.addEventListener('androidback', function(){
		Ti.App.fireEvent('profile_closed',{});
		self.close();
	});
	var ideazione = Titanium.UI.createLabel({
		text: 'Ideazione:',
		font:{
     		fontSize:26,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:45
	}); 
	
	var ideazioneText = Titanium.UI.createLabel({
		text: 'Dott. Geol. Fabrizio Terenzio Gizzi',
		font:{
     		fontSize:21,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:5
	}); 
	
	var ideazioneText1 = Titanium.UI.createLabel({
		text: 'Dott. Ing. Nicola Masini',
		font:{
     		fontSize:21,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:5
	}); 
	
	var gruppo = Titanium.UI.createLabel({
		text: 'Gruppo di lavoro:',
		font:{
     		fontSize:26,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:15
	});
	
	var gruppoText = Titanium.UI.createLabel({
		text: 'Dott. M. Biscione',
		font:{
     		fontSize:21,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:5
	});
	
	var gruppoText1 = Titanium.UI.createLabel({
		text: 'Dott. Ing. M. Danese',
		font:{
     		fontSize:21,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:5
	});
	
	var gruppoText2 = Titanium.UI.createLabel({
		text: 'Dott. Geol. M. Sileo',
		font:{
     		fontSize:21,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:5
	});
	
	var gruppoText3 = Titanium.UI.createLabel({
		text: 'Dott. Geol. C. Zotta',
		font:{
     		fontSize:21,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:5
	});
	
	var gruppoText4 = Titanium.UI.createLabel({
		text: 'Sig.ra M. R. Potenza',
		font:{
     		fontSize:21,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:5
	});
	
	var sviluppo = Titanium.UI.createLabel({
		text: 'Sviluppo dell\'applicazione:',
		font:{
     		fontSize:26,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:15
	});
	
	var sviluppoText = Titanium.UI.createLabel({
		text: 'Nello Saulino',
		font:{
     		fontSize:21,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:5
	});
	
	var introText = Titanium.UI.createLabel({
		text: 'L\'idea è stata sviluppata dall\'Istituto per i Beni Archeologici e Monumentali del Consiglio Nazionale delle Ricerche nell\'ambito del progetto PRO_CULT:',
		font:{
     		fontSize:24,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		width:'90%',
   		top:15
	});
	
	var introText2 = Titanium.UI.createLabel({
		text: 'Advanced methodological approaches and technologies for Protection and Security of Cultural Heritage finanziato con fondi PO-FESR Basilicata (2007-2013).',
		font:{
     		fontSize:24,
      		fontFamily:"Lato-Bold"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		width:'90%',
   		top:5
	});
	
	var row = Titanium.UI.createView({
		width:Ti.UI.SIZE,
		height:120,
		layout:'horizontal',
		top:40
	});
	
	var ibam = Titanium.UI.createView({
		width:120,
		height:120,
		backgroundColor:'#f6f6f6',
		backgroundImage:'/images/ic_ibam.png',
		left:0
	});
	
	var procult = Titanium.UI.createView({
		width:120,
		height:120,
		backgroundColor:'#f6f6f6',
		backgroundImage:'/images/ic_procult.png',
		left:0
	});
	
	var fesr = Titanium.UI.createView({
		width:120,
		height:120,
		backgroundColor:'#f6f6f6',
		backgroundImage:'/images/ic_fesr.png',
		left:0
	});
	
	var regione = Titanium.UI.createView({
		width:120,
		height:120,
		backgroundColor:'#f6f6f6',
		backgroundImage:'/images/ic_regione.png',
		left:0
	});
	
	var fakeView = Titanium.UI.createView({
		width:1,
		height:30,
		backgroundColor:'transparent'
	});
	
	row.add(ibam);
	row.add(procult);
	row.add(fesr);
	row.add(regione);
	
	
	view.add(title);
	view.add(infoRectangle);
	view.add(introText);
	view.add(introText2);
	view.add(ideazione);
	view.add(ideazioneText);
	view.add(ideazioneText1);
	view.add(gruppo);
	view.add(gruppoText);
	view.add(gruppoText1);
	view.add(gruppoText2);
	view.add(gruppoText3);
	view.add(gruppoText4);
	view.add(sviluppo);
	view.add(sviluppoText);
	view.add(row);
	view.add(fakeView);
	//view.add(shadow);
	self.add(view);
	
	return self;
}

module.exports = AppInfo;
