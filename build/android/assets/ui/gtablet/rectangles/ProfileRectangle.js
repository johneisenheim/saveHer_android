function ProfileRectangle(){var e=Titanium.Filesystem.getFile("appdata://","photo.jpg"),t=Titanium.Filesystem.getFile("appdata://","tinyphoto.jpg"),i=Titanium.Filesystem.getFile("appdata://","reports");i.exists()||i.createDirectory();var a=Ti.UI.createView({width:"90%",height:420,backgroundColor:"transparent",layout:"vertical",top:35}),n=Ti.UI.createView({width:"100%",height:417,backgroundColor:"#ffffff",layout:"vertical",borderColor:"#DCDCDC",borderWidth:.4,top:0}),o=Ti.UI.createView({width:"100%",height:3,backgroundColor:"#DBDBDB"}),r=Ti.UI.createView({height:.5,width:"97%",backgroundColor:"#DCDCDC",top:20}),s=Titanium.UI.createView({width:150,height:150,backgroundColor:"#ffffff",top:15}),l=Titanium.UI.createView({width:150,height:150,backgroundColor:"#89b47f",backgroundImage:e.getNativePath()}),u=Titanium.UI.createView({width:150,height:150,backgroundColor:"transparent",backgroundImage:"/images/ic_preview_big.png"});s.add(l),s.add(u);var c=Titanium.UI.createLabel({text:Ti.App.Properties.getString("first_name")+" "+Ti.App.Properties.getString("last_name"),font:{fontSize:31,fontFamily:"CaviarDreams"},color:"#65686D",textAlign:"center",top:30}),d=Titanium.UI.createLabel({text:"nickname: "+Ti.App.Properties.getString("nickname"),font:{fontSize:24,fontFamily:"CaviarDreams"},color:"#65686D",textAlign:"center",top:10}),f=Titanium.UI.createLabel({text:"Nessun report da inviare",font:{fontSize:25,fontFamily:"CaviarDreams"},color:"#65686D",textAlign:"center",top:30}),h=Titanium.UI.createView({backgroundColor:"transparent",backgroundImage:"/images/ic_icon_notify.png",width:45,height:45,top:10}),p=Titanium.UI.createLabel({text:0,font:{fontSize:19,fontFamily:"CaviarDreams"},color:"white",textAlign:"left"});return h.add(p),a.cleanUp=function(){i.exists()&&i.deleteDirectory(!0),e.exists()&&e.deleteFile(),t.exists()&&t.deleteFile()},n.add(s),n.add(c),n.add(d),n.add(r),n.add(f),n.add(h),a.add(n),a.add(o),a}module.exports=ProfileRectangle;