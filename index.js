
const { uuid } = require('uuid');

function generateCubesList(length) {
    let cubesList = [];
    for (let i = 1; i <= length; i++) {
        cubesList.push(Math.pow(i, 3));
    }
    return cubesList;
}

// Usage
const cubesList = generateCubesList(10);
console.log(cubesList);


module.exports = { generateCubesList };
