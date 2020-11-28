const age = prompt("How old are you?");

if(age >= 18 && age <= 21 ) {
  console.log("You can drink but you should not");
} else if(age > 21) {
  console.log("go ahed");
} else {
  console.log("too young");
}

console.log(age);
