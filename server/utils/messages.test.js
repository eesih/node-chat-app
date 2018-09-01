const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./messages')

describe('generateMessage', () => {
    
    it('should generate correct message object', () => {
        var from = 'Eero';
        var text = 'Test text';
        var result = generateMessage(from, text);
        expect(result.from).toBe(from);
        expect(result.text).toBe(text);
        expect(result.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    
    it('should generate correct location object', () => {
        var from = 'Admin';
        var latitude = 1;
        var longitude = 2;
        var result = generateLocationMessage(from, latitude, longitude);
        expect(result.from).toBe(from);
        expect(result.url).toBe('https://www.google.fi/maps?q=1,2');
        expect(result.createdAt).toBeA('number');
    });
});