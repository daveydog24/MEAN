// let students = [
//     {name: 'Remy', cohort: 'Jan'},
//     {name: 'Genevieve', cohort: 'March'},
//     {name: 'Chuck', cohort: 'Jan'},
//     {name: 'Osmund', cohort: 'June'},
//     {name: 'Nikki', cohort: 'June'},
//     {name: 'Boris', cohort: 'June'}
// ];

// for (var element of students){
//     console.log("Name: " + element.name + ", Cohort: " + element.cohort);
// }
let users = {
    employees: [
        {'first_name': 'Miguel', 'last_name': 'Jones'},
        {'first_name': 'Ernie', 'last_name': 'Bertson'},
        {'first_name': 'Nora', 'last_name': 'Lu'},
        {'first_name': 'Sally', 'last_name': 'Barkyoumb'}
    ],
    managers: [
       {'first_name': 'Lillian', 'last_name': 'Chambers'},
       {'first_name': 'Gordon', 'last_name': 'Poe'}
    ]
};

console.log("EMPLOYEES")
for (let [index, element] of users.employees.entries()){
    let length = ((element.last_name + element.first_name).length)
    console.log(index + 1 + " - " + element.last_name + ", " + element.first_name + " - " + length)
}
console.log("")
console.log("MANAGERS")
for (let [index, element] of users.managers.entries()){
    let length = ((element.last_name + element.first_name).length)
    console.log(index + 1 + " - " + element.last_name + ", " + element.first_name + " - " + length)
}