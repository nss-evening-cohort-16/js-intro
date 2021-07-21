
// console.log("In here!");

let array = ['giraffe', 'cat', 'dog', 'trash panda'];

// console.log(array.length);

// console.log(array[1]); // bracket notation

// array[2] = 'rat';

array.push('Fox'); // adds element to end of array
array.unshift('Pig'); // adds element to the beginning of the array

array.pop(); // removes element from end of array
array.shift(); // removes element from beginning of array

// console.log(array);

// LOOPS

// .map()

// For Loop
// for (let i = 0; i < array.length; i++) {
//   // console.log(array[i]);
//   if (array[i] === 'trash panda') {
//     console.log(array[i]);
//   }
//   else {
//     console.log("not trash panda")
//   }
// }

// for of loop
// for (const taco of array){
//   if (taco === "dog") {
//     console.log(array.indexOf(taco))
//     console.log("woof woof");
//   }
//   // console.log(taco)
// }

// for each
// array.forEach((taco, index) => {
//   if (taco === 'dog') {
//     console.log(array.indexOf(taco));
//     console.log('woof woof');
//   }
//   // console.log(taco, index);
// });

// while loop
// do while

// OBJECTS 

// let object = {
//   id: 1,
//   name: "Madden",
//   email: "myemail@email.com",
// }

// const userName = "name";

// DOT NOTATION
// console.log(object.name);

// // BRACKET NOTATION
// console.log(object["email"]);

// Which way do I access a value in and object when using a variable?
// console.log(object.userName); // WRONG!!!!
// console.log(object[userName]); // RIGHT

// ARRAY OF OBJECT LOOPS
const team = [
  {
    id: 1,
    name: "Dr. T",
    email: "drt@drt.com",
    favoriteColor: "red",
    image: "https://avatars3.githubusercontent.com/u/29741570?s=460&u=16cc038bd4c459a12eb198fc313043cd37c80a64&v=4"
  },
  {
    id: 2,
    name: "Trinity",
    email: "drt@drt.com",
    favoriteColor: "blue",
    image: "https://avatars1.githubusercontent.com/u/31781724?s=460&u=10531433afe0ed55948173fab061a75fc3ffa8c1&v=4"
  },
  {
    id: 3,
    name: "Aja",
    email: "drt@drt.com",
    favoriteColor: "purple",
    image: "https://avatars3.githubusercontent.com/u/57641436?s=400&u=1383b4d27114c6c7e3f05d55a4b4ac536971316a&v=4"
  }
];

team.forEach((memberObj) => {
  console.log(memberObj.name);
})


// group 2
const teamTwo = [{
  id: 1,
  name: "Nathan",
  favoriteColor: "red",
  email: "divorcedlawyer1988@hotmail.com",
  uniqueThing: "I produce and edit videos",
  image: "https://avatars.githubusercontent.com/u/86999347?v=4"
},
{
  id: 2 ,
  name: "Joe",
  email: "josephgibbs188@gmail.com",
  favoriteColor: "blue",
  uniqueThing: "Burned arm",
  image: "https://avatars.githubusercontent.com/u/83508920?v=4"
},
{
  id: 3,
  name: "Elle",
  email: "hello@ellelawrence.com",
  favoriteColor: "black",
  uniqueThing: "full sleeve of tattoos",
  image: "https://avatars.githubusercontent.com/u/86808230?v=4"
},
{
  id: 4,
  name: "madden",
  email: "maddenpurcell@gmail.com",
  favoriteColor: "Hunter Green",
  uniqueThing: "Has pet Gecko named 'Gre'",
  image: "https://avatars.githubusercontent.com/u/86082231?v=4"
}];

//group 1
let student1 = {
  id: 1,
  name: 'kristin',
  email: 'ka@mail.com',
  color: 'blue',
  unique: 'leap baby',
  image: 'https://avatars.githubusercontent.com/u/81543267?v=4'
}
let student2 = {
  id: 2,
  name: 'harika',
  email: 'hsuvak@gmail.com',
  color: 'blue',
  unique: 'knows 3 languages',
  image: 'https://avatars.githubusercontent.com/u/79666889?v=4',
}
let student3 = {
  id: 3,
  name: 'mary beth',
  email: 'mb@mb.com',
  color: 'green',
  unique: 'brews kombucha',
  image: 'https://avatars.githubusercontent.com/u/86667443?v=4',
}
let student4 = {
  id: 4,
  name: 'david',
  email: 'myemail@email.com',
  color: 'red',
  unique: 'seafood lover',
  image: 'https://avatars.githubusercontent.com/u/86807856?v=4',
}

//Group 3

const austin = {
  id: 1,
  name: "Austin",
  email: "parkercaustin@gmail.com",
  color: "green",
  unique: "son lives in England",
  image: "https://avatars.githubusercontent.com/u/70224936?v=4"
}

const gabriel = {
  id: 2,
  name: "Gabriel",
  email: "gabrielsmith98@gmail.com",
  color: "green",
  unique: "likes video games",
  image: "https://avatars.githubusercontent.com/u/86996271?v=4"
}

const ruby = {
  id: 3,
  name: "Ruby",
  email: "rubiblr@gmail",
  color: "yellow",
  unique: "likes to travel",
  image: "https://avatars.githubusercontent.com/u/86809246?v=4"
}

const luke = {
  id: 4,
  name: "Luke",
  email: "mallen1813@gmail.com",
  color: "yellow",
  unique: "trying for fourth child",
  image: "https://avatars.githubusercontent.com/u/74151134?v=4"
}


//Group 4
const craigObj = {
  id: 1,
  name: "Craig",
  email: "wellspring.craig@gmail.com",
  color: "purple",
  unique: "extremely flexible",
  img: "https://avatars.githubusercontent.com/u/61626143?v=4"
}

const darioObj = {
  id: 3,
  name: "Dario",
  email: "darioperez1415@gmail.com",
  color: "ash grey",
  unique: "very good at football",
  img: "https://avatars.githubusercontent.com/u/83309084?v=4"
}

const meredithObj = {
  id: 12,
  name: "Meredith",
  email: "meredith.marcum@hotmail.com",
  color: "purple",
  unique: "worked on a roller coaster",
  img: "https://avatars.githubusercontent.com/u/85968205?v=4"
}

const albertObj = {
  id: 9,
  name: "Albert",
  email: "albert.w.chittaphong@gmail.com",
  color: "red",
  unique: "black belt",
  img: "https://avatars.githubusercontent.com/u/83558122?v=4"
}

// group 5
let firstMember = {
  id: 1,
  name: "Meseret",
  email: "negash4@gmail.com",
  favColor: "Tumeric",
  uniqItem: "9 Siblings",
  userImg: "https://avatars.githubusercontent.com/u/86808221?v=4"
}
let secondMember = {
  id: 2,
  name: "Grace",
  email: "rgs6090@gmail.com",
  favColor: "Green",
  uniqItem: "Twin",
  userImg:"https://avatars.githubusercontent.com/u/78558344?v=4"
}
let thirdMember = {
  id: 3,
  name: "Derek B",
  email: "dbaylor@gmail.com",
  favColor: "Green",
  uniqItem: "Excelent Vision",
  userImg: "https://avatars.githubusercontent.com/u/83030603?v=4"
}
let fourthMember = {
  id: 4,
  name: "Derek M",
  email: "laxmalone@gmail.com",
  favColor: "Blue",
  uniqItem: "Arthritic Knee's",
  userImg: "https://avatars.githubusercontent.com/u/77118878?v=4"
}

let group6 = [
  {
      id: 1,
      name: "Nissa",
      favoriteColor: "pink",
      somethingUnique: "I like stilletos",
      userImg: "https://avatars.githubusercontent.com/u/86807857?v=4",
  },
  {
      id: 2,
      name: "Daniel",
      favoriteColor: "teal",
      somethingUnique: "I build PCs",
      userImg: "https://avatars.githubusercontent.com/u/82732748?v=4",
  },
  {
      id: 3,
      name: "Halie",
      email: "halie@email.com",
      favoriteColor: "green",
      somethingUnique: "allergic to advil",
      userImg: "https://avatars.githubusercontent.com/u/86806913?v=4",
  },
  {
      id: 4,
      name: "Klay",
      email: "klaythacker@email.com",
      favoriteColor: "purple",
      somethingUnique: "has hearing loss",
      userImg: "https://avatars.githubusercontent.com/u/86626953?v=4",
  },
  ];
