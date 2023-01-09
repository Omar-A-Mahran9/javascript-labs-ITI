let app = `<input type="text" id="str" onfocus="this.value=''" placeholder="Enter a string">
         
         <button onclick="fn()">Send String</button>
         
         `;
document.write(app);

function fn() {

 var strin=document.getElementById("str").value;

if(strin.includes("a")||strin.includes("e")||strin.includes("o")||strin.includes("u")||strin.includes("i")){
console.log(strin.charAt(1));
var count=0
  for(var i=0 ; i <strin.length  ; i++){
    if(strin.charAt(i)=="a"||strin.charAt(i)=="o"||strin.charAt(i)=="e"||strin.charAt(i)=="u"||strin.charAt(i)=="i"){
      count++
    }
}
  Swal.fire({
    title: "WELCOME",
    html: `number of vowels in your string = <b><h3>${count}</h3></b>`,
    icon: "success",
  })
}
else{
  Swal.fire({
    title: "Wrong!",
    html: `This ${strin} don,t have  vowels in that string (a,e,o,u,i)`,
    icon: "error",
  });
}

}
