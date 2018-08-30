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
