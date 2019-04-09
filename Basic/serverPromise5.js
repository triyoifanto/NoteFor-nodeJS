const fs = require('fs');
let fileContents;

const init = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('package.json', (err, data) => { 
            if(err){
                reject(err);
            }
            else {
                resolve(data.toString());
            }
        });
    })
};


const main = () => {
    init().then(result => {
        fileContents = result;
        console.log(fileContents);
    }, err => {
        console.log(err);
    });
};

main();


