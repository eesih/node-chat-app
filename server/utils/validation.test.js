const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {

    it('should reject non-string values', () => {
        var name = 1;
        var result = isRealString(name);
        expect(result).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var name = '  ';
        var result = isRealString(name);
        expect(result).toBe(false);
    });

    it('should allow string with non empty characters', () => {
        var name = ' e s ';
        var result = isRealString(name);
        expect(result).toBe(true);
    });
});
