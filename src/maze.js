/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */
function mazeSolver(maze, index = [0, 0]) {
    const [x, y] = index;

    // Base Case 1: Check if the current position is outside the boundaries of the maze
    if (x < 0 || x >= maze.length || y < 0 || y >= maze[0].length) {
        return null;
    }

    // Base Case 2: Check if the current position is the exit
    if (maze[x][y] === 'e') {
        return '';
    }

    // Check if the current cell is blocked or visited
    if (maze[x][y] === '*' || maze[x][y] === 'visited') {
        return null;
    }

    // Mark the current cell as visited
    maze[x][y] = 'visited';

    // Try moving in all four directions recursively
    const directions = ['U', 'D', 'L', 'R'];

    for (const direction of directions) {
        let nextX = x;
        let nextY = y;

        if (direction === 'U') nextX--;
        else if (direction === 'D') nextX++;
        else if (direction === 'L') nextY--;
        else if (direction === 'R') nextY++;

        // Recursively explore the next cell in the chosen direction
        const path = mazeSolver(maze, [nextX, nextY]);

        // If a valid path is found, add the current direction to it
        if (path !== null) {
            return direction + path;
        }
    }

    // If no valid path is found, backtrack by marking the current cell as unvisited
    maze[x][y] = ' ';

    return null;
}

module.exports = mazeSolver;
