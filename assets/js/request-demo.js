'use strict';

import { requestDemo } from "./api.js";
import { show } from "./alert.js";

const mobileInputEl = document.querySelector('#mobile');
const requestFormEl = document.querySelector('#request-form');
const demoSelectEl = document.querySelector('#solutions');
const demoOptionTemplateEl = document.querySelector('#demo-option-template');

const queryString = new URLSearchParams(window.location.search);
const phoneNumber = queryString.get('phone');

mobileInputEl.value = phoneNumber;

// getSolutions().then(data => {
//     renderSolutions(data);
// }).catch(err => {
//     show.error(err);
// });

requestFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

      if (e.target.solutions.value === "others") {
        e.target.solutions.value = e.target.demo.value  
      }
      
    const payload = {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.mobile.value,
        text: e.target.text.value,
        solutions : e.target.solutions.value || e.target.demo.value
    }


    console.log(payload);

    requestDemo(payload).then(data => {
        // todo: pop up for successfully message sent
        console.log(data);
        show.success("Thank you for your interest, We'll contact you soon.");
    }).catch(err => {
        show.error(err || "Something is wrong please try again.");
    });

});

// const renderSolutions = (solutions = []) => {
//     const solutionsHTML = [];
//     document.querySelector('#default-option').textContent = '--Select--';
//     solutionsHTML.push(demoSelectEl.outerHTML);

//     solutions.forEach(solution => {
//         let html = demoOptionTemplateEl.innerHTML;

//         html = html.replace('{{value}}', solution.id);
//         html = html.replace('{{name}}', solution.name);

//         solutionsHTML.push(html);
//     });

//     demoSelectEl.innerHTML = solutionsHTML.join();
// }


