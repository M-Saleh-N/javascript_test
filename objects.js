let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2015
    };
console.log(car)

car.color = "Blue";
console.log(car);

car.year = 2018;
console.log(car);

delete car.model;
console.log(car);

console.log("Brand exists: " + (car.brand != undefined));

for (let prop in car) {
    console.log(prop + ": " + car[prop]);
    }
console.log(car)

let students = [
    {name: "saleh", age: 20},
    {name: "esha", age: 18},
    {name: "vansh", age: 17}
    ];

console.log(students)

let highestAge = Math.max.apply(Math, students.map(function(o) { return o.age; }
));
console.log(highestAge);

students.push({name: "ansh", age: 22});
console.log(students);

let studentJSON = JSON.stringify(students[0]);
console.log(studentJSON);




