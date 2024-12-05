import { appendFileSync, writeFileSync } from 'fs';
import data from '../data.js';

const outlog = `${process.cwd()}/2024/day-4/part-1/out.log`;
writeFileSync(outlog, '');

let total = 0;
const XMAS = /XMAS/gm;

const wordsearch = data.trim()
const rows = wordsearch.split('\n');
const rowlength = rows[0].length;

for (let row of rows) {
    total += (row.match(XMAS)?.length ?? 0) * 2;
}
appendFileSync(outlog, `-------------------- rows --------------------\n${rows.join('\n')}\n`);
appendFileSync(outlog, `-------------------- total --------------------\n${total}\n`);

const columns = [];
for (let i = 0; i < rowlength - 1; i++) {
    let column = '';
    for (let j = 0; j < rowlength; j++) {
        column += rows[j][i];
    }
    columns.push(column);
    total += (column.match(XMAS)?.length ?? 0) * 2;
}
appendFileSync(outlog, `-------------------- columns --------------------\n${columns.join('\n')}\n`);
appendFileSync(outlog, `-------------------- total --------------------\n${total}\n`);

const tlbrRows = [];
for (let i = 0; i < rowlength; i++) {
    let tlbrRow = '';
    for (let j = 0; j < rowlength; j++) {
        tlbrRow = rows[j][i];
    }
    tlbrRows.push(tlbrRow);

    total += (tlbrRow.match(XMAS)?.length ?? 0) * 2;
}

const tlbrColumns = [];
for (let i = 0; i < rowlength; i++) {
    let tlbrRow = '';
    let tlbrColumn = '';
    for (let j = 0, k = i; j < rowlength && k < rowlength; j++, k++) {
        tlbrRow = rows[i][j];
        tlbrColumn += rows[j][i];
    }
    tlbrRows.push(tlbrRow);
    tlbrColumns.push(tlbrColumn);

    total += (tlbrRow.match(XMAS)?.length ?? 0) * 2;
    total += (tlbrColumn.match(XMAS)?.length ?? 0) * 2;
}
appendFileSync(outlog, `------------ tlbrRows ------------\n${tlbrRows.join('\n')}\n`);
appendFileSync(outlog, `------------ tlbrColumns ------------\n${tlbrColumns.join('\n')}\n`);
appendFileSync(outlog, `-------------------- total --------------------\n${total}\n`);

const trblRows = [];
const trblColumns = [];
for (let i = 0; i < rowlength; i++) {
    let trblRow = '';
    let trblColumn = '';
    for (let j = 0, k = rowlength - 1 - i; j < rowlength && k >= 0; j++, k--) {
        trblRow += rows[i][k];
        trblColumn += rows[j][k];
    }
    trblRows.push(trblRow);
    trblColumns.push(trblColumn);
    total += (trblRow.match(XMAS)?.length ?? 0) * 2;
    total += (trblColumn.match(XMAS)?.length ?? 0) * 2;
}
appendFileSync(outlog, `-------------- trblRows --------------\n${trblRows.join('\n')}\n`);
appendFileSync(outlog, `-------------- trblColumns --------------\n${trblColumns.join('\n')}\n`);
appendFileSync(outlog, `-------------------- total --------------------\n${total}\n`);

// const bltrRows = [];
// const bltrColumns = [];
// for (let i = 0; i < rowlength; i++) {
//     let bltrRow = '';
//     let bltrColumn = '';

//     for (let j = i, k = 0; j >= 0 && k < rowlength; j--, k++) {
//         bltrRow += rows[j][k];
//         bltrColumn += rows[rowlength - 1 - j][k];
//     }

//     bltrRows.push(bltrRow);
//     bltrColumns.push(bltrColumn);
//     total += (bltrRow.match(XMAS)?.length ?? 0) * 2;
//     total += (bltrColumn.match(XMAS)?.length ?? 0) * 2;
// }
// appendFileSync(outlog, `-------------- bltrRows --------------\n${bltrRows.join('\n')}`);
// appendFileSync(outlog, `-------------- bltrColumns --------------\n${bltrColumns.join('\n')}`);

// const brtlRows = [];
// const brtlColumns = [];
// for (let i = 0; i < rowlength; i++) {
//     let brtlRow = '';
//     let brtlColumn = '';

//     for (let j = i, k = rowlength - 1; j >= 0 && k >= 0; j--, k--) {
//         brtlRow += rows[j][k];
//         brtlColumn += rows[rowlength - 1 - j][rowlength - 1 - k];
//     }

//     brtlRows.push(brtlRow);
//     brtlColumns.push(brtlColumn);
//     total += (brtlRow.match(XMAS)?.length ?? 0) * 2;
//     total += (brtlColumn.match(XMAS)?.length ?? 0) * 2;
// }
// appendFileSync(outlog, `-------------- brtlRows --------------\n${brtlRows.join('\n')}`);
// appendFileSync(outlog, `-------------- brtlColumns --------------\n${brtlColumns.join('\n')}`);

console.log(`The total is ${total}`);
