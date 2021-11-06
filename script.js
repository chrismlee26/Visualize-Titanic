import data from './titanic-data.js'

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic');

// Get a reference to the #titanic
const displayData = document.querySelector('#data');

// Set some styles on the titanic
// display flex, justifyContent center, alignItems flex-end
titanic.style.display = 'grid';
titanic.style.gridTemplateColumns = 'repeat(30, 30px)';
titanic.style.gridGap = '1px';

// Map over the data and make a new element for each passenger
const passengers = data.map(p => {
  const el = document.createElement('div')
  titanic.appendChild(el)
  return el
});

// Sort by Embarkation
// data.sort((a, b) => {
//   if (a.fields.embarked < b.fields.embarked) {
//     return -1
//   } else if (a.fields.embarked > b.fields.embarked) {
//     return 1
//   }
//   return 0
// });

// Sort by Gender
// data.sort((a, b) => {
//   if (a.fields.sex === 'female') {
//     return 1
//   }
//   return -1
// });

// Sort by Survival
// data.sort((a, b) => {
//   if (a.fields.survived === 'Yes') {
//     return -1
//   }
//   return 1
// });




// Let's loop over each passenger and set some styles 
passengers.forEach((p, i) => {
  const { pclass, survived } = data[i].fields
  p.style.width = '30px'
  p.style.height = '30px'
  p.style.opacity = survived === 'Yes' ? '100%' : '15%' 
  p.style.borderRadius = data[i].fields.sex === 'female' ? '50%' : '0'
  const portColor = { S: "tomato", C: "cornflowerblue", Q: "orange", undefined: "green" }
  p.style.backgroundColor = portColor[data[i].fields.embarked]
});