function panggilpasien(nomor){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            
        }, 1000);
    })
}

async function prosesantrian ()
{
    try{
        console.log(await panggilpasien(1));
        console.log(await panggilpasien(11));
    }

    catch (error){
        console.log('error', error);
        
    }
}

prosesantrian();