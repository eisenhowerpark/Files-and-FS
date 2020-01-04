var fs = require('fs');
// fs is a module built into Node.JS that deals with the file system.

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf-8');
// fs.readFileSync is a SYNCHRONOUS property method upon the fs object which will force the JS engine to
// wait until this buffer is filled with data before moving onto the next line of code.
// utf-8 is default and it is not necessary to name it here - it's included for illustrative purposes.

console.log(greet);
// Prints Hello world! greeting contained in the greet.txt file.

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf-8', // fs.readFile is an ASYNCHRONOUS property method on fs.
function(err, data) {
// This is an "error-first callback", which is a callback which takes an error as its first parameter.
// Including "utf8" as a parameter here converts the buffer to a string, then returns that string.
    console.log(data); // prints a buffer array for "Hello world!" from the greet.txt doc.
    
});
// This is a standard that tells us in which order to place our parameters for our callbacks.

console.log('Done!');
// Notice that "Done!" is printed between the two "Hello world!" prints.
// This is because this console.log took less time to process than the fs.readFile method.
// That is allowed because, in this instance, we used an ASYNCHRONOUS method, fs.readFile.