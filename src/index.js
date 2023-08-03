const tenthPart = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const fromElevenToNineteen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function convertHundreds(num) {
    if (num > 99) {
        return tenthPart[Math.floor(num / 100)] + ' hundred ' + convertTens(num % 100);
    } else {
        return convertTens(num);
    }
}

function convertTens(num) {
    if (num < 10) {
        return tenthPart[num];
    } else if (num >= 11 && num <= 19) {
        return fromElevenToNineteen[num - 11];
    } else {
        return tens[Math.floor(num / 10)] + ' ' + tenthPart[num % 10];
    }
}

module.exports = function toReadable(number) {
    if (number === 0) return 'zero';
    let result = convertHundreds(number);
    if (result[result.length - 1] === ' ') {
        result = result.slice(0, -1);
    }
    return result;
}





