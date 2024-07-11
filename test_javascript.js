function transform(str) {
// Définition des constante
    const vowels = {
        'a': 'apa',
        'e': 'epe',
        'i': 'ipi',
        'o': 'opo',
        'u': 'upu'
    };

    
    let transformedStr = '';


    for (let char of str) {
        // Vérifie si le caractère est une voyelle
        if (vowels[char]) {
            
            transformedStr += vowels[char];
        } else {
            
            transformedStr += char;
        }
    }

    return transformedStr;
}

// Tests
console.log(transform("Bonjour")); 
console.log(transform("Ceci est un test pour HDM")); 
console.log(transform("qsdfghjklm")); 
console.log(transform("abcdefghijklmnopqrstuvwxyz")); 
