const moment = require('moment');

var generateMessage = (from, text) => {
    return {
        from, 
        text,
        createdAt: moment().valueOf()
    }
};

generateLocationMessage = (from, latitude, lognitude) => {
    return {
        from, 
        url: `https://www.google.fi/maps?q=${latitude},${lognitude}`, 
        createdAt: moment().valueOf()
    }
};


module.exports = {generateMessage, generateLocationMessage};