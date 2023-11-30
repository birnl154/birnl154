var draggableContainer = document.querySelector(".draggable-container");
var draggableElements = draggableContainer.children;

for (var i = 0; i < draggableElements.length; i++) {
    dragElement(draggableElements[i]);
}

// Function to get a random position within the specified range
function getRandomPosition() {
    var maxX = window.innerWidth - 2; // Adjust 100 to the width of your draggable element
    var maxY = window.innerHeight - 2; // Adjust 100 to the height of your draggable element

    // Adjust these values to exclude the top 35 pixels
    var minY = 70;

    var randomX, randomY;

    do {
        randomX = Math.floor(Math.random() * (maxX - 100)); // Reduced size
        randomY = Math.floor(Math.random() * (maxY - minY - 100) + minY); // Reduced size
    } while (checkOverlap(randomX, randomY));

    return { x: randomX, y: randomY };
}

// Function to check if a position overlaps with existing divs
function checkOverlap(x, y) {
    for (var i = 0; i < draggableElements.length; i++) {
        var element = draggableElements[i];
        if (element !== currentDraggingElement) {
            var rect = element.getBoundingClientRect();

            if (
                x < rect.right &&
                x + 100 > rect.left &&
                y < rect.bottom &&
                y + 100 > rect.top
            ) {
                // Overlapping with another div
                return true;
            }
        }
    }

    // Not overlapping
    return false;
}

var currentDraggingElement; // Added to keep track of the currently dragged element

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    // Set random initial position
    var randomPosition = getRandomPosition();
    elmnt.style.top = randomPosition.y + "px";
    elmnt.style.left = randomPosition.x + "px";

    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        currentDraggingElement = elmnt; // Set the currently dragged element
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        currentDraggingElement = null; // Reset the currently dragged element
    }
}