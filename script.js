var assertion = 0;
console.log('TAP version 13');
console.log('1..3');

equal(text(document.querySelector('#a'), 'A'));
equal(text(document.querySelector('#b'), 'B'));
equal(text(document.querySelector('#c'), 'C'));

function text(elem) { return elem.textContent || elem.innerText }
function equal (a, b) {
    console.log((a === b ? 'ok' : 'not ok') + ' ' + (++ assertion));
}
