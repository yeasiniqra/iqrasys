"use strict";

const BASE_URL = 'https://iqra-sever.vercel.app';
const COMMON_HEADERS = {
    'Access-Control-Allow-Origin': "*",
    "Content-Type": "application/json"
}

export const quickRequest = async (phoneNumber) => {
    const res = await fetch(`${BASE_URL}/quickRequests`, {
        method: 'POST',
        headers: {
            ...COMMON_HEADERS
        },
        body: JSON.stringify({
            phone: phoneNumber
        })
    });

    if(res.status > 400)
        throw new Error("Validation Error");

    if (res.status > 299 || res.status < 200)
        throw new Error(res.statusText);

    return await res.json();
}

export const requestDemo = async (payload) => {
    const res = await fetch(`${BASE_URL}/requests`, {
        method: 'POST',
        headers: {
            ...COMMON_HEADERS
        },
        body: JSON.stringify(payload)
    });

    if(res.status > 400)
        throw new Error("Validation Error");

    if (res.status > 299 || res.status < 200)
        throw new Error(res.statusText);

    return await res.json();
}

// export const getSolutions = async () => {
//     const res = await fetch(`${BASE_URL}/solutions`, {
//         method: 'GET',
//         headers: {
//             ...COMMON_HEADERS
//         }
//     });

//     if(res.status > 400)
//         throw new Error("Validation Error");

//     if (res.status > 299 || res.status < 200)
//         throw new Error(res.statusText);

//     return await res.json();
// }

export const postMessage = async (payload) => {
    const res = await fetch(`${BASE_URL}/contact`, {
        method: 'POST',
        headers: {
            ...COMMON_HEADERS
        },
        body: JSON.stringify(payload)
    });

    if(res.status > 400)
        throw new Error("Validation Error");

    if (res.status > 299 || res.status < 200)
        throw new Error(res.statusText);

    return await res.json();
}

// export const sendResume = async (payload) => {
//     const res = await fetch(`${BASE_URL}/applications`, {
//         method: 'POST',
//         headers: {
//             'Access-Control-Allow-Origin': "*",
//             'Content-Type' : 'multipart/form-data'
//         },
//         body: payload
//     });

//     if(res.status > 400)
//         throw new Error("Validation Error");

//     if (res.status > 299 || res.status < 200)
//         throw new Error(res.statusText);

//     return await res.json();
// }