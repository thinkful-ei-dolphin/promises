function turnOnComputer(os) {
    if(os === 'Windows'){
        return Promise.resolve('YAY WINDOWS')
    } else if(os ==='Mac'){
        return Promise.resolve('YAY MAC!');
    }
    else{
        return Promise.reject('BOOO other OS');
    }
}
turnOnComputer('DOS').then(resp=>console.log(resp)).catch(err=>console.log(err));