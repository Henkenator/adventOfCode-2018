const fs = require('fs');
const {sharedFunction} = require('./shared.js');

const startTime = new Date();
let endTime;
let answer;

const FILE = './input.txt'; 

// console.log(__dirname);
 

fs.readFile(FILE, 'utf-8', (err, data) => { 
   	if (err) throw err;
    if (data.length === 0) throw new Error(`No data in file '${FILE}'`);
  
    const dataArray = data.split(/\r\n|\n/);
	
    /*dataArray.forEach((line) => {
        console.log(line);
    });*/

    /*for (let i=0; i<dataArray.length; i++){
        console.log(dataArray[i]);
    }*/    
    // sharedFunction();

    endTime = new Date() - startTime;

    console.log(`Answer: ${answer}`);
    console.log(`Elapsed time: ${endTime/1000} s`);
    
}); 
