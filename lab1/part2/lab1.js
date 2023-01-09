let app = `<input type="number" id="fnum" placeholder="First Number">
         <input type="number" id="lnum" placeholder="second Number">
         <button onclick="fn()">sum Result</button>
         <p class="p"></p>
         `;
document.write(app);

function fn() {
  var num1 = document.getElementById("fnum").value;

  var num2 = document.getElementById("lnum").value;
  var res = +num1 + +num2;
  console.log(res);

  Swal.fire({
    title: "WELCOME",
    html: `<h3>Result is</h3> ${res}`,
    icon: "success",
  });
}
