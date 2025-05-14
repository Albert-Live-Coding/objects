/* const defaultUserValue = {
  firstName: {
    type: "string",
    value: "Unknown",
  },
}; */

export const dataCleansing2 = ({ firstName, lastName, age, address = {} }) => ({
  firstName: typeof firstName === "string" ? firstName : "Unknown",
  lastName: typeof lastName === "string" ? lastName : "Unknown",
  age: typeof age === "number" ? 999 : 0,
  address: {
    street:
      typeof address.street === "string" ? address.street : "Unknown Street",
    number: typeof address.number === "string" ? address.number : "AAAAA",
    zip: typeof address.zip === "string" ? address.zip : 99999,
    city: typeof address.city === "string" ? address.city : "unknown",
  },
});
