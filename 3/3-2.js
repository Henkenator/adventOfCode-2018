const fs = require('fs');
const {createMatrix, getSpecs, populateMatrix, fabricIntact} = require('./shared.js');

let startTime = new Date();
let endTime;

const FILE = './input.txt'; 



fs.readFile(FILE, 'utf-8', (err, data) => { 
    if (err) throw err;
    if (data.length === 0) throw new Error(`No data in file '${FILE}'`);
  
    const dataArray = data.split(/\r\n|\n/);

    const matrix = createMatrix(1000, 1000);

    dataArray.forEach(line => {

        const {x, y, w, h, id} = getSpecs(line);
        populateMatrix(matrix, x, y, w, h, id);
    });

    let fabricId;

    for (let i=0; i<dataArray.length; i++){

        const {x, y, w, h, id} = getSpecs(dataArray[i]);
        fabricId = id;
 
        if (fabricIntact(matrix, x, y, w, h, fabricId)) {
            break;
        }
    }

    endTime = new Date() - startTime;

    console.log(`Answer: ${fabricId}`);
    console.log(`Elapsed time: ${endTime/1000} s`);
    
}); 


