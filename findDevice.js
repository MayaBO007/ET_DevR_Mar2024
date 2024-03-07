function extractDeviceName(userAgent) {
    // Find the position of "(" and ";"
    const openParenIndex = userAgent.indexOf('(');
    const firstSemicolonIndex = userAgent.indexOf(';');

    // Check if both "(" and ";" are found
    if (openParenIndex !== -1 && firstSemicolonIndex !== -1) {
        // Extract the substring between "(" and ";"
        const deviceName = userAgent.substring(openParenIndex + 1, firstSemicolonIndex).trim();
        return deviceName;
    } else {
        // Return null if "(" or ";" is not found
        return null;
    }
}

// // Usage:
// const userAgent = navigator.userAgent;
// const deviceName = extractDeviceName(userAgent);
