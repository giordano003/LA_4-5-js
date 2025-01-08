// assignment_LA5.js

// Create an object to store customer names with hash values
let customerHash = {};

// Function to add customer to hash table
function addCustomer(name) {
  let hashValue = hashFunction(name);
  customerHash[hashValue] = name;
  console.log(`Customer added: ${name} (Hash Value: ${hashValue})`);
}

// Function to service customer
function serviceCustomer(number) {
  let hashValue = number;
  if (customerHash[hashValue]) {
    let customerName = customerHash[hashValue];
    console.log(`Servicing customer: ${customerName}`);
    delete customerHash[hashValue];
    console.log(`Updated Hash Table: ${JSON.stringify(customerHash)}`);
  } else {
    console.log("Invalid customer number");
  }
}

// Hash function
function hashFunction(name) {
  let hashValue = 0;
  for (let i = 0; i < name.length; i++) {
    hashValue += name.charCodeAt(i);
  }
  return hashValue % 10; // Simple hash function that returns a value between 0 and 9
}

// Main program
while (true) {
  console.log("1. Add customer to hash table");
  console.log("2. Service customer");
  console.log("3. Exit");
  let choice = prompt("Enter your choice: ");
  switch (choice) {
    case "1":
      let name = prompt("Enter customer name: ");
      addCustomer(name);
      break;
    case "2":
      let number = parseInt(prompt("Enter customer number to service: "));
      serviceCustomer(number);
      break;
    case "3":
      console.log("Exiting program");
      break;
    default:
      console.log("Invalid choice");
  }
}