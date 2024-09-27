function encode(string) {
    if (string.split('').every(item => item === string[0])) return `${string.length},${string[0]}`
    if (string.length === 0) return "0,"

    let half = Math.floor(string.length / 2);
    let leftSide = string.slice(0, half);
    let rightSide = string.slice(half);

    let left = encode(leftSide);
    let right = encode(rightSide);

    
    return `${string.length}, [${left}${right}]`;

}

function decode(code) {
    return "";
}

console.log(encode('Codewars'));
