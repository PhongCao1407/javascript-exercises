const removeFromArray = function() {
	args = Array.from(arguments);
	arr = args[0]

	for (let i = 1; i < args.length; i++){
		if (arr.includes(args[i])){
			arr.splice(arr.indexOf(args[i]), 1);
		}
	}
	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
