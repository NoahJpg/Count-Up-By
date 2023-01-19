
// Utility Logic

// function isNan(input) {
//   return (input === !Number);
// }



// Business Logic

function countUpBy(event) {
  event.preventDefault();
  let countTo = parseFloat(document.querySelector("input#countTo").value);
  let countBy = parseFloat(document.querySelector("input#countBy").value);
  let array = [];
  let newArray;
  console.log("countto and countby" + countTo + countBy);
  // if (isNan(countTo) || isNan(countBy)){
  //   array.push("Please enter numbers greater than 0 in both fields.")
  // } else
  if ((countTo < 1) || (countBy < 1) || (isNaN(countTo)) || (isNaN(countBy))) {
    document.getElementById("print").innerText = "Please enter a number greater than 0 in both fields."
  } else if (countBy > countTo) {
    document.getElementById("print").innerText = "Second number should be less than or equal to first number."
    
  } else
    {
    for (let currentNumber = 0; currentNumber <= countTo; currentNumber += countBy) {
    // output += currentNumber;
    array.push(currentNumber);
    console.log(currentNumber + '-Current Num')
  }

  newArray = array.join(" ")
  document.getElementById("print").innerText = newArray
  console.log(newArray);
  }
}

  // UI Logic

window.addEventListener("load", function() {
  const form = document.getElementById("countInput");
  form.addEventListener("submit", countUpBy);
  // form.onsubmit = countUpBy()
  // event.preventDefault();
});