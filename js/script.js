'use strict';

for(let i = 200; i > 0; i -= 2) {
    console.log;
    let div = document.createElement('div');
    div.value = i;
    div.innerText = i;
    document.getElementById('liczby').appendChild(div);
}

