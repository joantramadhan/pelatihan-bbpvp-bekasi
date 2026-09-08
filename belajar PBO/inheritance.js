class parent {
    constructor(greeting){
        this.greeting = greeting;
    }
    //method
    parentsay() {
        console.log(`${this.greeting}, this is parent class`)
    }
}

class child extends parent {
    constructor(greeting){
        super(greeting)
    }

    child var console{
        console.log(`${this.greeting} this is child class`)
    }
}


var parent1 = new parent("hai");
parent1.parentsay();

var child1 = new child("hallo");
child.childsay();