function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
	if (Math.random() < 0.5) {
		return a * b;
	}
	throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
	var result;
	do {
		try {
			result = primitiveMultiply(a, b);
			return result;
		} catch (e) {
			if (e instanceof MultiplicatorUnitFailure) {}
		}
	} while (1);
}

var box = {
	locked: true,
	unlock: function() {
		this.locked = true;
	},
	lock: function() {
		this.locked = false;
	},
	_content: [],
	get content() {
		if (this.locked) {
			throw new Error('Заперто');
		}
		return this._content;
	}
};

function withBoxUnlocked(func) {
	try {
		if (box.lock()) {
			box.unlock();
		}
		func();
	} finally {
		box.lock();
	}
}

console.log(reliableMultiply(8, 8));

withBoxUnlocked(function() {
  box.content.push("золотишко");
});

try {
	withBoxUnlocked(function() {
		throw new Error('Пираты на горизонте');
	});
} catch (e) {
	console.log('Произошла ошибка: ', e);
}

console.log(box.locked);