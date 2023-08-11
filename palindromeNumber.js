/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let i = 1;
    let multi = 1;
    let secmult = 1;
    let holder = x;
    let catche = holder;
    let counter = 0;
    let result = 0;
    if (x < 0)
        return false;
    while (x > 0)
    {
        x = Math.floor(x/10);
        counter++;
    }
    let count = counter;
    while(--counter > 0)
    {
        multi = multi * 10;
    }
    while (count--)
    {
        result = result + (Math.floor(holder/secmult) % 10) * multi;
        // console.log((Math.floor(holder/secmult) % 10) * multi);
        secmult =secmult * 10;
        multi = Math.floor(multi/10);
    }
    // return result;
    if (result == catche)
        return true;
    else 
        return false;
};
console.log(isPalindrome(10));
// isPalindrome(10);