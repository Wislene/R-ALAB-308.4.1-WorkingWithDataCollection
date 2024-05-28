// Part 1:

// Begin with the following task:

// - Declare a variable that stores the number of columns in each row of data within the CSV.

// - Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

// -After you have implemented the above:

// - Store your results in a two-dimensional array.
//  - Each row should be its own array, with individual entries for each column.
// - Each row should be stored in a parent array, with the heading row located at index 0.
// - Cache this two-dimensional array in a variable for later use.

//  ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26

// let numberofcolumns = 4;
// let firstRow = 4;
// console.log(numberofcolumns);

Part 2:
const csvData = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;

let rows = csvData.split("\n");
console.log(rows);

 I am having an issue figuring out two arrays

//  Part 3: Transforming data

// Implement the following:
// -For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.

// -Convert these keys to all lowercase letters for consistency.
// -Store these objects in an array, in the order that they were originally listed.
// -Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

// // Part 4: 

// -Using array methods, accomplish the following tasks, in order upon the result of Part 3:
// Remove the last element from the sorted array.

// -Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// -Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }