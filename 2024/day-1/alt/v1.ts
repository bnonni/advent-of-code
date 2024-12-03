import data from '../data.js'

function historianHysteria(locationIds: number[][]): any {
    const distances: number[] = [];
    const G1 = locationIds[0];
    const G2 = locationIds[1];
    const len = G1.length;
    for (let i = 0; i < len; i++) {
        let smallest1 = Infinity, smallest2 = Infinity;
        let smallest1Index = -1, smallest2Index = -1;
        for (let j = 0; j < G1.length; j++) {
            const temp1 = G1[j];

            if (temp1 < smallest1) {
                smallest1 = temp1;
                smallest1Index = j
            }
        }
        G1.splice(smallest1Index, 1);

        for (let k = 0; k < G2.length; k++) {
            const temp2 = G2[k];
            if (temp2 < smallest2) {
                smallest2 = temp2;
                smallest2Index = k
            }
        }
        G2.splice(smallest2Index, 1);


        const distance = Math.abs(smallest1 - smallest2);
        distances.push(distance)
    }
    return distances.reduce((acc, curr) => acc + curr, 0);
}

const lines = data.trim().split('\n');
const group1: number[] = [];
const group2: number[] = [];
for (const line of lines) {
    const [left, right] = line.trim().split(/\s+/).map(Number);
    group1.push(left);
    group2.push(right);
}
const locationIds = [group1, group2];
const distance = historianHysteria(locationIds);
console.log(`The distance is ${distance}`);