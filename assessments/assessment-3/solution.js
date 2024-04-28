//---------------------------------------------\\
        // Challenge 1

        var challenge1 = "I Love JavaScript";
        var new1 = (challenge1.replaceAll(" ", ''))
        console.log(new1);
        
        
        //---------------------------------------------\\
                // Challenge 2

        var javascript = "javascript";
        var firstSIdx = javascript.indexOf("s");

        var pt1 = javascript[0].toUpperCase();
        var pt2 = javascript.slice(1, firstSIdx);
        var pt3 = javascript[firstSIdx].toUpperCase();
        var pt4 = javascript.slice(firstSIdx + 1);

        javascript = pt1 + pt2 + pt3 + pt4;
        console.log(javascript);
        
        
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
        var randomStringLength = randomString.length;
        var randomStringWithoutRandomCharacter = randomString.replaceAll(randomCharacter, "");
        var randomCharCount = randomStringLength - randomStringWithoutRandomCharacter.length;
        console.log(randomCharCount);