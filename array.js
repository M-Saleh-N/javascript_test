const fruits = ["mango","orange","apple","banana", "grapes"]
console.log(fruits[0])

fruits.push("pineapple")
console.log(fruits)

fruits.shift()
console.log(fruits)

fruits.sort()
console.log(fruits)

fruits.reverse()
console.log(fruits)

console.log(fruits.includes("kiwi"))

console.log(fruits.length)

fruits.forEach(function(i) {
    console.log(i.toUpperCase())
})

