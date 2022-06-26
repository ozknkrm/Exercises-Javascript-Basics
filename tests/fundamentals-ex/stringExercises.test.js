import { returnAString, returnHello, concatenateStrings, giveOneLetter, giveTheIndexOfWord, replaceFishWords, giveAllLettersInUppercase, removeWhiteSpaces} from "../../src/fundamentals-ex/stringExercises";

describe('Variables can be a string', () => {
    test('should say Hello', () => {
        /* agrega la línea que falta */
        const word = "Hello";
        const result = returnHello();
        expect(result).toBe(word);
    });

    test('should return Hello World', () => {
        /* Modifica la function returnAString del archivo stringExercises */
        //given
        const sayHiToWorld = 'Hello World'
        //when
        const result = returnAString();
        //then
        expect(result).toBe(sayHiToWorld);
    });

    test('should be return I Love JS', () => {
        /* Añade las líneas necesarias al test / Modifica la function concatenateStrings */
        // tenemos nuestra given en function
        //when
        const result = concatenateStrings();
        expect(result).toBe('I Love JS');
    });

    test('should return letter g', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveOneLetter para que devuelva la letra g de la variable configurada */
        //given ya tenemos
        //when
        const result = giveOneLetter();
        expect(result).toBe('g');
    });

    test('should return -1', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveTheIndexOfWord */
        //given ya teniamos en la function
        //when
        const result = giveTheIndexOfWord();
        expect(result).toEqual(-1);
    });

    test('should return "Give a Man a Pussy Cat" ', () => {
        /* Añade las líneas necesarias al test / Modifica la function replaceFishWords */
        //given ya tenemos
        //let phrase = 'Give a Man a Fish';
        //when
        const result = replaceFishWords();
        expect(result).toBe('Give a Man a Pussy Cat');
    });

    test('should return "RIDE HIM, COWBOY!"', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveAllLettersInUppercase */
        //given ya tenemos
        //  let phrase = 'Ride Him, Cowboy!';
        //when
        const result = giveAllLettersInUppercase();
        expect(result).toBe('RIDE HIM, COWBOY!');
    });

    test('should return "Hands Down"', () => {
        /* Añade las líneas necesarias al test y modifica la function removeWhiteSpace */
        
        const result = removeWhiteSpaces();
        expect(result).toBe('Hands Down');
    });
});