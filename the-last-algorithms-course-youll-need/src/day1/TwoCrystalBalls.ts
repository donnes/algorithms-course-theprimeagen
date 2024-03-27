// O(sqrt(N))
export default function two_crystal_balls(breaks: boolean[]): number {
    // Divide array by array square root
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    // Define the square root
    let i = jmpAmount;

    // Iterate through the array starting from the jmpAmount index
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    // Move back by jmpAmount to adjust for overshooting the break
    i -= jmpAmount;

    // Iterate through the remaining elements in the array
    for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
        // Check if the current element is a break
        if (breaks[i]) {
            return i; // Return the index of the break
        }
    }
    return -1; // Return -1 if no breaks are found
}
