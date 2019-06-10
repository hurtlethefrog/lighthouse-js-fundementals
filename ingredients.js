const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let x = 0;
while ( x < ingredients.length ) {
  console.log(ingredients[x]);
  x++;
};

// Write a for loop that prints out the contents of ingredients:
for ( i = 0; ingredients.length > i; ++i) {
  console.log(ingredients[i]);
};

// Write any loop (while or for) that prints out the contents of ingredients backwards:
let reversed = ingredients.reverse();

for ( i = 0; ingredients.length > i; ++i) {
  console.log(reversed[i]);
};

