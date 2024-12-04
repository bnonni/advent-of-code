import { appendFileSync, writeFileSync } from 'fs';
import data from '../data.js';

const outlog = `${process.cwd()}/2024/day-3/part-2/out.log`;
writeFileSync(outlog, '');

let sum = 0
let enabled = true;

const corrupted = data.trim();
const blocks = corrupted.split(/(do\(\)|don't\(\))/);

appendFileSync(outlog, `${blocks.join('')}\n`);

blocks.forEach(block => {
    if (block === 'do()') {
        enabled = true;
    } else if (block === "don't()") {
        enabled = false;
    } else if (enabled) {
        const mulMatches = block.match(/mul\(\d+,\d+\)/g) ?? [];
        mulMatches.forEach(mul => {
            const [a, b] = mul
                .replace('mul(', '')
                .replace(')', '')
                .split(',')
                .map(Number);
            sum += a * b;
        });
    }
});
console.log(`Sum of muls: ${sum}`);
// Sum of muls: 93975046 - Wrong
// Sum of muls: 80300150 - Wrong
// Sum of muls: 118173507 - Correct