<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <title>Login</title>
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
</head>
<body>
<div class="login">
    <h3 class=" ">
        Login
    </h3>
    <input type="text" placeholder="Username" id="userInp" class="form-control mb-3">
    <input type="password" placeholder="Password" id="passInp" class="form-control mb-3">
    <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="customSwitch1">
        <label class="custom-control-label mb-3" for="customSwitch1">Keep me Logged In</label>
      </div>
    
    <button type="text" id="sub_btn" class="btn btn-outline-primary mb-3 w-100">Register</button>
    <a href="register.html" class="badge badge-secondary py-1 w-100">Want To Create Un Account?</a>
    
</div>
<script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDmZqQZVfDRM3Zy1vDJnk_5wxgQ7kfQRig",
    authDomain: "mydatabase-5aac1.firebaseapp.com",
    databaseURL: "https://mydatabase-5aac1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mydatabase-5aac1",
    storageBucket: "mydatabase-5aac1.appspot.com",
    messagingSenderId: "701739074116",
    appId: "1:701739074116:web:f36bbd84bd8d4eae137211"
  };
  
  
  const app = initializeApp(firebaseConfig);
  
  import {getDatabase, ref, set, child, get}
     from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";
     const db = getDatabase();
//-------VALDATION-------//
     const username = document.getElementById('userInp');
     const pass = document.getElementById('passInp');
     const submit = document.getElementById('sub_btn');
 
     function AuthenticateUser(){
      const dbRef = ref(db);  
      get(child(dbRef, 'UsersList/'+ username.value)).then((snapshot)=>{
        if(snapshot.exists()){
            let dbpass = decPass(snapshot.val().password);
            if(dbpass == pass.value){
              login();
            }
            else{
              alert('user does not exist')
            }
        }
        else{
          alert('username or password is invalid');
        }
      });   
    }
     //-------DECRIPT Process-------//
     function decPass(dbpass){
    var pass12 = CryptoJS.AES.decrypt(dbpass, pass.value);
    return pass12.toString(CryptoJS.enc.Utf8);
}
       
//--------LOGIN--------//

function login(user){
let keepLoggedIn = document.getElementById('customSwitch1').checked;

if(!keepLoggedIn){
  sessionStorage.setItem('user', JSON.stringify(user));
  window.location="index.html";
}
else{
  localStorage.setItem('keepLoggedIn', 'yes');
  localStorage.setItem('user', JSON.stringify(user));
  window.location='index.html';
}
}

//-------ASSIGN THE EVENTS--------//
submit.addEventListener('click', AuthenticateUser);
</script>
 
</body>
</html>
