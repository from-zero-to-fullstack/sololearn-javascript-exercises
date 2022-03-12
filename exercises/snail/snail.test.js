const { climb } = require('./snail');

test('The snail will climb 31 steps in 6 days', () => {
    const expected = 6;
    const actual = climb(31);

    expect(actual).toBe(expected);
});

test('The snail will climb 42 steps in 8 days', () => {
    const expected = 8;
    const actual = climb(42);

    expect(actual).toBe(expected);
});

test('The snail will climb 128 steps in 26 days', () => {
    const expected = 26;
    const actual = climb(128);

    expect(actual).toBe(expected);
});