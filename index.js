class Header {
  constructor(logo, button) {
    this.header = document.createElement("header");
    this.logo = logo;
    this.button = new Button(button, "login-btn");
  }
  renderHeader(target) {
    this.header.style.height = "100px";
    target.prepend(this.header);
  }
}

class Button {
  constructor(text = "button", btnClass, width = "120px", height = "50px") {
    this.button = document.createElement("button");
    this.button.textContent = text;
    this.button.classList.add(btnClass);
    this.button.style.cssText = `
    width: ${width};
    height: ${height}
    `;
  }
  renderBtn(target) {
    target.append(this.button);
  }
  addListener(type) {
    this.button.addEventListener(type, () => {
      alert("It works");
    });
  }
}

window.onload = function () {
  let pageHeader = new Header("logo", "Sign In");
  pageHeader.renderHeader(document.body);
  pageHeader.button.renderBtn(pageHeader.header);
  pageHeader.button.addListener("click");
};
