const fs = require('fs')

let startTime = new Date();
let endTime;
let answer;

const FILE = './input.txt'; 

// console.log(__dirname);
 

fs.readFile(FILE, 'utf-8', (err, data) => { 
   	if (err) throw err;
    if (data.length === 0) throw new Error(`No data in file '${FILE}'`);
  
    const dataArray = data.split(/\r\n|\n/);

    let twiceCounter = 0;
    let thriceCounter = 0;
	
    dataArray.forEach((line) => {

        const obj = {};

        for (let i=0; i<line.length; i++) {
            typeof obj[line.charAt(i)] === 'undefined' ? obj[line.charAt(i)] = 1 : obj[line.charAt(i)]++;     
        }

        const letterFrequencies = Object.values(obj);
        if (letterFrequencies.includes(2)) {
            twiceCounter++;
        }
        if (letterFrequencies.includes(3)) {
            thriceCounter++;
        }

    });

    console.log(`Two occurences: ${twiceCounter}`);
    console.log(`Three occurences: ${thriceCounter}`);

    endTime = new Date() - startTime;

    console.log(`Answer: ${twiceCounter * thriceCounter}`);
    console.log(`Elapsed time: ${endTime/1000} s`);
    
}); 
