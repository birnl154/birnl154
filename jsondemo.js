function showList(){
    fetch("class.json")
      .then(response => response.json())
      .then(data => createList(data));
}