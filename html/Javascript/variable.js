// 1. use strict
// 오류를 잡아주는 역할. 선언하고 시작하는 것이 좋음.
'use strict';

// 2. 변수
// let (변수선언)
// 광역변수, 지역변수{}
    let name = 'soyoung';
    console.log(name);
    name = 'hello';
    console.log(name);

// var(don't ever use this!)
// var hoisting
// 선언위치와 상관 없이 항상 제일 위로 선언을 끌어올려줌
// 블록{} 을 철저히 무시함

// 3. Constants
// 선언 후 값 변경할 수 없음
// 보안성이 뛰어나고, 위협에 안전하며, 유지보수에 유리함
const daysInWeek = 7;
const maxNumber = 5;

// 4. 변수 타입
// primitive, single item: number, string, boolean, null, undifiedn, symbol
// object, box container
// function, first-class function
 