const randomNumber = require('random-number');
var rn = require('random-number');

const getCode = () => {

    var options = {
    min:  0
    , max:  1000
    , integer: true
    }

    return randomNumber(options);
}

exports.getCode = getCode;