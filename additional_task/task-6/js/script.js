'use strict';
window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

                const range = document.querySelector('.wrapper__range .rage__val'),
                    spanValue = document.querySelector('.wrapper__range span'),
                    indicator = document.querySelector('.tumblers .indicator'),
                    tumblers = document.querySelectorAll('.tumblers__inner .inp'),
                    password = document.querySelector('.password__content .password'),
                    refreshPass = document.querySelector('.password__content .refresh__icon'),
                    refreshPassIcon = document.querySelector('.refresh__icon .fa-solid'),
                    copyIcon = document.querySelector('.password__content .copy__icon'),
                    copyIconInner = document.querySelector('.copy__icon .fa-solid'),
                    description = document.querySelector('.tumblers__descr'),
                    modal = document.querySelector('.modal'),
                    modalPassword = document.querySelector('.modal__password');




                const ObjDescr = {
                    veryWeek: `This password is&nbsp;<span class="very-weak">very weak</span>.&nbsp;It is highly recommended to choose a stronger password for better security.`,
                    weak: `Oh no, it’s a bit&nbsp;<span class="weak">weak</span>.&nbsp;Make it stronger by adding length, special characters & uppercase letters.`,
                    moderate: `This password has&nbsp;<span class="moderate">moderate</span>&nbsp;strength. Consider enhancing it with additional characters and complexity for better security.`,
                    strong: `Congratulations! This is a&nbsp;<span class="strong">strong</span>&nbsp;password. Ensure you keep it secure and avoid sharing it with others.`,
                    veryStrong: `Excellent! Your password is&nbsp;<span class="very-strong">very strong</span>.&nbsp;Keep it safe and avoid using it for multiple accounts.`
                };


                const passObj = {
                    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                    lowercase: 'abcdefghijklmnopqrstuvwxyz',
                    numbers: '01234567890123456789',
                    symbols: '!@#$%&?!@#$%&?!@#$%&?'
                };

                let strange = 15;


                const valurColored = (str) => {

                    if (!str) return false;
                    // let str = 'melo7m77elo';
                    let styledStr = '';

                    for (let char of str) {
                        if (/\d/.test(char)) {
                            styledStr += `<span class="digit">${char}</span>`;
                        } else if (/[!@#$%&/?]/.test(char)) {
                            styledStr += `<span class="special-char">${char}</span>`;
                        } else {
                            styledStr += char;
                        }
                    }
                    return styledStr;
                };

                const classRemover = (clasname) => {
                    const list = document.querySelector('.tumblers .indicator');
                    const arr = Array.from(list.classList);
                    arr.forEach((item) => {
                        //  console.log(item);
                        if (item !== clasname) {
                            list.classList.remove(item);
                        }
                    });
                };




                const addClassToIndicator = () => {
                    const rangeValue = +document.querySelector('.wrapper__range .rage__val').value;
                    spanValue.textContent = rangeValue;

                    // console.log(rangeValue);
                    // console.log(strange);

                    if (rangeValue < 9 && +strange <= 25) {
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.veryWeek;
                        indicator.classList.add('very-weak');
                    }



                    //////////////////////////////////////////////
                    if (rangeValue === 9 && +strange === 5) {
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.veryWeek;
                        indicator.classList.add('very-weak');
                    }

                    if (rangeValue === 9 && +strange === 10) {
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.veryWeek;
                        indicator.classList.add('very-weak');

                    }

                    if (rangeValue === 9 && +strange === 15) {
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.veryWeek;
                        indicator.classList.add('very-weak');

                    }

                    if (rangeValue === 9 && +strange === 20) {
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.weak;
                        indicator.classList.add('weak');

                    }

                    if (rangeValue === 9 && +strange === 25) {
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.weak;
                        indicator.classList.add('weak');
                    }


                    ///////////////////////////////////
                    if (rangeValue > 9 && +rangeValue < 12 && +strange === 5) {
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.veryWeek;
                        indicator.classList.add('very-weak');
                    }

                    if (rangeValue > 9 && +rangeValue < 12 && +strange === 10) {
                        //console.log(strange);
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.weak;
                        indicator.classList.add('weak');
                    }

                    if (rangeValue > 9 && rangeValue < 12 && +strange === 15) {
                        // console.log(strange);
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.weak;
                        indicator.classList.add('weak');
                    }

                    if (rangeValue > 9 && rangeValue < 12 && +strange === 20) {
                        // console.log(strange);
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.weak;
                        indicator.classList.add('weak');
                    }

                    if (rangeValue > 9 && rangeValue < 12 && +strange === 25) {
                        // console.log(strange);
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.moderate;
                        indicator.classList.add('moderate');
                    }


                    /////////////////////////////////
                    if (rangeValue > 11 && rangeValue < 14 && +strange === 5) {
                        // console.log(strange);
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.veryWeek;
                        indicator.classList.add('very-weak');
                    }

                    if (rangeValue > 11 && rangeValue < 14 && +strange === 10) {
                        // console.log(strange);

                        classRemover('indicator');
                        description.innerHTML = ObjDescr.weak;
                        indicator.classList.add('weak');
                    }

                    if (rangeValue > 11 && rangeValue < 14 && +strange === 15) {
                        //  console.log(strange);
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.moderate;
                        indicator.classList.add('moderate');
                    }

                    if (rangeValue > 11 && rangeValue < 14 && +strange === 20) {
                        //  console.log(strange);
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.moderate;
                        indicator.classList.add('moderate');
                    }

                    if (rangeValue > 11 && rangeValue < 14 && +strange === 25) {
                        // console.log(strange);
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.strong;
                        indicator.classList.add('strong');
                    }

                    ///////////////////////////////////
                    if (rangeValue > 13 && rangeValue < 16 && +strange === 5) {
                        // console.log(strange);
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.moderate;
                        indicator.classList.add('moderate');
                    }

                    if (rangeValue > 13 && rangeValue < 16 && +strange === 10) {
                        //console.log(strange);
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.moderate;
                        indicator.classList.add('moderate');
                    }

                    if (rangeValue > 13 && rangeValue < 16 && +strange === 15) {
                        //console.log(strange);
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.strong;
                        indicator.classList.add('strong');
                    }

                    if (rangeValue > 13 && rangeValue < 16 && +strange === 20) {
                        //console.log(strange);
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.strong;
                        indicator.classList.add('strong');
                    }

                    if (rangeValue > 13 && rangeValue < 16 && +strange === 25) {
                        // console.log(strange);
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.veryStrong;
                        indicator.classList.add('very-strong');
                    }

                    //////////////////////////////
                    if (rangeValue > 15 && rangeValue < 25 && +strange === 5) {
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.moderate;
                        indicator.classList.add('moderate');
                    }

                    if (rangeValue > 15 && rangeValue < 25 && +strange === 10) {
                        // console.log(strange);
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.strong;
                        indicator.classList.add('strong');
                    }

                    if (rangeValue > 15 && rangeValue < 25 && +strange === 15) {
                        // console.log(strange);
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.veryStrong;
                        indicator.classList.add('very-strong');
                    }

                    if (rangeValue > 15 && rangeValue < 25 && +strange === 20) {
                        // console.log(strange);
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.veryStrong;
                        indicator.classList.add('very-strong');
                    }

                    if (rangeValue > 15 && rangeValue < 25 && +strange === 25) {
                        // console.log(strange);
                        classRemover('indicator');
                        description.innerHTML = ObjDescr.veryStrong;
                        indicator.classList.add('very-strong');
                    }

                };
                addClassToIndicator();







                const getCheckedSymbols = () => {
                    strange = 0;
                    let allSymbols = '';
                    tumblers.forEach((item) => {
                        let dataId = '';
                        if (item.checked) {
                            let head = item.closest('.tumbler');
                            dataId = head.dataset.case;
                            // console.log(dataId);
                            if (dataId === 'uppercase') {
                                allSymbols += passObj.uppercase;
                                strange += 5;
                            }

                            if (dataId === 'lowercase') {
                                allSymbols += passObj.lowercase;
                                strange += 5;
                            }

                            if (dataId === 'numbers') {
                                allSymbols += passObj.numbers;
                                strange += 5;
                            }

                            if (dataId === 'symbols') {
                                allSymbols += passObj.symbols;
                                strange += 10;
                            }
                        }
                    });
                    if (allSymbols.length < 1) return false;
                    return allSymbols;
                };

                // console.log(getCheckedSymbols());






                const getPassword = (symbols, length) => {
                    if (!symbols) return false;
                    let pwd = '';
                    for (let i = 0; i < length; i++) {
                        let rnd = Math.floor(Math.random() * symbols.length);
                        pwd += symbols[rnd];
                    }
                    return pwd;
                };



                const rangeToSpanValue = () => {
                    range.addEventListener('input', () => {
                        addClassToIndicator();
                        const count = range.value;
                        let val = valurColored(getPassword(getCheckedSymbols(), count));
                        if (!val) { val = 'password'; description.innerHTML = ''; classRemover('indicator'); }
                        password.innerHTML = val;

                    });
                };
                rangeToSpanValue();


                tumblers.forEach((item) => {
                    item.addEventListener('change', () => {
                        let val = valurColored(getPassword(getCheckedSymbols(), range.value));
                        addClassToIndicator();
                        if (!val) { val = 'password'; description.innerHTML = ''; classRemover('indicator'); }
                        password.innerHTML = val;

                    });
                });


                refreshPass.addEventListener('click', () => {
                    let val = valurColored(getPassword(getCheckedSymbols(), range.value));
                    if (!val) { val = 'password'; description.innerHTML = ''; classRemover('indicator'); }
                    password.innerHTML = val;
                    refreshPassIcon.classList.add('rotate');
                    // refreshPassIcon.classList.add('refreshbg');

                    setTimeout(() => {
                        refreshPassIcon.classList.remove('rotate');
                        // refreshPassIcon.classList.remove('refreshbg');
                    }, 250);
                });



                copyIcon.addEventListener('click', () => {
                    //console.log('ok');
                    navigator.clipboard.writeText(password.textContent);

                    modalPassword.textContent = password.textContent;
                    modal.classList.add('modalposition');
                    setTimeout(() => {
                        modal.classList.remove('modalposition');
                    }, 1500);

                    copyIconInner.classList.remove('fa-copy');
                    copyIconInner.classList.add('fa-check');
                    setTimeout(() => {
                        copyIconInner.classList.remove('fa-check');
                        copyIconInner.classList.add('fa-copy');
                    }, 2000);
                });




                const count = range.value;
                password.innerHTML = valurColored(getPassword(getCheckedSymbols(), count));


});

// let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=+[]{};:".<>/?';
// console.log(getPassword(symbols, 10));






//console.log(styledStr);










// 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// 'abcdefghijklmnopqrstuvwxyz';
// '0123456789';
// '!@#$%^&*()-=+[]{};:".<>/?';