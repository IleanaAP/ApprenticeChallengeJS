//Code challenge: JavaScript 01/07/22 - Ileana

const myArray = [1, 5, 8, 4, 9];
const totalValue = 0;

/* longer way of doing it
const mapMyArray = myArray.map(i => i * 2);

const sumMyArray = mapMyArray.reduce(
    (prevValue, curValue) => prevValue + curValue, totalValue
);
*/

const sumMyArray = myArray.map(i => i * 2).reduce((prevValue, curValue) => prevValue + curValue, totalValue);
console.log(`The sum of the mapped array is: ${sumMyArray}`);