module.exports = function(){
    return {
        add: function(num1, num2) {
            console.log('Sum is equal to:', num1 + num2);
        },
        multiply: function(num1, num2) {
            console.log('Total is equal to:', num1 * num2);
        },
        square: function(num) {
            console.log(num, 'squared is equal to:', num^2);
        },
        random: function(num1, num2) {
            var random = Math.floor((Math.random() * 35) + 1);;
            console.log('Random number between', num1, 'and', num2, 'is', random);
        }
    }
};