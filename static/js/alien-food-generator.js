function randomAlienFoodAdj(){
    return newAlienSpeciesName();
}

generateIdea = function(){

    final = "";
    var typeChance = Math.floor(Math.random() * 100);

    if(typeChance < 65){
        final = randomAlienFoodAdj() + " " + randomFoodIngredient() + " " + randomFoodType();
    } else {
        final = randomAlienFoodAdj() + " " + randomFoodPart1() + "-" + randomFoodPart2();
    }

    final = final.substr(0,1).toUpperCase() + final.substr(1);

    return final + ".";
}

generateAll = function () {
    $(".single-line").each(function(){

        $(this).html("");

        $(this).prepend(generateIdea());

    });

}

generateAll();