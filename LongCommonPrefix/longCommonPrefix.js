var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }

    let f = strs.length;
    let i = 0;
    let j = 0;
    let final = '';
    let status = 1;
    let character;
    let shortest = strs[0].length;

    for (i = 0; i < f; i++) {
        if (shortest > strs[i].length) {
            shortest = strs[i].length;
        }
    }

    for (i = 0; i < shortest; i++) {
        character = strs[0][i];
        for (j = 0; j < f; j++) {
            if (character === strs[j][i] && status) {
                continue;
            } else {
                status = 0;
                break;
            }
        }
        if (status) {
            final += character;
        } else {
            break;
        }
    }

    return final;
};

const strs = ["flower", "flow", "flight"];
const strs1 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs));  // Output: "fl"
console.log(longestCommonPrefix(strs1)); // Output: ""
