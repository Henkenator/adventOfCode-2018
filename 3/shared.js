module.exports.getSpecs = (info) => {
    let details = info.split(" ");
    let coordinates = details[2].split(",");
    let xCoord = parseInt(coordinates[0]);
    let yCoord = coordinates[1];
    yCoord = parseInt(yCoord.split(":")[0]);

    let size = details[3].split("x");
    let width = parseInt(size[0]);
    let height = parseInt(size[1]);
    return {x: xCoord, y: yCoord, w: width, h: height};
};

const create = (amount) => new Array(amount).fill(0);
module.exports.createMatrix = (rows, cols) => create(cols).map(() => create(rows));

module.exports.populateMatrix = (matrix, x, y, width, height) => {
    for(let i=x; i<(x+width); i++) {
        for (let j=y; j<(y+height); j++) {
            matrix[i][j]++;
        }
    }
};

module.exports.countOverlap = (matrix) => {
    let counter = 0;
    matrix.forEach(cols => {
        cols.forEach(row => {
            if (row > 1) {
                counter++;
            }
        })
    });
    return counter;
};
