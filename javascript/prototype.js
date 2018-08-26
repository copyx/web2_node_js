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

// 5-2 메소드 상속 및 동작 원리
// 예제 1
// function Person(n, a) {
//   this.name = n;
//   this.age = a;
// }

// const gomu = new Person('고무곰', 30);
const iu = new Person('아이유', 25);

gomu.setOrder = function () {
  this.age += 1;
};
gomu.getAge = function () {
  return this.age;
};
iu.setOrder = function () {
  this.age += 1;
};
iu.getAge = function () {
  return this.age;
};

console.log(gomu);
console.log(iu);

// 예제 2
// function Person(n, a) {
//   this.name = n;
//   this.age = a;
// }
Person.prototype.setOlder = function () {
  this.age += 1;
};
Person.prototype.getAge = function () {
  return this.age;
};

// 이렇게 해도 함수들이 추가되지만, 객체지향적인 관점으로 바라보면
// 바람직하지 않은 방향으로 보인다.
// 이를테면 자식 클래스를 통해 부모 클래스에 멤버를 추가시키는 느낌!
// gomu.__proto__.setOlder = function () {
//   this.age += 1;
// };
// gomu.__proto__.getAge = function () {
//   return this.age;
// };

Person.prototype.age = 100;
gomu.__proto__.setOlder();
console.log(gomu.__proto__.getAge());
// __proto__는 prototype과 같은 객체를 참조하므로 101 출력

gomu.setOlder();
console.log(gomu.getAge());

// 5-3 prototype chaining
// Object 생성자의 prototype은 Object만을 위한 메소드를 넣을 수 없음.
// 이를 상속받는 모든 객체들이 다 사용하기 때문에.
const arr = [1, 2, 3]; // -> Array -> Object

// instance의 toString 에 직접 메소드 설정
arr.toString = function () {
  return this.join('_');
};

console.log(arr.toString()); // 1_2_3
console.log(arr.__proto__.toString.call(arr)); // 1,2,3
console.log(arr.__proto__.__proto__.toString.call(arr)); // [object Array]

// Array 생성자를 통해 모든 Array 객체에 적용
const arr2 = [1, 2, 3]; // -> Array -> Object

Array.prototype.toString = function () {
  return '[' + this.join(', ') + ']';
};

console.log(arr2.toString()); // [1, 2, 3]
console.log(arr2.__proto__.toString.call(arr)); // [1, 2, 3]
console.log(arr2.__proto__.__proto__.toString.call(arr)); // [object Array]

// Array 생성자의 prototype을 통해 toString을 다시 설정해도
// 객체에 직접 toString을 설정한 것의 우선순위가 더 높아서 그것으로 나옴.

console.log(arr.toString()); // 1_2_3
console.log(arr.__proto__.toString.call(arr)); // [1, 2, 3]
console.log(arr.__proto__.__proto__.toString.call(arr)); // [object Array]

// 예제 1
// Object의 toString
const obj = {
  a: 1,
  b: {
    c: 'c',
  },
};

console.log(obj.toString());

// Instance에 추가한 toString
// 본인은 적용되지만, 다른 객체에는 적용 안됨.
const obj1 = {
  a: 1,
  b: {
    c: 'c',
  },
  toString: function () {
    const res = [];
    for (let key in this) {
      res.push(key + ': ' + this[key].toString());
    }
    return '{' + res.join(', ') + '}';
  },
};

console.log(obj1.toString());

// Object 생성자의 prototype에 toString 추가
// 다른 모든 객체들에 적용됨
const obj2 = {
  a: 1,
  b: {
    c: 'c',
  },
};


Object.prototype.toString = function () {
  const res = [];
  for (let key in this) {
    res.push(key + ': ' + this[key].toString());
  }
  return '{' + res.join(', ') + '}';
};

console.log(obj2.toString());

// 배열까지 추가
const obj3 = {
  a: 1,
  b: {
    c: 'c',
  },
  d: [5, 6, 7],
  e: function () {},
};

Array.prototype.toString = function () {
  return `[${this.join(', ')}]`;
};

console.log(obj3.toString());
