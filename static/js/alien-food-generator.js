function randomAlienFoodAdj(){
    return newSimpleAlienSpeciesName();
}

generateFood = function(){

    final = "";
    var typeChance = Math.floor(Math.random() * 100);

    if(typeChance < 40){
        final = randomAlienFoodAdj() + " " + randomFoodIngredient() + " " + randomFoodType();
    } else if(typeChance >= 40 && typeChance < 70) {
        final = randomFoodAdj() + " " + newSimpleAlienSpeciesName() + " " + randomFoodType();
    } else {
        final = randomAlienFoodAdj() + " " + randomFoodPart1() + "-" + randomFoodPart2();
    }

    final = final.substr(0,1).toUpperCase() + final.substr(1);

    return final + ".";
}

generateAll = function () {
    $(".single-line").each(function(){

        $(this).html("");

        $(this).prepend(generateFood());

    });

}

generateAll();