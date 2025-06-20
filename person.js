let persons = {
    name: "Saleh",
    age: 19,
    gender: "male",
    address:{
        street: "street1",
        city: "Nakuru",
        country: "Kenya"
    }
    };
    
    persons.email = "saleh@gmail.com";
    console.log(persons);

    delete persons.gender;
    console.log(persons);

    console.log(persons.address.city);

    persons.phoneNumbers = ["0712345678", "0723456789"];
    console.log(persons);
    
    console.log(persons.phoneNumbers[1]);

    let car = {
        engine: {
            type: "V8",
            horsepower: 200,
            capacity: 2.0
        }
    }
    console.log(car.engine);

    students = {
        name: ["Tilak", "Ansh"],
        age: 18,
        grade: "A"
    }
    console.log(students);

    let school = {
        name: "St. Joseph's",
        location: "Nakuru",
        teachers: ["Mrs Janet", "Mr. Kipkoech", "Mr Joseph"],
    }
    console.log(school.teachers[0]);

    students.name.push("Esha");
    console.log(students.name);

    students.name.pop()
    console.log(students.name);

    let book = {
        chapters1:{
            title : "Introduction",
            pages : 200
        },
        chapters2:{
            title : "History",
            pages : 300
        },
        chapters3:{
            title : "Cat",
            pages : 303
        }
    }

    console.log(book.chapters3.title);


    let library = {
        books1: {
            title :"Harry Potter" ,
            author: "J.K"
            },
        books2: {
            title: "The Lord of the Rings",
            author: "Him"
            }
    }
    console.log(library);

    library.books = library.books || [];
    library.books.push({
        title: "Rookie",
        author: "james"
        });
        console.log(library.books);

        library.books.forEach(books1 =>
            console.log(books1.title));
   


