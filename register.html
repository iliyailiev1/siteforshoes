 <!DOCTYPE html>
 <html>
 <head>
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta charset="utf-8">
     <title>Register</title>
     <link rel="stylesheet" href="main.css">
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
     <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
 </head>
 <body>
 <div class="register">
     <h3 class="">
         Register
     </h3>
     <input type="text" placeholder="FullName" id="nameInp" class="form-control mb-3">
     <input type="text" placeholder="Email" id="emailInp" class="form-control mb-3">
     <input type="text" placeholder="Username" id="userInp" class="form-control mb-3">
     <input type="password" placeholder="Password" id="passInp" class="form-control mb-3">
     <button type="text" id="sub_btn" class="btn btn-outline-primary mb-3 w-100">Register</button>
     <a href="login.html" class="badge badge-secondary py-1 w-100">Already Have Un Account?</a>
     
 </div>


 
 <script type="module">
 //------DATABASE LINK-------//

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
    import {getDatabase, ref, child, get, set}
    from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";
    const db = getDatabase();

//--------VALIDATION---------//
const name = document.getElementById('nameInp');
const email = document.getElementById('emailInp');
const username = document.getElementById('userInp');
const pass = document.getElementById('passInp');
const submit = document.getElementById('sub_btn');

function isEmptyOrSpace(str){
    return str === null || str.match(/^ *$/) !== null;
}

function Validation(){
    let nameregex = /^[a-zA-Z\s]+$/;
    let emailregex = /^[a-zA-Z0-9]+@(gmail|abv)\.(com|bg)$/;
    let userregex = /^[a-zA-Z0-9]{5,}$/;

    if(isEmptyOrSpace(name.value) || isEmptyOrSpace(email.value) || 
    isEmptyOrSpace(username.value) || isEmptyOrSpace(pass.value)){
        alert('You cannot left any field empty')
        return false;
    }

if(!nameregex.test(name.value)){
    alert('The name should only contain alphabets');
    return false;
  }

if(!emailregex.test(email.value)){
    alert('Enter a valid email')
    return false;
  }
  
if(!userregex.test(username.value)){
    alert('-username can only be alphanumeric\n-username must be at least 5 characters\n-username cannot contain spaces');
    return false;
  }
  return true;
}

function RegisterUser(){
    if(!Validation()){
        return;
    };

    const dbRef = ref(db);
    get(child(dbRef, 'UsersList/'+ username.value)).then((snapshot)=>{
        if(snapshot.exists()){
            alert('Account already exist!');
        }
        else{
            set(ref(db, 'UsersList/'+ username.value),
            {
                fullname: name.value,
                email: email.value,
                username: username.value,
                password: encPass()
            })
            .then(()=>{
                alert('User added Successfully');
            })
            .catch((error)=>{
                alert('error'+error);
            })
        }
    })
}

//----ENCRIPTION----//
function encPass(){
    var pass12 = CryptoJS.AES.encrypt(pass.value, pass.value);
    return pass12.toString();
}

//-------ASSIGN THE EVENTS--------//
submit.addEventListener('click', RegisterUser);
  </script>

</body>
</html>
