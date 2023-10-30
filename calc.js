const numbers = document.querySelector('.numbers');
const result = document.querySelector('.result');
const allClear = document.querySelector('.btn-ac');
const clear = document.querySelector('.btn-delete');
const buttons = document.querySelectorAll('.btn-calc');
const equal = document.querySelector('.btn-equal');
const themeBtn = document.querySelector('.btn-color');
const theme = document.querySelector('#theme');
const moreBtn = document.querySelector('.btn-more');

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        numbers.classList.add('active');
        result.classList.remove('active');
        let value = event.target.dataset.num;
        numbers.innerText += value;
        result.innerText = "= " + eval(
            numbers.innerText.replace('×', '*').replace('÷', '/').replace('^', '**').replace('%', '/100')
        );
    });
});

equal.addEventListener('click', function () {
    if (numbers.innerText === '') {
        result.innerText = 0;
    } else {
        numbers.classList.remove('active');
        result.classList.add('active');
    }
});

allClear.addEventListener('click', remove);

function remove() {
    numbers.innerText = '';
    result.innerText = 0;
    numbers.classList.remove('active');
    result.classList.add('active');
}

clear.addEventListener('click', function () {
    if (!result.classList.contains('active')){
        if (numbers.innerText.length !== 1) {
            numbers.innerText = numbers.innerText.slice(0, -1);
            result.innerText = result.innerText.slice(0, -1);
        } else {
            remove();
        }
    }

});

themeBtn.addEventListener('click', function () {
    if (theme.getAttribute('href') === './light.css') {
        theme.href = './dark.css';
        themeBtn.innerText = "☀️"
    } else {
        theme.href = './light.css';
        themeBtn.innerText = "🌑"
    }
});

moreBtn.addEventListener("click", function () {
    if (document.querySelector(".moreButtons").classList.contains("moreActive")) {
        document.querySelector(".moreButtons").classList.remove("moreActive");
    } else {
        document.querySelector(".moreButtons").classList.add("moreActive");
    }
})