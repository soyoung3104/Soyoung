'user sta'

// async & await

// 1. async
// function fetchUser() {
//     // 10초가 지나면 네트워크와 연결되는 함수
//     return 'ellie';
// }

// async를 쓰면 자동적으로 promise로 변환되어짐
async function fetchUser() {
    // 10초가 지나면 네트워크와 연결되는 함수
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
// 딜레이가 끝날 때까지 기다려 준 후에 리턴 값을 실행
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '사과';
}

async function getBanana() {
    await delay(1000);
    return '바나나';
}

// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }

// async 이용해서 간단하게 고쳐보기
// async function pickFruits() {
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
// }

// async 이용 + 프로미스를 활용하여 병렬적이게!
// 프로미스는 생성하고 나서 바로 생성하기 때문에 조금 더 효율적임
// async function pickFruits() {
//     const applePromise = getApple();
//     const bananaPromise = getBanana();
//     const apple = await applePromise;
//     const banana = await bananaPromise;
//     return `${apple} + ${banana}`;
// }
//pickFruits().then(console.log);

// 3. 조금 더 유용한 APIs - all
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

// race는 먼저 끝나는 작업을 수행시켜줌
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);