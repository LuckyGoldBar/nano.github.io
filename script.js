// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyA1NRFsbz3t90yvtohuOCq6wRbRz_8FTAM",
  authDomain: "webproject4m.firebaseapp.com",
  projectId: "webproject4m",
  storageBucket: "webproject4m.appspot.com",
  messagingSenderId: "499518914356",
  appId: "1:499518914356:web:3086d90409b6c705096f61",
  measurementId: "G-5BSVNP6N60"
};

firebase.initializeApp(firebaseConfig);

// Get elements
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-btn');

// Add login event
loginButton.addEventListener('click', e => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    firebase.auth().signInWithEmailAndPassword(username, password)
        .then(userCredential => {
            // Signed in
            const user = userCredential.user;
            console.log('Logged in as: ', user.email);
            // Redirect or perform actions after successful login
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error:', errorMessage);
            // Handle login errors
        });
});
