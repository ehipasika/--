var PinterestLikeToShareUpsell=function(){var a=function(e,c,f){this.trackContext=c;this.trackAction=e;this.stats="share";var g=false;var d=createNode("div",{className:"pinterest_like_to_share_upsell"});var m=createNode("span",{className:"ficon heart"});var i="Success! Share your "+m.outerHTML+"'s with Pinterest too?";var l=createNode("input",{className:"btn_pill",id:"connect_lts",type:"button",value:loc("Try it out")});var k=createNode("span",{className:"clickable a_pill"},null,loc("Not now"));var h=Event.wrapper(function(n){g=true;Track.stat("inc",this.stats,["pinterest","lts_upsell",this.trackAction,this.trackContext,"optin","clicked"]);setNode($("connect_lts"),{disabled:true,value:loc("Saving")});Ajax.post({action:"account.sharing",data:{optin_posting:"pinterest"},onSuccess:Event.wrapper(function(o){Track.stat("inc",this.stats,["pinterest","lts_upsell",this.trackAction,this.trackContext,"optin","ok"]);this.ok=true;Event.trigger(ModalDialog,"hide");if(this.trackAction==="publish"){Feedback.message(createNode("span",{className:"msg"},null,loc("Your likes will be posted to Pinterest.")),5000)}},this),onFinally:Event.wrapper(function(){Event.trigger(this,"done")},this)})},this);var j=Event.wrapper(function(n){g=true;Track.stat("inc",this.stats,["pinterest","lts_upsell",this.trackAction,this.trackContext,"optout","clicked"]);Ajax.post({action:"account.sharing",data:{disable_posting:"pinterest"},onSuccess:Event.wrapper(function(o){Track.stat("inc",this.stats,["pinterest","lts_upsell",this.trackAction,this.trackContext,"optout","ok"]);this.ok=true;Event.trigger(ModalDialog,"hide")},this),onFinally:Event.wrapper(function(){Event.trigger(this,"done")},this)})},this);Event.addListener(this,"done",function(n){g=false;setNode($("connect_lts"),{disabled:null,value:loc("Try it out")});ModalDialog.hide()});Event.addListener(l,"click",h);Event.addListener(k,"click",j);Event.addSingleUseListener(ModalDialog,"hide",Event.wrapper(function(n){if(!g){Event.trigger(this,"done")}},this));defaultBoardName=f.options.default_board_name;d.appendChild(createNode("div",{className:""},null,[createNode("span",null,null,loc("Post sets and items you like to your Pinterest board: ")+defaultBoardName)]));d.appendChild(createNode("div",{className:"actions horizontal"},null,[l,k]));this.node=d;this.title=i};var b=function(h,f,i,g){var c=function(j){ModalDialog.show_uic({title:j.title,body:j.node});Ajax.post({action:"oauth.record_anonymous_share",data:{upsell:true,service:"pinterest_like_to_share"}});window.sessionStorage.shownLikeToShareUpsell=true;Track.stat("inc",j.stats,["pinterest","lts_upsell",j.trackAction,j.trackContext,"upsell_show"])};if(!i.show_lts_upsell){Ajax.post({action:"oauth.record_anonymous_share",data:{service:"pinterest_like_to_share"}})}var d=LocalStorageCache.get("pinterest_oauth");if((!window.sessionStorage.shownLikeToShareUpsell&&i.show_lts_upsell)&&!d&&(i.authorized&&i.options&&i.options.publish_default&&!i.options.post_activities)){var e=new a(h,f,i);if(h==="publish"){Event.addSingleUseListener(document,"domready",c(e))}else{if(h==="pin_it"){c(e);Event.addSingleUseListener(ModalDialog,"hide",function(){UI.displayAjaxMessages(g)})}}}else{if(h==="pin_it"){Event.addSingleUseListener(ModalDialog,"hide",function(){UI.displayAjaxMessages(g)});ModalDialog.hide()}}};return{showUpsell:function(e,c,f,d){if(!f){Auth.getServices(function(g){f=g[0]||{};b(e,c,f,d)},"pinterest",true)}else{b(e,c,f,d)}}}}();