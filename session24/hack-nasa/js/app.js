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

    function funcDecr(encryptedText, key) {
        let encryptedCodes = encryptedText.split('-').map(Number);
         let keyCodes = Array.from(key).map(char => char.charCodeAt(0));
        let decrypted = encryptedCodes.map((code, index) => {
            let keyCode = keyCodes[index % keyCodes.length];
            return String.fromCharCode(code - keyCode);
        });
        
        return decrypted.join('');
    }


    let login = '';
    let password = '';

    const idOne = '166-161-167-201-147-211-152-154-164-228';
    const idTwo = '98-102-138-200-100-194-110-112-112-214-216-154-98-104-106';


    const btn = document.querySelector('.form button');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        login = document.querySelector('.form .form__login input').value;
        password = document.querySelector('.form .form__creditial input').value;

        if (login !== null && login.length > 0 && login === funcDecr(idOne, password) && password !== null && password.length > 0 && password === funcDecr(idTwo, password)) {
            const span = document.createElement('span');
            span.textContent = myFunc('Acs rne!cesgatd8');
            document.querySelector('form .result').textContent = '';
            document.querySelector('form .result').appendChild(span);
        }
    });

});