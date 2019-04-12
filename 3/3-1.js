const fs = require('fs')

let startTime = new Date();
let endTime;
let answer;

const FILE = './input.txt'; 

// console.log(__dirname);


let overLapCounter = 0;
const matrix = new Array(1000);
for (let i=0; i<matrix.length; i++) {
    matrix[i] = new Array(1000);
}
// console.log(matrix[5][5] === undefined);
 



fs.readFile(FILE, 'utf-8', (err, data) => { 
   	if (err) throw err;
    if (data.length === 0) throw new Error(`No data in file '${FILE}'`);
  
    const dataArray = data.split(/\r\n|\n/);

    //console.log(dataArray);
	
    /*dataArray.forEach((line) => {
        console.log(line);
    });*/

    for (let i=0; i<dataArray.length; i++){
    // for (let i=0; i<1; i++){
        // console.log(dataArray[i]);
        let details = dataArray[i].split(" ");
        let coordinates = details[2].split(",");
        let xCoord = parseInt(coordinates[0]);
        let yCoord = coordinates[1];
        yCoord = parseInt(yCoord.split(":")[0]);
        // console.log(xCoord, yCoord);

        let size = details[3].split("x");
        let width = parseInt(size[0]);
        let height = parseInt(size[1]);
        // console.log(details);
        // console.log(coordinates);
        //console.log(size);
        // console.log(width, height);
        populateMatrix(xCoord, yCoord, width, height);
    }    
    countOverlap();

    endTime = new Date() - startTime;

    console.log(`Answer: ${overLapCounter}`);
    console.log(`Elapsed time: ${endTime/1000} s`);
    
}); 

function populateMatrix(x, y, width, height) {
    for(let i=x; i<(x+width); i++) {
        for (let j=y; j<(y+height); j++) {
            if (matrix[i][j] === undefined) {
                matrix[i][j] = 1;
            }
            else {
                matrix[i][j]++;
            }
        }
    }
}

function countOverlap() {
    for(let i=0; i<1000; i++) {
        for (let j=0; j<1000; j++) {
            if (matrix[i][j] > 1) {
                overLapCounter++;
            }
        }
    }
}
