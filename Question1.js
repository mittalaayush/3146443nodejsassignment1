
var date = Date.now();
var n = 2000;

console.log("Start");

setTimeoutSync(callback, n);

function callback(i){
    console.log("call number " +i );
}

function setTimeoutSync(callback, n) {

    console.log("In setTimeoutSync function");
    for(var i=0;i<3;++i)
    {
        while(Date.now()<date+n){}
        callback(i);
        date+=n;
    }
}
console.log("end")