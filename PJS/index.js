function fifthTask(bool) {
  if (bool === 1) {
    const fs = require("fs");

    // baza danych w formie JSON
    const jsonDatabaseText = `
        {
        "people": [
            { "id": 1, "name": "Adam niezgoda", "age": 21 },
            { "id": 2, "name": "Mieszko Walus", "age": 20 },
            { "id": 3, "name": "Andrzej Lajsota", "age": 19 },
            { "id": 3, "name": "krystyna Ruchlionski", "age": 13 }
        ]
        }
        `;

    // konwersja tekstu na obiekt
    const database = JSON.parse(jsonDatabaseText);

    // wyswietlenie osob w pętli
    console.log("Persons in database:");
    database.people.forEach((person) => {
      console.log(`id: ${person.id}, name: ${person.name}, age: ${person.age}`);
    });

    // dodawanie osoby
    const newPerson = { id: 4, name: "Alicja kombajn", age: 78 };
    database.people.push(newPerson);

    // zamiana na ciąg znakow
    const updatedJsonDatabaseText = JSON.stringify(database, null, 2);

    // wyswietlenie w formie tekstu
    console.log("Zaktualizowana baza danych w formie tekstu:");
    console.log(updatedJsonDatabaseText);

    // zapisanie zaktualizowej bazy do pliku
    fs.writeFileSync("database.json", updatedJsonDatabaseText, "utf8");
  } else if (bool == 0) {
    console.log("");
  } else {
    console.log(
      "Nieprawidłowy argument bool. Przyjmuje tylko wartości 0 lub 1."
    );
  }
}

function fourthTask(bool) {
  if (bool === 1) {
    class Lista {
      constructor() {
        this.elements = [];
      }

      dodajElement(element) {
        this.elements.push(element);
      }

      wyswietlZawartosc() {
        process.nextTick(() => {
          this.elements.forEach((element, index) => {
            console.log(`Element ${index + 1}: ${element}`);
          });
        });
      }
    }

    const lista = new Lista();
    lista.dodajElement("Pierwszy element");
    lista.dodajElement("Drugi element");
    lista.dodajElement("Trzeci element");

    // wywołanie asynchroniczne za pomocą nextTick
    lista.wyswietlZawartosc();

    console.log("Proszę czekać na wyświetlenie zawartości listy...");
  } else if (bool == 0) {
    console.log("");
  } else {
    console.log(
      "Nieprawidłowy argument bool. Przyjmuje tylko wartości 0 lub 1."
    );
  }
}
function thirdTask(bool) {
  if (bool === 1) {
    const http = require("http");

    // utworzenie servera http
    const server = http.createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Witaj na serwerze www!\n");

      //generowanie zdarzenia po otrzymaniu żądania
      server.emit("requestReceived", req);
    });

    // nasłuchiwanie na wybranym porcie
    server.listen(5500, "127.0.0.1", () => {
      console.log("Serwer działa na porcie 5500");
    });

    // nasłuchiwanie zdarzenia
    server.on("requestReceived", (req) => {
      console.log("Otrzymano żądanie HTTP");
    });

    const { EventEmitter } = require("events");
    //klasa uzytkownika ktora dziedziczy z EventEmitter
    //ma metodę changeName, która zmienia imię użytkownika i emituje zdarzenie "nameChanged" z nowym imieniem
    class User extends EventEmitter {
      constructor(name) {
        super();
        this.name = name;
      }

      changeName(newName) {
        this.name = newName;
        this.emit("nameChanged", this.name);
      }
    }

    // utworzenie uzytkownika
    const user = new User("John Doe");

    // nasłuchiwanie na zdarzenie nameChanged
    user.on("nameChanged", (newName) => {
      console.log(`Imię użytkownika zostało zmienione na: ${newName}`);
    });

    // Zmiana imienia użytkownika
    user.changeName("Jane Smith");
  } else if (bool == 0) {
    console.log("");
  } else {
    console.log(
      "Nieprawidłowy argument bool. Przyjmuje tylko wartości 0 lub 1."
    );
  }
}

function secondTask(bool) {
  if (bool === 1) {
    function displayElapsedTime() {
      const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
      console.log(`Czas od startu aplikacji: ${elapsedSeconds} sekundy`);
    }

    function displayLetterA() {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          console.log("a");
        }, i * 10);
      }
    }

    function displayAlphabetWithDelay() {
      const alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "Б",
        "ṣ",
        "ɗ",
        "Ж",
      ];
      let index = 0;
      //sprwadz czy to samogloska
      function isVowel(letter) {
        const vowels = ["a", "e", "i", "o", "u", "y"];
        return vowels.includes(letter);
      }
      const intervalId = setInterval(() => {
        if (index < alphabet.length) {
          const letter = alphabet[index];
          console.log(letter);

          if (isVowel(letter)) {
            setTimeout(() => {
              console.log("--- Przerwa 2 sekundy ---");
            }, 2000);
          }

          index++;
        } else {
          clearInterval(intervalId);
        }
      }, 500);
    }

    //const startTime = Date.now();
    //setInterval(displayElapsedTime, 1000);

    //setInterval(displayLetterA, 10);

    //displayAlphabetWithDelay();
  } else if (bool == 0) {
    console.log("");
  } else {
    console.log(
      "Nieprawidłowy argument bool. Przyjmuje tylko wartości 0 lub 1."
    );
  }
}

secondTask(0);
thirdTask(0);
fourthTask(0);
fifthTask(1);
