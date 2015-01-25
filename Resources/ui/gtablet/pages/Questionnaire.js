function Questionnaire(){
	var Buttons = require('ui/gtablet/ui_elements/Buttons');
	var arraytofill = [];
	var lastid = null, uid = null;
	
	for (var i = 0; i < 9; i++ )
		arraytofill[i] = '';
	
	var self = Titanium.UI.createWindow({
		width:'100%',
		height:'100%',
		backgroundColor:'#f8f8f8',
		navBarHidden:false,
		windowSoftInputMode: Titanium.UI.Android.SOFT_INPUT_STATE_HIDDEN,
		orientationModes:[Titanium.UI.PORTRAIT],
		title:'Questionario'
	});
	
	self.activity.onCreateOptionsMenu = function(e) { 
		var actionBar = self.activity.actionBar;
	};
	
	self.addEventListener('androidback', function(){
		Ti.App.fireEvent('report_complete', {});
		self.close();
	});
	
	var scrollview = Titanium.UI.createScrollView({
		width:'100%',
		height:'100%',
		backgroundColor:'#f8f8f8',
		scrollType:'vertical'
	});
	
	var container = Titanium.UI.createView({
		width:'100%',
		height:4700,
		layout:'vertical',
		top:0,
		left:0
	});
	
	var modalview = Ti.UI.createView({
		width:'100%',
		height:'100%',
		backgroundColor:'transparent',
		top:0,
		left:0
	});
	
	var titlelabel = Titanium.UI.createLabel({
		text:'Grazie!',
		font:{
     		fontSize:60,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		top:10
	});
	
	var questlabel = Titanium.UI.createLabel({
		text:'La tua segnalazione è andata a buon fine! Ti chiediamo qualche secondo in più: compila questo breve questionario che ci informerà sulla tipologia e causa del danno riscontrato. Questa fase non è obbligatoria, ma ci sarà di grande aiuto per suggerire le azioni di intervento sul bene culturale.',
		font:{
     		fontSize:24,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		textAlign:'center',
   		top:15,
   		width:'95%'
	});
	
	var label = Titanium.UI.createLabel({
		text:'Che tipo di danno riscontri? E per quali cause?',
		font:{
     		fontSize:24,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		textAlign:'center',
   		top:30,
   		width:'95%'
	});
	
	var createCustomView = function(title) {
    	var view = Ti.UI.createView({
        	backgroundColor: '#89b47f',
        	height: 70
    	});
    	var text = Ti.UI.createLabel({
        	text: title,
        	font:{
     			fontSize:26,
      			fontFamily:"CaviarDreams"
   			},
        	left: 5,
        	color: '#fff'
    	});
    	view.add(text);
    	return view;
	};
	
	var listView = Ti.UI.createListView({
    	width:'90%',
    	height:Ti.UI.SIZE,
    	softKeyboardOnFocus:Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS,
    	top:15
	});
	
	var asection = Ti.UI.createListSection({
		headerView:createCustomView('Crolli'),
		index:0
	});
	var bsection = Ti.UI.createListSection({
		headerView:createCustomView('Lesioni'),
		index:1
	});
	var csection = Ti.UI.createListSection({
		headerView:createCustomView('Tetto Sconnesso'),
		index:2
	});
	var dsection = Ti.UI.createListSection({
		headerView:createCustomView('Degrado e/o caduta materiali'),
		index:3
	});
	var esection = Ti.UI.createListSection({
		headerView:createCustomView('Danni sistema raccolte acque'),
		index:4
	});
	var fsection = Ti.UI.createListSection({
		headerView:createCustomView('Presenza d\'acqua'),
		index:5
	});
	var gsection = Ti.UI.createListSection({
		headerView:createCustomView('Atto vandalico sull\'edificio'),
		index:6
	});
	var hsection = Ti.UI.createListSection({
		headerView:createCustomView('Atto vandalico alle opere d\'arte'),
		index:7
	});
	var isection = Ti.UI.createListSection({
		headerView:createCustomView('Furto beni immobili'),
		index:8
	});
	
	var adata = [
    	{ properties: { title: 'Nessuno', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK,backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60} },
    	{ properties: { title: 'Terremoto', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Frana', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Incuria', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Evento meteorico', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Altro', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Non so', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}}
	];
	
	var bdata = [
    	{ properties: { title: 'Nessuno', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK,backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60} },
    	{ properties: { title: 'Terremoto', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Frana', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Incuria', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Evento meteorico', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Altro', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Non so', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}}
	];
	
	var cdata = [
    	{ properties: { title: 'Nessuno', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK,backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60} },
    	{ properties: { title: 'Terremoto', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Frana', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Incuria', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Evento meteorico', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Altro', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Non so', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}}
	];
	
	var ddata = [
    	{ properties: { title: 'Nessuno', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK,backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60} },
    	{ properties: { title: 'Intonaco', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Affreschi', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Altro', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}}
    	
	];
	
	var edata = [
    	{ properties: { title: 'Nessuno', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK,backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60} },
    	{ properties: { title: 'Incuria', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Evento meteorico', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Altro', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Non so', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}}
	];
	
	var fdata = [
    	{ properties: { title: 'Nessuno', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK,backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60} },
    	{ properties: { title: 'Inondazione', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Perdita impianti', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Infiltrazione dal tetto', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Altro', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Non so', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}}
	];
	
	var gdata = [
    	{ properties: { title: 'Nessuno', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK,backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60} },
    	{ properties: { title: 'Graffito', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Scritte', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Affissione manifesti', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Azione meccanica', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Fuoco', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Esplosione', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Altro', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}}
	];
	
	var hdata = [
    	{ properties: { title: 'Nessuno', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK,backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60} },
    	{ properties: { title: 'Graffito', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Scritte', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Affissione manifesti', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Azione meccanica', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Fuoco', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Esplosione', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Altro', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}}
	];
	
	var idata = [
    	{ properties: { title: 'Nessuno', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK,backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60} },
    	{ properties: { title: 'Arredi', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Opere d\'arte', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}},
    	{ properties: { title: 'Altro', accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE, backgroundColor:'transparent', isChoosen:true, font:{fontSize:24,fontFamily:"CaviarDreams"},color:'#4F5153', left:10, height:60}}
	];
	
	asection.setItems(adata);
	bsection.setItems(bdata);
	csection.setItems(cdata);
	dsection.setItems(ddata);
	esection.setItems(edata);
	fsection.setItems(fdata);
	gsection.setItems(gdata);
	hsection.setItems(hdata);
	isection.setItems(idata);
	
	var getSectionTitle = function(index){
		switch(index){
			case 0:
				return 'Crolli';
			break;
			case 1:
				return 'Lesioni';
			break;
			case 2:
				return 'Tetto Sconnesso';
			break;
			case 3:
				return 'Degrado e/o caduta materiali';
			break;
			case 4:
				return 'Danni sistema raccolte acque';
			break;
			case 5:
				return 'Presenza d\'acqua';
			break;
			case 6:
				return 'Atto vandalico sull\'edificio';
			break;
			case 7:
				return 'Atto vandalico alle opere d\'arte';
			break;
			case 8:
				return 'Furto beni immobili';
			break;
		}
	};
	
	listView.addEventListener('itemclick', function(e){
    	var item = e.section.getItemAt(e.itemIndex);
    	var itemslen = e.section.getItems().length;
    	Ti.API.info(itemslen);
    	
    	if (item.properties.accessoryType == Ti.UI.LIST_ACCESSORY_TYPE_NONE) {
        	item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK;
        	if ( item.properties.title !== 'Nessuno' ){
    			arraytofill[e.itemIndex] = item.properties.title;
    		}else arraytofill[e.itemIndex] = '';
    		for (var i = 0; i < itemslen; i++ ){
    			if( i != e.itemIndex ){
    				var tmpitem = e.section.getItemAt(i);
    				tmpitem.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_NONE;
    				e.section.updateItemAt(i, tmpitem);  
    			}
    		}
    	}
    	e.section.updateItemAt(e.itemIndex, item);  
	});
	
	var yesbutton = Buttons();
	yesbutton.setButtonTitle('Invia!');
	yesbutton.setButtonTop(15);
	
	yesbutton.addEventListener('click', function(){
		yesbutton.setButtonTitle('Attendi...');
		var moretext = '';
		var text = "{";
		for ( var i = 0; i < arraytofill.length; i++ ){
			if ( arraytofill[i] !== '' ){
				text+='\"'+getSectionTitle(i)+'\":\"'+arraytofill[i]+'\",';
				Ti.API.info(getSectionTitle(i));
			}
		}
		text = text.substr(0, text.length-1);
		text += '}';
		Ti.API.info(text);
		if( (textArea.value == '' || textArea.value == 'Ulteriori informazioni...') && text.length <= 1){
			yesbutton.setButtonTitle('Invia!');
			Ti.App.fireEvent('report_complete', {});
			self.close();
			return;
		}
		
		if((textArea.value != '' || textArea.value != 'Ulteriori informazioni...') )
			moretext = textArea.value;
		
		var request = Titanium.Network.createHTTPClient({
						onload: function(e){
							Ti.API.info(this.responseText);
							var response = JSON.parse(this.responseText);
							//alert(response);
							if ( response.response ){
								yesbutton.setButtonTitle('Fatto!');
								Ti.App.fireEvent('report_complete', {});
								setTimeout(function(){
									self.close();
								},3000);
							}else{
								a.setMessage("C\'è stato un errore nell\'invio della richiesta. Ti preghiamo di riprovare più tardi!");
        						a.show();
								donebutton.setButtonTitle('Invia!');
							}
						},
						onerror: function(e){
							a.setMessage("C\'è stato un errore nell\'invio della richiesta. Ti preghiamo di riprovare più tardi!");
        					a.show();
							yesbutton.setButtonTitle('Invia!');
						}
					});
		request.open("POST",'http://www.appsaveheritage.com/memquest.php');
		var prms = {
					userid: uid,
					id:lastid
		};
		if( text.length > 1 ){
				prms.quest = text;//JSON.parse(text);
		}else prms.quest = '';
		if ( textArea.value != '' )
			prms.more = moretext;
		else prms.more = '';
		Ti.API.info(JSON.stringify(prms));
		request.send(prms);
	});
	
	listView.sections = [asection,bsection,csection,dsection,esection,fsection,gsection,hsection,isection];
	
	var textArea = Ti.UI.createTextArea({
  		borderWidth: 0,
  		//borderColor: '#bbb',
  		//borderRadius: 5,
  		color: '#4F5153',
  		backgroundColor:'#f8f8f8',
  		font:{fontSize:24,fontFamily:"CaviarDreams"},
  		returnKeyType:Titanium.UI.RETURNKEY_DONE,
  		textAlign: 'left',
  		hintText: 'Ulteriori informazioni...',
  		top: 20,
  		width: '95%', 
  		autocorrect:true,
  		autocapitalization:Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES,
  		verticalAlign:Titanium.UI.TEXT_VERTICAL_ALIGNMENT_TOP,
  		height: 150
	});
	
	self.openWin = function(_lastid, _uid){
		lastid = _lastid;
		uid = _uid;
		self.open();
		setTimeout(function(e){
			scrollview.scrollTo(0,0);
		},500);
		
	};
	
	var fakeview = Ti.UI.createView({
		width:1,
		height:15,
		top:5
	});
	
	container.add(titlelabel);
	container.add(questlabel);
	container.add(label);
	container.add(listView);
	container.add(textArea);
	container.add(yesbutton);
	container.add(fakeview);
	
	scrollview.add(container);
	
	self.add(scrollview);
		
	return self;
	
	
}

module.exports = Questionnaire;
