import navbar from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar;


let userDetail = JSON.parse(localStorage.getItem("usersData")) || [];
document.querySelector("button").addEventListener("click",()=>{
    // event.preventDefault();
    let userName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userPassword = document.getElementById("password").value;
    // console.log(userName.length)

    if(userName.length == 0 || userEmail.length == 0|| userPassword.length == 0){
        alert("fill all the information");
    }
    else{
        let userdetail={
            name : userName,
            email : userEmail,
            password : userPassword
        }
        userDetail.push(userdetail)
        localStorage.setItem("userdetails",JSON.stringify(userDetail));
        window.location.href = "./login.html"
    }
})