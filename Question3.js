
function forEach(arr,callback)
{
 for(var i =0 ; i<arr.length ; i = i+1)
 {
     callback(arr[i]);
 }
}

function sqr(a)
{
    console.log(a*a)
}

function map(arr,callback)
{
    var arr1 = [];
    for(var i =0 ; i<arr.length ; i = i+1)
    {
        arr1[i] = callback(arr[i]);
    }
    return arr1;
}

function sqr2(a)
{
    return a*a;
}

console.log("Creating foreach to print squares of each element of the array");
var arr = [1,2,3,4,5,6];
forEach(arr,sqr);
console.log("Creating map to store squares of each element of the array");
var arr2 = [1,2,3,4,5,6];
arr3 = map(arr2,sqr2);
console.log(arr3);