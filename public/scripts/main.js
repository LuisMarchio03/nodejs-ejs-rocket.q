import Modal from "./modal.js";

const modal = Modal();

const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

//? Button Check

const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach((button) => {
  //add addEventListener
  button.addEventListener("click", handleClick);
});

//? Button delete

const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach((button) => {
  //add addEventListener
  button.addEventListener("click", (event) => handleClick(event, false));
});

//? HandleClick

function handleClick(event, check = true) {
  // Modal Form
  const slug = check ? "check" : "delete";
  const roomId = document.querySelector("#room-id").dataset.id;
  const questionId = event.target.dataset.id;

  const form = document.querySelector(".modal form");
  form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`);

  //Modal title - description - button
  modalTitle.innerHTML = check
    ? "Marcar como lida esta pergunta"
    : "Exluir esta pergunta";
  modalDescription.innerHTML = check
    ? "Tem certeza que deseja marcar como lida esta pergunta?"
    : "Tem certeza que deseja excluir esta pergunta?";
  modalButton.innerHTML = check ? "Sim, marcar como lida" : "Sim, Excluir";
  check
    ? modalButton.classList.remove("red")
    : modalButton.classList.add("red");

  //Modal Open()
  modal.open();
}
