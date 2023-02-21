

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


const arrayOfQuotes = [
  {'author': 'illegible', 
   'quote': 'jvjvhvvrxdzztrhvdeaesrliugnbvhhvljkvctrexrtzectvuuktbokngyuyhjkhhjvhv'
  },
  {'author': 'illegible', 
   'quote': 'lnjgyufcesazestrxcjyhgkjkjhgvcxwqadyctrvbyiubtiimyufndtrkjhkljbjkbcdgyiybgvkl'
  },
  {'author': 'illegible', 
   'quote': 'rsxtrfcyghvuybnomikmnbnvjuynbioipopohpiohjfdfxfcgilpgjkfdcfc'
  },
  {'author': 'legible', 
   'quote': 'In the vast Library there are no two identical books.'
  },
  {'author': 'illegible', 
   'quote': 'rhsxhetsrcjrtivybykuknlkmxyrebluyytuctrecrevnuijlobnuyvuyvbytyvdc'
  },
  {'author': 'illegible', 
   'quote': 'tkyrcutrvbylyblumovdersewwrditvtrcriyviubytyvittfkgmmlobtfttdty'
  },
];

function generateQuote(){
  const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
  document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
  document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
  
}



let button = document.getElementById('btn');

button.addEventListener('click', function(){
    let word = document.getElementById('str').value;
    let count = word.length;
    let outputDiv = document.getElementById('output');

    outputDiv.innerHTML = `<h3>${count}</h3>`
});
