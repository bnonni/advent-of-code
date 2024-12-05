import { appendFileSync, writeFileSync } from 'fs';
import data from '../data.js';

const outlog = `${process.cwd()}/2024/day-4/part-1/out.log`;
const resultstxt = `${process.cwd()}/2024/day-4/part-1/results.txt`;
writeFileSync(outlog, '');

let totalMatches = 0;
const XMAS = /XMAS/g;
const rows = data.trim().split('\n');
const reverseRows = rows.map(row => row.split('').reverse().join(''));
appendFileSync(outlog, `-------------------- rows --------------------\n${rows}\n\n`);
appendFileSync(outlog, `-------------------- reverseRows --------------------\n${reverseRows}\n\n`);

let rowMatches = 0;
for (let row of rows) {
    rowMatches += row.match(XMAS)?.length ?? 0;
}
appendFileSync(outlog, `-------------------- rowMatches --------------------\n${rowMatches}\n\n`);
const rowMessage = `rowMatches: ${rowMatches}`;
console.log(rowMessage);

let reverseRowMatches = 0;
for (let reverseRow of reverseRows) {
    reverseRowMatches += reverseRow.match(XMAS)?.length ?? 0;
}
appendFileSync(outlog, `-------------------- reverseRowMatches --------------------\n${reverseRowMatches}\n\n`);
const reverseRowMessage = `reverseRowMatches: ${rowMatches}`;
console.log(reverseRowMessage);

let columnMatches = 0;
const rowMatrix = rows.map(row => row.split(''));
const columns = rowMatrix[0].map((_, colIndex) => rowMatrix.map(row => row[colIndex])).map(col => col.join(''));
appendFileSync(outlog, `-------------------- columns --------------------\n${columns}\n\n`);
for (let column of columns) {
    columnMatches += column.match(XMAS)?.length ?? 0;
}
appendFileSync(outlog, `-------------------- columnMatches --------------------\n${columnMatches}\n\n`);
const columnMessage = `columnMatches: ${columnMatches}`;
console.log(columnMessage);

/** --------------------------------- */
let reverseColumnMatches = 0;
const reverseColumns = columns.map(col => col.split('').reverse().join(''));
appendFileSync(outlog, `-------------------- reverseColumns --------------------\n${reverseColumns}\n\n`);
for (let reverseColumn of reverseColumns) {
    reverseColumnMatches += reverseColumn.match(XMAS)?.length ?? 0;
}
appendFileSync(outlog, `-------------------- reverseColumnMatches --------------------\n${reverseColumnMatches}\n\n`);
const reverseColumnMessage = `reverseColumnMatches: ${reverseColumnMatches}`;
console.log(reverseColumnMessage);

const n = rows[0].length;
const diagonals: string[][] = [];

for (let a = 0; a < 2 * n - 1; a++) {
    const diagonal: string[] = [];
    for (let b = 0; b < n; b++) {
        const c = a - b; // Column index
        if (c >= 0 && c < n) {
            diagonal.push(rowMatrix[b][c]);
        }
    }
    diagonals.push(diagonal);
    diagonals.push(diagonal.reverse());
}

for (let d = 0; d < 2 * n - 1; d++) {
    const diagonal: string[] = [];
    for (let e = 0; e < n; e++) {
        const f = e + (n - 1 - d); // Column index
        if (f >= 0 && f < n) {
            diagonal.push(rowMatrix[e][f]);
        }
    }
    diagonals.push(diagonal);
    diagonals.push(diagonal.reverse());
}

let diagonalMatches = 0;
for (let diagonal of diagonals) {
    diagonalMatches += diagonal.join('').match(XMAS)?.length ?? 0;
}
const diagonalMessage = `diagonalMatches: ${diagonalMatches}`;
console.log(diagonalMessage);

appendFileSync(outlog, `-------------------- diagonals --------------------\n${diagonals.join('')}\n\n`);
appendFileSync(outlog, `-------------------- diagonalMatches --------------------\n${diagonalMatches}\n\n`);

totalMatches += (
    rowMatches +
    reverseRowMatches +
    columnMatches +
    reverseColumnMatches +
    diagonalMatches
);
appendFileSync(outlog, `-------------------- totalMatches --------------------\n${totalMatches}\n\n`);
const totalMessage = `The total is ${totalMatches}`;
console.log(totalMessage);

const now = new Date().toLocaleString();
appendFileSync(
    resultstxt,
    `${now}` +
    `\n${rowMessage}` +
    `\n${reverseRowMessage}` +
    `\n${columnMessage}` +
    `\n${reverseColumnMessage}` +
    `\n${diagonalMessage}` +
    `\n${totalMessage}` +
    `\n\n`
);