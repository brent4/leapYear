console.log("JavaScript is Working!");
// let hardWork = true;
// let goodStudyMethods = true;
// let goodJobSearchMethods = true;
// if (hardWork === goodStudyMethods && hardWork === goodJobSearchMethods && hardWork === true) {
//     console.log("Great new career this year!")
// }

// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your number is less than 0.5")
// };
// console.log("Random = " + random);

// if (random >= 0.5) {
//     console.log("Your number is greater than 0.5")
// }

// let random = Math.random();
// if (random < 0.5) {
//     console.log(`   You flipped heads`)
// } else if (random >= 0.5) {
//     console.log("You flipped tails")
// };

// console.log(random);

// bhv You can chain as many else if's in here as you would like.

// let healthPoints = 18;
// if (healthPoints < 1) { console.log(`    You are dead`) } else if (healthPoints < 10) { console.log(`You are very sick`) } else if (healthPoints < 20) { console.log(`You are getting better`) }

// console.log("healthPoints = " + healthPoints);

// bhv Note that the second and onward bits of code never run if the first statement was true.

// let grade = 55;
// if (grade > 90) {
//     console.log("Good Work")
// } else if (grade > 70) { console.log("Do better next time.") } else { console.log(`Better study a lot harder buddy!`) };

// bhv the else is a catch all term and goes directly to curly brackets.

// bhv Grading project for Moeen
// let grade = 95;
// if (grade <= 49) { console.log("Your grade is an F") } else if (grade <= 59) { console.log("Your grade is a D") } else if (grade <= 69) { console.log("Your grade is a C") } else if (grade <= 79) { console.log("Your grade is a B") } else if (grade <= 89) { console.log("Your grade is a A") } else if (grade <= 100) { console.log("Your grade is an A+") };

// bhv Looks like it works.

// `Now is the time ${Do math in here} to come to the aid`;
// bhv The above is a template literal.

// const password = prompt("Please enter a 6+ character password.");

// if (password.length >= 6) {
//     if (password.indexOf(" ") === -1) {
//         console.log("Valid Password")
//     } else {
//         console.log("Your password cannot contain spaces!")
//     }
// } else {
//     console.log("Your password must have 6+ characters.")
// };

// console.log(password.length);

// bhv  This code is not quite right because it is printing both error messages when it 
// should only print one.

// const userInput = prompt("Enter Something");

// // if (userInput) { console.log("Truthy") } else {
// //     console.log("Falsy")
// // };

// //bhv  The if (userInput) statement simply is checking to see if something is there. If it isn't there, then 
// //it will return falsy.

// true && true
//     // bhv If either side becomes false, the entire thing is false.

// true || false
//     // bhv the above evaluates to true.

// false || false
//     //bhv the above evaluates to false.

// if (age >= 0 && < 5 || age > 65) { console.log("You get in for free!") }

// !false
// //bhv this returns true.
//     !(1 === 1)
// returns false.
// let days = ['Monday', 'Tuesday', 'Wednesday'];
// // bhv if I type days.length, I get 3.
// console.log(days.length);


// leaderboard[1] = "Luna";
// leaderboard[3] = "Draco";

// planets.shift();
// planets.unshift('Mercury');
// planets.push('Saturn');


// airplaneSeats[3].splice(1, 1, "Hugo");

// const product = {
//     name: 'Gummy Bears',
//     inStock: true,
//     price: 1.99,
//     flavors: ['grape', 'apple', 'cherry']
// }


// let fullAddress = restaurant.address + ", " + restaurant.city + ", " + restaurant.state + " " + restaurant.zipcode;



let year = 2000;
if ((year % 4 === 0) && (year % 100 !== 0)) {
    console.log(year + ' is a leap year.')
} else if ((year % 100 === 0) && (year % 400 === 0) && (year % 4 === 0)) {
    console.log(year + ' is a leap year.')
} else { console.log(year + ' is NOT a leap year') };

This was fun!

    // Take three parameters age, sex(M or F), marital status(Y or N) and then using following
    // rules print their place of service.
    // if employee is female, then she will work only in urban areas.

    // if employee is a male and age is in between 20 to 40 then he may work in anywhere

    // if employee is male and age is in between 40 t0 60 then he will work in urban areas only.

    // And any other input of age should print "ERROR".

    // let age = 25;
    // let isMale = false;
    // // This program assumes that everyone is either male or female and that 
    // //if they are not male they are female.  I have a neice who thinks she's a boy.
    // let isMarried = true;
    // //maritial status is not checked for in these instructions.
    // //place of service is defined as 'anywhere' or 'urban only.
    // //age below 20 or above 60 should console.log 'ERROR'.

    // if (age < 20 || age > 60) {
    //     console.log('ERROR')
    // } else if ((isMale === false) || ((isMale === true) && (age >= 40))) {
    //     console.log('Place of service -- Urban only')
    // } else if ((isMale === true) && (age <= 40)) {
    //     console.log('Place of service -- Anywhere')
    // }

    // console.log('Age is ' + age);

    // // console.log('Is this a Pakistani dating game?')


    // for (i = 0; i <= people.length - 1; i++) {
    //     console.log(`${i + 1}`, " | ",
    //         people[i].toUpperCase());
    // }

    // for (let phrase = 1; phrase <= 6; phrase++) {
    //     console.log('"Da ba dee da ba daa"');
    // }

    // bhv you can nest one loop inside another loop by inserting the 
    // second for loop before the final closing }

    // for (let i = 1; i <= 10; i++) {
    //     console.log("Your outer for loop for index" + (i))
    //     for (let j = 1; j <= 3; j++) {
    //         console.log("   Your inner loop")
    //     }
    // }

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:

for (const bob of numbers) {
    console.log(bob * bob)
}