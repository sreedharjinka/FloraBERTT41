const express = require('express');
const { initializeApp } = require("firebase/app");
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const cors = require('cors'); // Import the cors middleware
const bodyParser = require('body-parser');
const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

// Your existing code...


const firebaseConfig = {
    //
};
const firebaseApp = initializeApp(firebaseConfig);
const port = 5000;


app.post('/signup', (req, res) => {
    console.log(req);
    const { email, password } = req.body;
    console.log(email, password)
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            res.send('Signup successful');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            res.status(500).send(errorMessage);
        });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
