function speedDetector(speed) {
    // Define the required speed limit
    const reqSpeed = 70;

    // Initialize the total points to 0
    let totalPoints = 0;

    // Calculate the demerit points (excess speed over the limit)
    const demerit = reqSpeed - speed;

    // Check if the speed is less than the required speed limit (70)
    if (speed < reqSpeed) {
        console.log("Speed is okay."); // Return "okay" if the speed is within the limit
    } else if (speed > reqSpeed) {
        // Calculate the demerit points and add them to the total points
        const points = Math.floor(demerit / 5);
        totalPoints = totalPoints + points;

        // Check if the total points exceed the maximum allowed points (12)
        if (totalPoints > 12) {
            return "License expired"; // Return "License expired" if total points exceed the limit
        }
    }
}