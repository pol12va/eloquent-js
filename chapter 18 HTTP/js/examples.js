xmlResponseTest();

function simpleXMLHttpRequestTest() {
	var req = new XMLHttpRequest();

	req.open("GET", "https://www.w3schools.com/tags/ref_httpmethods.asp", true);
	req.addEventListener("load", function() {
		console.log(req.getResponseHeader("content-type"));	
	});
	req.send(null);	
}

function xmlResponseTest() {
	var req = new XMLHttpRequest();

	req.open("GET", "example/fruit.xml", false);
	req.send(null);
	console.log(req.responseXML.querySelectorAll("fruit").length);
}

function get(url) {
	return new Promise(function(succeed, fail) {
		var req = new XMLHttpRequest();
		req.open("GET", url, true);
		req.addEventListener("load", function() {
			if (req.status < 400) {
				succeed(req.responseText);
			} else {
				fail(new Error("Request failed: ") + req.statusText);
			}
		});
		req.addEventListener("error", function() {
			fail(new Error("Network error"));
		});
		req.send(null);
	});
}