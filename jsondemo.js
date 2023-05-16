// Function to display JSON data in a list
function displayData() {
  var dataList = document.getElementById("dataList");
  dataList.innerHTML = ""; // Clear the list before displaying new data

  // Fetch the JSON file
  fetch('class.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      // Loop through the JSON data and create list items
      jsonData.forEach(function(item) {
        var nameItem = document.createElement("li");
        nameItem.innerText = "Name: " + item.Name;
        dataList.appendChild(nameItem);

        var githubItem = document.createElement("li");
        var githubLink = document.createElement("a");
        githubLink.href = "https://" + item.Github + ".github.io";
        githubLink.innerText = "https://" + item.Github + ".github.io";
        githubItem.appendChild(githubLink);
        dataList.appendChild(githubItem);
      });
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
}

// Attach click event listener to the button
var showDataButton = document.getElementById("showDataButton");
showDataButton.addEventListener("click", displayData);
