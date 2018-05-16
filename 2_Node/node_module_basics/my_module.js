// ES5 Version:
module.exports = function(){
    return {
        greet: function(){
            console.log("we are now using a module!");
        },
        add: function(num1, num2){
            console.log('the sum is:', num1 + num2);
        }
    };
};

/* ES6 Version:
export default function () {
    return {
        greet: function () {
            console.log("we are now using a module!");
        },
        add: function (num1, num2) {
            console.log('the sum is:', num1 + num2);
        }
    };
}
*/