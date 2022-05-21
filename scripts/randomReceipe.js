import navbar from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar;
import { getData, displayReceipe } from "../components/fetchAndAppend.js"
let container = document.querySelector("#container");

document.querySelector("#selectCate").addEventListener('change', categories)
 async function categories(){
     let category = document.querySelector("#selectCate").value;

    //  console.log(category)
     let res = await getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`)
    //  console.log(res.meals);
     displayReceipe(res.meals,container)
    
 }

 
async function find() {
    try {
        let res = await getData("https://www.themealdb.com/api/json/v1/1/categories.php");
        // console.log(res)
        display(res.categories);
    } catch (error) {
        console.log(error)
    }
}
function display(data) {
    let selectCategories = document.querySelector("#selectCate");
    selectCategories.innerHTML = "";
    let option = document.createElement("option");
    option.innerText = "choose item";
    data.forEach(element => {
        let option1 = document.createElement("option");
        option1.innerText = element.strCategory;
        selectCategories.append(option, option1);
    });

}
find();