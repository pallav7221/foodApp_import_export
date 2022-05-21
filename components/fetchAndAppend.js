async function getData(url) {
    try {
        let result = await fetch(url);
        let data = await result.json();
    //    console.log(data.meals)
        return data;
    } catch (error) {
        console.log(error);
    }
}

function displayReceipe(data,container) {
    container.innerHTML = "";
    data.forEach(receipeIngredient => {
        let box = document.createElement("div");

        let image = document.createElement("img");
        image.src = receipeIngredient.strMealThumb;

        let receiprName = document.createElement("h3");
        receiprName.innerText = "Dish Name : " + receipeIngredient.strMeal;

        let instruction = document.createElement("p");
        instruction.innerText = `Instructions:\n ${receipeIngredient.strInstructions}`


        box.append(image, receiprName, instruction)

        container.append(box);
    });
}

export {getData , displayReceipe};