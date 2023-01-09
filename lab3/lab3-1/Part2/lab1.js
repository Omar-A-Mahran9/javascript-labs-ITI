let Calc = `<form name='myform'>
<pre>
<label>Enter First number</label>
<input type='number' name="F_Num">
<pre>
<select name ="ope">
        <option vlue="+">+</option>
        <option vlue="*">*</option>
        <option vlue="/">/</option>
        <option vlue="%">%</option>
        <option vlue="-">-</option>
   </select>
<pre>
<label>Enter secound number</label>
<input type='number' name="S_Num">

<button onclick="login()">Submit</button>

</form>`;

document.write(Calc);

function login() {
  var FNUM = +document.getElementsByName("F_Num")[0].value;

  var SNum = +document.getElementsByName("S_Num")[0].value;

  var opee = document.getElementsByName("ope")[0].value;
  opee == "+"
    ? document.write(FNUM + SNum)
    : opee == "-"
    ? document.write(FNUM - SNum)
    : opee == "/"
    ? document.write(FNUM / SNum)
    : opee == "%"
    ? document.write(FNUM % SNum)
    : opee == "*"
    ? document.write(FNUM * SNum)
    : alert("operator error");

}
