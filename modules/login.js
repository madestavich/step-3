class Login {
    constructor(bodyContent) {
      this.inputWrapper = document.createElement("div");
      this.inputLogin = document.createElement("input");
      this.inputPassword = document.createElement("input");
      this.submitBtn = document.createElement("button")
      this.submitBtn.textContent = "Войти"
    }
    insertElement(element, target) {
      target.append(element);
    }
    renderLoginForm() {
      this.insertElement(this.inputLogin, this.inputWrapper);
      this.insertElement(this.inputPassword, this.inputWrapper);
      this.insertElement(this.submitBtn, this.inputWrapper)
    }
    fetchLogin() {
      fetch("https://ajax.test-danit.com/api/v2/cards/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: `${this.inputLogin.value}`, password: `${this.inputPassword.value}` })
  })
    .then(response => response.text())
    .then(token => localStorage.setItem('token', token))
    .then(res => {
        document.querySelector(".modal-background").remove()
        document.querySelector(".login-button").remove()
    })
    
    //создать/показать другую кнопку
    }
    listener() {
      this.submitBtn.addEventListener("click", () => this.fetchLogin())
    }
  }
  
  export default Login;
  