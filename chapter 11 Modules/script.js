var names = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]; //глобальное пространство имен

function dayName(number) {
	return names[number];
}

var dayName2 = function() {
	var names = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

	return function(number) {
		return names[number];
	};
}();

(function() {
	function square(x) {
		return x * x;
	}
	var hundreed = 100;
	console.log(square(hundreed));
})();

var weekDay = function() {
	var names = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
	return {
		name: function(number) { return names[number]; },
		number: function(number) { return names.indexOf(number); }
	};
}();

function evalAndReturnX(code) {
	eval(code);
	return x;
}

var plusOne = new Function("n", "return n + 1");
console.log(plusOne(4));

console.log(evalAndReturnX("var x = 2"));

console.log(weekDay.name(weekDay.number("Суббота")));