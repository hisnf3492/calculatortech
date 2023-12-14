/*
function update( _v){
    document.querySelector('input').value = _v;
}
function append( _v){
    document.querySelector('input').value += _v;
}
function calc(){
    const v = document.querySelector('input').value;
    const f = new Function('return' + v);
    update(f().toString());
}
*/
/*
function update(_v) {
    document.querySelector('input').value = _v;
}

function append(_v) {
    document.querySelector('input').value += _v;
}

function calc() {
    try {
        const v = document.querySelector('input').value;
        const f = new Function('return ' + v); // スペースを追加
        update(f().toString());
    } catch (error) {
        update('Error'); // エラーが発生した場合にエラーメッセージを表示
        console.log("正しく入力してください");
    }
}
*/
/*
function update(_v) {
    document.querySelector('input').value = _v;
}

function append(_v) {
    document.querySelector('input').value += _v;
}

function calc() {
    try {
        const v = document.querySelector('input').value;
        const f = new Function('return ' + v); // スペースを追加
        update(f().toString());
    } catch (error) {
        update('正しく入力してください'); // エラーが発生した場合にエラーメッセージを表示
    }
}
*/
/*
function update(_v) {
    document.querySelector('input').value = _v;
}

function append(_v) {
    document.querySelector('input').value += _v;
}

function clearInput() {
    document.querySelector('input').value = '';
    isCalcResult = false;
}

function calc() {
    try {
        const v = document.querySelector('input').value;
        const f = new Function('return ' + v); // スペースを追加
        update(f().toString());
    } catch (error) {
        update('正しく入力してください'); // エラーが発生した場合にエラーメッセージを表示
    }
}
*/
/*
function update(_v) {
    document.querySelector('input').value = _v;
}

function append(_v) {
    document.querySelector('input').value += _v;
}

function clearInput() {
    document.querySelector('input').value = '';
    isCalcResult = false;
}

function calc() {
    try {
        const v = document.querySelector('input').value;
        const f = new Function('return ' + v); // スペースを追加
        update(f().toString());
    } catch (error) {
        update('正しく入力してください'); // エラーが発生した場合にエラーメッセージを表示
    }
}
*/
/*
let isCalcResult = false; // 計算結果表示中かどうかのフラグ

function update(_v) {
    document.querySelector('#calculatorInput').value = _v;
    isCalcResult = false;
}

function append(_v) {
    //document.querySelector('input').value += _v;
    const inputField = document.querySelector('#calculatorInput');
    if (isCalcResult) {
        inputField.value = _v;
        isCalcResult = false;
    } else {
        inputField.value += _v;
    }
}


function calc() {
    try {
        const v = document.querySelector('#calculatorInput').value;
        const f = new Function('return ' + v); // スペースを追加
        update(f().toString());
    } catch (error) {
        update('正しく入力してください'); // エラーが発生した場合にエラーメッセージを表示
    }
}

let isCalcResult = false;

    function update(_v) {
         document.querySelector('#calculatorInput').value = _v;
       isCalcResult = true;
     }

    function append(_v) {
        const inputField = document.querySelector('#calculatorInput');
        if (isCalcResult) {
            inputField.value = _v;
            isCalcResult = false;
        } else {
            inputField.value += _v;
        }
    }

    function clear() {
        document.querySelector('#calculatorInput').value = '';
         isCalcResult = false;
    }

    function calc() {
        try {
            const v = document.querySelector('#calculatorInput').value;
            const f = new Function('return ' + v);
            update(f().toString());
        } catch (error) {
            update('正しく入力してください');
        }
    }
*/
    let isCalcResult = false;

function update(_v) {
    document.querySelector('#calculatorInput').value = _v;
    isCalcResult = true;
}

function append(_v) {
    const inputField = document.querySelector('#calculatorInput');
    if (isCalcResult) {
        inputField.value = _v;
        isCalcResult = false;
    } else {
        inputField.value += _v;
    }
}

function clearInput() {
    document.querySelector('#calculatorInput').value = '';
    isCalcResult = false;
}


function calc() {
    try {
        const v = document.querySelector('#calculatorInput').value;
        const f = new Function('return ' + v);
        update(f().toString());
    } catch (error) {
        update('正しく入力してください');
    }
}

function show(){
    var array = ["大吉", "中吉", "小吉"];
    var random = Math.random() * 3;
    var message = array[random];
}