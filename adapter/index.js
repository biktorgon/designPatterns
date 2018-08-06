const localStorage = require('./localStorage');

console.log('localStorage length: ', localStorage.length);

const uid = localStorage.getItem('user_id');

console.log('user_id: ', uid);

if (!uid) {
    console.log('User ID not found. Setting the user id and token...');
    localStorage.setItem('token', "SKDFSOFL564SdfSDdsfdf8sDSfs57SDfsdf5dfs54");
    localStorage.setItem('user_id', '123456');
} else {
    console.log('User ID found: ', uid);
    console.log('clearning the User ID ...');
    localStorage.clear();
}