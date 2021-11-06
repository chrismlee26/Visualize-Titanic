import data from './titanic-data.js'

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic')

// Get a reference to the #titanic
const displayData = document.querySelector('#data')

// Set some styles on the titanic
// display flex, justifyContent center, alignItems flex-end
titanic.style.display = 'grid'
titanic.style.gridTemplateColumns = 'repeat(34, 30px)'
titanic.style.gridGap = '1px'

// Map over the data and make a new element for each passenger
const passengers = data.map(p => {
  const el = document.createElement('div')
  titanic.appendChild(el)
  return el
})

// Let's loop over each passenger and set some styles 
passengers.forEach((p, i) => {
  const { pclass, survived } = data[i].fields
  p.style.width = '30px'
  p.style.height = '30px'
  p.style.opacity = survived === 'Yes' ? '100%' : '15%' 
  p.style.borderRadius = data[i].fields.sex === 'female' ? '50%' : '0'
  const portColor = { S: "tomato", C: "cornflowerblue", Q: "orange", undefined: "green" }
  p.style.backgroundColor = portColor[data[i].fields.embarked]
})





// Challenges - 

// Make the squares a little bigger 15px by 15px. 
// You'll need to change both the gridTemplateColumn on the
// titanic and the width and height of each passenger. 

// Change the number of columns on the titanic to 34


// Display each passenger as a circle if they are female. 
// Do this by setting the borderRadius of each passenger. 
// Match the passenger in passengers to the object data 
// in the data array by the index. 



// Display each passengers who did not survive as 
// opacity 0.5. 



// Set the backgroundColor of each passenger by their 
// embarked value. There are three possible values: 
// 'S', 'C', and 'Q'



