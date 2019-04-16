const fs = require('fs');
const {getSpecs, createMatrix, populateMatrix, countOverlap} = require('./shared.js');

const startTime = new Date();
let endTime;

const FILE = './input.txt'; 

fs.readFile(FILE, 'utf-8', (err, data) => { 
   	if (err) throw err;
    if (data.length === 0) throw new Error(`No data in file '${FILE}'`);
  
    const dataArray = data.split(/\r\n|\n/);
    const matrix = createMatrix(1000, 1000);

    dataArray.map(line => {
        const {x, y, w, h} = getSpecs(line);
        populateMatrix(matrix, x, y, w, h);
    });

    const overLapCounter = countOverlap(matrix);

    endTime = new Date() - startTime;

    console.log(`Answer: ${overLapCounter}`);
    console.log(`Elapsed time: ${endTime/1000} s`);
    
});
