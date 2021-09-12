import Modal from "./modal.js";

const modal = Modal();

const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach((button) => {
  //add addEventListener
  button.addEventListener("click", (event) => {
    modal.open();
  });
});

const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach((button) => {
  //add addEventListener
  button.addEventListener("click", (event) => {
    modal.open();
  });
});
