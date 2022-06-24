import { returnAString, returnHello, concatenateStrings} from "../../src/fundamentals-ex/stringExercises";

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

    test.skip('should return letter g', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveOneLetter para que devuelva la letra g de la variable configurada */
        
        expect().toBe('g');
    });

    test.skip('should return -1', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveTheIndexOfWord */

        expect().toEqual(-1);
    });

    test.skip('should return "Give a Man a Pussy Cat" ', () => {
        /* Añade las líneas necesarias al test / Modifica la function replaceFishWords */

        expect().toBe('Give a Man a Pussy Cat');
    });

    test.skip('should return "RIDE HIM, COWBOY!"', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveAllLettersInUppercase */
        
        expect().toBe('RIDE HIM, COWBOY');
    });

    test.skip('should return "Hands Down"', () => {
        /* Añade las líneas necesarias al test y modifica la function removeWhiteSpace */

        expect().toBe('Hands Down');
    });
});