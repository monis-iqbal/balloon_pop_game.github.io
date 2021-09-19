

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNE6kfieB8jD7MRC5IA3UEpYHN0WliwY0",
    authDomain: "pop-a-balloon.firebaseapp.com",
    projectId: "pop-a-balloon",
    storageBucket: "pop-a-balloon.appspot.com",
    messagingSenderId: "175630105962",
    appId: "1:175630105962:web:96cefeb7ab179a67497913",
    measurementId: "G-13ZBTPB2M2"
  };
  

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  
  function login() {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

  
  
      firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
              // Signed in
              var user = userCredential.user;
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              
              
          });
  }


  
  function logout() {
      firebase.auth().signOut().then(() => {
          // Sign-out successful.
      }).catch((error) => {
          // An error happened.
      });
  }
  
  function signup() {
      const email = document.getElementById("signupemail").value;
      const password = document.getElementById("registerpwd").value;
      console.log(email, password);
      firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
              // Signed in
              var user = userCredential.user;
              // ...
          })
          .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              // ..
          });
  }
  
  
  const auth = firebase.auth();
  var database = firebase.database();
  
  auth.onAuthStateChanged((user) => {
      if (user) {
         window.location.href = "home.html"
         
      } else {
        
        console.log("no user")
      }
  });


    // ---------------level...1---------------

let colorArr = ['green' , 'red' , 'yellow','blue']

let curColor = 0;
let p ;
let lives = 3 
let balloon_color = "red";
    
function balloon_pop(id , event){
        if(id != "popped"){
            let balloon = event.target
            let ballonChild = balloon.childNodes[0]         
            balloon.classlist.add("poppedBalloon")
            ballonChild.style.color = id;
            ballonChild.innerText = 'pop!'
            p = event.target;
            event.target.id = "popped"
            if(id == balloon_color){
              curColor = curColor - 1 
            }else{
                console.log("wrong")
                lives = lives -  1
                lives()
            }

        }
    }
const currentLive = () =>{
    document.querySelector('.lives').innerHTML = 'lives : ' + lives;


}
currentLive()
