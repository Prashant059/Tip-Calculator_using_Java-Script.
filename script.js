const button = document.getElementById("calculator");

button.addEventListener("click", () => {

  const input = document.querySelector(".input1").value;
  const userSelection = +document.querySelector("#selectbox").value;
  const share = +document.querySelector(".share").value;
  console.log(share);
  const output = document.getElementById("output");

  if (input == "" || share == 0) {
    return alert("error ! please  Enter  proper values");
  }
  let total = (input * userSelection) / share;
  output.textContent = total;
});
