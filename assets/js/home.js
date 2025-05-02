"use strict";

import { quickRequest } from "./api.js";
import { show } from "./alert.js";

const quickRequestInputEl = document.querySelector('#quick-request-input');
const quickRequestSubmitEl = document.querySelector('#quick-request-submit');

quickRequestSubmitEl.addEventListener('click', (e) => {
    e.preventDefault();

    if(!quickRequestInputEl.value) {
        // alert(`Phone number can't be empty & Must 11 character`)
        return false;
    }

    // todo: phone number validation can be added here

    quickRequest(quickRequestInputEl.value).then((data) => {
        show.success("Thank you for your interest, We'll contact you soon.");
        quickRequestInputEl.value = '';
        // window.location.href = `/request-demo.html?phone=${quickRequestInputEl.value}`;
    }).catch((err) => {
       show.error(err);
    })

});

