import navbar from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar;



let userDetail = JSON.parse(localStorage.getItem("userdetails"))||[];
document.querySelector("button").addEventListener('click',()=>{
        let enteredEmail = document.getElementById("email").value;
       let enteredPassword = document.getElementById("password").value
    
   let index;
   let valid = false;
console.log(userDetail)
    userDetail.forEach((element,idx) => {

        if(element.email == enteredEmail && element.password == enteredPassword){
            index = idx;
            valid = true;
        }
    });

    if (valid) {
        alert('Login Successful');
        localStorage.setItem('valid', JSON.stringify([valid, index]));
        window.location.href = './index.html';
    }
    else {
        alert('Invalid Details');
    }

})