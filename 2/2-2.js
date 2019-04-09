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
	let boxId1;
    let boxId2;
    let errors;
    let commonId;

    /*dataArray.forEach((line) => {
        console.log(line);
    });*/

    for (let i=0; i<dataArray.length; i++){
        // console.log(dataArray[i]);
        boxId1 = dataArray[i];

        for (let k=i+1; k<dataArray.length; k++){
            boxId2 = dataArray[k];
            errors = 0;
            
            for (let m=0; m<boxId1.length; m++) {
                if (boxId1.charAt(m) !== boxId2.charAt(m)) {
                    errors++;
                }
                if (errors > 1) {
                    break;
                }
            }
            if (errors === 1) {
                console.log(`Correct ID: ${boxId1}`)
                console.log(`Correct ID: ${boxId2}`)
                commonId = removeMismatchingLetter(boxId1, boxId2);
                break;
            }
        }
        if (errors === 1) {
            break;
        }
    }    

    endTime = new Date() - startTime;

    console.log(`Answer: ${commonId}`);
    console.log(`Elapsed time: ${endTime/1000} s`);
    
}); 

function removeMismatchingLetter(id1, id2) {

    for (let i=0; i<id1.length; i++) {
        if (id1.charAt(i) !== id2.charAt(i)) {
            return id1.substring(0, i) + id1.substring(i+1, id1.length);
        }
    }

}
