// QuickBox
var QBox = (function(){
	
	// Private Static functions
	function extend(toObject, fromObject){
		for(o in fromObject){
			if(fromObject.hasOwnProperty(o) ){
				toObject[o] = fromObject[o];
			}
		}
		return toObject;
	}
	
	function createElement(id, parentElemId){
		var parentElem = parentElemId ? document.getElementById(parentElemId) : document.body;
		
		elem = document.createElement("div");
		elem.id = id;
			
		parentElem.appendChild(elem);
		
		return elem;
	}
	
	return function(options){
		// Private Class Attributes
		var settings = { 
			html : "",
			modal : false,		// Will clicking the mask close the popup
			showClose : true,	// Show the 'X' in the corner of the popup
			onOpen : function(){},
			onClose : function(){},
			className : "",
			closeHTML : "&#x2716;", // A special 'X'
			maskId : "qbMask",
			contentId : "qbContent",
			closeId : "qbClose"
		}; 
		
		var	mask,
			content, 
			closeButton;
			
		// Run when class is instantiated
		extend(settings, options);
		
		// Private Class Methods
		function createMask(){
			mask = createElement(settings.maskId);

			mask.style.display = "block";
		}

		function createContent(){
			content = createElement(settings.contentId, "qbMask");

			content.style.display = "block";
			content.className = settings.className;
			content.innerHTML = settings.html;
		}
		
		function createCloseButton(){
			closeButton = createElement(settings.closeId, content.id);

			closeButton.onclick = function(){
				hidePopup();
			}

			closeButton.innerHTML = settings.closeHTML;
			
		}
	
		function showPopup(){
			createMask();

			if(settings.modal == false){
				mask.onclick = function(){
					hidePopup();
				}
			} 

			createContent();
			
			if(settings.showClose == true){
				createCloseButton();
			}

			settings.onOpen();

		}

		function hidePopup(){
			// Hide Mask
			document.body.removeChild(mask);
		
			// Hide Content
			document.body.removeChild(content);
			
			window.onresize = null;
			
			settings.onClose();
		}
		
		// Public Class Methods
		this.show = showPopup;
		this.hide = hidePopup;
		this.settings = function(){
			return settings;
		}
	};
	
})();