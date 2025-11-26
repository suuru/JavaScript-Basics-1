const message = 'Hey <@Alice />, you\'ve earned 1300 USDT. <@Bob /> helped yesterday so he gets 500 USDT. <@Charlie /> receives 600 USDT';

function calculateRewards(text) {
    const result = {}; // Our 1 object to store results
    let currentName = '';
    let currentAmount = '';
    let isReadingName = false;
    let isReadingAmount = false;
    let lastName = '';
    
    // Our 1 for loop - going through each character
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        const char = text[i];
        
        // Looking for start of name: "<@"
        if (charCode === 60 && text.charCodeAt(i + 1) === 64) { // < then @
            isReadingName = true;
            currentName = '';
            i++; // Skip the @ character
            continue;
        }
        
        // If we're reading a name
        if (isReadingName) {
            // Stop reading name when we find " /"
            if (charCode === 32 && text.charCodeAt(i + 1) === 47) { // space then /
                isReadingName = false;
                lastName = currentName.toLowerCase();
                i++; // Skip the / character
                continue;
            }
            
            // Add character to current name
            if (charCode !== 32) { // Not a space
                // Convert to lowercase using fromCharCode
                currentName += String.fromCharCode(charCode).toLowerCase();
            }
        }
        
        // Looking for numbers (money amounts)
        if (charCode >= 48 && charCode <= 57) { // 0-9
            currentAmount += char;
            isReadingAmount = true;
        } 
        // Stop reading amount when we find " USDT"
        else if (isReadingAmount && charCode === 32 && text.charCodeAt(i + 1) === 85) { // space then U
            isReadingAmount = false;
            
            // Save the name and amount to our result object
            if (lastName && currentAmount) {
                result[lastName] = parseInt(currentAmount);
                currentAmount = '';
                lastName = '';
            }
        }
        // If we're reading amount but hit non-digit, reset
        else if (isReadingAmount && (charCode < 48 || charCode > 57)) {
            currentAmount = '';
            isReadingAmount = false;
        }
    }
    
    return result;
}

console.log(calculateRewards(message));
// Output: { alice: 1300, bob: 500, charlie: 600 }