function ReportRectangle(){var e=require("ui/tablet/external/Camera"),t=Ti.UI.createView({width:"95%",height:290,backgroundColor:"transparent",layout:"vertical",bubbleParent:!1,top:30}),i=Ti.UI.createView({width:"100%",height:287,backgroundColor:"#ffffff",layout:"vertical",borderColor:"#DCDCDC",borderWidth:.4,top:0}),a=Ti.UI.createView({width:"100%",height:3,backgroundColor:"#DBDBDB"}),o=Titanium.UI.createLabel({text:"Inserisci le fotografie",font:{fontSize:24,fontFamily:"CaviarDreams"},color:"#65686D",textAlign:"center",top:15,width:"95%"}),r=Titanium.UI.createView({width:390,height:120,backgroundColor:"#ffffff",layout:"horizontal",top:30}),n=new e;n.left=0,n.addEventListener("click",function(){n.deletePhoto()}),r.add(n);var s=new e;s.left=10,s.addEventListener("click",function(){s.deletePhoto()}),r.add(s);var l=new e;l.left=10,l.addEventListener("click",function(){l.deletePhoto()}),r.add(l);var c=Ti.UI.createView({height:.5,width:"97%",backgroundColor:"#DCDCDC",top:20}),d=Ti.UI.createView({width:"100%",height:60,top:5}),u=Ti.UI.createView({backgroundColor:"#ffffff",backgroundImage:"/images/ic_icon_len.png",width:40,height:40,left:"20%"}),f=Ti.UI.createView({backgroundColor:"#ffffff",backgroundImage:"/images/ic_icon_album.png",width:40,height:40,right:"20%"}),h=Ti.UI.createView({height:40,width:.5,backgroundColor:"#DCDCDC",left:"50%"});return d.add(u),d.add(h),d.add(f),u.addEventListener("click",function(){var e=!1;if(n.canDelete?s.canDelete?l.canDelete||(e=!0,l.startCamera()):(e=!0,s.startCamera()):(e=!0,n.startCamera()),!e){var t=Titanium.UI.createAlertDialog({title:"Report"});t.setMessage("Hai raggiunto il numero massimo di fotografie disponibili. Tappa su una foto per cancellarla."),t.show()}}),f.addEventListener("click",function(){var e=!1;if(n.canDelete?s.canDelete?l.canDelete||(e=!0,l.startAlbum()):(e=!0,s.startAlbum()):(e=!0,n.startAlbum()),!e){var t=Titanium.UI.createAlertDialog({title:"Report"});t.setMessage("Hai raggiunto il numero massimo di fotografie disponibili. Tappa su una foto per cancellarla."),t.show()}}),t.areImagesEmpty=function(){return n.canDelete||s.canDelete||l.canDelete?!1:!0},t.isFirstImagePresent=function(){return n.canDelete?!0:!1},t.isSecondImagePresent=function(){return s.canDelete?!0:!1},t.isThirdImagePresent=function(){return l.canDelete?!0:!1},t.getFirstBigLayer=function(){return n.photos.big},t.getSecondBigLayer=function(){return s.photos.big},t.getThirdBigLayer=function(){return l.photos.big},i.add(o),i.add(r),i.add(c),i.add(d),t.add(i),t.add(a),t}module.exports=ReportRectangle;