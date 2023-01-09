var qustin = `<input type="number" id="tupe" placeholder="type of hour 24 or 12">
              
              <button onclick="fun()">calc</button> `
document.write(qustin);
const date = new Date();
    console.log(date)
    console.log(date.getHours());
    console.log(date.getDate());
    console.log(date.getFullYear());
function Display12style() {
    const date = new Date();

    const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const am_pm = date.getHours() >= 12 ? "PM" : "AM";
     
    time = hours + " "+am_pm;
    return time;
}




function Display24style() {
    const date = new Date();
    const hours = date.getHours() 
    const am_pm = date.getHours() <= 24 || date.getHours() >= 12 ? "PM" : "AM";
     
    time = hours + " "+am_pm;
    return time;
}
function fun(){

  var qustion=document.getElementById("tupe").value;
 
  if (qustion==12){
    Swal.fire({
      title: "WELCOME",
      html: ` <b><h3>${Display12style()}</h3></b>`,
      icon: "success",
    })
          }
  else if (qustion==24){
    Swal.fire({
      title: "WELCOME",
      html: ` <b><h3>${Display24style()}</h3></b>`,
      icon: "success",
    })
          }
  else{
      alert("Please enter 24 or 12");
  }            
  }