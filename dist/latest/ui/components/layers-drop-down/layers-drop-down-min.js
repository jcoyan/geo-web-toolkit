(function(){var a=angular.module("gawebtoolkit.ui.components.layers-drop-down",["gawebtoolkit.ui.directives","ui.utils","gawebtoolkit.utils"]);a.directive("gaLayersDropDown",[function(){return{restrict:"E",templateUrl:"src/main/js/ui/components/layers-drop-down/layers-drop-down.html",replace:false,scope:{layersData:"=",selectedModel:"=",controllerEmitEventName:"@",onSelectedLayerChanged:"&",onLayersInitialised:"&",layerGroupId:"@",includeNone:"@"},controller:["$scope",function(c){var b=this;c.selectLayer=function(){c.onSelectedLayerChanged({layerId:c.selectedModel,groupId:c.layerGroupId})};b.selectLayer=c.selectLayer;c.$emit(c.controllerEmitEventName,b)}],link:function(b){b.$watch("layersData",function(c){if(c&&!b.selectedModel){if(b.includeNone&&b.layersData[0].id!=="$none$"){b.layersData.unshift({id:"$none$",name:"None"})}b.selectedModel=c[0].id;b.onLayersInitialised({layerId:b.selectedModel,groupId:b.layerGroupId})}})},transclude:true}}])})();