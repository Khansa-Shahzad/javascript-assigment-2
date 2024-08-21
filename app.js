function updateDateTime() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
       hour: '2-digit',
       minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    document.getElementById('datetime').textContent = formattedDateTime;}

 //Update the date and time immediately
updateDateTime();

// Update the date and time every second
setInterval(updateDateTime, 1000);

function getCurrentMonth() {
   const now = new Date();
   const options = { month: 'long' };
   return now.toLocaleDateString('en-US', options);
}

alert('Current month is: ' + getCurrentMonth());

function getDayAbbreviation() {
    const now = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[now.getDay()];
}

alert('Today is: ' + getDayAbbreviation());

 //Ensure the code runs when the document is fully loaded
window.onload = initialize;

//Function to update date and time
function updateDateTime() {
    const now = new Date();
    const options = {
     year: 'numeric',
       month: 'long',
        day: 'numeric',
        hour: '2-digit',
       minute: '2-digit',
       second: '2-digit',
       hour12: true
    };
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    document.getElementById('datetime').textContent = formattedDateTime;
}

 //Function to get current month
function getCurrentMonth() {
   const now = new Date();
   const options = { month: 'long' };
   return now.toLocaleDateString('en-US', options);
}

// Function to get day abbreviation
function getDayAbbreviation() {
    const now = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[now.getDay()];
}

 //Run alerts and date/time updates
function initialize() {
    alert('Current month is: ' + getCurrentMonth());
    alert('Today is: ' + getDayAbbreviation());
    updateDateTime();
    setInterval(updateDateTime, 1000);
}

function checkFunDay() {
    const now = new Date();
    const day = now.getDay();
    const messageElement = document.getElementById('message');

     //6 is Saturday, 0 is Sunday
    if (day === 6 || day === 0) {
        messageElement.textContent = "It’s Fun day";
   } else {
        messageElement.textContent = "Have a great day!";
    }
}

function checkFunDay() {
    const now = new Date();
    const day = now.getDay();

     //6 is Saturday, 0 is Sunday
    if (day === 6 || day === 0) {
        alert("It’s Fun day");
    }
}

// Run the function when the page loads
window.onload = checkFunDay;

function checkDayOfMonth() {
   const now = new Date();
    const dayOfMonth = now.getDate(); // Get the current day of the month

    if (dayOfMonth < 16) {
        alert("First fifteen days of the month");
    } else {
        alert("Last days of the month");
    }
}

function calculateMinutesSinceEpoch() {
    // Create a Date object for the current time
   const now = new Date();
    
    // Create a Date object for the Unix epoch (midnight, Jan 1, 1970)
   const epoch = new Date(0);
    
    // Calculate the difference in milliseconds
    const millisecondsSinceEpoch = now - epoch;
    
    // Convert milliseconds to minutes
    const minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / (1000 * 60));
    
    // Assign the result to a variable
    const result = minutesSinceEpoch;
    
    // Display the result (e.g., in the console)
    console.log('Minutes since midnight, Jan 1, 1970:', result);
}


function checkTimeOfDay() {
   const now = new Date();
    const hour = now.getHours(); // Get the current hour (0-23)

    if (hour < 12) {
      alert("It's AM");
   } else {
        alert("It's PM");
    }
}

function createLastDayOf2020() {
    // Create a Date object for the first day of January 2021
    const firstDayOf2021 = new Date(2021, 0, 1);
    
    // Subtract one day to get the last day of December 2020
    const laterDate = new Date(firstDayOf2021 - 24 * 60 * 60 * 1000);
    
    // Display the result (e.g., in the console)
    console.log('Last day of 2020:', laterDate.toDateString());
}

// Run the function when the page loads
window.onload = createLastDayOf2020;


function daysSinceRamadan() {
    // Create a Date object for June 18, 2015 (1st Ramadan)
    const ramadanStart = new Date(2015, 5, 18); // Months are 0-indexed in JavaScript

    // Create a Date object for the current date
   const today = new Date();

    // Calculate the difference in milliseconds
   const timeDifference = today - ramadanStart;

    // Convert milliseconds to days
    const daysPast = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Alert the number of days past
    alert('Number of days past since 1st Ramadan (June 18, 2015): ' + daysPast);
}

// Run the function when the page loads
window.onload = daysSinceRamadan;

function displayElapsedSeconds() {
    // Reference date (for example, today)
    const referenceDate = new Date();

    // Beginning of 2015
    const startOf2015 = new Date(2015, 0, 1); // January is 0

    // Calculate the difference in milliseconds
    const timeDifference = referenceDate - startOf2015;

    // Convert milliseconds to seconds
   const secondsElapsed = Math.floor(timeDifference / 1000);

    // Display the result in the HTML element
    document.getElementById('elapsed-time').textContent = 
        `Seconds elapsed between January 1, 2015 and now: ${secondsElapsed}`;
}

// Run the function when the page loads
window.onload = displayElapsedSeconds;

function updateDateObject() {
    // Create a Date object for the current date and time
    const now = new Date();
    
    // Extract the hours
   const hours = now.getHours();
   console.log('Current hour:', hours); // Log current hour for debugging

    // Reset the date object an hour ahead
    now.setHours(hours + 1);

    // Display the updated date object
    document.getElementById('datetime').textContent = 'Updated Date and Time: ' + now.toString();
}

 //Run the function when the page loads
window.onload = updateDateObject;


function showDate100YearsBack() {
     //Create a Date object for the current date and time
   const now = new Date();

    // Create a Date object for the date 100 years back
    const pastDate = new Date(now);
    pastDate.setFullYear(now.getFullYear() - 100);

    // Show the date in an alert box
   alert('Date 100 years back: ' + pastDate.toDateString());
}

// Run the function when the page loads
window.onload = showDate100YearsBack;

function calculateBirthYear() {
    //Ask the user for their age
    const age = prompt("Please enter your age:");

    // Check if age is a valid number
   if (age && !isNaN(age)) {
         //Calculate the birth year
       const currentYear = new Date().getFullYear();
       const birthYear = currentYear - parseInt(age, 10);

        // Display the birth year in the browser
       document.getElementById('result').textContent = 
          `You were born in: ${birthYear}`;
    } else {
        // Handle invalid input
       document.getElementById('result').textContent = 
            "Please enter a valid age.";
    }


 //Run the function when the page loads
window.onload = calculateBirthYear;

function generateBill() {
    // Customer details
   const customerName = "John Doe"; // You can change this to any name
    const currentMonth = new Date().toLocaleString('default', { month: 'long' }); // Get current month name

     //Example billing details
    const unitsConsumed = 150; // Example units consumed
    const unitRate = 12.75; // Example rate per unit
    const fixedCharge = 50.00; // Example fixed charge
    const discount = 10.00; // Example discount

    // Calculate the total amount
   const totalAmount = (unitsConsumed * unitRate) + fixedCharge - discount;

    // Round off the total amount to 2 decimal places
   const roundedTotalAmount = totalAmount.toFixed(2);

    // Display the bill details
    document.getElementById('customer-name').textContent = `Customer Name: ${customerName}`;
    document.getElementById('current-month').textContent = `Current Month: ${currentMonth}`;
    document.getElementById('units-consumed').textContent = `Units Consumed: ${unitsConsumed}`;
    document.getElementById('unit-rate').textContent = `Rate per Unit: $${unitRate.toFixed(2)}`;
    document.getElementById('fixed-charge').textContent = `Fixed Charge: $${fixedCharge.toFixed(2)}`;
    document.getElementById('discount').textContent = `Discount: $${discount.toFixed(2)}`;
    document.getElementById('total-amount').textContent = `Total Amount: $${roundedTotalAmount}`;
}

// Run the function when the page loads
window.onload = generateBill;


//function generateBill() {
    // Customer details
   // const customerName = "John Doe"; // Replace with actual customer name or use input
   // const currentMonth = new Date().toLocaleString('default', { month: 'long' }); // Get current month

    // Billing details
    ///const numberOfUnits = 250; // Example number of units consumed
    //const chargesPerUnit = 15.75; // Example charges per unit
    //const netAmountPayable = numberOfUnits * chargesPerUnit;
    //const latePaymentSurcharge = 25.00; // Example late payment surcharge
    //const grossAmountPayable = netAmountPayable + latePaymentSurcharge;

    // Round amounts to 2 decimal places
    //const roundedNetAmountPayable = netAmountPayable.toFixed(2);
    //const roundedLatePaymentSurcharge = latePaymentSurcharge.toFixed(2);
   // const roundedGrossAmountPayable = grossAmountPayable.toFixed(2);

    // Display the bill details
   // document.getElementById('customer-name').textContent = `Customer Name: ${customerName}`;
   // document.getElementById('current-month').textContent = `Current Month: ${currentMonth}`;
    //document.getElementById('number-of-units').textContent = `Number of Units: ${numberOfUnits}`;
   // document.getElementById('charges-per-unit').textContent = `Charges per Unit: $${chargesPerUnit.toFixed(2)}`;
    //document.getElementById('net-amount-payable').textContent = `Net Amount Payable (within Due Date): $${roundedNetAmountPayable}`;
    //document.getElementById('late-payment-surcharge').textContent = `Late Payment Surcharge: $${roundedLatePaymentSurcharge}`;
    //document.getElementById('gross-amount-payable').textContent = `Gross Amount Payable (after Due Date): $${roundedGrossAmountPayable}`;
//}

// Run the function when the page loads
//window.onload = generateBill;

function calcArea() {
    // Get the value of the radius from the input field
    const radius = parseFloat(document.getElementById('radius').value);
    
    // Check if the radius is a valid number
    if (isNaN(radius) || radius <= 0) {
     document.getElementById('result').textContent = "Please enter a valid radius.";
     return;
    }
    
    // Calculate the area of the circle
    const area = Math.PI * Math.pow(radius, 2);
    
    // Output the result
    document.getElementById('result').textContent = `The area is ${area.toFixed(2)}`;
}

function countOccurrences(str, letter) {
   // Check if the inputs are valid
   if (typeof str !== 'string' || typeof letter !== 'string' || letter.length !== 1) {
       throw new Error('Invalid input: Please provide a string and a single letter.');
   }

   // Initialize a counter
   let count = 0;

    //Loop through the string and count occurrences of the letter
   for (let i = 0; i < str.length; i++) {
       if (str[i] === letter) {
           count++;
    }
}

   //Return the count
   return count;
}

// Example usage
//const result = countOccurrences('JSResourceS.com', 'o');
console.log(result);  // Output will be 2


function findLongestWord(sentence) {
    //Split the sentence into words using space as the delimiter
   const words = sentence.split(' ');

   // Initialize a variable to hold the longest word
   let longestWord = '';

   // Iterate over each word to find the longest one
   for (const word of words) {
       if (word.length > longestWord.length) {
           longestWord = word;
       }
   }

   // Return the longest word
   return longestWord;
}

// Example usage
const sentence = 'Web Development Tutorial';
//const result = findLongestWord(sentence);
console.log(result);  // Output will be 'Development'


function capitalizeFirstLetter(sentence) {
   // Split the sentence into words
   const words = sentence.split(' ');

   // Map through each word to capitalize the first letter
   const capitalizedWords = words.map(word => {
       if (word.length > 0) {
           // Capitalize the first letter and concatenate with the rest of the word
           return word.charAt(0).toUpperCase() + word.slice(1);
       }
       return word; // Return the word as is if it's empty
   });

   // Join the words back into a single string
   return capitalizedWords.join(' ');
}

// Example usage
//const sentence = 'the quick brown fox';
//const result = capitalizeFirstLetter(sentence);
//console.log(result);  // Output will be 'The Quick Brown Fox'

function isPalindrome(str) {
   // Remove non-alphanumeric characters and convert to lowercase
   const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

   // Reverse the cleaned string
   const reversedStr = cleanedStr.split('').reverse().join('');

   // Check if the cleaned string is equal to its reversed version
   return cleanedStr === reversedStr;
}

// Example usage
//const testString = 'Madam, in Eden, I’m Adam';
//const result = isPalindrome(testString);
//console.log(result);  // Output will be true


function calculateRectangleArea(width, height) {
   return width * height;
}
const area1 = calculateRectangleArea(5, 10);
console.log(area1);  // Output will be 50
const width = 7;
const height = 12;
const area2 = calculateRectangleArea(width, height);
console.log(area2);  // Output will be 84


function calculateHypotenuse(base, perpendicular) {
   // Inner function to calculate the square of a number
   function calculateSquare(value) {
       return value * value;
   }

   // Calculate squares of base and perpendicular
   const baseSquared = calculateSquare(base);
   const perpendicularSquared = calculateSquare(perpendicular);

   // Compute the hypotenuse using the Pythagorean theorem
   const hypotenuseSquared = baseSquared + perpendicularSquared;
   const hypotenuse = Math.sqrt(hypotenuseSquared);

   return hypotenuse;
}

function displayCounting() {
   // Get the start and end numbers from the input fields
   const start = parseInt(document.getElementById('startNumber').value, 10);
   const end = parseInt(document.getElementById('endNumber').value, 10);
   
   // Check if the end number is greater than or equal to the start number
   if (end < start) {
       document.getElementById('countingDisplay').innerHTML = 'End number must be greater than or equal to start number.';
       return;
   }
   
   // Generate the counting sequence
   let result = '';
   for (let i = start; i <= end; i++) {
       result += i + ' ';
   }
   
   // Display the result in the designated div
   document.getElementById('countingDisplay').innerHTML = result.trim();
}

function factorial(n) {
   if (n < 0) {
       throw new Error('Factorial is not defined for negative numbers.');
   }
   let result = 1;
   for (let i = 1; i <= n; i++) {
       result *= i;
   }
   return result;
}

// Example usage
console.log(factorial(5));  // Output will be 120


function square(number) {
   return number * number;
}

// Example usage
console.log(square(5));  // Output will be 25
console.log(square(-3)); // Output will be 9
console.log(square(0));  // Output will be 0


function compute() {
   // Get values from input fields
   const num1 = parseFloat(document.getElementById('num1').value);
   const num2 = parseFloat(document.getElementById('num2').value);
   const operator = document.getElementById('operator').value;
   
   // Calculate the result based on the operator
   let result;
   switch (operator) {
       case '+':
           result = num1 + num2;
           break;
       case '-':
           result = num1 - num2;
           break;
       case '*':
           result = num1 * num2;
           break;
       case '/':
           if (num2 === 0) {
               result = 'Error: Division by zero';
           } else {
               result = num1 / num2;
           }
           break;
       default:
           result = 'Invalid operator';
   }

   // Display the result
   document.getElementById('result').innerText = `Result: ${result}`;
}

function addNumbers() {
   // Get values from input fields
   const num1 = parseFloat(document.getElementById('number1').value);
   const num2 = parseFloat(document.getElementById('number2').value);
   
   // Calculate the sum
   const sum = num1 + num2;
   
   // Display the result
   document.getElementById('result').innerText = `Sum: ${sum}`;
}


function greetUser() {
   // Get values from input fields
   const firstName = document.getElementById('firstName').value;
   const lastName = document.getElementById('lastName').value;
   
   // Generate the full name
   const fullName = `${firstName} ${lastName}`;
   
   // Create a greeting message
   const greetingMessage = `Hello, ${fullName}!`;
   
   // Display the greeting message
   document.getElementById('greeting').innerText = greetingMessage;
}




