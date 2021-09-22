class Modal {
  constructor(bodyContent) {
    this.bodyContent = bodyContent;
    this.headerLogin = document.createElement("h2");
    
    this.modalWrapper = document.createElement("div");
    this.modalHeader = document.createElement("div");
    this.modalBody = document.createElement("div");
    this.modalFooter = document.createElement("div");
    this.modalBackground = document.createElement("div");
    this.closeButton = document.createElement("button");
    this.modalWrapper.classList.add("modal-wrapper");
    this.modalHeader.classList.add("modal-header");
    this.modalBody.classList.add("modal-body");
    this.modalFooter.classList.add("modal-footer");
    this.modalBackground.classList.add("modal-background");
    this.closeButton.classList.add("modal-close");
    this.closeButton.textContent = "X";
    
  }
  insertElement(element, target) {
    target.append(element);
  }
  renderModal() {
   
    this.insertElement(this.modalWrapper, this.modalBackground);
    this.insertElement(this.modalHeader, this.modalWrapper);
    this.insertElement(this.closeButton, this.modalHeader);
    this.insertElement(this.modalBody, this.modalWrapper);
    this.insertElement(this.modalFooter, this.modalWrapper);
  }
  
}

export default Modal;
