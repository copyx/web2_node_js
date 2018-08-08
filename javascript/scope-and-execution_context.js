/*
 스코프는 정의할 때 결정
 실행 컨텍스트는 실행될 때 결정

 실행 컨텍스트에는 호이스팅, this 바인딩 등의 정보가 담김.
 */

let a = 1;
function outer() {
  console.log(a); // 1

  function inner() {
    console.log(a); // 2
    var a = 3;
  }

  inner();

  console.log(a); // 3
}
outer();
console.log(a); // 4

// 실행순서: 1 - 2 - 3 - 4
// a 값 예측: 1 - undefined - 1 - 1
