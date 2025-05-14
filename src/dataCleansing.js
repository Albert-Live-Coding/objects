/* 
die Funktion dataCleansing sort sich dafür, dass die nötige Daten mit den nötigen Format, verfügbar sind
*/

/* 
Erwartung : 

user sollte haben = {
  firstName: string,
  lastName: string,
  age: number,
  address: {
    street: string,
    number: string,
    zip: number,
    city: string,
  },
};

falls nicht, sollte die Funktion die fehlenden Werten "ersetzen"

*/

/* Eine alternative Schreibweise ohne _ ist im dataCleansing3.js vorhanden */


export const dataCleansing = ({ firstName, lastName, age, address }) => {
  const _firstName =
    !firstName || typeof firstName !== "string" ? "Unknown" : firstName;
  const _lastName =
    !lastName || typeof lastName !== "string" ? "Unknown" : lastName;
  const _age = !age || typeof age !== "number" ? 999 : age;
  const _street =
    !address?.street || typeof address.street !== "string"
      ? "Unknown Street"
      : address.street;
  const _number =
    !address?.number || typeof address.number !== "string"
      ? "AAAAA"
      : address.number;
  const _zip =
    !address?.zip || typeof address.zip !== "string" ? 99999 : address.zip;
  const _city =
    !address?.city || typeof address.city !== "string"
      ? "unknown"
      : address.city;
  return {
    firstName : _firstName,
    lastName : _lastName,
    age : _age,
    address: { _street, _number, _zip, _city },
  };
};

