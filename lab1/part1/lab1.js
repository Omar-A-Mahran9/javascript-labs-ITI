let app = `<input type="text" id="fName" placeholder="FirstName">
         <input type="text" id="LName" placeholder="LastName">
         <input type="date" id="BDAY">
         <button onclick="fn()">Try it</button>
         <p class="p"></p>
         `;
document.write(app);

function fn() {
  var fname = document.getElementById("fName").value;
  console.log(fname);
  var lname = document.getElementById("LName").value;
  console.log(lname);
  var bd = document.getElementById("BDAY").value;
  console.log(bd);

  Swal.fire({
    title: "WELCOME",
    html: `<h3>${fname} ${lname}</h3>Your birthday is ${bd}`,
    icon: "success",
  });
}
