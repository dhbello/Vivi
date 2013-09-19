/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
require({cache:{"url:esri/dijit/analysis/templates/MergeLayers.html":"<div class=\"esriAnalysis\">\r\n    <div data-dojo-type=\"dijit/layout/ContentPane\" style=\"margin-top:0.5em; margin-bottom: 0.5em;\">\r\n      <div data-dojo-attach-point=\"_mergeLayersToolContentTitle\" class=\"analysisTitle\">\r\n        <table class=\"esriFormTable\" > \r\n          <tr>\r\n            <td><div class=\"aggregateIcon\"></div></td>\r\n            <td>${i18n.mergeLayers}</td>\r\n            <td>\r\n              <div class=\"esriFloatTrailing\" style=\"padding:0;\">\r\n                  <a href=\"#\" class='esriFloatLeading helpIcon' esriHelpTopic=\"toolDescription\"></a>\r\n                  <a href=\"#\" data-dojo-attach-point=\"_closeBtn\" title=\"${i18n.close}\" class=\"closeIcon\">              \r\n                  <img data-dojo-attach-point=\"_closeImg\" border=\"0\"/></a>            \r\n              </div>                \r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n      <div style=\"clear:both; border-bottom: #333 thin solid; height:1px;width:100%;\"></div>\r\n    </div>\r\n    <div data-dojo-type=\"dijit/form/Form\" data-dojo-attach-point=\"_form\" readOnly=\"true\">\r\n       <table class=\"esriFormTable\"  data-dojo-attach-point=\"_mergeLayersTable\" style=\"border-collapse:collapse;border-spacing:5px;\" cellpadding=\"5px\" cellspacing=\"5px\"> \r\n         <tbody>\r\n          <tr>\r\n            <td  colspan=\"3\" class=\"sectionHeader\" data-dojo-attach-point=\"_mergeLayersDescription\" >${i18n.mergeLayersDefine}</td>\r\n          </tr> \r\n          <tr>\r\n            <td colspan=\"3\">\r\n              <label class=\"esriFloatLeading esriTrailingMargin025\">${i18n.oneLabel}</label>\r\n              <label class=\"\">${i18n.chooseMergeLayer}</label>\r\n              <a href=\"#\" class='esriFloatTrailing helpIcon' esriHelpTopic=\"MergeLayer\"></a>\r\n              <select class=\"longInput esriLongLabel\"  style=\"margin-top:1.0em;\" data-dojo-type=\"dijit/form/Select\" data-dojo-attach-point=\"_mergeLayersSelect\" data-dojo-attach-event=\"onChange:_handleLayerChange\"></select>\r\n            </td>\r\n          </tr>     \r\n          <tr>\r\n            <td width=\"99%\" colspan=\"2\" style=\"white-space:nowrap;\">\r\n              <label class=\"esriFloatLeading esriTrailingMargin025\">${i18n.twoLabel}</label>\r\n              <label class=\"longTextInput\">${i18n.mergeFieldsLabel}</label>\r\n            </td>\r\n            <td>\r\n              <a href=\"#\" class='esriFloatTrailing helpIcon' esriHelpTopic=\"MergingAttributes\"></a> \r\n            </td>          \r\n          </tr>  \r\n          <tr data-dojo-attach-point=\"_afterMergeFieldsRow\">\r\n            <td colspan=\"3\" class=\"clear\"></td>\r\n          </tr>          \r\n \t      <tr>\r\n            <td colspan=\"2\">\r\n              <label class=\"esriFloatLeading esriTrailingMargin025\">${i18n.threeLabel}</label>\r\n              <label class=\"longTextInput\">${i18n.outputLayerLabel}</label>\r\n            </td>\r\n            <td class=\"shortTextInput\">\r\n              <a href=\"#\" class='esriFloatTrailing helpIcon' esriHelpTopic=\"OutputName\"></a> \r\n            </td>             \r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"3\">\r\n              <input type=\"text\" data-dojo-type=\"dijit/form/ValidationTextBox\" data-dojo-props=\"required:true\" class=\"longTextInput esriLeadingMargin05\" data-dojo-attach-point=\"_outputLayerInput\"></input>\r\n            </td>                \r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"3\">\r\n              <div data-dojo-attach-point=\"_chooseFolderRow\">\r\n                <label style=\"width:9px;font-size:smaller;\">${i18n.saveResultIn}</label>\r\n                <input class=\"longInput\" dojoAttachPoint=\"_webMapFolderSelect\" dojotype=\"dijit/form/ComboBox\" trim=\"true\" style=\"width:60%;height:auto\"></input>\r\n              </div>              \r\n            </td>\r\n          </tr>         \r\n      </tbody>         \r\n     </table>\r\n    </div>\r\n    <div data-dojo-attach-point=\"_mergesToolContentButtons\" style=\"padding:5px;margin-top:5px;border-top:solid 1px #BBB;\">\r\n      <div style=\"width:100%;padding:0.5em 0 0.5em 0\">\r\n        <a class=\"esriFloatTrailing esriSmallFont\"  href=\"#\" data-dojo-attach-point=\"_showCreditsLink\" data-dojo-attach-event=\"onclick:_handleShowCreditsClick\">${i18n.showCredits}</a>\r\n       <label data-dojo-attach-point=\"_chooseExtentDiv\"class=\"esriSelectLabel\" style=\"font-size:smaller;\">\r\n         <input type=\"radio\" data-dojo-attach-point=\"_useExtentCheck\" data-dojo-type=\"dijit/form/CheckBox\" data-dojo-props=\"checked:true\" name=\"extent\" value=\"true\"/>\r\n           ${i18n.useMapExtent}\r\n       </label>\r\n      </div>\r\n      <button data-dojo-type=\"dijit/form/Button\" type=\"submit\" data-dojo-attach-point=\"_saveBtn\" class=\"esriLeadingMargin4\" data-dojo-attach-event=\"onClick:_handleSaveBtnClick\">\r\n          ${i18n.runAnalysis}\r\n      </button>\r\n    </div>\r\n    <div data-dojo-type=\"dijit/Dialog\" title=\"${i18n.creditTitle}\" data-dojo-attach-point=\"_usageDialog\" style=\"width:40em;\">\r\n      <div data-dojo-type=\"esri/dijit/analysis/CreditEstimator\"  data-dojo-attach-point=\"_usageForm\"></div>\r\n    </div>    \r\n    <div class=\"esriFormWarning esriRoundedBox\" data-dojo-attach-point=\"_errorMessagePane\" style=\"display:none;\">\r\n      <a href=\"#\" title=\"${i18n.close}\" class=\"esriFloatTrailing closeIcon\" title='${i18n.close}' data-dojo-attach-event=\"onclick:_handleCloseMsg\">\r\n        <img src='images/close.gif' border='0'/> \r\n      </a>\r\n      <span data-dojo-attach-point=\"_bodyNode\"></span>\r\n    </div>\r\n</div>\r\n"}});define("esri/dijit/analysis/MergeLayers",["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/_base/fx","dojo/has","dojo/i18n","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/fx/easing","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/RadioButton","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/ComboBox","esri/kernel","esri/lang","esri/dijit/analysis/AnalysisBase","esri/dijit/analysis/CreditEstimator","esri/dijit/analysis/utils","dojo/text!esri/dijit/analysis/templates/MergeLayers.html"],function(_1,_2,_3,_4,_5,_6,fx,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_1a,_1b,_1c,_1d,_1e,_1f,_20,_21,_22,_23,_24,_25){var _26=_2([_11,_12,_13,_14,_15,_22],{declaredClass:"esri.dijit.analysis.MergeLayers",templateString:_25,basePath:_1.toUrl("esri/dijit/analysis"),widgetsInTemplate:true,inputLayer:null,mergeLayers:null,mergeFields:null,outputLayerName:null,showSelectFolder:true,showChooseExtent:true,showHelp:true,showCredits:true,i18n:null,toolName:"MergeLayers",helpFileName:"MergeLayers",resultParameter:"MergedLayer",constructor:function(_27){this.inherited(arguments);this._pbConnects=[];this._mergeFieldsRows=[];this._includedMergeFields=[];if(_27.containerNode){this.container=_27.containerNode;}},destroy:function(){this.inherited(arguments);_4.forEach(this._pbConnects,_5.disconnect);delete this._pbConnects;},postMixInProperties:function(){this.inherited(arguments);_3.mixin(this.i18n,_8.getLocalization("esri","jsapi").mergeLayers);},postCreate:function(){this.inherited(arguments);_f.add(this._form.domNode,"esriSimpleForm");_c.set(this._closeImg,"src",this.basePath+"/images/close.gif");this._outputLayerInput.set("validator",_3.hitch(this,this.validateServiceName));this._buildUI();},startup:function(){},_onClose:function(_28){if(_28){this._save();this.onSave();}this.onClose();},_handleShowCreditsClick:function(e){e.preventDefault();if(!this._form.validate()){return;}var _29={},_2a={},_2b;_2b=this.mergeLayers[this._mergeLayersSelect.get("value")];_29.InputLayer=_6.toJson(_24.constructAnalysisInputLyrObj(this.inputLayer));_29.MergeLayer=_6.toJson(_24.constructAnalysisInputLyrObj(_2b));_29.MergingAttributes=_6.toJson(this.get("mergeFields"));_29.OutputName=_6.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}});if(this.showChooseExtent){if(this._useExtentCheck.get("checked")){_29.context=_6.toJson({extent:this.map.extent});}}this.getCreditsEstimate(this.toolName,_29).then(_3.hitch(this,function(_2c){this._usageForm.set("content",_2c);this._usageDialog.show();}));},_handleSaveBtnClick:function(){if(!this._form.validate()){return;}this._saveBtn.set("disabled",true);var _2d={},_2e={},_2f;_2f=this.mergeLayers[this._mergeLayersSelect.get("value")];_2d.InputLayer=_6.toJson(_24.constructAnalysisInputLyrObj(this.inputLayer));_2d.MergeLayer=_6.toJson(_24.constructAnalysisInputLyrObj(_2f));_2d.MergingAttributes=_6.toJson(this.get("mergeFields"));_2d.OutputName=_6.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}});if(this.showChooseExtent){if(this._useExtentCheck.get("checked")){_2d.context=_6.toJson({extent:this.map.extent});}}_2e.jobParams=_2d;_2e.itemParams={"description":this.i18n.itemDescription,"tags":_a.substitute(this.i18n.itemTags,{layername:this.inputLayer.name}),"snippet":this.i18n.itemSnippet};if(this.showSelectFolder){_2e.itemParams.folder=this._webMapFolderSelect.item?this.folderStore.getValue(this._webMapFolderSelect.item,"id"):"";}this.execute(_2e);},_handleLayerChange:function(_30){this.outputLayerName=_a.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name,mergelayername:this.mergeLayers[_30].name});this._outputLayerInput.set("value",this.outputLayerName);this._removeMergeFieldsRows();this._createMergeFieldsRow();},_handleAttrSelectChange:function(_31,_32){var _33,_34,obj;if(_32!=="0"){_33=_31.get("statisticSelect");if(_33.get("value")!=="0"){if(!_33.get("isnewRowAdded")){if(this._includedMergeFields!==null&&_31.get("value")!=="0"){this._includedMergeFields.push(_31.get("value"));var _35=this.mergeLayers[this._mergeLayersSelect.get("value")].fields.length;if(this._includedMergeFields.length!==(_35-1)){_34=_33.get("removeTd");_b.set(_34,"display","block");obj=_33.get("referenceWidget");_3.hitch(obj,obj._createMergeFieldsRow());_33.set("isnewRowAdded",true);}}}}}},_handleAttrMatchSelectChange:function(_36,_37){if(_37!=="0"&&_36.get("value")!=="0"){var _38=this.mergeLayers[this._mergeLayersSelect.get("value")].fields;var _39=this.inputLayer.fields;var _3a="";_4.forEach(_38,function(_3b){if(_3b.name===_36.get("value")){_3a=_3b.type;}});var _3c="";_4.forEach(_39,function(_3d){if(_3d.name===_37){_3c=_3d.type;}});if(_3a!==_3c){if(_4.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],_3a)!==-1&&_4.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],_3c)!==-1){this._handleCloseMsg();this.set("disableRunAnalysis",false);}else{this._showMessages(this.i18n.fieldTypeMatchValidationMsg);this.set("disableRunAnalysis",true);}}else{this._handleCloseMsg();this.set("disableRunAnalysis",false);}}},_handleStatsValueUpdate:function(_3e,_3f,_40,_41){var _42,obj,_43,_44,_45;if(!_3e){return;}_43=_3e.get("statisticSelect");_44=_3e.get("attributeMatchSelect");_45=_3e.get("attributeRenameBox");if(_41==="Rename"){_b.set(_45.domNode.parentNode,{"display":"","padding-left":0,"padding-right":0});_45.domNode.style.display="block";_45.set("required",true);_44.domNode.style.display="none";_b.set(_43.domNode.parentNode,"width","34%");_b.set(_3e.domNode.parentNode,"width","35%");}else{if(_41==="Remove"||_41==="0"){_45.domNode.style.display="none";_45.set("required",false);_44.domNode.style.display="none";_b.set(_43.domNode.parentNode,"width","44%");_b.set(_3e.domNode.parentNode,"width","55%");_b.set(_45.domNode.parentNode,"display","none");}else{_b.set(_44.domNode.parentNode,{"display":"","padding-left":0,"padding-right":0});_45.domNode.style.display="none";_45.set("required",false);_44.domNode.style.display="table";_b.set(_43.domNode.parentNode,"width","34%");_b.set(_3e.domNode.parentNode,"width","35%");}}if(_3e.get("value")!=="0"&&_41!=="0"){if(!_43.get("isnewRowAdded")){if(this._includedMergeFields!==null&&_3e.get("value")!=="0"){this._includedMergeFields.push(_3e.get("value"));var _46=this.mergeLayers[this._mergeLayersSelect.get("value")].fields.length;if(this._includedMergeFields.length!==(_46-1)){_42=_43.get("removeTd");_b.set(_42,"display","block");obj=_43.get("referenceWidget");_3.hitch(obj,obj._createMergeFieldsRow());_43.set("isnewRowAdded",true);}}}}},_save:function(){},_buildUI:function(){this._loadConnections();_24.initHelpLinks(this.domNode,this.showHelp);if(this.inputLayer){_c.set(this._mergeLayersDescription,"innerHTML",_a.substitute(this.i18n.mergeLayersDefine,{layername:this.inputLayer.name}));}if(this.mergeLayers){_4.forEach(this.mergeLayers,function(_47,_48){if(_47!==this.inputLayer&&_47.geometryType===this.inputLayer.geometryType){this._mergeLayersSelect.addOption({value:_48,label:_47.name});}},this);}this._outputLayerInput.set("value",_a.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name,mergelayername:this.mergeLayers[this._mergeLayersSelect.get("value")].name}));if(this.outputLayerName){this._outputLayerInput.set("value",this.outputLayerName);}this._createMergeFieldsRow();var _49=[];_4.forEach(this.mergeFields,function(_4a){var _4b=_4a.split(" ");if(_49.indexOf(_4b[0])===-1){this._currentAttrSelect.set("value",_4b[0]);_3.hitch(this._currentAttrSelect,this._handleAttrSelectChange,_4b[0])();this._currentStatsSelect.set("value",_4b[1]);_3.hitch(this._currentStatsSelect,this._handleStatsValueUpdate,"value","",_4b[1])();if(_4b[1]==="Rename"){this._currentAttrMatchSelect.set("value",_4b[2]);}else{if(_4b[1]==="Match"){this._currentAttrRenameBox.set("value",_4b[2]);}}_49.push(_4b[0]);}},this);if(_49.length>0){this._includedMergeFields=_49;}_b.set(this._chooseFolderRow,"display",this.showSelectFolder===true?"block":"none");if(this.showSelectFolder){this.getFolderStore().then(_3.hitch(this,function(_4c){this.folderStore=_4c;this._webMapFolderSelect.set("store",_4c);this._webMapFolderSelect.set("value",this.portalUser.username);}));}_b.set(this._chooseExtentDiv,"display",this.showChooseExtent===true?"block":"none");},_loadConnections:function(){this._connect(this,"onExecute",_3.hitch(this,"_onClose",false));this._connect(this._closeBtn,"onclick",_3.hitch(this,"_onClose",false));},_createMergeFieldsRow:function(){var _4d,_4e,_4f,_50,_51,_52,_53,_54,_55,_56,_57,_58,_59;_4d=_d.create("tr",null,this._afterMergeFieldsRow,"before");_4e=_d.create("table",null,_4d);_50=_d.create("tbody",null,_4e);_4f=_d.create("tr",null,_50,"before");_52=_d.create("td",{style:{width:"35%"}},_4f);_51=_d.create("td",{style:{width:"34%"}},_4f);_53=_d.create("td",{style:{width:"30%"}},_4f);_54=new _1b({maxHeight:200,"class":"esriLeadingMargin1 mediumInput esriTrailingMargin025 attrSelect",style:{overflowX:"hidden",tableLayout:"fixed",width:"100%"}},_d.create("select",null,_52));this.set("attributes",{selectWidget:_54,layer:this.mergeLayers[this._mergeLayersSelect.get("value")]});_55=new _1b({"class":"mediumInput statsSelect",style:{overflowX:"hidden",tableLayout:"fixed",width:"100%"}},_d.create("select",null,_51));this.set("statistics",{selectWidget:_55});_56=new _1d({maxHeight:200,"class":"longTextInput",style:{overflowX:"hidden",display:"none",tableLayout:"fixed",width:"100%"}},_d.create("validationtextbox",null,_53));_57=new _1b({maxHeight:200,"class":"mediumInput attrSelect",style:{overflowX:"hidden",display:"none",tableLayout:"fixed",width:"100%"}},_d.create("select",null,_53));this.set("attributes",{selectWidget:_57,layer:this.inputLayer});_5.connect(_57,"onChange",_3.hitch(this,this._handleAttrMatchSelectChange,_54));_54.set("statisticSelect",_55);_54.set("attributeRenameBox",_56);_54.set("attributeMatchSelect",_57);_5.connect(_54,"onChange",_3.hitch(this,this._handleAttrSelectChange,_54));_59=_d.create("td",{"class":"esriFloatTrailing removeTd",style:{"display":"none",width:"1%",maxWidth:"12px"}},_4f);_58=_d.create("a",{"title":this.i18n.removeAttrStats,"class":"closeIcon statsRemove","innerHTML":"<img src='"+this.basePath+"/images/close.gif"+"' border='0''/>"},_59);_5.connect(_58,"onclick",_3.hitch(this,this._removeMergeFieldsRow,_4d));this._mergeFieldsRows.push(_4d);_55.set("attributeSelect",_54);_55.set("removeTd",_59);_55.set("isnewRowAdded",false);_55.set("referenceWidget",this);_55.watch("value",_3.hitch(this,this._handleStatsValueUpdate,_54));this._currentStatsSelect=_55;this._currentAttrSelect=_54;this._currentAttrMatchSelect=_57;this._currentAttrRenameBox=_56;return true;},_removeMergeFieldsRows:function(){_4.forEach(this._mergeFieldsRows,this._removeMergeFieldsRow,this);this._mergeFieldsRows=[];this._includedMergeFields=[];},_removeMergeFieldsRow:function(row){_4.forEach(_16.findWidgets(row),function(w,_5a){if(_5a===0){var _5b=w;var idx=this._includedMergeFields.indexOf(_5b.get("value"));if(idx!==-1){this._includedMergeFields.splice(idx,1);}}w.destroyRecursive();},this);_d.destroy(row);},_setAnalysisGpServerAttr:function(url){this.analysisGpServer=url;this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName);},_setInputLayerAttr:function(_5c){this.inputLayer=_5c;},_setMergeLayersAttr:function(_5d){this.mergeLayers=_5d;},_setAttributesAttr:function(_5e){if(!_5e.layer){return;}var _5f,_60,_61;_5f=_5e.layer;_60=_5e.selectWidget;_61=_5f.fields;_60.addOption({value:"0",label:this.i18n.attribute});_4.forEach(_61,function(_62){if(_62.name!==_5f.objectIdField&&this._includedMergeFields.indexOf(_62.name)===-1){_60.addOption({value:_62.name,label:_62.name});}},this);},_setStatisticsAttr:function(_63){var _64=_63.selectWidget;_64.addOption({value:"0",label:this.i18n.operation});_64.addOption({value:"Rename",label:this.i18n.rename});_64.addOption({value:"Remove",label:this.i18n.remove});_64.addOption({value:"Match",label:this.i18n.match});},_setMergeFieldsAttr:function(_65){this.mergeFields=_65;},_getMergeFieldsAttr:function(){var _66="",_67=[],_68,_69,_6a,_6b;_e(".statsSelect",this.domNode).forEach(function(_6c){_68=_16.byNode(_6c);_69=_68.get("attributeSelect");_6a=_69.get("attributeMatchSelect");_6b=_69.get("attributeRenameBox");if(_69.get("value")!=="0"&&_68.get("value")!=="0"){if(_68.get("value")==="Remove"){_66+=_69.get("value")+" "+_68.get("value")+";";_67.push(_69.get("value")+" "+_68.get("value"));}else{if(_68.get("value")==="Rename"){_66+=_69.get("value")+" "+_68.get("value")+" "+_6b.get("value")+";";_67.push(_69.get("value")+" "+_68.get("value")+" "+_6b.get("value"));}else{_66+=_69.get("value")+" "+_68.get("value")+" "+_6a.get("value")+";";_67.push(_69.get("value")+" "+_68.get("value")+" "+_6a.get("value"));}}}});return _67;},_setDisableRunAnalysisAttr:function(_6d){this._saveBtn.set("disabled",_6d);},_setShowSelectFolderAttr:function(_6e){this.showSelectFolder=_6e;},_getShowSelectFolderAttr:function(){return this.showSelectFolder;},_setShowChooseExtentAttr:function(_6f){this.showChooseExtent=_6f;},_getShowChooseExtentAttr:function(){return this.showChooseExtent;},_setMapAttr:function(map){this.map=map;},_getMapAttr:function(){return this.map;},_setShowHelpAttr:function(_70){this.showHelp=_70;},_getShowHelpAttr:function(){return this.showHelp;},_setShowCreditsAttr:function(_71){this.showCredits=_71;},_getShowCreditsAttr:function(){return this.showCredits;},validateServiceName:function(_72){var _73=/(:|&|<|>|%|#|\?|\\|\"|\/|\+)/.test(_72);if(_72.length===0||((_a.trim(_72)).length===0)){this._outputLayerInput.set("invalidMessage",this.i18n.requiredValue);return false;}if(_73){this._outputLayerInput.set("invalidMessage",this.i18n.invalidServiceName);return false;}if(_72.length>128){this._outputLayerInput.set("invalidMessage",this.i18n.invalidServiceNameLength);return false;}return true;},_connect:function(_74,evt,_75){this._pbConnects.push(_5.connect(_74,evt,_75));},_showMessages:function(msg){_c.set(this._bodyNode,"innerHTML",msg);fx.fadeIn({node:this._errorMessagePane,easing:_10.quadIn,onEnd:_3.hitch(this,function(){_b.set(this._errorMessagePane,{display:""});})}).play();},_handleCloseMsg:function(e){if(e){e.preventDefault();}fx.fadeOut({node:this._errorMessagePane,easing:_10.quadOut,onEnd:_3.hitch(this,function(){_b.set(this._errorMessagePane,{display:"none"});})}).play();},onSave:function(){},onClose:function(){}});if(_7("extend-esri")){_3.setObject("dijit.analysis.MergeLayers",_26,_20);}return _26;});