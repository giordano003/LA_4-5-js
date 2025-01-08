// Hash function to generate an index for the customer name
function hashFunction(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    return hash % 5;      // We are using a fixed size of 5 for the hash table
}

// Initialize the hash table
let hashTable = new Array(5).fill(null);

// Function to add a customer to the hash table
function addCustomer(name) {
    const index = hashFunction(name);
    if (hashTable[index] === null) {
        hashTable[index] = name;
        console.log(`Customer ${name} added at position ${index + 1}`);
    } else {
        console.log(`Collision occurred! Cannot add ${name} at position ${index + 1}`);
    }
}

// Function to service a customer by their number
function serviceCustomer(number) {
    const index = number - 1; // Convert to zero-based index
    if (index >= 0 && index < hashTable.length) {
        if (hashTable[index] !== null) {
            console.log(`Servicing customer: ${hashTable[index]}`);
            hashTable[index] = null; // Remove the customer from the queue
        } else {
            console.log(`No customer at position ${number}`);
        }
    } else {
        console.log(`Invalid number! Please enter a number between 1 and ${hashTable.length}`);
    }
}

// Main program
function main() {
    // Adding customers
    addCustomer("Elaine");
    addCustomer("Althea");
    addCustomer("Angelo");
    addCustomer("Lito");
    addCustomer("Engelbert");

    // Display the initial hash table
    console.log("Initial Hash Table:", hashTable);

    // Service customers
    for (let i = 1; i <= 5; i++) {
        const number = parseInt(prompt(`Enter the number to be serviced (1-5):`));
        serviceCustomer(number);
        console.log("Updated Hash Table:", hashTable);
    }
}

// Start the program
main();