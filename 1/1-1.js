const fs = require('fs')
 
  
// Reading data in utf-8 format 
// which is a type of character set. 
// Instead of 'utf-8' it can be  
// other character set also like 'ascii' 
fs.readFile('input.txt', 'utf-8', (err, data) => { 
   	if (err) throw err; 
  
	let currentFreq = 0;
	let freqChange = 0;
	let resultingFreq = 0;
	console.log(currentFreq);

 	const freqChanges = data.split(/\r\n|\n/);
  
    freqChanges.forEach((change) => {
  
    	freqChange = parseInt(change);
    	resultingFreq = currentFreq + freqChange;

    	console.log(`current Frequency: ${currentFreq}.	Frequency change: ${freqChange}.		Resulting frequency: ${resultingFreq}`)

    	currentFreq = resultingFreq;

  	});

  	console.log('Final frequency: ', currentFreq);
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