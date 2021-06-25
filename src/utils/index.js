const TOKEN_KEY = 'jwt';
const ApiEndpoint = 'https://citeable-frigate.000webhostapp.com/';
import axios from "axios";
// Login - GET - https://citeable-frigate.000webhostapp.com/?reqInfo=account&amp;phone=37477885555&amp;password=hello

export const login = (data) => {

    console.log(data);
    const token = `${data.phone}:${data.password}`
    fetch(ApiEndpoint, {
        method: 'GET',
        credentials: 'include',
        referrerPolicy: "origin-when-cross-origin",
        redirect: 'follow',
        agent: null,
        headers: {
            "Content-Type": "text/plain",
            'Authorization': 'Basic ' + btoa(token),
        },
        timeout: 5000
    }).then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))


    // localStorage.setItem(TOKEN_KEY, 'TestLogin');
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}