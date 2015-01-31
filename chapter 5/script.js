var range = function(start, end, step) {
	var i, result = [];

	if (step <= 0 && start <= end
	 || (start > end && step > 0)) {
		console.log('Incorrect step value');
		return [];
	} 
	if (step === undefined) {
		step = 1;
	}

	if (start <= end) {
		for (i = start; i <= end; i += step) {
			result.push(i);
		}	
	} else {
		for (i = start; i >= end; i += step) {
			result.push(i);
		}	
	}

	return result;
}

var sum = function(numbers) {
	var i, result = 0;

	for (i = 0; i < numbers.length; i++) {
		result += numbers[i];
	}

	return result;
}

var reverseArray = function(array) {
	var i, newArray = [];

	for (i = array.length - 1; i >= 0; i--) {
		newArray.push(array[i]);
	}

	return newArray;
}

var reverseArrayInPlace = function(array) {
	var i, j = array.length - 1, temp,
		middleIndex = (array.length - array.length % 2) / 2;

	for (i = 0; i < middleIndex; i++) {
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
		j--;
	}

	return array;
}

var arrayToList = function(array) {
	var i, list, last, rest;

	for (i = array.length - 1; i >= 0; i--) {
		rest = { value: array[i] };
		if (i === length - 1) {
			rest.rest = null;
		} else {
			rest.rest = last;
		}
		last = rest;
	}
	
	return rest;
}

var listToArray = function(list) {
	var temp = list,
		result = [];

	do {
		if (temp !== undefined) {			
			result.push(temp.value);
			temp = temp.rest;	
		} else {
			return result;
		}
	} while (1);
}

var prepend = function(val, list) {
	var result = { value: val, rest: list };
	return result;
}

var nth = function(list, pos) {
	if (pos === 0) {
		return list.value;
	} else {
		return nth(list.rest, pos - 1);
	}
}

var deepEqual = function(obj1, obj2) {
	var result = true;
	if (typeof obj1 === typeof obj2 && typeof obj1 === 'object') {
		if (obj1 == obj2) {
			return true;
		} else {
			for (var prop in obj1) {
				result = result && deepEqual(obj1[prop], obj2[prop]) ? result : false;
			}	
		}		
	} else if (typeof obj1 === null) {
		return false;
	} else if (obj1 !== obj2)	{
		return false;
	}
	return result;
 }

console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
var obj = {here: {is: 'an'}, object: 2};
console.log(deepEqual(obj, {here: 1, object: 2}));