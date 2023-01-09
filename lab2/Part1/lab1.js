let app = `<input type="number" id="Age" onfocus="this.value=''" placeholder="Enter Your Age">       
         <button onclick="fn()">Send Age</button>
         <button onclick="fn1()">Cancel</button>

         `;
document.write(app);

function fn() {
  var Age = document.getElementById("Age").value;
  if(Age<0){
    Swal.fire({
      title: "Wrong!",
      html: `This ${Age} can,t be number of Age`,
      icon: "error",
    });
  }
  else{
    if(Age<=10){
      Swal.fire({
        title: "WELCOME",
        html: `You have ${Age} You Are <b>Child</b>`,
        icon: "success",
      });
    }
    else if(Age>=11&&Age<=18){
      Swal.fire({
        title: "WELCOME",
        html: `You have ${Age} You Are <b>Teenger</b>`,
        icon: "success",
      });
    }
    else if(Age>=19&&Age<=50){
      Swal.fire({
        title: "WELCOME",
        html: `You have ${Age} You Are <b>Grown up</b>`,
        icon: "success",
      });
    }
    else if(Age>50){
      Swal.fire({
        title: "WELCOME",
        html: `You have ${Age} You Are <b>Old</b>`,
        icon: "success",
      });
    }
  }
  Age.remove();
}
