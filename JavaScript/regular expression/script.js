'use strict';

// username
// email
// phone

const username = 'Akash123'
const email = 'akash.petabyte@gmail.com'
const phone = '7997793285'

if (username.   (/^[A-Z][a-z]*\d[a-z]*/))
    console.log('valid username')

if (email.match(/^[a-z]\w?[\.]?\w?@[('gmail'|'outlook')].[\.].[('com')]./))
    console.log('valid email')

// if (email.match(/[a-zA-Z0-9\-\._]+@[a-z]+\.[a-z]{2,3}/))
//     console.log('valid email')

if (phone.match(/^[789]\d{9}/))
    console.log('valid phone')
