const regexConstants = require('./constants.js');

function isValidEmail(value, regexPattern = regexConstants.standardEmailRegex) {
    try {
        return regexPattern.test(value);
    } catch (error) {
        console.log(`Invalid Regex Format: '${regexPattern}'`, error);
    }
    
}

function isValidIPAddressIPV4(value, regexPattern = regexConstants.IPV4Regex) {
    try {
        return regexPattern.test(value);
    } catch (error) {
        console.log(`Invalid Regex Format: '${regexPattern}'`, error);
    }
}

function isValidIPAddressIPV6(value, regexPattern = regexConstants.IPV6Regex) {
    try {
        return regexPattern.test(value);
    } catch (error) {
        console.log(`Invalid Regex Format: '${regexPattern}'`, error);
    }
}

function isValidUrl(value, regexPattern = regexConstants.urlRegex) {
    try {
        return regexPattern.test(value);
    } catch (error) {
        console.log(`Invalid Regex Format: '${regexPattern}'`, error);
    }
}

function isValidSSN(value, regexPattern = regexConstants.ssnRegex) {
    try {
        return regexPattern.test(value);
    } catch (error) {
        console.log(`Invalid Regex Format: '${regexPattern}'`, error);
    }
}

function isValidMACAddress(value, regexPattern = regexConstants.macAddressRegex) {
    try {
        return regexPattern.test(value);
    } catch (error) {
        console.log(`Invalid Regex Format: '${regexPattern}'`, error);
    }
}

function isValidPhoneNumber(value, regexPattern = regexConstants.phoneNumberRegx) {
    try {
        return regexPattern.test(value);
    } catch (error) {
        console.log(`Invalid Regex Format: '${regexPattern}'`, error);
    }
}

function isValidZipCode(value, regexPattern = regexConstants.zipCodeRegex) {
    try {
        return regexPattern.test(value);
    } catch (error) {
        console.log(`Invalid Regex Format: '${regexPattern}'`, error);
    }
}

module.exports = {
    isValidEmail,
    isValidIPAddressIPV4,
    isValidIPAddressIPV6,
    isValidUrl,
    isValidSSN,
    isValidMACAddress,
    isValidPhoneNumber,
    isValidZipCode
}