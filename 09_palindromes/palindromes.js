const palindromes = function (string) {
    start = 0;
    end = string.length - 1;
    while (start !== end){
        if (!(/[a-zA-Z]/).test(string[start])){
            start += 1;
            continue;
        }
        if (!(/[a-zA-Z]/).test(string[end])){
            end -= 1;
            continue;
        }
        
        if (string[start].toLowerCase() != string[end].toLowerCase()){
            return false;
        }

        start += 1
        end -= 1
    }

    return true;

};

// Do not edit below this line
module.exports = palindromes;
