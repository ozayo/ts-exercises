// Exercises Week 2
//https://github.com/fmw23-typescript/Week-2---Advanced-Typescript?tab=readme-ov-file


// Exercise 1 
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 3));


// Exercise 2
function greetUser(name: string): string { 
  return "Hello, " + name + "!";
}

// Exercise 3
//numbers bir number dizisi (number[]) olmalı ve en yüksek değeri number olarak döndürmeli.
function findMax(numbers: number[]): number {
  return Math.max(...numbers);
}

// Exercise 4
type Order = {
  id: number;
  title: string;
  items: { id: number; price: number }[];
};

function calcOrderPrice(order: Order): number {
  return order.items.reduce((total, item) => total + item.price, 0);
}

const order = {
  id: 123,
  title: "Order A",
  items: [
    { id: 7, price: 100 },
    { id: 33, price: 50 },
    { id: 982, price: 175 },
  ],
};

console.log(calcOrderPrice(order)); // Output: 325


// Exercise 5
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// usage
delay(1000).then(() => console.log("wait 1 second"));


// Exercise 6
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}
// usage
fetchData<{ name: string; age: number }>("https://api.example.com/user")
  .then((data) => console.log(data.name, data.age));



// Exercise 7
  async function saveData<T>(url: string, data: T): Promise<any> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

// usage
saveData("https://api.example.com/save", { id: 1, name: "Test" }).then((response) =>
  console.log(response)
);


// Exercise 8
type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

function getUserSummary(user: Pick<User, "id" | "name">): Pick<User, "id" | "name"> {
  return {
    id: user.id,
    name: user.name,
  };
}

const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 30,
};

console.log(getUserSummary(user)); // Output: { id: 1, name: "Alice" }

// Exercise 9
type Book = {
  title: string;
  author: string;
  year: number;
  ISBN: string;
};

function getBookInfo(book: Omit<Book, "year" | "ISBN">): Omit<Book, "year" | "ISBN"> {
  return {
    title: book.title,
    author: book.author,
  };
}

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  ISBN: "9780743273565",
};

console.log(getBookInfo(book)); // Output: { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }

// Exercise 10
type Car = {
  make: string;
  model: string;
  year: number;
  color: string;
};

function getCarDetails(car: Pick<Car, "make" | "model">): Pick<Car, "make" | "model"> {
  return {
    make: car.make,
    model: car.model,
  };
}

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "blue",
};

console.log(getCarDetails(car)); // Output: { make: "Toyota", model: "Corolla" }
