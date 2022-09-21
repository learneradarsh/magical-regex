const regexConstants = require('./constants.js');


function isEmailValid(value, regexPattern = regexConstants.standardEmailRegex) {
    return regexPattern.test(value);
}

function isValidIPAddressIPV4(value, regexPattern = regexConstants.IPV4Regex) {
    return regexPattern.test(value);
}

function isValidIPAddressIPV6(value, regexPattern = regexConstants.IPV6Regex) {
    return regexPattern.test(value);
}

function isValidUrl(value, regexPattern = regexConstants.urlRegex) {
    return regexPattern.test(value);
}

function isValidSSN(value, regexPattern = regexConstants.ssnRegex) {
    return regexPattern.test(value);
}

function isValidMACAddress(value, regexPattern = regexConstants.macAddressRegex) {
    return regexPattern.test(value);
}

module.exports = {
    isEmailValid,
    isValidIPAddressIPV4,
    isValidIPAddressIPV6,
    isValidUrl,
    isValidSSN,
    isValidMACAddress
}