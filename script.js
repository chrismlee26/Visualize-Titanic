import data from './titanic-data.js'

// Color variables for 'Embarked' data
const portColor = { 
  S: "tomato", 
  C: "cornflowerblue", 
  Q: "orange", 
  undefined: "green",
  total: 'gray'
}

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic');

// Get a reference to the #dataDisplay caption
// const displayData = document.querySelector('#data');

// Set some styles on the titanic
// display flex, justifyContent center, alignItems flex-end
titanic.style.display = 'grid';
titanic.style.gridTemplateColumns = 'repeat(30, 30px)';
titanic.style.gridGap = '1px';

// Main DOM Element
// Map over the data and make a new element for each passenger
const passengers = data.map(p => {
  const el = document.createElement('div')
  titanic.appendChild(el)
  el.style.transition = "400ms"
  return el
});

drawDiagram()

// Main Diagram 
function drawDiagram() {
  passengers.forEach((p, i) => {
    const { survived, sex, embarked, pclass } = data[i].fields
    p.style.width = '30px'
    p.style.height = '30px'
    p.style.opacity = survived === 'Yes' ? '100%' : '15%' 
    p.style.borderRadius = sex === 'female' ? '50%' : '0'
    p.style.backgroundColor = portColor[embarked]
  })
}

// Bar Chart DOM Element
const titanicEmbarked = document.querySelector('#titanic-embarked');

// Reduce undefined
const embarkedCounts = data.reduce((acc, p) => {
  if (acc[p.fields.embarked] === undefined) {
    acc[p.fields.embarked] = 1
  } else {
    acc[p.fields.embarked] += 1
  }
  return acc
}, {});

// Bar Total
embarkedCounts.total = data.length

// Bar Chart
const embarkedKeys = Object.keys(embarkedCounts)
embarkedKeys.forEach((e) => {
  const el = document.createElement('div')
  titanicEmbarked.appendChild(el)
  el.style.width = '30px'
  const count = embarkedCounts[e]
  const percent = count / data.length * 100
  el.style.height = `${percent}%`
  el.style.backgroundColor = portColor[e]
  el.style.margin = '1px'
});

// Bar Chart Styles
titanicEmbarked.style.display = 'flex';
// titanicEmbarked.style.flexDirection = 'column';
titanicEmbarked.style.alignItems = 'flex-end';
titanicEmbarked.style.position = 'fixed'
titanicEmbarked.style.left = '1%';
titanicEmbarked.style.top = '5.5%';
titanicEmbarked.style.border = '1px dotted white';
titanicEmbarked.style.width = '200px';
titanicEmbarked.style.height = '300px';

// Reset Diagram
document.body.addEventListener('click', (e) => {
  if (e.target.matches('#reset')) {
    document.location.reload(true)
  }
})

// Sort Survived
document.body.addEventListener('click', (e) => {
  if (e.target.matches('#sortSurvived')) {
    data.sort((a, b) => {
    if (a.fields.survived === 'Yes') {
      return -1
    }
    return 1
  });
  drawDiagram()
  }
});

// Sort by Gender
document.body.addEventListener('click', (e) => {
  if (e.target.matches('#sortGender')) {
    data.sort((a, b) => {
      if (a.fields.sex === 'female') {
        return -1
      }
      return 1
    });
    drawDiagram()
  }
});

// Sort by Embarkation
document.body.addEventListener('click', (e) => {
  if (e.target.matches('#sortEmbarked')) {
    data.sort((a, b) => {
      if (a.fields.embarked < b.fields.embarked) {
        return -1
      } else if (a.fields.embarked > b.fields.embarked) {
        return 1
      }
      return 0
    });
    drawDiagram()
  }
});

// Sort by Age
document.body.addEventListener('click', (e) => {
  if (e.target.matches('#sortAge')) {
    data.sort((a, b) => {
      if (a.fields.age < b.fields.age) {
        return -1
      } else if (a.fields.age > b.fields.age) {
        return 1
      }
      return 0
    });
    drawDiagram()
  }
});

// Sort by Class
document.body.addEventListener('click', (e) => {
  if (e.target.matches('#sortClass')) {
    data.sort((a, b) => {
      if (a.fields.pclass < b.fields.pclass) {
        return -1
      } else if (a.fields.pclass > b.fields.pclass) {
        return 1
      }
      return 0
    });
    drawDiagram()
  }
});

// Sort by Fare
document.body.addEventListener('click', (e) => {
  if (e.target.matches('#sortFare')) {
    data.sort((a, b) => {
      if (a.fields.fare < b.fields.fare) {
        return -1
      } else if (a.fields.fare > b.fields.fare) {
        return 1
      }
      return 0
    });
    drawDiagram()
  }
});

