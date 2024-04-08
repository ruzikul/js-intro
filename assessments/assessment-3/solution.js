//---------------------------------------------\\
        // Challenge 1

        var challenge1 = "I Love JavaScript";
        var new1 = (challenge1.replaceAll(" ", ''))
        console.log(new1);
        
        
        //---------------------------------------------\\
                // Challenge 2
        
        var javascript = "javascript";
        var challenge2 = (javascript.replace("javascript", 'JavaScript'))
        console.log(challenge2);
        
        
        //---------------------------------------------\\
                // Challenge 3
        var fullName = "John Doe";
        var initial = fullName[0];
        var initial2 = fullName[5];
        var result = initial.concat(initial2);
        console.log(result);
        
        
        //---------------------------------------------\\
                // Challenge 4
        
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        var firstLetter = "a"
        var firstLetterIdx = alphabet.indexOf(firstLetter);
        var alphabetWithoutMyFirstLetter = alphabet.slice(0, firstLetter) + alphabet.slice(firstLetterIdx + 1)
        console.log(alphabetWithoutMyFirstLetter);
        
        
        //---------------------------------------------\\
                // Challenge 5
        
        var completeSentence = "The quick brown fox jumps over the lazy dog."
        var randomChar = "o"
        var completeSentenceLength = completeSentence.length;
        var completeSentenceWithoutRandomChar = completeSentence.replaceAll(randomChar, "");
        
        var randomCharCount = completeSentenceLength - completeSentenceWithoutRandomChar.length;

        console.log(randomCharCount);
        
        //---------------------------------------------\\
                // Challenge 6
        
        var randomString = "Greetings";
        var randomCharacter = "e";
        var new2 = (randomString.length)