const sumAll = function(start, end) {
	if (typeof start !== 'number' || typeof end !== 'number' || start < 0 || end < 0){
		return "ERROR";
	}

	let ans = 0;
	low = Math.min(start, end);
	high = Math.max(start, end);
	for (let i = low; i <= high; i++){
		ans += i;
	}
	return ans;
};

// Do not edit below this line
module.exports = sumAll;
