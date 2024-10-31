# Week 2 - Advanced Typescript

## Exercises

**1: Summera två tal**

Ange typer för a och b i nedan givna funktion.

```javascript
function add(a, b) {
  return a + b;
}
```
Lösning
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

**3. Maxvärde i en lista**
Vilken typ bör numbers ha? Vad returnerar funktionen?

```javascript
function findMax(numbers) {
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

**5. Fördröjning med timeout**
Vilken typ ska ms ha, och vad returnerar funktionen i TypeScript?

```javascript
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
```

**6. Fetch data**
Hur kan du ange typen för `url` och vad returnerar funktionen för typ i TypeScript?

```javascript
async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}
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

## Workshop project

```
TO BE ANNOUNCED
Ooooh, how exciting!
```