// 전역공간: 브라우저에서는 window, 노드에서는 global
console.log(this);

// 함수 내부: 브라우저에서는 window, 노드에서는 global
//          기본적으로! 달라지는 경우도 있음.
function a() {
  console.log(this);
}
a();

// 메소드 호출 시: 호출한 주체(메소드 호출 코드의 앞 부분)
const b = {
  a: function () {
    console.log(this);
  },
};
b.a();

//   - 메소드 안에서 함수를 호출하는 경우: 기본적으로는 함수니까 global
//     메소드의 this를 쓰고싶으면 스코프 체인을 이용할 수 있음.
//     메소드 안에 this를 변수에 담아놓으면, 메소드 안의 함수에서 바깥 스코프에 있는
//     this를 담아놓은 변수 사용 가능.
const d = {
  e: function() {
    function f() {
      console.log(this);
    }
    f();
  },
};
d.e();

// 콜백함수: 기본적으로는 함수 내부에서와 동일
//   - 함수의 메소드 call, apply, bind 세 가지를 이용하면 this 와 인자를 설정할 수 있음.
//     이 중에서 call, apply는 바로 호출하고, bind는 새로운 함수를 만든다.
//   - 제어권을 가진 함수가 callback의 this를 명시한 경우 그에 따름.
//   - 개발자가 this를 바인딩한 채로 callback을 넘기면 그에 따른다.
function callback(a1, a2) {
  console.log(a1, a2);
  console.log(this);
}
callback.call(this, 1, 2);
callback.apply(this, [3, 4]);
const boundCallback = callback.bind(this, 5, 6);
boundCallback(); // 바인딩된 함수에는 인자를 넣어도 소용없음.

// 생성자: 인스턴스
function Person(n, a) {
  this.name = n;
  this.age = a;
}

const gomugom = new Person('고무곰', 30);
console.log(gomugom);
