// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCHJo2pN4BZ59R-tiswIhhK9OBvYG59Tew",
    authDomain: "portfolio-d1077.firebaseapp.com",
    databaseURL: "https://portfolio-d1077.firebaseio.com",
    projectId: "portfolio-d1077",
    storageBucket: "portfolio-d1077.appspot.com",
    messagingSenderId: "601674476006",
    appId: "1:601674476006:web:e272bcde05105944660e27",
    measurementId: "G-3R8C81BYW7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Reference messages collection
var messagesRef = firebase.database().ref('Messages');

//listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
function submitForm(e) {
    e.preventDefault();

    //get values from form 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Save message
    saveMessage(name, email, message);

    // Show alert
    document.getElementById("alertd").style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.getElementById("alertd").style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Save message to firebase
function saveMessage(name, email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        Username: name,
        Mailling: email,
        Queries: message
    });
}