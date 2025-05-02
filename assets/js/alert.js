'use strict';

const alertGhostBtn = document.createElement('A');
alertGhostBtn.setAttribute('href', '#alert');
alertGhostBtn.style.display = 'none';

const bodyEl = document.querySelector('body');
bodyEl.append(alertGhostBtn);

const alertTemplate = `
<div id="alert" class="modal">
    <div class="modal__content">
        <div class="alert-main-area">
            <h2 id="alert-text">Thanks for your interest!, We'll contact you soon.</h2>
            <a href="#" class="modal__close">Ok</a>
        </div>  
    </div>
</div>
`
const div = document.createElement('div');
div.innerHTML = alertTemplate;

bodyEl.append(div);

const setText = (text) => {
    document.querySelector('#alert-text').textContent = text;
} 

const error = (text) => {
    setText(text);
    document.querySelector('#alert').classList.add('error');
    alertGhostBtn.click();
}

const success = (text) => {
    setText(text);
    document.querySelector('#alert').classList.add('success');
    alertGhostBtn.click();
}

export const show = {
    error: error,
    success: success
}