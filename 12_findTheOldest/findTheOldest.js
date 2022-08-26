const findTheOldest = function(obj) {
    let nme;
    let age = 0;

    for (prop in obj){
        if (! ("yearOfDeath" in obj[prop])){
            if (2022 - obj[prop].yearOfBirth > age){
                nme = obj[prop].name;
                age = 2022 - obj[prop].yearOfBirth;
            }
        }
        if (obj[prop].yearOfDeath - obj[prop].yearOfBirth > age){
            nme = obj[prop].name;
            age = obj[prop].yearOfDeath - obj[prop].yearOfBirth;
        }
    }

    ans = {
        name: nme
    };
    return ans;
};

// Do not edit below this line
module.exports = findTheOldest;
