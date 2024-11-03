# Steg 2 - Övningar

## Övning 1: Typade Funktioner Uppgift:

### Enkel Funktion:

Skriv en funktion calculateArea som tar emot width och height som number och returnerar area som number. Typa både argument och returvärde.

**Lösning:**
```ts
function calculateArea(width: number, height: number): number {
  return width * height;
}
// sample uses
console.log(calculateArea(5, 10)); // Output: 50
```
> This function multiplies the `width` and `height` values ​​and returns the area. We set both the parameters and the return value to `number`.

### Funktion med Optional Parameter:

Skriv en funktion greet som tar emot name som string och en optional title som string. Returnera en hälsning som inkluderar titeln om den finns.

Mål: Förstå hur man deklarerar funktioner med typade argument och returvärden, inklusive optionala parametrar.

**Lösning:**
```ts
function greet(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}!`;
  }
  return `Hello, ${name}!`;
}

// Örnek kullanım
console.log(greet("Özay", "Dr.")); // Çıktı: Hello, Dr. Özay!
console.log(greet("Özay"));        // Çıktı: Hello, Özay!
```

> `title` is defined as optional (with `?` sign). If `title` is not given, it will greet with just the name. If `title` is present, it is added to the message.

## Övning 2: Generics Uppgift:

Mål: Lära sig hur generics kan användas för att skapa återanvändbar och typoberoende kod.

### Generisk Funktion:

Skapa en generisk funktion identity(arg: T): T som returnerar argumentet som tas emot. 
Använd funktionen med olika typer.

**Lösning:**

```ts
function identity<T>(arg: T): T {
  return arg;
}

// Example usage with different types

// Using identity with a number
console.log(identity<number>(42)); // Output: 42

// Using identity with a string
console.log(identity<string>("Hello")); // Output: Hello

// Using identity with an array of numbers
console.log(identity<number[]>([1, 2, 3])); // Output: [1, 2, 3]
```

> The function `identity` takes a generic type T. This allows the function to work with any type.

> When we call identity with `<number>`, `<string>,` or `<number[]>`, TypeScript infers the type and ensures the return type matches the input type.

### Generisk Klass

Implementera en generisk klass DataStorage med metoder för att lägga till, ta bort och hämta data.

```ts
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  removeItem(item: T): void {
    this.data = this.data.filter((i) => i !== item);
  }

  getItems(): T[] {
    return [...this.data];
  }
}

// Example usage with different types

// Using DataStorage with strings
const textStorage = new DataStorage<string>();
textStorage.addItem("Hello");
textStorage.addItem("World");
textStorage.removeItem("Hello");
console.log(textStorage.getItems()); // Output: ["World"]

// Using DataStorage with numbers
const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.removeItem(10);
console.log(numberStorage.getItems()); // Output: [20]
```

In this example;

- The `DataStorage` class takes a generic type `T`, making it flexible to store data of any type (e.g., strings, numbers).

- The `addItem` method adds an item of type `T` to the internal `data` array.

- The `removeItem` method filters out a specific item of type `T`.

- The `getItems` method returns a copy of the `data` array.

## Övning 3: Utility Types

Mål: Förstå och tillämpa TypeScripts utility types för att manipulera och skapa nya typer.

### Använda Partial

Givet ett interface User: interface User { id: number; name: string; email: string; }

Skapa en typ PartialUser som gör alla User-egenskaper optionala:

**Lösning:**

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;

// Example usage
const user1: PartialUser = {
  name: "Alice",
}; // Only name is provided, which is valid due to Partial
```
In this example:

- The `PartialUser` type makes all properties of `User` optional.
- When using `PartialUser`, we can create objects with some or none of the properties of `User`.

### Använda Omit

Skapa en typ UserWithoutEmail som är samma som User men utan email-egenskapen.

**Lösning**

```ts
type UserWithoutEmail = Omit<User, "email">;

// Example usage
const user2: UserWithoutEmail = {
  id: 1,
  name: "Bob",
}; // No email field is required due to Omit
```
In this example:

- The `UserWithoutEmail` type includes only the `id` and `name` properties, omitting `email`.
- When creating `UserWithoutEmail` objects, `email` is no longer required or allowed.

### Använda Record

Skapa en typ PhoneBook som mappar från en persons namn (string) till deras telefonnummer (number)

```ts
type PhoneBook = Record<string, number>;

// Example usage
const contacts: PhoneBook = {
  Alice: 123456789,
  Bob: 987654321,
};

console.log(contacts); // Output: { Alice: 123456789, Bob: 987654321 }
```
In this example:

- The `PhoneBook` type maps `string` keys (names) to `number` values (phone numbers).
- We can add as many name-number pairs as we need, and TypeScript will enforce the `number` type for values.

## Övning 4: Type Assertions

Mål: Förstå hur och när man använder type assertions, och vilka risker som kan vara involverade.

### Enkel Type Assertion

Givet en variabel let someValue: unknown = "Hello World";, använd type assertion för att behandla den som en string och anropa someValue.length.

**Lösning**

```ts
let someValue: unknown = "Hello World";

// Type assertion to treat someValue as a string
let strLength: number = (someValue as string).length;

console.log(strLength); // Output: 11
```

In this example:

- `someValue` is initially of type `unknown`, meaning TypeScript doesn’t know its specific type.
- By using `someValue as string`, we assert that `someValue` is of type `string`, allowing us to access `string` properties like `length`.
- `strLength` now holds the length of the string.


### Dubbel Type Assertion

Konvertera en string till number via unknown

```ts
let someString: string = "123";
let someNumber: number = someString as unknown as number;

console.log(someNumber); // Output: 123, but treated as a number
```
In this example:

- We start with someString as a string type.
- Using a double type assertion, we first cast it to unknown, then to number.
- This is risky and generally discouraged, as it can lead to unexpected results if someString doesn’t represent a valid number.

## Övning 5: Typade Asynkrona Funktioner och Promises

Mål: Lära sig att typa asynkrona funktioner och hantera Promise-objekt i TypeScript.

### Asynkron Funktion med Promise

Skriv en funktion fetchNumber som returnerar en Promise som resolver till talet 42 efter 2 sekunder.

```ts
function fetchNumber(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(42);
    }, 2000);
  });
}

// Usage
fetchNumber().then((number) => console.log(number)); // Output after 2 seconds: 42
```
In this example:

- fetchNumber returns a Promise<number>, which means the function will eventually resolve with a number.
- After a 2-second delay (simulated with setTimeout), the Promise resolves with the value 42.
- Using .then(), we log the result once the Promise resolves.

### Använda async/await

Skriv en asynkron funktion getAnswer som använder await för att hämta värdet från fetchNumber och loggar resultatet.

```ts
async function getAnswer(): Promise<void> {
  const result = await fetchNumber();
  console.log(result);
}

// Usage
getAnswer(); // Output after 2 seconds: 42

```

In this example:

- getAnswer is an asynchronous function (async) that waits for fetchNumber to complete.
- By using await, getAnswer pauses until fetchNumber resolves and then logs the result.
- The function returns Promise<void>, as it doesn’t return any specific value but simply logs the result.


## Övning 6: Typade API-anrop

Mål: Praktisera att göra typade API-anrop och hantera asynkron data.

### Definiera Gränssnitt för API-svar

Använd en publik API, till exempel JSONPlaceholder: https://jsonplaceholder.typicode.com/posts/1

Definiera ett interface Post som matchar strukturen av data som returneras.

**Lösning:**

```json
{
  "userId": 1,
  "id": 1,
  "title": "Sample Title",
  "body": "Sample Body"
}
```

```ts
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
```

In this example:

- The Post interface defines the structure of the data we expect from the API. It includes userId, id, title, and body, each with appropriate types.

### Gör ett API-anrop:

Skriv en asynkron funktion getPost som hämtar data från API och returnerar ett Post-objekt.

**Lösning:**

```ts
async function getPost(postId: number): Promise<Post> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data: Post = await response.json();
  return data;
}

// Usage
getPost(1).then((post) => console.log(post));
```

In this example:

- getPost is an asynchronous function that takes a postId parameter and returns a Promise<Post>.
- It fetches data from the JSONPlaceholder API, and TypeScript infers the data variable as type Post.
- The returned data object conforms to the Post interface, ensuring type safety.