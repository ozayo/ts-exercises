// Exercises Week 2
//https://github.com/fmw23-typescript/Week-2---Advanced-Typescript?tab=readme-ov-file
// Exercise 1 
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));
// Exercise 2
function greetUser(name) {
    return "Hello, " + name + "!";
}
// Exercise 3
//numbers bir number dizisi (number[]) olmalı ve en yüksek değeri number olarak döndürmeli.
function findMax(numbers) {
    return Math.max(...numbers);
}
function calcOrderPrice(order) {
    return order.items.reduce((total, item)=>total + item.price, 0);
}
const order = {
    id: 123,
    title: "Order A",
    items: [
        {
            id: 7,
            price: 100
        },
        {
            id: 33,
            price: 50
        },
        {
            id: 982,
            price: 175
        }
    ]
};
console.log(calcOrderPrice(order)); // Output: 325
// Exercise 5
function delay(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
// usage
delay(1000).then(()=>console.log("wait 1 second"));
// Exercise 6
async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}
// usage
fetchData("https://api.example.com/user").then((data)=>console.log(data.name, data.age));
// Exercise 7
async function saveData(url, data) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return response.json();
}
// usage
saveData("https://api.example.com/save", {
    id: 1,
    name: "Test"
}).then((response)=>console.log(response));
function getUserSummary(user) {
    return {
        id: user.id,
        name: user.name
    };
}
const user = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    age: 30
};
console.log(getUserSummary(user)); // Output: { id: 1, name: "Alice" }
function getBookInfo(book) {
    return {
        title: book.title,
        author: book.author
    };
}
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    ISBN: "9780743273565"
};
console.log(getBookInfo(book)); // Output: { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
function getCarDetails(car) {
    return {
        make: car.make,
        model: car.model
    };
}
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "blue"
};
console.log(getCarDetails(car)); // Output: { make: "Toyota", model: "Corolla" }

//# sourceMappingURL=index.aa79a559.js.map
