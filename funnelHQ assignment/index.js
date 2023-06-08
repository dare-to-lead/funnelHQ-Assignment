let successMessage = document.getElementById("successMessage");
let containerLeft = document.getElementById("left");
let containerRight = document.getElementById("right");
let items = document.getElementsByClassName("item");

//here i loop through all list items and added drag and drop functionality by adding event listener
for (let item of items) {
  item.addEventListener("dragstart", function (event) {
    let selected = event.target;
    containerRight.addEventListener("dragover", function (event) {
      event.preventDefault();
    });

    containerRight.addEventListener("drop", function (event) {
      event.preventDefault();
      containerRight.appendChild(selected);
      selected = null;
      successMessage.innerHTML = "Item dropped successfully!";
    });
  });
}

//this is the function to reset first container as it was earlier
function reset() {
  containerRight.innerHTML = "";
  successMessage.innerHTML = "";
  containerLeft.innerHTML = `
<div class="item" draggable="true">Item 1</div>
<div class="item" draggable="true">Item 2</div>
<div class="item" draggable="true">Item 3</div>
<div class="item" draggable="true">Item 4</div>
<div class="item" draggable="true">Item 5</div>
<div class="item" draggable="true">Item 6</div>
`;
}
