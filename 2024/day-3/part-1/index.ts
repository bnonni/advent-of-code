import data from '../data.js'

const corrupted = data.trim();
const pattern = /mul\([0-9]{1,3},[0-9]{1,3}\)/g;
const instructions = corrupted.match(pattern) ?? [];
let sum = 0;
instructions
    .map(instruction => instruction
        .replace('mul(', '')
        .replace(')', '')
        .split(',')
        .map(Number)
        .reduce((a, b) => sum += (a * b)));
console.log(`Sum of muls: ${sum}`);
// Sum of muls: 184576302