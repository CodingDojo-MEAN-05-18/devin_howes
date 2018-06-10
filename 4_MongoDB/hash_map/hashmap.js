var hashMap = [];
// set the capacity by defining the length of the array
hashMap.length = 30;

String.prototype.hashCode = function(){
    var hash = 0;
    if(this.length == 0){
        return hash;
    }
    for(var i=0; i<this.length; i++){
        var char = this.charCodeAt(i);
        // bitwise operators are used to manipulate the string in binary
        hash = ((hash<<5)-hash) + char;
        hash &= hash;
    }
    // by the end of the loop, the hash is unique to this string
    return hash;
};

/* Now, when we need a particular string's hash code, we 
may call its hashCode method, which we just created
*/
var hashedKey = "role".hashCode();
 
/*
With the following function, we may pass the given 
hash code and the capacity of the array, and it will 
return a number within the capacity.
*/
function mod(input, div){
    return (iinput % div + div) % div;
}

// use the function to get the index position where we should store our data
var idx = mod(hashedKey, hashMap.length);