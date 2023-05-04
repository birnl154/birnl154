let data;
//let positionData = [];
let rodentData = [];

let x;
let y;

function preload() {
    data = loadJSON('rodent.json', () => {
      console.log('JSON loaded successfully');
    }, () => {
      console.log('Error loading JSON');
    });
  }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(100,5,5);
//   rect(50,50,50,50);
//   noStroke();

//   for (let i = 0; i < data.length; i++) {
//     let percent = data[i].percent.split(' ')[0];
//     let radius = map(percent, 0, 100, 10, 100);
//     let x = random(radius, width - radius);
//     let y = random(radius, height - radius);

//     fill(255);
//     circle(x, y, radius);
//     console.log(percent);
//   }
//   console.log("Setup function ran successfully!");
// }



// Load the rodent.json file and parse it into an array of objects
fetch('rodent.json')
  .then(response => response.json())
  .then(data => {
    // Store the parsed data in a global variable
    // window.data = data;
    data.forEach(item =>{
        // windowData.push(item.number);
        rodentData.push(item);
        //positionData.push(item.geoid);

    })
    console.log(windowData);

  });

  let dropdown;
  let chosenFilter = 'draw all';

  function setup() {
    
    createCanvas(windowWidth, windowHeight);
    // background(100,5,5);
    rect(50,50,50,50);
    noStroke();
    // x = random()*windowWidth;
    // y = random()*windowHeight;
    dropdown = createSelect();
    dropdown.option('All')
    dropdown.option('Manhattan')
    dropdown.option('Brooklyn')
    dropdown.option('Bronx')
    dropdown.option('Queens')
    dropdown.option('Staten Island')
    dropdown.changed(changeFilter)

    console.log("Setup function ran successfully!");
    console.log('rodent data:', rodentData);
  }

  function changeFilter() {
    let dropdownValue = dropdown.value();

    switch (dropdownValue) {
        case 'Manhattan':
            chosenFilter = 1;
            break;
        case 'Brooklyn':
            chosenFilter = 2;
            break;
        case 'Bronx':
            chosenFilter = 3;
            break;
        case 'Queens':
            chosenFilter = 4;
            break;
        case 'Staten Island':
            chosenFilter = 5;
            break;
        case 'All':
            chosenFilter ='draw all';
            break;
    }
    console.log('chosen filter', chosenFilter)
  }
 
  function draw(){
    background(100,5,5);
    // if(windowData){
    //     text(windowData, width/2, height/2 -16);
    //     textSize(16);
    //     circle()
    //     fill(0);

    // }


    rodentData.forEach( incident => {
        if (incident.geoid === chosenFilter) {
            x = map(incident.number, 3000, 600000, 40, windowWidth - 40);
            y = map(incident.number, 3000, 600000, 40, windowHeight - 40);
            gradient = map(incident.number, 3000, 600000, 0, 255)
            let circleDiameter = map(incident.number, 3000, 60000, 10, 20);
            circle(x, y,circleDiameter);
            // fill(0, 0,0);
            fill(6,0,0);
        }

        if (chosenFilter === 'draw all') {
            x = map(incident.number, 3000, 600000, 40, windowWidth - 40);
            y = map(incident.number, 3000, 600000, 40, windowHeight - 40);
            gradient = map(incident.number, 3000, 600000, 0, 255)
            let circleDiameter = map(incident.number, 3000, 60000, 10, 20);
            circle(x, y,circleDiameter);
            // fill(255, 0,0);
            fill(50,205,50);
        }
    })
  }


// Attach an event listener to the select element that listens for changes and calls a filtering function
document.getElementById('filter').addEventListener('change', filterResults);

// Define the filtering function to filter the data based on the selected filter and display the filtered results in the empty div element
function filterResults() {
  const filter = document.getElementById('filter').value;
  let filteredData;

  if (filter === 'number') {
    filteredData = window.data.filter(item => item.number === 'Mouse');
  } else if (filter === 'number') {
    filteredData = window.data.filter(item => item.color === 'Brown');
  } else if (filter === 'weight') {
    filteredData = window.data.filter(item => item.weight >= 100);
  } else {
    // If no filter is selected, show all results
    filteredData = window.data;
  }

  // Display the filtered results in the results div
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  filteredData.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.textContent = `${item.species}, ${item.color}, ${item.weight}g`;
    resultsDiv.appendChild(itemDiv);
  });
}
