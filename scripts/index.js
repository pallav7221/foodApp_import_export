import navbar from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar;

let valid = JSON.parse(localStorage.getItem("valid"));
let userDetail = JSON.parse(localStorage.getItem("userdetails"))

if(valid[0]){
    let data = userDetail[valid[1]];
    
    showUserData(data)
}
function showUserData(data){
    
    let box = document.createElement("div");

    let heading = document.createElement("h2");
    heading.innerHTML = "User Information";

    let name = document.createElement("p");
    name.innerHTML = data.name;

    let email = document.createElement("p");
    email.innerHTML = data.email;

    let password = document.createElement("p");
    password.innerHTML = data.password;

    box.append(heading,name,email,password);
    document.getElementById("userDetailDiv").append(box);
}