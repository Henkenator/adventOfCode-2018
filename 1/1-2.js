const fs = require('fs')

let startTime = new Date();
let endTime;
 

fs.readFile('input.txt', 'utf-8', (err, data) => { 
   	if (err) throw err; 
  
	let freqChange = 0;
	let resultingFreq = 0;
    let duplicateFound = false;
    let frequencies = [];
    let duplicateFreq = 0;
    let iterations = 0;

 	const freqChanges = data.split(/\r\n|\n/);
  
    while(!duplicateFound) {

        //freqChanges.forEach((change) => {

        for (let i=0; i<freqChanges.length; i++){
  
            freqChange = parseInt(freqChanges[i]);
            resultingFreq += freqChange;

            if (frequencies.includes(resultingFreq)) {
                duplicateFound = true;
                duplicateFreq = resultingFreq;
                console.log(`Freq found: ${duplicateFreq}`);
                break;
            }
            else {
                frequencies.push(resultingFreq);
            }

            // console.log(`Current Frequency: ${resultingFreq}`);

        //});
    }
        iterations++;
    }

// Gör ett script som skapar ett skelett för js-filer
    

    endTime = new Date() - startTime;

    console.log(`Elapsed time: ${endTime/1000} s (${endTime} ms)`);
    console.log(`Nbr of iterations: ${iterations}`);
    console.log(`First duplicate frequency: ${duplicateFreq}`);
}) 



/*
const reader = new FileReader();

 reader.onload = (event) => {
        const file = 'inp.txt';
        const allLines = file.split(/\r\n|\n/);
        // Reading line by line
        allLines.forEach((line) => {
            console.log(line);
        });
    };*/