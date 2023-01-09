//Varibbles
let theInput = document.querySelector(".add-task input");

let theaddbutton = document.querySelector(".add-task .plus");

let taskcontainer = document.querySelector(".tsk-content");
let notaskMsg = document.querySelector(".no_task_message");
let taskcount = document.querySelector(".tsk-count span");
let taskCompleted = document.querySelector(".completed-tas span");

//focus after load page
window.onload = function () {
  theInput.focus();
};
arr=["dd"];
console.log(arr)


//add task
theaddbutton.onclick = function () {
  if (theInput.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "The input Text is Empty!",
    });
  }
  

   /*else {
    for(let inpu of arr ){
      if(theInput.value === inpu){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "The input Text is Duplicated!",
        });
      }  
      else{
        break;
      }
    }
*/
fun2();
     function fun2(){ 
    //if(theInput.value==)
    /*if(theInput.value==$("box.tsk").contents()){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The input Text is dublicated!",
          });
    }
    
    else{*/
    notaskMsg.remove();
    let mainspan = document.createElement("span");
    let deleteElemnt = document.createElement("span");
    let comElemnt = document.createElement("span");

    let text = document.createTextNode(theInput.value);
    console.log(theInput.value);
    let deletetext = document.createTextNode("Dlete");
    let comtext = document.createTextNode("Complete");
    
    comElemnt.appendChild(comtext);
    comElemnt.className = "comple";
    deleteElemnt.appendChild(deletetext);
    deleteElemnt.className = "delete";

    mainspan.appendChild(deleteElemnt);
    mainspan.appendChild(comElemnt);
    mainspan.appendChild(text);
    mainspan.className = "box-tsk";
    
    taskcontainer.appendChild(mainspan);
    arr.push(theInput.value);
    theInput.value = "";
    theInput.focus();
  }
}  

  //}




document.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    e.target.parentNode.remove();
  }
  /*if (e.target.className == "comple") {
    e.target.parentNode.c
  }
*/
  if (e.target.classList.contains("box-tsk")) {
    e.target.classList.toggle("finish");
  }
});

/*
let Delete_all = document.createElement("span");
let deleteText = document.createTextNode("Daete All");
Delete_all.appendChild(deleteText);
Delete_all.className = "dleteAll";*/