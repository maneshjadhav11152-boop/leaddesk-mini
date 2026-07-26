const form = document.getElementById("leadForm");


form.addEventListener("submit",(e)=>{


    e.preventDefault();


    const name =
    document.getElementById("name").value.trim();


    const email =
    document.getElementById("email").value.trim();


    const budget =
    document.getElementById("budget").value;


    const message =
    document.getElementById("message").value.trim();



    if(
        name === "" ||
        email === "" ||
        budget === "" ||
        message === ""
    ){

        showMessage(
            "Please fill all fields ❌",
            "red"
        );

        return;

    }



    if(!email.includes("@")){

        showMessage(
            "Enter valid email ❌",
            "red"
        );

        return;

    }

  fetch("https://leaddesk-mini-klen.onrender.com/api/leads",{

    method:"POST",

    headers:{
        "Content-Type":"application/json"
    },


    body:JSON.stringify({

        name,
        email,
        budget,
        message

    })

})


.then(res=>res.json())


.then(data=>{


    showMessage(
    data.message+" ✅",
    "green"
    );


    form.reset();


})


.catch(error=>{


    showMessage(
    "Server Error ❌",
    "red"
    );


});


    form.reset();


});



function showMessage(text,color){

    const msg =
    document.getElementById("responseMessage");


    msg.innerText=text;

    msg.style.color=color;

}

