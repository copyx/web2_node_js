// 클로져는 "함수"와 "그 함수가 선언될 당시의 환경정보" 사이의 조합이다.
// 함수 내부에서 생성한 데이터와 그 유효범위로 인해 발생하는 특수한 현상/상태
// closure의 사전적 의미: 닫혀있음, 폐쇄성, 완결성
// "최초 선언시의 정보를 유지!"

// 접근 권한 제어
// 지역변수 보호
let a = function () {
  const x = 1;
  const b = function () {
    console.log(x);
  }
  b();
};
a();
// console.log(x); // 당연히 에러. 스코프로 인해 접근 불가

// 데이터 보존 및 활용
a = function () {
  const x = 1;
  return function () {
    console.log(x);
  };
}
let c = a();
c();

// 접근 권한 제어
// 데이터 보존 및 활용
a = function () {
  let mX = 1;
  return {
    get x() { return mX; },
    set x(v) { mX = v; },
  };
};
c = a();
c.x = 10;
console.log(c.x);

// 예제 1
function setName(name) {
  return function () {
    return name;
  };
}
const sayMyName = setName('고무곰');
console.log(sayMyName());

// 예제 2
function setCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
const count = setCounter();
console.log(count());
console.log(count());
console.log(count());
// "클로져란 이미 생명주기가 끝난 외부함수의 변수를 참조하는 함수"
// From [Inside Javascript]
