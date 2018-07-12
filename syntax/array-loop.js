let number = [1, 400, 20, 30, 280, 0x129, 8989, 11110, 1238, 302, 0x58];
let i = 0;
let total = 0;
while (i < number.length) {
    console.log(number[i]);
    total += number[i];
    i++;
}

console.log('Total = ' + total);
console.log(`Total = ${total}`);