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