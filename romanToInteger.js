var romanToInt = function(s) {
    let i = 0;
    let sum = 0;
    let len = s.length;
    const romanMap = {
        'I':  1,
        'V':  5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    while (i < len) {
        if (i + 1 < len && romanMap[s[i]] < romanMap[s[i + 1]]) {
            sum += romanMap[s[i + 1]] - romanMap[s[i]];
            i += 2;
        } else {
            sum += romanMap[s[i]];
            i++;
        }
    }
    return sum;
};

console.log(romanToInt("III"));      // Output: 3
console.log(romanToInt("LVIII"));    // Output: 58
console.log(romanToInt("MCMXCIV"));  // Output: 1994
