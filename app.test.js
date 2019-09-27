const { generateText } = require('./app');

test('should output name and age', () => {
    const text = generateText('Larry', 23);
    expect(text).toBe('Larry (23)');
});




