class myNewClass {
	constructor (name) {
		this.name = name,
		this.surename = "Grigoryan",
		this.sex = "male"
	}
	print () {
		console.log("this.name", this.name);
	}
};

module.exports = myNewClass;