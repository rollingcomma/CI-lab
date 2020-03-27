/**
 * Description: validate and convert input to camel Case styled string
 * validation rules: string can only contains letters, numbers, underscore(_) and dollar sign($)
 *                   string can not start with numbers
 * 
 * @param {string} string
 * @return {string}
 * 
 */

const strValidator = (str) => {
    if (typeof(str) === 'string')
        if(str.match(/^[0-9a-zA-Z_$ ]+$/) == null || str.charAt(0).match(/[0-9]+$/) != null || str.length === 0) return false;
        else return true;
    else return false;
}

const strConverter = (str) => {
    const inputArr = str.split(" ");
    const outputArr = [];
    inputArr.forEach((element, index)=> {
        strLower = element.toLowerCase();
        const str = index !==0? (strLower.charAt(0).toUpperCase().concat(strLower.substr(1))):strLower;
        outputArr.push(str);
    });
    return outputArr.join('');
}

const camelCaseConverter = (input) => {
        if(strValidator(input)) {
            return strConverter(input);
        } else {
            throw new Error("input strings contain invalid value");
        }
};

module.exports = camelCaseConverter;