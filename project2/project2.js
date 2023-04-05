const myDiv = document.getElementById('question');
myDiv.style.cursor = 'pointer'; // Set cursor to pointer
myDiv.onclick = function() {
    console.log('Div clicked');
    window.open("questionmark.html", "Popup", 'width=100,height=100');
}

window.addEventListener('scroll', function() {
    var popup = document.querySelector('.popup');
    var distanceFromTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (distanceFromTop > 500) {
      popup.style.display = 'block';
    } else {
      popup.style.display = 'none';
    }
  });

.catch(error => console.error(error));
