'use strict';
document.addEventListener('DOMContentLoaded', () => {
    function myFunc(str) {
        let key = +str.slice(-1)
        let left = str.slice(0, key);
        let right = str.slice(key, -1);
        let len = left.length > right.length ? left.length : right.length;
        let st = '';
        for (let i = 0; i < len; i++) {
            if (left[i] !== undefined) {
                st += left[i];
            }
            if (right[i] !== undefined) {
                st += right[i];
            }
        }
        return st;
    }

    let login = '';
    let password = '';

    const btn = document.querySelector('.form button');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        login = document.querySelector('.form .form__login input').value;
        password = document.querySelector('.form .form__creditial input').value;

        if (login !== null && login.length > 0 && login === myFunc('tmlsaiuarh5') && password !== null && password.length > 0 && password === myFunc('zohoyovoospl6')) {
            const span = document.createElement('span');
            span.textContent = myFunc('Acs rne!cesgatd8');
            document.querySelector('form .result').textContent = '';
            document.querySelector('form .result').appendChild(span);
        }
    });

});