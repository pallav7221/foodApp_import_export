
import navbar from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar;

import { getData, displayReceipe } from "../components/fetchAndAppend.js";
let container = document.querySelector("#container");
document.querySelector("#SearchInput").addEventListener("input", find)
   

async function find(){
        let mealName = document.querySelector("#SearchInput").value;
        console.log(mealName)
        let res = await getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        console.log(res)

        displayReceipe(res.meals, container);
}
var timer;
function debounce(find,delay){
        if(timer){
                clearTimeout(timer);

        }
        timer = setTimeout(find,delay);
}

