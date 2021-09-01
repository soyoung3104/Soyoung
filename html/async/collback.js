'use strict';

// JavaScript 는 동기적인 언어이다.
// 순서에 맞춰서 하나하나 동기적으로 실행된다.
// hoisting: var, function 선언 등이 가장 제일 위로 올라가는 것

// 비동기적인 실행 방법
console.log('1');
// 브라우저 api는 바로 브라우저에게 요청
setTimeout(() => console.log('2'), 1000);
console.log('3'); // 결과 1,3,2

// 즉각적으로, 동기적으로 실행하는 callback
// hoisting에 의해서 함수 printImmediately 선언이 가장 위로 올라감
function printImmediately(print) {
    print();
}
printImmediately(()=> console.log('hello'));
// 결과: 1, 3, hello, 2

// 나중에, 실행시간을 예측할 수 없는 callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);
// 결과: 1, 3, hello, 2, async callback


// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
        if (
            (id === 'ellie' && password === 'dream') ||
            (id === 'coder' && password === 'academy')
        ) {
            onSuccess(id);
        } else {
            onError(new Error('not found'));
        }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);