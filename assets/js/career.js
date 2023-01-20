'use strict';

import { sendResume } from "./api.js";
import { show } from "./alert.js";

const resumeFormEl = document.querySelector('#resume-form');


resumeFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!e.target.image.files[0]) return

    const formData = new FormData();
    formData.append('File', e.target.image.files[0])

    sendResume(formData).then(data => {
        show.success("We appreciate your interest, building your carrer with us.");
    }).catch(err => {
        show.error(err || "Something is wrong, Please try again.");
    });
});