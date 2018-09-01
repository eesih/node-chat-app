var generateMessage = (from, text) => {
    return {
        from, 
        text,
        createdAt: new Date().getTime()
    }
};

generateLocationMessage = (from, latitude, lognitude) => {
    return {
        from, 
        url: `https://www.google.fi/maps?q=${latitude},${lognitude}`, 
        createdAt: new Date().getTime()
    }
};


module.exports = {generateMessage, generateLocationMessage};