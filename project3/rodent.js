let data;
let positionData = [];
let radiusData = [];

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
        radiusData.push(item.number);
        positionData.push(item.geoid);

    })
    console.log(windowData);

  });

  function setup() {
    createCanvas(windowWidth, windowHeight);
    // background(100,5,5);
    rect(50,50,50,50);
    noStroke();
    // x = random()*windowWidth;
    // y = random()*windowHeight;
  
    console.log("Setup function ran successfully!");
  }

  function draw(){
    background(100,5,5);
    // if(windowData){
    //     text(windowData, width/2, height/2 -16);
    //     textSize(16);
    //     circle()
    //     fill(0);

    // }
    radiusData.forEach( radius => {
        x = map(radius, 3000, 600000, 0, windowWidth);
        y = map(radius, 3000, 600000, 0, windowHeight);
        gradient = map(radius, 3000, 600000, 0, 255)
        let circleRadius = map(radius, 3000, 60000, 1, 5);
        circle(x, y,circleRadius);
        // fill(255, 0,0);
        fill(gradient,0,0);
        
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
