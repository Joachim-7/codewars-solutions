function isInteresting(number, awesomePhrases) {
    if (isAwesome(number, awesomePhrases)) return 2;
    if (isAwesome(number + 1, awesomePhrases)) return 1;
    if (isAwesome(number + 2, awesomePhrases)) return 1;
​
    return 0;
}
​
function isAwesome(number, awesomePhrases) {
    if (number < 100) return false;
​
    const str = String(number);
​
    return (
        followedByZeros(str) ||
        sameDigits(str) ||
        incrementing(str) ||
        decrementing(str) ||
        palindrome(str) ||
        awesomePhrases.includes(number)
    );
}
​
function followedByZeros(str) {
    return /^[1-9]0+$/.test(str);
}
​
function sameDigits(str) {
    return str.split('').every(digit => digit === str[0]);
}
​
function incrementing(str) {
    return '1234567890'.includes(str);
}
​
function decrementing(str) {
    return '9876543210'.includes(str);
}
​
function palindrome(str) {
    return str === str.split('').reverse().join('');
}