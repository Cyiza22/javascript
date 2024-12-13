// Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'
function
myFunction(a, n){
    return a[n-1]
}
console.log(myFunction([1,2,3,4,5], 2))
// Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result

function myFunction(a) {
    return a.splice(a.splice(0,3));
}
console.log(myFunction(1,2,3,4,5))