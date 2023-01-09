let username = document.createElement("input");
username.setAttribute("id", "username");
username.setAttribute("type", "text");
username.setAttribute("placeholder", "yuour username");

let pass = document.createElement("input");
pass.setAttribute("id", "pass");
pass.setAttribute("type", "password");
pass.setAttribute("placeholder", "your password");

let button = document.createElement("button");
button.setAttribute("onclick", "fun()");
button.innerText = "submit";

document.body.appendChild(username);
document.body.appendChild(pass);
document.body.appendChild(button);

class vali {
  constructor(usr, pass) {
    this.user = usr;
    this.pass = pass;
  }
  userrrr() {
    if (this.user == "admin" && this.pass == "421$$") {
      Swal.fire({
        title: "WELCOME",
        html: `login success`,
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Sorry !!",
        html: `data is wrong`,
        icon: "error",
      });
    }
  }
}

function fun() {
  var userr = document.getElementById("username").value;
  console.log(userr);
  var passs = document.getElementById("pass").value;
  console.log(passs);
  const ussser = new vali(userr, passs);
  console.log(ussser.user);
  console.log(ussser.pass);
  ussser.userrrr();
}
