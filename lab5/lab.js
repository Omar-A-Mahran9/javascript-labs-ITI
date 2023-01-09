
class Person {
  constructor(FName, LName, hours, meal, items) {
    this.first_Name = FName;
    this.last_Name = LName;
    this.hours = hours;
    this.meal = meal;
    this.item = items;
    
  }
  FullName() {
    return `${this.first_Name} ${this.last_Name}`;
  }

  sleep() {
    if (this.hours > 7) {
      return `You are lazy ${this.FullName()}`;
    } else if (this.hours < 7) {
      return `You are tired ${this.FullName()}`;
    } else if (this.hours == 7) {
      return `You are happy ${this.FullName()}`;
    }
  }
  Eat() {
    if (this.meal == 3) {
      return this.healthrate = 100;
    } else if (this.meal == 2) {
      return this.healthrate=75;
    } else if (this.meal == 1) {
      return this.healthrate=50;
    }
  }
  Buy() {
    if (this.items == 1) {
      return `decrees Mony 10LE`;
    } else {
      return "wrong input";
    }
  }
}
/*
let MyFather = new Person("Äbdullah", "Mahran", 4, 2, 1);
let brother = new Person("Mohamed", "Mahran", 3, 3);

console.log(typeof Person);
console.log(MyFather.FullName());
console.log(MyFather.hours);
console.log(MyFather.sleep());
console.log(MyFather.Eat());
console.log(MyFather.Buy());


console.log(typeof Person);
console.log(brother.FullName());
console.log(brother.hours);
console.log(brother.sleep());
console.log(brother.Eat());
console.log(brother.Buy());
console.log("*".repeat(30))
*/
class Employee extends Person {
   static id = 0;
  constructor(fname,lname,hour, meal, item ,email,workmood,ismanager,salary){
    super(fname,lname,hour, meal, item)

    
    this.email=email;
    this.workmood=workmood;
    this.ismanager=ismanager;
    this.healthratee=(this.Eat()<= 100)?this.Eat():"wrong input must be betwwen 0 to 100";
    this.salaray=(salary>=1000)?salary:"Must be 1000 or more"; 
    Employee.id++

  }
  static id(){
    
    return this.id
  }
  work(){
    if(this.hours==8){
      return "happy man because he work 8 hours per day";
    }
    else if (this.hours>8){
      return "tired man because he work greater than 8 hours per day"
    }
    else if (this.hours<8){
      return "lazy man because he work less than 8 hours per day"
    }
  }
  
  
}

const page=`<input type="button" onclick="fun()" id="buttn" value="add">` ;
document.write(page);
function fun(){
  const mngr=`<input type="button" onclick="fun1()" id="buttn" value="mngr">` ;
  const panrml=`<input type="button" onclick="fun2()" id="buttn" value="nrml">` ;
  const q=`<input type="button" onclick="fun2()" id="buttn" value="quit">` ;
  document.write(mngr);
  document.write(panrml);   
  document.write(q);   
}

var AllEmployees=[];

function fun1(){  
  const fName = prompt("ËNTER YOUR FIRST NAME ");
  const lName = prompt("ËNTER YOUR last NAME ");
  const email = prompt("Enter your Email please")
  const hour =prompt("Enter your hour work");
  const meal =prompt("Enter your number of meal");
  const item =prompt("Enter your number of item");
  const salary =prompt("Enter your Salary");
  const emplyee = new Employee(fName, lName, hour, meal,item,email,"Default","MASENGER",salary);
  
  AllEmployees.push({"ÏD": Employee.id ,
  "name":emplyee.FullName(),
   "hourWork":emplyee.work(),
   "salary":emplyee.salaray,
  "healthrate":emplyee.healthratee,
})
//console.log(AllEmployees)
/*console.log(emplyee.work());
console.log(emplyee.hours);
console.log(emplyee.item);


console.log(emplyee.FullName());



console.log(emplyee.id);
console.log(emplyee.email);
*/
}

function fun2(){
  document.write(AllEmployees[0][1].val)
  
  
}

/*
const devee = new Employee("Mohamed", "Moahran", 3, 3,12,2,"mohmed@oo.com",3,12,10300);
console.log(Employee.id);

AllEmployees=[{"ÏD": devee.id ,
              "name":devee.FullName(),
               "hourWork":devee.work(),
               "salary":devee.salaray,
              "healthrate":devee.healthratee,
            },{"ÏD": devee.id ,
            "name":devee.FullName(),
             "hourWork":devee.work(),
             "salary":devee.salaray,
            "healthrate":devee.healthratee,
          }];


          console.log(AllEmployees)

console.log(deve.work());
console.log(deve.hours);
console.log(deve.item);


console.log(deve.FullName());



console.log(deve.id);
console.log(deve.email);

console.log(deve.Eat())
console.log(deve.healthrate);
console.log(deve.healthratee);
console.log(deve.salaray)

console.log("*".repeat(40))
*/


class Office {
  constructor(name,employees){
    this.name=name;
    this.employees=AllEmployees;
    const employe =new Employee ();
   //console.log(employe.FullName)
  }
  
  getAllEmployees(){
    console.log("dkfjdf")
    console.log(this.employees)
    AllEmployees.forEach(function(entry){
      console.log(entry);
    })
  }
  getEmployee(){

  }
  fire(){

  }
  hire(){
    
  }
 
}


const omar=new Office();
omar.getAllEmployees();

//console.log(omar.name);




