// Challenge 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function challenge1(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log("Name:", arr[i].name + ", " + "Cohort:", arr[i].cohort);
    }
}

challenge1(students)

// Challenge 2
let users = {
    employees:[
        {'first_name': 'Miguel', 'last_name': 'Jones'},
        {'first_name': 'Ernie', 'last_name': 'Bertson' },
        {'first_name': 'Nora', 'last_name': 'Lu' },
        {'first_name': 'Sally', 'last_name': 'Barkyoumb' }
    ],
    managers: [
        {'first_name': 'Lillian', 'last_name': 'Chambers' },
        {'first_name': 'Gordon', 'last_name': 'Poe' }
    ]
};

function challenge2(object) {
    for (item in object) {
        console.log(item.toUpperCase());
        for (var i = 0; i < object[item].length; i++) {
            name = object[item][i].first_name + object[item][i].last_name;
            console.log((i+1) + " - " + object[item][i].last_name + ", " + object[item][i].first_name + " - " + name.length)
        }
    }
}

challenge2(users)