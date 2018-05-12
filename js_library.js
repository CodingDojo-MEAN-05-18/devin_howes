function each(array, callback) {
    for (let index = 0; index < array.length; index++) {
        callback(array[index], index);
    }
}

const stringArray = ['1', 'cat', '2', '3', '4', '5', '6', '7', '8', 'dog'];

// anonymous function
each(stringArray, function(element, index) {
    console.log(`element: ${ element } and index: ${ index }`)
});

// non-anonymous (named function)
each(stringArray, listItem);

function listItem(item) {
    console.log(item);
}


var _ = {
    map: function (array, callback) {
        const results = [];

        for (let index = 0; index < array.length; index++) {
            results.push(callback(array[index], index));
        }

        return results;
    },
    reduce: function (array, callback, memo) {
        const results = [].concat(array);

        if (memo === undefined) {
            memo = results.pop();
        }

        for (let index = 0; index < array.length; index++) {
            memo = callback(memo, array[index], index);
        }
        return memo;
    },
    find: function (array, callback) {
        for (let index = 0; index < array.length; index++) {
            if (callback(array[index], index)) {
                return array[index];
            }
        }
    },
    filter: function (array, callback) {
        const results = [];

        for (let index = 0; index < array.length; index++) {
            if (callback(array[index], index)) {
                results.push(array[index]);
            }
        }

        return results;
    },
    reject: function (array, callback) {
        const results = [];

        for (let index = 0; index < array.length; index++) {
            if (!callback(array[index], index)) {
                results.push(array[index]);
            }
        }

        return results;
    }
}

// call map function and change the array to integers from strings
let results = _.map(stringArray, function(element, index) {
    return parseInt(element, 10);
})
console.log(results);

// call filter function to filter out not a number results.
results = _.filter(results, function (element) {
    return !isNaN(element);
});
console.log(results);

// call reject instead of filter to reject all non number results.
results = _.reject(results, function(element) {
    return isNaN(element);
});
console.log(results);

// call find 4 to find within the array
results = _.find(results, function(element){
    return element === 4;
});
console.log(results);

// call reduce to reduce the array to a single value.
results = _.reduce(results, add);

function add(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(results);
