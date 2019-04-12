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
 
        let details = dataArray[i].split(" ");
        //console.log(details);
        const id = details[0];
        let coordinates = details[2].split(",");
        let xCoord = parseInt(coordinates[0]);
        let yCoord = coordinates[1];
        yCoord = parseInt(yCoord.split(":")[0]);
 
        let size = details[3].split("x");
        let width = parseInt(size[0]);
        let height = parseInt(size[1]);
 
        populateMatrix(xCoord, yCoord, width, height, id);
    }    

    let fabricId;

    for (let i=0; i<dataArray.length; i++){
    // for (let i=0; i<1; i++){
 
        let details = dataArray[i].split(" ");
        //console.log(details);
        fabricId = details[0];
        let coordinates = details[2].split(",");
        let xCoord = parseInt(coordinates[0]);
        let yCoord = coordinates[1];
        yCoord = parseInt(yCoord.split(":")[0]);
 
        let size = details[3].split("x");
        let width = parseInt(size[0]);
        let height = parseInt(size[1]);
 
        if (fabricIntact(xCoord, yCoord, width, height, fabricId)) {
            break;
        }
    }  

    // console.log(matrix);

    endTime = new Date() - startTime;

    console.log(`Answer: ${fabricId}`);
    console.log(`Elapsed time: ${endTime/1000} s`);
    
}); 

function populateMatrix(x, y, width, height, id) {
    for(let i=x; i<(x+width); i++) {
        for (let j=y; j<(y+height); j++) {
            if (matrix[i][j] === undefined) {
                matrix[i][j] = id;
            }
            else {
                matrix[i][j] = "x";
            }
        }
    }
}

function fabricIntact(x, y, width, height, id) {
    for(let i=x; i<(x+width); i++) {
        for (let j=y; j<(y+height); j++) {
            if (matrix[i][j] === "x") {
                return false;
            }
        }
    }
    return true;
}