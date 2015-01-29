var min = function(num1, num2) {
	if (typeof num1 === 'number' && typeof num2 === 'number') {
		return num1 <= num2 ? num1 : num2;
	} else {
		console.log('Incorrect argument type');
	}
}

var isEven = function(num) {
	if (typeof num !== 'number') {
		return 'Incorrect type';
	}
	if (num < 0) {
		return 'Number should be > 0';
	}
	if (num > 1) {
		return isEven(num - 2);
	} else {
		if (num === 0) {
			return true;
		}
		if (num === 1) {
			return false;
		}	
	}
}

var countChar = function(text, charToFind) {
	var i, count = 0;
	if (typeof text !== 'string' || typeof charToFind !== 'string') {
		return 'Incorrect type';
	}
	if (text.length <= 0 || charToFind.length !== 1) {
		return 'Incorrect length';
	}
	for (i = 0; i < text.length; i++) {
		if (text.charAt(i) === charToFind) {
			count++;
		}
	}

	return count;
}

console.log(countChar('Text that exists to find some chars', 't'));
console.log(countChar('Text that exists to find some chars', 'e'));