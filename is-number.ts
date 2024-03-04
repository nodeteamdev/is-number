/**
 * Check if the given value is a number
 * @param number
 * @returns {boolean}
 * @example
 * isNumber(1) => true
 * isNumber('1') => true
 * isNumber('1.1') => true
 * isNumber('1.1.1') => false
 * isNumber('1a') => false
 * isNumber('a') => false
 * isNumber('') => false
 * isNumber(null) => false
 * isNumber(undefined) => false
 * isNumber([]) => false
 * isNumber({}) => false
 * isNumber(NaN) => false
 * isNumber(Infinity) => false
 * isNumber(-Infinity) => false
 * isNumber(0) => true
 * isNumber(-0) => true
 * isNumber(-1) => true
 * isNumber(-1.1) => true
 * isNumber(1.1) => true
 * isNumber(1.1e3) => true
 * isNumber(1.1e-3) => true
 * isNumber(1.1e+3) => true
 */
export function isNumber(number: any): boolean {
    if (typeof number === 'number') {
        return number - number === 0;
    }
    if (typeof number === 'string' && number.trim() !== '') {
        return isFinite(+number)
    }

    return false;
}
