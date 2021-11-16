let operatingSystem = "DOS";

function turnOnComputer(os) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(os === 'DOS') return reject(`We don't use that anymore`);
        return resolve(`Welcome to ${os}`);      
      
    }, 2500);
  });
}

console.log("Turning on your computer...");

turnOnComputer(operatingSystem).then((completed) => {
 console.log(completed)
}).catch(err=>console.log(`Error:${err}`));
