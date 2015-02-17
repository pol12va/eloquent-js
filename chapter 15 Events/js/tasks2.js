function asTabWrapper() {
	asTabs(document.querySelector("#wrapper"));
}

function asTabs(element) {
	for (var i = 0; i < element.childNodes.length; i++) {
		var currentNode = element.childNodes[i];
		if (currentNode.nodeType === document.ELEMENT_NODE) {
			var nodeButton = document.createElement("button");
			var text = document.createTextNode(currentNode.getAttribute("data-tabname"));
			nodeButton.appendChild(text);
			document.body.insertBefore(nodeButton, element);
		}
	}
	var divs = document.querySelectorAll("#wrapper div");
	divs[0].style.display = "block";
	var buttons = document.querySelectorAll("button");
	for (var i = 0; i < buttons.length; i++) {
		(function(i) {
			buttons[i].addEventListener("click", function() {
			for (var j = 0; j < buttons.length; j++) {
				buttons[j].style.background = "initial";
			}
			this.style.background = "orange";
			for (var j = 0; j < divs.length; j++) {
				divs[j].style.display = "none";
			}
			divs[i].style.display = "block";
		});
		}(i));
		
	}
}