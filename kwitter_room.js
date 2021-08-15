
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyC7eHC7klOpHDBZrJeGwCocnX2TRpVj5pI",
      authDomain: "kwitter-app----social--app.firebaseapp.com",
      projectId: "kwitter-app----social--app",
      storageBucket: "kwitter-app----social--app.appspot.com",
      messagingSenderId: "69899542444",
      appId: "1:69899542444:web:37440ba9a1dbed3ff8a409"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
