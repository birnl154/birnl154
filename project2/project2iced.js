
 fetch('project2iced.json')
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
     p.textContent = item.id + ' ';
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
 .catch(error => console.error(error));

