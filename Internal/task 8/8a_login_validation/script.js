'use strict';

function validate() {
    const uname = document.querySelector('#uname').value;
    const email = document.querySelector('#email').value;
    const mobile = document.querySelector('#mobile').value;
    const password = document.querySelector('#password').value;
    const msg = document.querySelector(".message");

    // console.log(typeof(uname), uname);
    // console.log(typeof(email), email);
    // console.log(typeof(mobile), mobile);
    // console.log(typeof(password), password);

    // matches
    const unameRegex = /^[A-Z][\w]{3,20}/; // Akash123
    const emailRegex = /^(\w|\.)+@(gmail|outlook)\.com$/; // akash.petabyte@gmail.com
    const mobileRegex = /^[1-9]\d{9}/ // 10 digits
    const passwordRegex = /^\S[\w]{8,}/ // 8 chars

    // console.log(unameRegex.test(uname));
    // console.log(emailRegex.test(email));
    // console.log(mobileRegex.test(mobile));
    // console.log(passwordRegex.test(password));

    if (unameRegex.test(uname) && emailRegex.test(email) && mobileRegex.test(mobile) && passwordRegex.test(password)) {
        msg.style.color = 'green';
        msg.textContent = 'Welcome';
    } else {
        msg.style.color = 'red';
        msg.textContent = 'Invalid Credentials';
    }
}
