const token = localStorage.getItem("token");


// Check Login

if(!token){

    window.location.href="login.html";

}


// Fetch Leads

async function getLeads(){


    const response = await fetch(

        "http://localhost:5000/api/leads",

        {

            headers:{

                Authorization:`Bearer ${token}`

            }

        }

    );


    const leads = await response.json();


    displayLeads(leads);


}



// Display Leads

function displayLeads(leads){


    const table = 
    document.getElementById("leadTable");


    table.innerHTML="";



    leads.forEach(lead=>{


        table.innerHTML += `

        <tr>

        <td>${lead.name}</td>

        <td>${lead.email}</td>

        <td>${lead.budget}</td>


        <td>

        <select onchange="updateStatus('${lead._id}',this.value)">

        <option ${lead.status==="New"?"selected":""}>
        New
        </option>


        <option ${lead.status==="Contacted"?"selected":""}>
        Contacted
        </option>


        <option ${lead.status==="Closed"?"selected":""}>
        Closed
        </option>


        </select>


        </td>


        </tr>

        `;


    });


}



// Search Function

document
.getElementById("search")
.addEventListener("input",(e)=>{


    const value = e.target.value.toLowerCase();


    const rows = 
    document.querySelectorAll("#leadTable tr");


    rows.forEach(row=>{


        row.style.display =
        row.innerText.toLowerCase()
        .includes(value)
        ?
        ""
        :
        "none";


    });


});




// Update Status

async function updateStatus(id,status){


    await fetch(

        `http://localhost:5000/api/leads/${id}`,

        {

            method:"PUT",

            headers:{

                "Content-Type":"application/json",

                Authorization:`Bearer ${token}`

            },


            body:JSON.stringify({

                status

            })


        }

    );


    alert("Status Updated ✅");


}



// Logout

document
.getElementById("logout")
.addEventListener("click",()=>{


    localStorage.removeItem("token");


    window.location.href="login.html";


});



getLeads();

