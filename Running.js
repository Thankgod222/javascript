// let totalEggs = 0;
// function collectEggs() {
//      totalEggs = 6;
// //     // console.log(totalEggs)
// // }
// // console.log(totalEggs);
// // collectEggs();
// // console.log(totalEggs);

// let bird = 'scarlet macaw';
// function birdWatch() {
//     // let bird = 'green macaw';
//     console.log(bird);
// }
// birdWatch()
// // console.log(bird);
// let radius = 5;
// if (radius > 0) {
//     const pi = 3.14;
// let msg = 'HHIII'
// }
// // console.log(radius);
// for (let i = 0; i < 5; i++) {
//     var msg = 'hydyyeuuej';
//     // console.log(msg);
// }
// // console.log(msg);
// console.log(i)

// function bankRobbery() {
//     const heroes = ['Batman', 'Superman', 'Spiderman'];
//     function cryForHelp() {
//         let color = 'red';
//         function inner() {
//         for(let hero of heroes) {
//          console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
//         } 
//     }
//     inner();   
//     }
//      cryForHelp();

// }

//  function add(a, b) {
//      return a + b;
//  }
// const add = function (x,y) {
//     return x + y;
// }

// function callTwice(func) {
//     func()
//     func()
// }
// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f();
//     }
// }
// function rollDice() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }
// // callTwice(rollDice);
// function makeMysteryFunc() {
//     const rand = Math.random(); 
//     if(rand > 0.5) {
//         return function() {
//             console.log("CONGRATS, I AM A GOOD FUNCTION");
//             console.log("YOU WIN A MILLION DOLLARS");
//         }
//     } else { 
//         return function() {
//             alert("SORRY, I AM A BAD FUNCTION");
//             alert("SORRY, I AM A BAD FUNCTION");
//             alert("YOU LOSE A MILLION DOLLARS");
//             alert("YOU LOSE A MILLION DOLLARS");
//             alert("YOU LOSE A MILLION DOLLARS");
//         }
//     }
// }  
// const mysteryFunc = makeMysteryFunc();
// function makeBetweenFunc(min, max) {
//     return function(num) {
//         return num >= min && num <= max;
//     }

// }
// const testRange = function (num) {
//     return num >= 100 && num <= 200;
// }

// // makeBetweenFunc(50, 100)
// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }

// const myMath = {
//     PI : 3.14159,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** 3;
//     }
// // }
// const cat = {
//     name : 'Fluffy',
//     color : 'White',
//     breed : 'Maine',
//     meow() {
//         console.log("THIS IS:",this)
//         console.log(`${this.name} says meow`);
//     }
// }
// // const meow2 = cat.meow; 
// try {
//     hello.toUpperCase();
// }
// catch {
//     console.log("ERROES!!!");
// }
// // console.log("AFTER!!!")
// function yell(msg) {
//     try{
//         console.log(msg.toUpperCase().repeat(3));
//  } catch (e) {
//     //  console.log(e);
//      console.log("please pass a string next time!")
//  }
// // }
/*--------------------------------------------------------------------------------------------------------------------*/
         /* MAP ?
/*--------------------------------------------------------------------------------------------------------------------*/
// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// const doubles = numbers.map(function (num) {
//     return num * 2;})
    // const movies = [
    //     {
    //         title: 'anita',
    //         score: 5
    //     },
    //     {
    //         title: 'benita',
    //         score: 4
    //     },
    //     {
    //         title: 'cenita',
    //         score: 3
    //     },
    //     {
    //     title: 'denita',
    //     score: 2
    //     }
    // ]
    // const titles = movies.map(function(movie) {
    //     return movie.title;
    // })

    /*--------------------------------------------------------------------------------------------------------------------*/
    /* ARROW FUNCTIONS */
    /*--------------------------------------------------------------------------------------------------------------------*/
//     const add = (a,b) => {
//         return a + b;
//     }
//    const square = (x) => {
//          return x * x;
//     }
//     const rollDice = () => {
//       return Math.floor(Math.random() * 6) + 1;
// //     }
    
//     const rollDice = () => (
//          Math.floor(Math.random() * 6) + 1
//       )

//     const movies = [
    //     {
    //         title: 'anita',
    //         score: 50
    //     },
    //     {
    //         title: 'benita',
    //         score: 40
    //     },
    //     {
    //         title: 'cenita',
    //         score: 30
    //     },
    //     {
    //     title: 'denita',
    //     score: 20
    //     }
    // ]
    // const newMovies = movies.map(function (movie) {
    //     return `${movie.title} - ${movie.score/10}`;
    // })
    // const newMovies = movies.map(movie => (
    //      `${movie.title} - ${movie.score/10}`
    // ))

    /*--------------------------------------------------------------------------------------------------------------------*/
    /* SET TIMER AND SET INTERVAL */
    /*--------------------------------------------------------------------------------------------------------------------*/
    
    // console.log('HELLO!!!...');
    // setTimeout(() => {
    //     console.log('....ARE YOU THERE?');
    // }, 3000);
    // console.log('I AM HERE!!!');

    // const id = setInterval(() => {
    //     console.log(Math.random())
    // }, 2000);
    
    /*--------------------------------------------------------------------------------------------------------------------*/
    /* FILTER*/
    /*--------------------------------------------------------------------------------------------------------------------*/    
    // const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    // numbers.filter(n => {
    //     return n < 10;
    // })
    // const movies = [
    //     {
    //         title: 'anita',
            // score: 50,
    //         year: 2019
    //     },
    //     {
    //         title: 'benita',
    //         score: 40,
    //         year: 2018
    //     },
    //     {
    //         title: 'cenita',
    //         score: 30,
    //         year: 2017
    //     },
    //     {
    //     title: 'denita',
    //     score: 20,
    //     year: 2016
    //     }
    // ]
    // const goodMovies = movies.filter(movie => {
    //     return movie.score > 30;
    // // })
    // const goodMovies = movies.filter(movie => movie.score > 30);
    //    const goodTitles = goodMovies.map(movie => movie.title);

    //    movies.filter(m => m.score > 30).map(m => m.title);
    // const badMovies = movies.filter(movie => movie.score < 40);
    // const recentMovies = movies.filter(movie => movie.year > 2000);

    /*--------------------------------------------------------------------------------------------------------------------*/
    /* EVERY */
    /*--------------------------------------------------------------------------------------------------------------------*/

    // const exams = [80,98,88,99,100, 96,87,81,84]
    // exams.every(score => score >= 70)    
    // exams.some(score => score <= 70)

    /*--------------------------------------------------------------------------------------------------------------------*/
    /* REDUCE */
    /*--------------------------------------------------------------------------------------------------------------------*/

    // const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

    // const total = prices.reduce((total, price) => {
    //     return total + price;
    // })
    // const total = prices.reduce((total, price) => total * price)
    // const minPrice = prices.reduce((min, price) => {
    //     if (price < min) {
    //         return price;
    //     } else {
    //         return min;
    //     }
    // })
    // const evens = [2,4,6,8,10,12,14,16,18,20];
    // evens.reduce((total, num) => total + num, 40);

    /*--------------------------------------------------------------------------------------------------------------------*/
    /* ARROW FUNCTION */
    /*--------------------------------------------------------------------------------------------------------------------*/
    // const person = {
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     fullName: function () {
    //         return `${this.firstName} ${this.lastName}`;
    //     }
    // }
    // fullName: function ()  {
        // console.log(this);
    //     return `${this.firstName} ${this.lastName}`;
    // },
//     shoutName:function () {
//         setTimeout (function() {
//             console.log(this);
//             console.log(this.fullName())
//         },3000)
//     }
// }
/*--------------------------------------------------------------------------------------------------------------------*/
/* DEFAULT PARAMS */
/*--------------------------------------------------------------------------------------------------------------------*/
// function rollDice(numSides === undefined) {
//     numSides = 6
// }
//     return Math.floor(Math.random() * numSides) + 1;
// }
// function rollDice(numSides = 6) {
//         // numSides = 6
//     // }
//         return Math.floor(Math.random() * numSides) + 1;
//     }
// function greet(msg, person) {
//     console.log(`$msg, ${person}!`)
// }

// const cat = ['cat1', 'cat2', 'cat3', 'cat4', 'cat5'];
// const dog = ['dog1', 'dog2', 'dog3', 'dog4', 'dog5'];
// const allPets = [...cat, ...dog];

// const feline = { legs: 4, family: 'Felidae' };
// const canine = { isFurry: true, family: 'Canidae'};

// const dataFromForm = {
//     email : 'blurtop@gmail.com',
//     password: '12345678',
//     username: 'blurtop'
// }
// const newUser = {...dataFromForm, id: 233, isAdmin: false }

// function sum() {
//     console.log(arguments)
// }
// function sum(...nums) {
    // console.log(nums)
// }
// function sum(...nums) {
//    return nums.reduce((total, el) => total + el) 
// }
// function raceResult(gold, silver, ...everyoneElse) {
//     console.log(`GOLD MEDAL GOES TO ${gold}`)
//     console.log(`SILVER MEDAL GOES TO ${silver}`)
//     console.log(`AND THANKS TO EVERYONE ELSE ${everyoneElse}`)
// }
/*--------------------------------------------------------------------------------------------------------------------*/
/* DESTRUCTURING */
/*--------------------------------------------------------------------------------------------------------------------*/
// const user = {
//     email: 'webdone@gmail.com',
//     password: '12345678',
//     username: 'webdone',
//     firstName: 'John',
//     lastName: 'Doe',
//     born: 1784,
//     died: 2000,
//     bio: 'blah blah blah',
//     country: 'USA',
//     city: 'New York'
// }
// const firstName = user.firstName;
// const lastName = user.lastName;
// const born = user.born;
// const email = user.email;
// const {firstName, lastName, born, email} = user;

// const btn = document.querySelector('#v2');
// btn.onclick = function(){
//     console.log("YOU CLICKED ME!")
//     console.log("I HOPE IT WORKED!!!")
// }
// function scream() {
//     console.log('AAAAAAAAAHHHHHH');
//     console.log('STOP TOUCHING ME!')
// }
// btn.onmouseenter = scream;

// const btn3 = document.querySelector('#v3');
// btn3.addEventListener('click', function () {
//     alert("clicked")
// })
// function twist() {
//     console.log("TWIST")
// }

// function shout() {
//     console.log("SHOUT")
// }
// const tasButton = document.querySelector("#tas");
// tasButton.onclick = shout;

// tasButton.addEventListener('click', twist, { once: true })
// tasButton.addEventListener('click', shout)
// const button = document.querySelector("button");
// const h1 = document.querySelector('h1');
// button.addEventListener("click", function (){
//     const newColor = makeRandomColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// })
/*---------------------------------------------------------------------------------*/
/* KEYWORD THIS */
/*----------------------------------------------------------------------------*/
//  const makeRandomColor = () => {
    // const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;

// }
// const buttons = document.querySelectorAll('button');
// for (let button of buttons) {
//     button.addEventListener("click", function () {
//         console.log(this)
//         this.style.backgroundColor = makeRandomColor();
//         this.style.color = makeRandomColor();
        // console.log('clicked');

//     })
// }
// const h1s = document.querySelectorAll('h1');
// for (let h1 of h1s) {
//     h1.addEventListener("click", function () {
//         console.log(this)
//         this.style.backgroundColor = makeRandomColor();
//         this.style.color = makeRandomColor();
//         // console.log('clicked');

//     })
// }


/*----------------------------------------------------------------------------*/
/* KEYWORD OBJECT */
/*--------------------------------------------------------------------------------*/
// document.querySelector('button').addEventListener('click',function (evt) {
//     console.log(evt)
// })
// const input = document.querySelector('input');
// input.addEventListener('keydown', function (e) {
//     console.log(e.key)
//     console.log(e.code)

// })
// input.addEventListener('keyup', function () {
//     console.log('KEYUP')
// })
// window.addEventListener('keydown', function (e) {
    // switch (e.code) {
    //     case 'ArrowUp':
    //         console.log("UP!");
    //         break;
    //     case 'ArrowDown':
    //         console.log('DOWN!');
//             break;
//         case 'ArrowLeft':
//             console.log('lEFT');
//             break;
//         case 'ArrowRight':
//             console.log('RIGHT')
//             break;
//         default:
//             console.log('IGNORED!')
//     }
// })
/*-------------------------------------------------------------*/
/* FORM EVENT */
/*------------------------------------------------------------*/
// const tweetForm = document.querySelector('#tweetForm');
// const tweetsContainer = document.querySelector('#tweets');
// tweetForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(usernameInput.value, tweetInput.value)
//     usernameInput.value = "";
//     tweetInput.value = "";
// });

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username)
//     newTweet.append(bTag);
//     newTweet.append(`-${tweet}`)
//     tweetsContainer.append(newTweet);
// }





/*--------------------------------------------------------------------------------*/
/* CHANGE AND USER INPUT */
/*--------------------------------------------------------------------------------*/
// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');

// input.addEventListener('input', function (e) {
//     console.log('INPUT')
//     console.log(e)
// })
// const button = document.querySelector('#changeColor');
// const container = document.querySelector('#container');
// button.addEventListener('click', function (e) {
// container.style.backgroundColor = makeRandomColor();
// e.stopPropagation();
// })
// container.addEventListener('click', function () {
//     container.classList.toggle('hide');
// })
// const makeRandomColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }

/*--------------------------------------------------------------------------------*/
/* EVENT DELEGATION */
/*--------------------------------------------------------------------------------*/
// const lis = document.querySelectorAll('li');
// for (let li of lis) {
//     li.addEventListener('click', function () {
//         li.remove();
//     })
// }

 const tweetForm = document.querySelector('#tweetForm');
 const tweetsContainer = document.querySelector('#tweets');
 tweetForm.addEventListener('submit', function (e) {
     e.preventDefault();
     const usernameInput = tweetForm.elements.username;
     const tweetInput = tweetForm.elements.tweet;
     addTweet(usernameInput.value, tweetInput.value)
     usernameInput.value = "";
     tweetInput.value = "";
 });
 
 const addTweet = (username, tweet) => {
     const newTweet = document.createElement('li');
     const bTag = document.createElement('b');
     bTag.append(username)
     newTweet.append(bTag)
     newTweet.append(`-${tweet}`)
     tweetsContainer.append(newTweet);
 }
 tweetsContainer.addEventListener('click', function (e) {
     e.target.nodeName === 'LI' && e.target.remove();
 })


/* --------------------------------------------------------------------------*/
/* WELCOME TO DOM */
/* --------------------------------------------------------------------------*/
const allImages = document.getElementsByTagName('img');

for (let img of allImagees) {
    console.log(img.src)
}
