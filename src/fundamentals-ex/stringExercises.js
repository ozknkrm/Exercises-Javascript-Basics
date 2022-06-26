export function returnHello()
{
    return 'Hello'
}

export function returnAString()
{
    /* Completa la function */
    return 'Hello World'
}

export function concatenateStrings()
{
    /* Completa la function */
    const firstWord = 'I';
    const secondWord = 'Love';
    return firstWord + " " + secondWord + " " + 'JS';
}

export function giveOneLetter()
{
    /* Completa la function */
    const dog = 'dog';
    const lastLetter = dog.charAt(2);
    return lastLetter;
}

export function giveTheIndexOfWord()
{
    const wordToSearch = 'Butterfly';
    const phrase = "Once upon a time!!!";
    const myIndex = wordToSearch.indexOf();
    const myIndex2 = phrase.indexOf();
    return myIndex, myIndex2;
}

export function replaceFishWords()
{
    let phrase = 'Give a Man a Fish';
    let otherPhrase = phrase.replace('a Fish', 'a Pussy Cat')
    return otherPhrase;
}

export function giveAllLettersInUppercase()
{
    let phrase = 'Ride Him, Cowboy!';
    let bigPhrase = phrase.toUpperCase();
    return bigPhrase;
}

export function removeWhiteSpaces()
{
    let phrase = '    Hands Down    ';
    let phraseWithoutSpaces = phrase.trim();
    return phraseWithoutSpaces;
}