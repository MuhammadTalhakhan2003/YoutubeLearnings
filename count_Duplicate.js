function Count_Duplicate(str) {
    if (str.length === 0) return false;

    for (let i = 0; i < str.length; i++) {
        let isDuplicate = false;

        // Check if we've already counted this char
        for (let j = 0; j < i; j++) {
            if (str[i] === str[j]) {
                isDuplicate = true;
                break;
            }
        }

        // If not seen before, skip
        if (isDuplicate) continue;

        let count = 0; // reset for each new char
        for (let k = 0; k < str.length; k++) {
            if (str[i] === str[k]) {
                count++;
            }
        }

        if (count > 1) {
            console.log(str[i], "=", count);
        }
    }
}

Count_Duplicate("Talha");
