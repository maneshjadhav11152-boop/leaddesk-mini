const form = document.getElementById("loginForm");


form.addEventListener("submit", async(e)=>{


e.preventDefault();



const email =
document.getElementById("email").value;


const password =
document.getElementById("password").value;



const response = await fetch(
"https://leaddesk-mini-klen.onrender.com/api/auth/login",
{
  
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

email,
password

})

});



const data = await response.json();



if(data.token){


localStorage.setItem(
"token",
data.token
);



window.location.href="admin.html";


}

else{


document.getElementById("message")
.innerText=data.message;


}



});

