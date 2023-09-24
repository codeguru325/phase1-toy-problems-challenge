function calculateMarks(marks) {
    // Check if marks are within the valid range (0 to 99)
    if (marks >= 0 && marks <= 99) {
        if (marks >= 79) {
            return `${marks}: A`; // Return 'A' for marks greater than or equal to 79
        } else if (marks >= 59 && marks < 79) {
            return `${marks}: B`; // Return 'B' for marks between 59 and 78
        } else if (marks >= 49 && marks < 59) {
            return `${marks}: C`; // Return 'C' for marks between 49 and 58
        } else if (marks >= 40 && marks < 49) {
            return `${marks}: D`; // Return 'D' for marks between 40 and 48
        } else if (marks < 40) {
            return `${marks}: E`; // Return 'E' for marks less than 40
        }
    }

    // If marks are not within the valid range, return an error message
    return "Invalid marks. Marks should be between 0 and 99.";
}
