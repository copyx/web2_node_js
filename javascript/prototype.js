// 5-1 prototype과 constructor, __proto__
// 생성자 함수(constructor)로 new 연산자를 이용해 instance를 만들면,
// 생성자함수의 prototype 이라는 프로퍼티가 instance의 __proto__ 프로퍼티로 전달됨.
// prototype과 __proto__는 같은 객체를 참조함.
// 그런데 __proto__는 내부 프로퍼티에 접근할 때 __proto__ 를 생략 가능.
// 따라서 instance를 통해 __proto__ 의 프로퍼티에 접근하는 모양을 취할 수 있음.(실제는 아니지만)

// 예제 1
function Person(n, a) {
  this.name = n;
  this.age = a;
}

const gomu = new Person('고무곰', 30);
const gomuClone1 = new gomu.__proto__.constructor('고무곰_클론1', 10);
const gomuClone2 = new gomu.constructor('고무곰_클론2', 25);
const gomuProto = Object.getPrototypeOf(gomu);
const gomuClone3 = new gomuProto.constructor('고무곰_클론3', 20);
const gomuClone4 = new Person.prototype.constructor('고무곰_클론4', 15);

console.log(gomuClone1);
console.log(gomuClone2);
console.log(gomuClone3);
console.log(gomuClone4);
