function countXMAS(grid: string[]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    const target = "XMAS";
    const targetLen = target.length;
    let count = 0;

    // Helper to check bounds
    const isInBounds = (r: number, c: number) => r >= 0 && r < rows && c >= 0 && c < cols;

    // Directions: [rowOffset, colOffset]
    const directions = [
        [0, 1],  // Horizontal right
        [0, -1], // Horizontal left
        [1, 0],  // Vertical down
        [-1, 0], // Vertical up
        [1, 1],  // Diagonal down-right
        [-1, -1], // Diagonal up-left
        [1, -1],  // Diagonal down-left
        [-1, 1],  // Diagonal up-right
    ];

    // Iterate through each cell
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Check all directions
            for (const [dr, dc] of directions) {
                let match = true;
                for (let i = 0; i < targetLen; i++) {
                    const nr = r + dr * i;
                    const nc = c + dc * i;
                    if (!isInBounds(nr, nc) || grid[nr][nc] !== target[i]) {
                        match = false;
                        break;
                    }
                }
                if (match) count++;
            }
        }
    }

    return count;
}

console.log(countXMAS(data.trim().split('\n')));