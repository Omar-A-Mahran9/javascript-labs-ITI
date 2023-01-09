var slider_container = Array.from(
  document.querySelectorAll(".slide-container img")
);

var count = slider_container.length;

var current_slide = 1;

var number_of_slide = document.getElementById("slide-number");

var nexbtn = document.getElementById("Next");

var perbtn = document.getElementById("prev");

nexbtn.onclick = nextslide;
perbtn.onclick = prevslide;

var paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pageidul");

for (var i = 1; i <= count; i++) {
  var pagination = document.createElement("li");
  pagination.setAttribute("id", i);
  pagination.appendChild(document.createTextNode("-"));
  paginationElement.appendChild(pagination);
}

document.getElementById("indicators").appendChild(paginationElement);

var paginationli = document.getElementById("pageidul");

var paginationbull = Array.from(document.querySelectorAll("#pageidul li "));

for(var i=0;i<paginationbull.length; i++){
paginationbull[i].onclick=function(){
    current_slide=parseInt(this.getAttribute('id'));
    checker();
}
}

checker();

function checker() {
  number_of_slide.textContent = "Slide#" + current_slide + " OF " + count;
  removeAllActive();
  slider_container[current_slide - 1].className = "active";
  paginationElement.children[current_slide - 1].className = "active";

  if (current_slide == 1) {
    perbtn.classList.add("disabled");
  } else {
    perbtn.classList.remove("disabled");
  }

  if (current_slide == count) {
    nexbtn.classList.add("disableed");
  } else {
    nexbtn.classList.remove("disableed");
  }
}

function removeAllActive() {
  slider_container.forEach(function (img) {
    img.classList.remove("active");
  });

  paginationbull.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}

function nextslide() {
  if (nexbtn.classList.contains("disableed")) {
    return false;
  } else {
    current_slide++;
    checker();
  }
}
function prevslide() {
  if (perbtn.classList.contains("disabled")) {
    return false;
  } else {
    current_slide--;
    checker();
  }
}
