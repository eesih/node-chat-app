const expect = require('expect');

var {generateMessage} = require('./messages')

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