const ftoc = function(degree) {
	ans = ((degree-32) * (5/9));
	if (Number.isInteger(ans)){
		return ans;
	}
	return Number(ans.toFixed(1))
};

const ctof = function(degree) {
	ans = (degree*(9/5)+32);
	if (Number.isInteger(ans)){
		return ans;
	}
	return Number(ans.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
