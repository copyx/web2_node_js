let members = ['jk', 'hy', 'cp'];
console.log(members[1]);

let i = 0;
while (i < members.length) {
    console.log(`array[${i}] =>`, members[i]);
    i++;
}

let roles = {
    'programmer': 'jk',
    'designer': 'cp',
    'journalist': 'hy'
};

console.log(roles.programmer);
console.log(roles['designer']);
for (let name in roles) {
    console.log('object =>', name, ', value => ', roles[name]);
}
