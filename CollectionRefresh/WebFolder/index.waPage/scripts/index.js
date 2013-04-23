
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button4 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
	sources.person.collectionRefresh();
	
	/*
	A workaround proposed by Vegar Ringdal
	/*	
	var selArray = $$('dataGrid1').getSelectedRows ();
	
	var setRow = function (){
	$$('dataGrid1').setSelectedRows(selArray);
	}

	sources.person.collectionRefresh({
			onSuccess : function(){
				setTimeout(function(){setRow()},150);
			
			}
		});
	*/		
	};// @lock
	


// @region eventManager// @startlock
	WAF.addListener("button4", "click", button4.click, "WAF");
// @endregion
};// @endlock
