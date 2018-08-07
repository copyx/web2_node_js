// 자바스크립트의 타입은 Primitive type, Reference type 두 가지로 나뉨.

const a = 1;
const b = 'as';
const c = false;
let d;
const e = null;

// Number, String, Boolean, null, undefined
// 변수의 주소에 값이 그대로 들어감.

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);
console.log(`d = ${d}`);
console.log(`e = ${e}`);

// Object
// - Array
// - Function
// - RegExp
// 변수의 주소에 값이 저장된 주소가 들어감.

let f = {
  a: 1,
  b: 'as',
};

console.log(`f.a = ${f.a}`);
console.log(`f.a = ${f.b}`);

// f에는 객체의 주소값이, 객체의 각 프로퍼티들은 해당하는 값의 주소값이 저장됨.

let g = f;

g.a = 2;
g.b = 'zx';

console.log(`f.a = ${f.a}`);
console.log(`f.a = ${f.b}`);

// g에는 f의 주소값이 들어가므로 g를 수정하면 f가 수정됨.

f = 'as';
g = 'get';

// 객체의 주소를 저장하는 변수가 없어지면 Garbage Collector가 지움.
