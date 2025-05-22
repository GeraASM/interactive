const options = document.querySelectorAll('.option');
const btnSubmit = document.querySelector('.btn-feedback');
const thanksContent = document.querySelector('.thanks');
let valueChoice;
options.forEach(option => {
    option.addEventListener('click', (e) => {
        options.forEach(opt => opt.classList.remove('active'));
        e.currentTarget.classList.add('active');
        valueChoice = e.currentTarget.querySelector('input').value;
        if (valueChoice) {
            btnSubmit.disabled = false;
        } else {
            btnSubmit.disabled = true;
        }
    })
})

const numberShow = document.getElementById('number');
function showThanks(e) {
    e.preventDefault();
    e.currentTarget.closest('.interactive').style.display = 'none';
    thanksContent.style.display = 'flex';
    numberShow.textContent = valueChoice;
    valueChoice = '';
}

function reset() {
    valueChoice = '';
    btnSubmit.disabled = true;
}

btnSubmit.addEventListener('click', showThanks)
document.addEventListener('DOMContentLoaded', reset)