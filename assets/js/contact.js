'use strict';

import { postMessage } from "./api.js";
import { show } from "./alert.js";

const contactFormEl = document.querySelector('#contact-form');

contactFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const payload = {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        text: e.target.text.value
    }

    postMessage(payload).then(data => {
        show.success("Thanks for sending us a message.");
    }).catch(err => {
        show.error(err || "Something is wrong please try again");
    });
});