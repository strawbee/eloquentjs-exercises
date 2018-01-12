'use strict';

/*
Self Study, post-Code301 at Code Fellows
These are my solutions for the exercises from the book Eloquent Javascript by Marijn Haverbeke, second edition. 
http://eloquentjavascript.net/

This is a work in progress.
*/

// Chapter 2, page 40: Looping a Triangle | 1/11/18
const loopTriangle = () => {
    let str = '';
    for (let i = 0; i < 7; i++) {
        str += '#';
        console.log(str + '\n')
    }
}

// Chapter 2, page 41: FizzBuzz | 1/11/18
const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        let str = '';
        if (i % 3 === 0) str += 'Fizz';
        if (i % 5 === 0) str += 'Buzz';
        if (!str) str = i;
        console.log(str);
    }
}

// Chapter 2, page 41: Chess Board | 1/11/18
const chessBoard = size => {
    for (let i = 0; i < size; i++) {
        let str = '';
        for (let j = 0; j < size; j++) {
            str += (i + j) % 2 ? '#' : ' ';
        }
        console.log(str);
    }
}

// Chapter 3, page 59: Minimum | 1/11/18
const min = (a, b) => a < b ? a : b;

// Chapter 3, page 59: Recursion
const isEven = n => {
    if (!Number.isInteger(n)) return 'invalid input';
    if (!n) return 'even';
    if (n === 1) return 'odd';
    return n > 0 ? isEven(n - 2) : isEven(n + 2);
}

// Chapter 3, page 60: Bean Counting | 1/11/18
const countChars = (str, char) => {
    let num = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) num++;
    }
    return num;
}

// Chapter 4, page 83: The Sum of a Range | 1/11/18
const range = (start, end, step) => {
    let arr = [];
    if (!step) step = 1;
    for (let i = start; step > 0 ? i <= end : i >= end; i += step) 
        arr.push(i);
    return arr;
}

const sum = arr => arr.reduce((sum, el) => sum + el);

// Chapter 4, page 84: Reversing an Array | 1/11/18
const reverseArray = arr => {
    let newArr = [];
    while (arr.length) newArr.push(arr.pop());
    /* 
    I also considered the below solution in lieu of the while loop as there may be an efficiency advantage. 
    However, I note Mr.Haverbeke's notion that eloquence should trump efficiency until efficiency becomes a problem.

    let index = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr[index] = arr[i];
        index++;
    }
    */
    return newArr;
}

const reverseArrayInPlace = arr => {
    for (let i = 1; i < arr.length; i++) {
        arr.unshift(arr.splice(i, 1)[0]);
    }
    return arr;
}

// Chapter 4, page 84: A List | 1/11/18
const arrayToList = arr => {
    let list = {};
    if (!arr.length) return null;
    list.value = arr.shift();
    list.rest = arrayToList(arr);
    return list;
}

const listToArray = list => {
    let arr = [list.value];
    while (list.rest) {
        list = list.rest;
        arr.push(list.value);
    }
    return arr;
}

const prepend = (el, list) => {
    return {
        value: el,
        rest: list
    }
}

const nth = (list, n) => {
    if (!list) return undefined;
    if (!n) return list.value;
    return nth(list.rest, n - 1);
}

// Chapter 4, page 85: Deep Comparison | 1/11/18
const deepEqual = (a, b) => {
    if (typeof a !== 'object' && typeof b !== 'object') return a === b;
    else {
        if (a === null || b === null) return "null value";
        let aKeys = Object.keys(a), bKeys = Object.keys(b);
        if (aKeys.length !== bKeys.length) return false;
        for (let i = 0; i < aKeys.length; i++) {
            if (aKeys[i] !== bKeys[i]) return false;
            if (typeof a[aKeys[i]] === 'object' && typeof b[bKeys[i]] === 'object')
                return deepEqual(a[aKeys[i]], b[bKeys[i]]);
            else if (a[aKeys[i]] !== b[bKeys[i]]) return false;
        }
        return true;
    }
}