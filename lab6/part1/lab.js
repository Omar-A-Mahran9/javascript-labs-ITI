class login {
  constructor(name, pass) {
    if (name == "admin" && pass == 123) {
      return document.write(`Welcome ${name}`);
    } else {
      return document.write(`this name ${name} not register`);
    }
  }
}

const submit = document.querySelector(".submit");
const user = document.querySelector(" .username");
const pass = document.querySelector(".pass");
submit.onclick = function () {
const usser = new login(user.value, pass.value);
}; /*
submit.onclick = function () {
  if (user.value == "admin" && pass.value == 123) {
    Swal.fire({
      icon: "success",
      title: "Welcome",
      text: "not registered",
    });
  } else {
    alert("notRegister")
  }
};
//const pass =form.elements("pass");
//let usernm=user.value
//console.log(usernm);
//document.write(pass.value);

//const llogin =new login();
*/
