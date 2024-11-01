# Week 2 - Advanced Typescript

## Exercises

**1: Summera två tal**

Ange typer för a och b i nedan givna funktion.

```javascript
function add(a, b) {
  return a + b;
}
```
**Lösning 1**

```ts
// Exercise 1 
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 3));
```

**2. Hälsa användaren**
Ange typen för `name`, och funktionens retur.

```javascript
function greetUser(name) {
  return "Hello, " + name + "!";
}
```
**Lösning 2**
```ts
function greetUser(name: string): string { 
  return "Hello, " + name + "!";
}
```

**3. Maxvärde i en lista**
Vilken typ bör numbers ha? Vad returnerar funktionen?

```javascript
function findMax(numbers) {
  return Math.max(...numbers);
}
```
**Lösning 3**

```ts
function findMax(numbers: number[]): number {
  return Math.max(...numbers);
}
```

**4. Summera värdet**
Typa upp nedan funktion som summerar och returnerar totalpriset av en order.

```javascript
const order = {
  id: 123,
  title: "Order A",
  items: [
    { id: 7, price: 100 },
    { id: 33, price: 50 },
    { id: 982, price: 175 },
  ],
};

function calcOrderPrice(order) {
  // Work your magic here.
}
```
**Lösning 4**

```ts
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
```


**5. Fördröjning med timeout**
Vilken typ ska ms ha, och vad returnerar funktionen i TypeScript?

```javascript
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
```
**Lösning 5**
```ts
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// usage
delay(1000).then(() => console.log("wait 1 second"));
```

**6. Fetch data**
Hur kan du ange typen för `url` och vad returnerar funktionen för typ i TypeScript?

```javascript
async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}
```
**Lösning 6**
```ts
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}
// usage
fetchData<{ name: string; age: number }>("https://api.example.com/user")
  .then((data) => console.log(data.name, data.age));
```

**7. Mer avancered fetch**
Typa upp följande kod. Använd `generics` för `data`.

```javascript
async function saveData(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
```
**Lösning 7**
```ts
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
```

**8. Välj specifika egenskaper med Pick**
Hur kan du använda `Pick` i TypeScript för att definiera typen av resultatet i `getUserSummary`?

```javascript
const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 30,
};

function getUserSummary(user) {
  return {
    id: user.id,
    name: user.name,
  };
}
```
**Lösning 8**
```ts
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
```

**9. Uteslut specifika egenskaper med Omit**

Hur kan du använda `Omit` i TypeScript för att definiera typen av resultatet i `getBookInfo`?

```javascript
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  ISBN: "9780743273565",
};

function getBookInfo(book) {
  return {
    title: book.title,
    author: book.author,
  };
}
```
**Lösning 9**
```ts
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
```

**10. Kombinera Pick och Omit**
Hur kan du använda både `Pick` och `Omit` för att definiera typer som kan användas i `getCar`?

```javascript
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "blue",
};

function getCarDetails(car) {
  return {
    make: car.make,
    model: car.model,
  };
}
```

**Lösning 10**
```ts
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
```