var filterbookpromise = require('./promise2.js')


async function panggil () {
    try{
    var resault1 = await filterbookpromise(true, 50)
    console.log(resault1);
    var resault3 = await filterbookpromise(true, 20)
    console.log(resault3);
    var resault2 = await filterbookpromise(false, 250)
    console.log(resault2);

    
        
    }catch(error){
        console.log(error.message);
    }
}

panggil()