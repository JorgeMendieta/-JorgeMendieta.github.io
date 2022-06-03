import{ getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const ButtonCustomLogin= document.querySelector("#btn_registro");
const contrasenaInput=document.querySelector("#password"); 
const correoInput=document.querySelector("#email");
const auth = getAuth();
ButtonCustomLogin.addEventListener("click", (e)=>{
    try {
      if (contrasenaInput.value !=null) {
        console.log(correoInput.value); 
      }
      const password=contrasenaInput.value; 
      const email=correoInput.value; 
      createUserWithEmailAndPassword(auth, email, password)
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