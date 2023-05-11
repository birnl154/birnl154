
let leopard = "me";
if (leopard === "me") {
  alert("TW: Rapid rat movement, caution to epilectic viewers");
} else {
  alert("TW: Rapid rat movement, caution to epilectic viewers");
}
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
    //noStroke();
    // x = random()*windowWidth;
    // y = random()*windowHeight;
    dropdown = createSelect();
    dropdown.option('All')
    dropdown.option('Mott Haven/Hunts Point')
    dropdown.option('Morrisania/East Tremont')
    dropdown.option('Highbridge/South Concourse')
    dropdown.option('University Heights/Fordham')
    dropdown.option('Kingsbridge Heights/Mosholu')
    dropdown.option('Riverdale/Kingsbridge')
    dropdown.option('Soundview/Parkchester')
    dropdown.option('Throgs Neck/Co-op City')
    dropdown.option('Pelham Parkway')
    dropdown.option('Williamsbridge/Baychester')
    dropdown.option('Williamsburg/Greenpoint')
    dropdown.option('Brooklyn Heights/Fort Greene')
    dropdown.option('Bedford Stuyvesant')
    dropdown.option('Bushwick')
    dropdown.option('East New York/Starret City')
    dropdown.option('Park Slope/Carroll Gardens')
    dropdown.option('Sunset Park')
    dropdown.option('N. Crown Heights/Prospect Heights')
    dropdown.option('South Crown Heights')
    dropdown.option('Bay Ridge')
    dropdown.option('Bensonhurst')
    dropdown.option('Borough Park')
    dropdown.option('Coney Island')
    dropdown.option('Flatbush')
    dropdown.option('Sheepshead Bay/Gravesend')
    dropdown.option('Brownsville/Ocean Hill')
    dropdown.option('East Flatbush')
    dropdown.option('Flatlands/Canarsie')
    dropdown.option('Greenwich Village/Financial District')
    dropdown.option('Lower East Side/Chinatown')
    dropdown.option('Chelsea/Clinton/Midtown')
    dropdown.option('Stuyvesant Town/Turtle Bay')
    dropdown.option('Upper West Side')
    dropdown.option('Upper East Side')
    dropdown.option('Morningside Heights/Hamilton Heights')
    dropdown.option('Central Harlem')
    dropdown.option('East Harlem')
    dropdown.option('Washington Heights/Inwood')
    dropdown.option('Astoria')
    dropdown.option('Sunnyside/Woodside')
    dropdown.option('Jackson Heights')
    dropdown.option('Elmhurst/Corona')
    dropdown.option('Middle Village/Ridgewood')
    dropdown.option('Forest Hills/Rego Park')
    dropdown.option('Flushing/Whitestone')
    dropdown.option('Hillcrest/Fresh Meadows')
    dropdown.option('Kew Gardens/Woodhaven')
    dropdown.option('Howard Beach/South Ozone Park')
    dropdown.option('Bayside/Little Neck')
    dropdown.option('Jamaica')
    dropdown.option('Bellerose/Rosedale')
    dropdown.option('Rockaways')
    dropdown.option('North Shore')
    dropdown.option('Mid Island')
    dropdown.option('South Shore')
    dropdown.changed(changeFilter)

    console.log("Setup function ran successfully!");
    console.log('rodent data:', rodentData);

    dropdown.style('font-family', 'Impact, sans-serif');
    dropdown.style('font-size', '16px');
    dropdown.style('color', '#333');
    dropdown.style('background-color', '#f0f0f0');
    dropdown.style('padding', '10px');
    dropdown.style('width', '200px')
  }

  function changeFilter() {
    let dropdownValue = dropdown.value();
    

    switch (dropdownValue) {
  case 'Mott Haven/Hunts Point':
      chosenFilter = 1;
      break;
  case 'Morrisania/East Tremont':
      chosenFilter = 2;
      break;
  case 'Highbridge/South Concourse':
      chosenFilter = 3;
      break;
  case 'University Heights/Fordham':
      chosenFilter = 4;
      break;
  case 'Kingsbridge Heights/Mosholu':
      chosenFilter = 5;
      break;
      case 'Riverdale/Kingsbridge':
        chosenFilter = 6;
        break;
    case 'Soundview/Parkchester':
        chosenFilter = 7;
        break;
    case 'Throgs Neck/Co-op City':
        chosenFilter = 8;
        break;
    case 'Pelham Parkway':
        chosenFilter = 9;
  break;
  case 'Williamsbridge/Baychester':
    chosenFilter = 10;
    break;
    case 'Williamsburg/Greenpoint':
      chosenFilter = 11;
      break;
  case 'Brooklyn Heights/Fort Greene':
      chosenFilter = 12;
      break;
  case 'Bedford Stuyvesant':
      chosenFilter = 13;
      break;
      case 'Bushwick':
        chosenFilter = 14;
        break;
        case 'East New York/Starret City':
          chosenFilter = 15;
          break;
      case 'Park Slope/Carroll Gardens':
          chosenFilter = 16;
          break;
      case 'Sunset Park':
          chosenFilter = 17;
          break;
    case 'N. Crown Heights/Prospect Heights':
      chosenFilter = 18;
      break;
      case 'South Crown Heights':
        chosenFilter = 19;
        break;
case 'Bay Ridge':
  chosenFilter = 20;
  break;
case 'Bensonhurst':
  chosenFilter = 21;
  break;
  case 'Borough Park':
    chosenFilter = 22;
    break;
case 'Coney Island':
    chosenFilter = 23;
    break;
case 'Flatbush':
    chosenFilter = 24;
    break;
case 'Sheepshead Bay/Gravesend':
    chosenFilter = 25;
    break; 
    case 'Brownsville/Ocean Hill':
  chosenFilter = 26;
  break;
case 'East Flatbush':
  chosenFilter = 27;
  break;
  case 'Flatlands/Canarsie':
    chosenFilter = 28;
    break;
case 'Greenwich Village/Financial District':
    chosenFilter = 29;
    break;
case 'Lower East Side/Chinatown':
    chosenFilter = 30;
    break;
case 'Chelsea/Clinton/Midtown':
    chosenFilter = 31;
    break;  
    case 'Stuyvesant Town/Turtle Bay':
  chosenFilter = 32;
  break;
case 'Upper West Side':
  chosenFilter = 33;
  break;
  case 'Upper East Side':
    chosenFilter = 34;
    break;
case 'Morningside Heights/Hamilton Heights':
    chosenFilter = 35;
    break;
case 'Central Harlem':
    chosenFilter = 36;
    break;
case 'East Harlem':
    chosenFilter = 37;
    break;
    case 'Washington Heights/Inwood':
      chosenFilter = 38;
      break;
  case 'Astoria':
      chosenFilter = 39;
      break;
  case 'Sunnyside/Woodside':
      chosenFilter = 40;
      break;
  case 'Jackson Heights':
      chosenFilter = 41;
      break; 
      case 'Elmhurst/Corona':
        chosenFilter = 42;
        break;
    case 'Middle Village/Ridgewood':
        chosenFilter = 43;
        break;
    case 'Forest Hills/Rego Park':
        chosenFilter = 44;
        break;
    case 'Flushing/Whitestone':
        chosenFilter = 45;
        break; 
        case 'Hillcrest/Fresh Meadows':
          chosenFilter = 46;
          break;
      case 'Kew Gardens/Woodhaven':
          chosenFilter = 47;
          break;
      case 'Howard Beach/South Ozone Park':
          chosenFilter = 48;
          break;
      case 'Bayside/Little Neck':
          chosenFilter = 49;
          break; 
          case 'Jamaica':
            chosenFilter = 50;
            break;
        case 'Bellerose/Rosedale':
            chosenFilter = 51;
            break;
        case 'Rockaways':
            chosenFilter = 52;
            break;
        case 'North Shore':
            chosenFilter = 53;
            break; 
            case 'Mid Island':
              chosenFilter = 54;
              break;
          case 'South Shore':
              chosenFilter = 55;
              break; 
              case 'All':
                chosenFilter = 56;
                break; 

    }
    console.log('chosen filter', chosenFilter)
    
  }
function draw(){
    background(100,5,5);
    createCanvas(windowWidth, windowHeight);

    rodentData.forEach( incident => {
        if (incident.geoid === chosenFilter) {
            let numRats = Math.floor(incident.number / 1000);
            let emoji = '🐀';
            let size = map(incident.number, 613, 29304, 10, 50);
            textSize(100);
            fill(50, 205, 50);

            for (let i = 0; i < numRats; i++) {
                let x = random(size, width - size);
                let y = random(size, height - size);
                text(emoji, x, y);
            }
        }

        if (chosenFilter === 'draw all') {
            let numRats = Math.floor(incident.number / 1000);
            let emoji = '🐀';
            textSize(100);
            let size = map(incident.number, 613, 29304, 10, 50);
            fill(50, 205, 50);

            for (let i = 0; i < numRats; i++) {
                let x = random(size, width - size);
                let y = random(size, height - size);
                text(emoji, x, y);
            }
        }
    })
}
