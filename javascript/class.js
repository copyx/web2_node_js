// 6-1 prototype static 메소드 및 static 프로퍼티
// instance 에서 static method, static property 들에 직접 접근 불가능
// instance 에서 (prototype)method 는 직접 접근 가능.(prototype 은 생략 가능)

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.getInformation = function (instance) {
  return {
    name: instance.name,
    age: instance.age,
  };
};

Person.prototype.getName = function () {
  return this.name;
};

Person.prototype.getAge = function () {
  return this.age;
};

const gomu = new Person('고무', 30);

console.log(gomu.getName());
console.log(gomu.getAge());

// console.log(gomu.getInformation(gomu));

console.log(Person.getInformation(gomu));

// 6-2 class 상속 구현

function Man(name, age) {
  this.name = name || 'NoName';
  this.age = age || 'NoAge';
}

Man.prototype.getName = function () {
  return this.name;
};

Man.prototype.getAge = function () {
  return this.age;
};

function Employee(name, age, position) {
  // this.name = name || 'NoName';
  // this.age = age || 'NoAge';
  this.superClass(name, age);
  this.position = position || 'NoPosition';
}

// 메소드가 중복됨
// Employee.prototype.getName = function() {
//   return this.name;
// };
//
// Employee.prototype.getAge = function() {
//   return this.age;
// };

// 제대로 상속되지 않음. 프로퍼티들이 딸려와서 원하지 않는 값이 나올 수 있음.
// Employee.prototype = new Man();
// Employee.prototype.constructor = Employee;

// Bridge 가 매번 만들어 쓰기에는 딱 한번만 사용돼서 의미가 없음.
// closure 를 이용해 함수를 만들어 두고두고 쓰거라~ by 더글라스 크락포드
// function Bridge() {}
// Bridge.prototype = Man.prototype;
// Employee.prototype = new Bridge();
// Employee.prototype.constructor = Employee;

const extendClass = (function () {
  function Bridge() {}
  return function (parent, child) {
    Bridge.prototype = parent.prototype;
    child.prototype = new Bridge();
    child.prototype.constructor = child;
    child.prototype.superClass = parent;
  };
}());
extendClass(Man, Employee);

Employee.prototype.getPosition = function () {
  return this.position;
};

const gom = new Employee('고무', 30, 'CEO');
console.dir(gom);

// ES6
class Human {
  constructor(name, age) {
    this.name = name || 'NoName';
    this.age = age || 'NoAge';
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

class Fighter extends Human {
  constructor(name, age, position) {
    super(name, age);
    this.position = position || 'NoPosition';
  }

  getPosition() {
    return this.position;
  }
}

const go = new Fighter('Fgo', 29, 'Master');
console.dir(go);
