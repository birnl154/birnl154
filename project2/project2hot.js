 // Load the JSON file named pokemon.json
 fetch('project2hot.json')
 .then(response => response.json())
 .then(data => {
     // Access the div element
     const images = document.getElementById('images');

     data.sort(() => Math.random() - 0.5);
             
     // Loop through the data and add each item to the div
     data.forEach(item => {
     const div = document.createElement('div');
     const p = document.createElement('p');
     const img = document.createElement('img');

     // Set the text content and href attributes for the link

     img.src = "coffee cups/" + item.image;
    

    
     img.onclick = function() {
        window.open(item.url, "Popup", '_blank', 'width=100,height=100');
     }
     
     // Add the HTML tags to webpage
     div.appendChild(img);
     div.appendChild(p);
     images.appendChild(div);
     });
 })

 window.addEventListener('scroll', function() {
    var popup = document.querySelector('.popup');
    var distanceFromTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (distanceFromTop > 200) {
        setTimeout(function() {
            popup.style.display = 'block';
        }, 2000); // delay the appearance of the popup for 1 second
    } else {
        popup.style.display = 'none';
    }
});


    
    const popup = document.querySelector('.popup2');
    const triggerDistance = 500;
    
    window.addEventListener('scroll', function() {
        var popup = document.querySelector('.popup2');
        var distanceFromTop = window.pageYOffset || document.documentElement.scrollTop;
      
        if (distanceFromTop > triggerDistance) {
            setTimeout(function() {
                popup.style.display = 'block';
            }, 2000); // delay the appearance of the popup for 1 second
        } else {
            popup.style.display = 'none';
        }
    });
    
    
 trycatch(error => console.error(error));

