// const firstName = "Dr. T";
// const lastName = "Da Sexy!";
const favoriteFood = "sushi";
// let favoriteNumber = 33;
// const likesToRead = true;

// favoriteNumber += 3;
// favoriteNumber = favoriteNumber + 3;

// console.log(typeof favoriteFood);
// console.log(typeof favoriteNumber);

const whatFoodDoILike = () => {
  if (favoriteFood === "hot dogs" || favoriteFood.toUpperCase() === "SUSHI") {
    console.log("You like hot dogs!");
  } else {
    console.log("You like something else!");
  }
}

whatFoodDoILike();

const myFunction = (number) => {
  console.log(`Your argument was: ${number + 1}`);
}

myFunction(33);
