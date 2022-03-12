const each = require('jest-each').default;
const { convert, parseToFloat } = require('./currency-converter-op3');

test('If convert method returns the same number', () => {
    var expected = 10;
    var actual = convert(10, 1);

    expect(actual).toBe(expected);
});

describe('If convert method', () => {
    each([
        [100, 1.1, 110],
        [999, 0.1, 99.9],
        [100, 0.3333, 33.33],
        [100, -1.2, -120],
        [-100, 1.1, -110]
    ]).test('with %s multiplied by %s returns %s', (amount, rate, expected) => {
        var actual = convert(amount, rate);

        expect(actual).toBeCloseTo(expected);
    });
});

test('If parseToFloat throws an error when sending invalid letters', () => {
    const input = 'some text';

    validateIfThrows(input);
});

test('If parseToFloat throws an error when sending number 0', () => {
    const input = 0;

    validateIfThrows(input);
});

function validateIfThrows(input) {
    expect(() => parseToFloat(input)).toThrow();
    expect(() => parseToFloat(input).message.toBe('You need to input a valid number!'));
}