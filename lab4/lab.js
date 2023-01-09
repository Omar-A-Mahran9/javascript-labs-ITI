//Constructor Function

function Person(FName, LName, hours, meal, items) {
  this.first_Name = FName;
  this.last_Name = LName;
  this.hours = hours;
  this.meal = meal;
  this.item = items;
  this.FullName = function () {
    return `${FName} ${LName}`;
  };

  this.sleep = function () {
    if (hours > 7) {
      return `You are lazy ${this.FullName()}`;
    } else if (hours < 7) {
      return `You are tired ${this.FullName()}`;
    } else if (hours == 7) {
      return `You are happy ${this.FullName()}`;
    }
  };
  this.Eat = function () {
    if (meal == 3) {
      return "100 healthrate";
    } else if (meal == 2) {
      return "75 healthrate";
    } else if (meal == 1) {
      return "50 healthrate";
    }
  };
  this.Buy = function () {
    if (items == 1) {
      return `decrees Mony 10LE`;
    } else {
      return "wrong input";
    }
  };
}

let MyFather = new Person("Äbdullah", "Mahran", 10, 2, 1);
let brother = new Person("Mohamed", "Mahran", 3, 3);

console.log(Person);
console.log(MyFather.FullName());
console.log(MyFather.hours);
console.log(MyFather.sleep());
console.log(MyFather.Eat());
console.log(MyFather.Buy());

//Using class
/*
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
      return "100 healthrate";
    } else if (this.meal == 2) {
      return "75 healthrate";
    } else if (this.meal == 1) {
      return "50 healthrate";
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


*/
/*
const Person= {
    init(FName, LName, hours, meal,items) {
    this.first_Name = FName;
    this.last_Name = LName;
    this.hours = hours;
    this.meal = meal;
    this.item=items
    this.FullName = function () {
      return `${FName} ${LName}`;
    };
  
    this.sleep = function () {
      if (hours > 7) {
        return `You are lazy ${this.FullName()}`;
      } else if (hours < 7) {
        return `You are tired ${this.FullName()}`;
      } else if (hours == 7) {
        return `You are happy ${this.FullName()}`;
      }
    };
    this.Eat = function () {
      if (meal == 3) {
        return "100 healthrate";
      } else if (meal == 2) {
        return "75 healthrate";
      } else if (meal == 1) {
        return "50 healthrate";
      }
    };
    this.Buy = function () {
      if (items==1) {
        return `decrees Mony 10LE`;
      } else {
        return "wrong input";
      }
    };
  }
}

  const MyFather=Object.create(Person)
  MyFather.init("Äbdullah","Mahran",10,2,1)
  
  let brother = Object.create(Person)
  brother.init ("Mohamed", "Mahran", 3, 3);
  
  console.log(Person)
  console.log(MyFather.FullName())
  console.log(MyFather.hours)
  console.log(MyFather.sleep())
  console.log(MyFather.Eat())
  console.log(MyFather.Buy())

  console.log(typeof Person);
console.log(brother.FullName());
console.log(brother.hours);
console.log(brother.sleep());
console.log(brother.Eat());
console.log(brother.Buy());
*/

//factory function
/*
function Person(FName, LName, hours, meal,items) {
   return{
    FName,
   LName,
   hours,
    meal,
    items,

  FullName() {
    return `${FName} ${LName}`;
  },
  sleep() {
    if (hours > 7) {
      return `You are lazy ${this.FullName()}`;
    } else if (hours < 7) {
      return `You are tired ${this.FullName()}`;
    } else if (hours == 7) {
      return `You are happy ${this.FullName()}`;
    }
  },
  Eat() {
    if (meal == 3) {
      return "100 healthrate";
    } else if (meal == 2) {
      return "75 healthrate";
    } else if (meal == 1) {
      return "50 healthrate";
    }
  },
  Buy() {
    if (items==1) {
      return `decrees Mony 10LE`;
    } else {
      return "wrong input";
    }
  }
}
}

let MyFather=Person("Äbdullah","Mahran",10,2,1);
let brother=Person("Mohamed","Mahran",3,3)

console.log(Person)
console.log(MyFather.FullName())
console.log(MyFather.hours)
console.log(MyFather.sleep())
console.log(MyFather.Eat())
console.log(MyFather.Buy())
*/
