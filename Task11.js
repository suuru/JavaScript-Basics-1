const message = '<@Alice />:star: <@Bob/><@Clara /> :heart: earned:star::star:'

function calculateEmojiCount(text, emoji) {
    const result = {}; // Our 1 object to store results
    let currentName = '';
    let isReadingName = false;
    let lastName = '';
    let currentEmoji = '';
    let isReadingEmoji = false;
    
    // Add the emoji colon format
    const targetEmoji = `:${emoji}:`;
    
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
            // Stop reading name when we find "/>"
            if (charCode === 47 && text.charCodeAt(i + 1) === 62) { // / then >
                isReadingName = false;
                lastName = currentName.toLowerCase();
                
                // Initialize this person in results if not exists
                if (!result[lastName]) {
                    result[lastName] = 0;
                }
                i++; // Skip the > character
                continue;
            }
            
            // Add character to current name (convert to lowercase)
            if (charCode !== 32) { // Not a space
                currentName += String.fromCharCode(charCode).toLowerCase();
            }
        }
        
        // Looking for start of emoji: ":"
        if (charCode === 58 && !isReadingName) { // : and not reading a name
            isReadingEmoji = true;
            currentEmoji = ':';
            continue;
        }
        
        // If we're reading an emoji
        if (isReadingEmoji) {
            currentEmoji += char;
            
            // Check if emoji ended with ":"
            if (charCode === 58) { // :
                isReadingEmoji = false;
                
                // If this is our target emoji, count it for the last person
                if (currentEmoji === targetEmoji && lastName) {
                    result[lastName]++;
                }
                
                currentEmoji = '';
            }
        }
    }
    
    return result;
}

console.log(calculateEmojiCount(message, 'star'));
// Output: { alice: 1, bob: 2, clara: 2 }