import { isJane, compareNumbers, } from "../../src/fundamentals-ex/comparisonExercises";
describe('Comparison Exercises', () => {
    test('using == should be equal to Jane', () => {
        /* Completa el test y completa la function isJane */
        // given
        //when
        const result = isJane();
        //then
        expect(result).toEqual('Jane');
    });

    test('using === should return 10', () => {
        /* Completa el test y completa la function compareNumbers */
        //given
        let number1 = '10';
        let number2 = '10';
        //when 
        const result = compareNumbers();
        //then
        expect(result).toEqual(10);
    });

    test.skip('quantity are greater than 10', () => {
        /* Completa el test y completa la function isGreaterThan10 */
        const quantity = 15;

        expect(result).toBeGreaterThan(10);
    });
});

describe('Logical comparison', () => {
    test.skip('should be greater than 10 and equal to 20', () => {
        /* Completa el test y completa la function isGreaterThan10AndEqualTo20 */
        const numb = 20;
        
        expect(result).toBeGreaterThan();
        expect(result).toEqual(20);
    });
});