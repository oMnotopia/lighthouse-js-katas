const chooseRecipe = function(bakeryA, bakeryB, recipes) {

  let goodRecipe = {
    ingred1: false,
    ingred2: false,
    recipeName: ''
  }

  for (let recipe of recipes){
    for( let bakeryIngredients of bakeryA){
      if (bakeryIngredients === recipe['ingredients'][0] || bakeryIngredients === recipe['ingredients'][1]) {
        goodRecipe['ingred1'] = true
      }
    }
    for( let bakeryIngredients of bakeryB){
      if (bakeryIngredients === recipe['ingredients'][0] || bakeryIngredients === recipe['ingredients'][1]) {
        goodRecipe['ingred2'] = true
      }
    }
    if(goodRecipe['ingred1'] === true && goodRecipe['ingred2'] === true) {
      goodRecipe['recipeName'] = recipe['name']
      break;
    }
  }

  return goodRecipe['recipeName']
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));