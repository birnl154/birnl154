window.onload = function() {
    var count = parseInt(localStorage.getItem("count")) || 0;
    count++;
    localStorage.setItem("count", count);
    if (count == 1 || count % 3 == 0) {
      alert("Please open this in Chrome and make sure your pop-ups are enabled for the full wesbite experience");
    }
  };