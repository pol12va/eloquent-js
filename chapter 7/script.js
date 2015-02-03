function getAndSetTest() {
	var pile = {
		elements: ["скорлупа", "кожура", "червяк"],
		get height() {
			return this.elements.length;
		},
		set height(value) {
			console.log("Игнорируем попытку задать высоту ", value);
		}
	};

	console.log(pile.height);
	pile.height = 100;
	console.log(pile.height);
}

getAndSetTest();