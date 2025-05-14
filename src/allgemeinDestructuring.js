console.clear()

const minAllowedAge = 18;

/* 
ZIEL : überprüft Alter. Falls der User alt genug ist, dann wird eine Nachricth zurückgeben, falls nicht, eine andere Nachricht
*/

const canEnterClub = (age) => {
  if (!age || typeof age !== "number") {
    /* was passiert | was sollte die Funktion tun, falls der Alter unbekannt ist */
    return "please get an id";
  }
  if (age >= minAllowedAge) {
    return "You can enter club";
  } else {
    return "you can't enter club";
  }
};

const user1 = {
  firstName: "Anton",
  lastName: "Wagner",
  age: 17,
  address: {
    street: "Berlin Straße",
    number: "123a",
    zip: "01234a",
    city: "Mainz",
  },
};

const user2 = {
  firstName: "Berta",
  lastName: "Schäffer",
  age: 17,
  address: {
    street: "Berlin Straße",
    number: "123a",
    zip: "01234a",
    city: "Mainz",
  },
};

const user3 = {
  firstName: "Cesar",
  lastName: "Schäffer",
  address: {
    street: "Berlin Straße",
    number: "123a",
    zip: "01234a",
    city: "Mainz",
  },
};

const numbers = [1, 2, 3, 4];
const names = ["Anton", "Berta", "Cesar", "Dora", "Emil", "Friedrich"];

const { firstName } = user1;
const [firstUser, secondUser] = names;
console.log(names);
console.log(firstUser);
console.log(secondUser);
