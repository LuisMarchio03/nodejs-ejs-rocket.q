export default function Modal() {
  const modalWrapper = document.querySelector(".modal-wrapper");
  const cancelButtons = document.querySelector(".button.cancel");

  cancelButtons.addEventListener("click", close);

  function open() {
    //Abrir
    modalWrapper.classList.add("active");
  }
  function close() {
    //Fechar
    modalWrapper.classList.remove("active");
  }

  return { open, close };
}
