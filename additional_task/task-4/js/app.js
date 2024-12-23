'use strict';
document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();

    let wrapPx = document.getElementById('px'),
        wrapRem = document.getElementById('rem'),
        wrapBase = document.getElementById('base');


    function removeZeros(num) {
        return parseFloat(num.toString());
    }

    const pxToRem = (px) => px / wrapBase.value;
    const remToPx = (rem) => rem * wrapBase.value;

    wrapPx.addEventListener('input', () => {
        if (wrapPx.value.length > 7) {
            wrapPx.value = wrapPx.value.slice(0, 7);
        }
        let pxValue = parseFloat(wrapPx.value);
        if (!isNaN(pxValue)) {
            wrapRem.value = removeZeros(pxToRem(pxValue).toFixed(3));
        }
    });

    wrapRem.addEventListener('input', () => {
        if (wrapRem.value.length > 7) {
            wrapRem.value = wrapRem.value.slice(0, 7);
        }
        let remValue = parseFloat(wrapRem.value);
        if (!isNaN(remValue)) {
            wrapPx.value = removeZeros(remToPx(remValue).toFixed(3));
        }
    });

    wrapBase.addEventListener('input', () => {
        if (wrapBase.value.length > 2) {
            wrapBase.value = wrapBase.value.slice(0, 2);
        }
    });
});