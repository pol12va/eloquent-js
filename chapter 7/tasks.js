function Vector(x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.plus = function(vector) {
	return new Vector(this.x + vector.x, this.y + vector.y);	
};

Vector.prototype.minus = function(vector) {
	return new Vector(this.x - vector.x, this.y - vector.y);	
};

function ArraySeq(array) {
	this.array = array;
	this.pos = -1;
}

ArraySeq.prototype.next = function() {
	this.pos += 1;
	return this.pos >= this.array.length ? false : true; 
}

ArraySeq.prototype.current = function() {
	return this.array[this.pos];
}

function RangeSeq(from, to) {
	this.to = to;
	this.pos = from - 1;
}

RangeSeq.prototype.next = function() {
	this.pos++;
	return this.pos >= this.to ? false : true;
}

RangeSeq.prototype.current = function() {
	return this.pos;
}

function logFive(seq) {
	var i;

	for (i = 0; i < 5; i++) {
		if (!seq.next()) {
			break;
		}
		console.log(seq.current());
	}
}

Object.defineProperty(Vector.prototype, 'length', {
	get: function() {
		return Math.sqrt(Math.pow(this.x - 0, 2) + Math.pow(this.y - 0, 2));
	},
	set: function(value) {
		console.log("Error during trying set length to ", value);
	}
});


function vectorTest() {
	console.log(new Vector(1, 2).plus(new Vector(2, 3)));
	console.log(new Vector(1, 2).minus(new Vector(2, 3)));
	console.log(new Vector(3, 4).length);
	new Vector(3, 4).length = 100;
}

function sequenceTest() {
	logFive(new ArraySeq([1, 2]));
	logFive(new RangeSeq(100, 1000));
}

sequenceTest();