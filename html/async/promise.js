'use strict';

// Promise object
// 1. 상태(state): pending -> 
// 2. producer와 consumer의 차이점

// 1. Producer
// 새로운 프로미스가 만들어지면 자동적으로 함수가 실행되기 때문에
// 사용자의 요청이 필요하다면 사용하지 않는 것이 좋음
const promise = new Promise((resolve, reject)=> {
    // doing some heavy work (network, read files)
    console.log('doing something...')
    setTimeout(() => {
        resolve('ellie');
        //reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
// then: 프로미스가 성공적으로 수행되었다면, 이라는 전제!
promise
  .then((value)=> { // value는 ellie
    console.log(value);
})
  .catch(error => {
    console.log(error);
})
  .finally(() => {
    console.log('finally');
  });

// 3. Promise 연결하기
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num*2)
.then(num => num*3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000);
});

const getEgg = hen => new Promise((resolve, reject) => {
    //setTimeout(() => resolve(`${hen} => '알'`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => '알'`)), 1000);
});

const cook = egg => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => '계란후라이'`), 1000);
});

getHen()
.then(hen => getEgg(hen)) // .then(getEgg) 로도 쓸 수 있음
.catch(error => {
    return '빵';
}) // 결과: 빵 => '계란후라이'
.then(egg => cook(egg))
.then(meal => console.log(meal))
.catch(console.log);