import data from './data.js'

function radixSort(arr: number[]): number[] {
    const max = Math.max(...arr);
    let exp = 1;
    const output = Array(arr.length);

    while (Math.floor(max / exp) > 0) {
        const count = Array(10).fill(0);

        for (let num of arr) {
            const digit = Math.floor(num / exp) % 10;
            count[digit]++;
        }

        for (let i = 1; i < 10; i++) count[i] += count[i - 1];

        for (let i = arr.length - 1; i >= 0; i--) {
            const digit = Math.floor(arr[i] / exp) % 10;
            output[--count[digit]] = arr[i];
        }

        arr = [...output];
        exp *= 10;
    }

    return arr;
}

function calculateDistances(groupOne: number[], groupTwo: number[]): any {
    const distances: number[] = [];
    for (let i = 0; i < groupOne.length; i++) distances.push(Math.abs(groupOne[i] - groupTwo[i]))
    return distances;
}

const lines = data.trim().split('\n').map(line => line.trim().split(/\s+/).map(Number));
const group1: number[] = radixSort(lines.map(row => row[0]));
const group2: number[] = radixSort(lines.map(row => row[1]));

const distances = calculateDistances(group1, group2);
const distance = distances.reduce((acc: number, curr: number) => acc + curr, 0);
console.log(`The distance is ${distance}`);