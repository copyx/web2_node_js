console.log(a());
// console.log(b()); // Error!!
// console.log(c()); // Error!!

// Hoisting 은 변수 '선언' 과 함수 '선언'을 "끌어올린다!"
// 자바스크립트 엔진은 코드 전반적으로 선언문을 검토하고, 모든 선언문들을 위로 끌어올린다.
// 다만, 여기서 b, c 는 선언부(let b, let c)만 끌어올려지기 떄문에,
// console.log(b())와 같은 코드에 오류가 발생한다.

function a() {  // 함수선언문 (function declaration)
  return 'a';
}

let b = function bb() { // 기명 함수표현식 (named function declaration)
  return 'bb';
};

let c = function() {  // 익명 함수표현식 (unnamed function declaration)
  return 'c';
};

// 예전에는 디버깅할 때 기명 함수표현식이 더 쉬웠음.
// 하지만 최근 브라우저들은 함수명이 비어있으면 자동으로 이름을 부여함.

// 함수선언문과 함수표현식의 차이는 "할당"에 있음.
// 호이스팅을 할 떄는 선언문만 올라감.

function sum(a, b) {
  return a + ' + ' + b + ' = ' + (a + b);
}
console.log(sum(1, 2));

/* 엄청나게 많은 코드가 중간에 있어서 같은 함수가 있는지 모를 때 */

function sum(a, b) {
  return a + b;
}
console.log(sum(3, 4));

// 함수선언문이 호이스팅되고 함수 중 나중에 선언된 함수로 덮어씌워짐.
// 그래서 위 함수가 사라지고 아래 함수로 모두 실행됨.
// 더글라스 크락포드는 이런 상황을 막기위해 함수선언문보다 함수표현식을 추천하고있음.
// 변수 선언은 호이스팅되도 함수 할당 부분이 남아있으므로 중복선언되도 해당 위치에 맞게 실행됨.
// 함수표현식을 사용하면 안전하고 예측 가능한 코드가 됨.
