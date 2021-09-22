//! imports

import Modal from "./modules/modal.js";

//? innerHTML

document.body.innerHTML = `<header class="page-header">
<div class="container">
  <div class="logo">
    <h1>MedZona</h1>
  </div>
  <div class="button-wrapper">
    <button class="login-button" id="login">Login</button>
  </div>
</div>
</header>`;

//* main code

const token = "de010fb7-f827-4877-938e-9185a060e606"
function clickHandler(e) {
  if (e.target.id === "login") {
  
    let loginModal = new Modal();
    loginModal.renderModal();
    document.body.prepend(loginModal.modalBackground);
    loginModal.modalBackground.hidden = true;
    loginModal.listener()
  } else if (
    e.target.classList.contains("modal-background") ||
    e.target.classList.contains("modal-close")
  ) {
    document.querySelector(".modal-background").remove();
  }
}

document.body.addEventListener("mouseup", clickHandler);
