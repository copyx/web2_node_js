console.log(a());
console.log(b()); // Error!!
console.log(c()); // Error!!

// Hoisting 은 변수 '선언' 과 함수 '선언'을 "끌어올린다!"
// 자바스크립트 엔진은 코드 전반적으로 선언문을 검토하고, 필요한 것들을 위로 끌어올린다.
// 다만, 여기서 b, c 는 선언부(let b, let c)만 끌어올려지기 떄문에,
// console.log(b())와 같은 코드에 오류가 발생한다.

function a() {
  return 'a';
}

let b = function () {
  return 'bb';
};

let c = function () {
  return 'c';
};
