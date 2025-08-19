'use strict';



const btn = document.getElementById('btn');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const mobile = document.getElementById('mobileNumber');

const validateCredentials = function(username, email, mobile) {
    if(username.length < 3)
        return false;
    if(mobile.length != 10)
        return false;

    return true;
}

btn.addEventListener('click', () => {
    const data = [userName.value, email.value, mobile.value];
    console.log(data);
    if (validateCredentials(...data))
        console.log('Valid user');
    else
        console.log('Invalid user');
});