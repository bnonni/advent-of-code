import data from './data.js'
import { appendFileSync, writeFileSync } from 'fs';

const outlog = `${process.cwd()}/2024/day-2/out.log`;

writeFileSync(outlog, '');

function checkIncreasingSafely(report: number[]): boolean {
    appendFileSync(outlog, '--------- checkIncreasingSafely ---------\n');
    for (let i = 0; i < report.length - 1; i++) {
        const current = report[i];
        const next = report[i + 1];
        if (next <= current) {
            appendFileSync(outlog, `next ${next} <= current ${current}: ${next <= current}\n`);
            return false;
        }

        if (next - current > 3) {
            appendFileSync(outlog, `next ${next} - current ${current} = ${next - current} > 3: ${next - current > 3}\n`);
            return false;
        }
    }
    return true;
}

function checkDecreasingSafely(report: number[]): boolean {
    appendFileSync(outlog, '--------- checkDecreasingSafely ---------\n');
    for (let i = 0; i < report.length - 1; i++) {
        const current = report[i];
        const next = report[i + 1];
        if (next >= current) {
            appendFileSync(outlog, `next ${next} >= current ${current}: ${next >= current}\n`);
            return false;
        }

        if (current - next > 3) {
            appendFileSync(outlog, `current ${current} - next ${next} = ${current - next} > 3: ${current - next > 3}\n`);
            return false;
        }
    }
    return true;
}

let safe = 0;
const reports = data.trim().split('\n').map(line => line.trim().split(' ').map(Number));
let i = 0;
for (let report of reports) {
    appendFileSync(outlog, `report #${i} = ${report.join(' ')}\n`);
    const isIncreasing = checkIncreasingSafely(report);
    if (isIncreasing) {
        safe++;
    } else if (checkDecreasingSafely(report)) {
        safe++;
    }
    i++;
}
const out = `The number of safe reports is ${safe}\n`;
console.log(out);
appendFileSync(outlog, out);