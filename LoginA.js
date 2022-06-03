import{ getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const ButtonCustomLogin= document.querySelector("#btn_login");
const contrasenaInput=document.querySelector("#password"); 
const correoInput=document.querySelector("#email");
const auth = getAuth();
ButtonCustomLogin.addEventListener("click", (e)=>{
    try {
      const password=contrasenaInput.value; 
      const email=correoInput.value; 
       console.log(correoInput.value); 
      
     
       signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
         
         const user = userCredential.user;
         if (user !=null) {
           location.href="Index.html"; 
         }
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
        
     
         // ..
       });
          
        
    } catch (error) {
      
    }
    });