const palindromes = function (str) {
    const punctuationRegex = /\p{P}/gu;
    const spaceRegex = /\s/g;
    str = str.replaceAll(punctuationRegex, "").replaceAll(spaceRegex, "").toLowerCase();
    const oldStr = str

    return oldStr === str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
