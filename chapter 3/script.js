var trianglePrint = function() {
	var i,
		sharp = sharpStr = '#',
		sharpStr,
		SIZE = 7;

	for (i = 0; i < SIZE; i++) {
		console.log(sharpStr);
		sharpStr += sharp; 
	}
};

var fizzBuzzPrint = function() {
	var i,
		SIZE = 100;

	for (i = 1; i < SIZE; i++) {
		if (i % 3 === 0) {
			if (i % 5 === 0) {
				console.log('FizzBuzz');
			} else {
				console.log('Fizz');
			}
		} else if (i % 5 === 0) {
			console.log('Buzz');
		} else {			
			console.log(i);	
		}
	}
}

var chessDeskPrint = function() {
	var deskSize, i, j, picesCount,
		linePart, line;
	do {
		deskSize = prompt("Enter desk size");
		if (deskSize % 2 !== 0) {
			alert("Incorrect desk size, please try again");	
		} else {
			break;
		}		
	} while(1);

	for (i = 0; i < deskSize; i++) {
		picesCount = (deskSize - deskSize % 2) / 2;
		line = '';
		if (i % 2 === 0) {
			linePart = '# ';
		} else {
			linePart = ' #';
		}
		line += linePart;
		for (j = 0; j < picesCount; j++) {
			line += linePart;
		}
		console.log(line + "\n");
	}
}

chessDeskPrint();