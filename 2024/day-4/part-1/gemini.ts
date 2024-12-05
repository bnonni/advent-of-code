import data from '../data.js';

const grid = data.trim().split('\n');

function findXMAS(grid: string[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === "X") {
                // Check all eight directions
                if (checkDirection(grid, row, col, 1, 0)) count++; // Horizontal forward
                if (checkDirection(grid, row, col, -1, 0)) count++; // Horizontal backward
                if (checkDirection(grid, row, col, 0, 1)) count++; // Vertical downward
                if (checkDirection(grid, row, col, 0, -1)) count++; // Vertical upward
                if (checkDirection(grid, row, col, 1, 1)) count++; // Diagonal down and right
                if (checkDirection(grid, row, col, 1, -1)) count++; // Diagonal down and left
                if (checkDirection(grid, row, col, -1, 1)) count++; // Diagonal up and right
                if (checkDirection(grid, row, col, -1, -1)) count++; // Diagonal up and left
            }
        }
    }

    return count;
}

function checkDirection(grid: string[][], row: number, col: number, rowIncrement: number, colIncrement: number): boolean {
    const word = "XMAS";
    for (let i = 1; i < word.length; i++) {
        const newRow = row + i * rowIncrement;
        const newCol = col + i * colIncrement;

        // Check if out of bounds or not the correct letter
        if (newRow < 0 || newRow >= grid.length || newCol < 0 || newCol >= grid[0].length || grid[newRow][newCol] !== word[i]) {
            return false;
        }
    }
    return true;
}

// Convert the grid of strings to a 2D array of characters
const grid2D: string[][] = grid.map((row) => row.split(""));

// Call the function and print the result
const xmasCount = findXMAS(grid2D);
console.log(`The word XMAS appears ${xmasCount} times in the grid.`);