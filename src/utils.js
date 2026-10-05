// Utility helpers

/**
 * Check that value is a non-empty string.
 * @param {*} value - Value to check
 * @returns {boolean} true if value is a non-empty string
 */
function isNonEmptyString(value) {
    return typeof value === 'string' && value.trim().length > 0;
}

module.exports = { isNonEmptyString };
