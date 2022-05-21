import navbar from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar;
import {getData,displayReceipe} from "../components/fetchAndAppend.js"
let container = document.querySelector("#container");


async function find(){
    let res = await getData(`https://www.themealdb.com/api/json/v1/1/random.php`)
    // let data = await res.json();
    displayReceipe(res.meals,container);
}
find();