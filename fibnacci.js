function fib() {
    var arr = [];
    var value = 1;
    var count = 1;

    function nacci() {
        if (arr.length < 1) {
            arr.push(value);
        } else {
            arr.push(value);
            value = arr[count - 1] + arr[count - 2];
        }
        count++
        console.log(arr[arr.length-1]);
    }
    return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
