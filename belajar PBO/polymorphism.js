class vehicle{
    sound(){
        console.log("this vehicle make a sound");
    }
}

class car extends vehicle{
    sound(){
        console.log('vroom......vrom......');
    }
}

class bike extends vehicle{
    sound(){
        console.log("kring kring");
        
    }
}

var vehicle1 = new vehicle();
vehicle1.sound();

var vehicle2 = new car();
vehicle2.sound();

var vehicle3 = new bike();
vehicle3.sound();
