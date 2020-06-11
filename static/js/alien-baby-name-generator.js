



function alienBabyPrefix(){
    var options = [
        "Sprog of",
        "Sprog of",
        "Sprogling of",
        "Sprogling of",
        "Spawn of",
        "Baby",
        "Little",
        "L'il",
        "Tiny",
        "Eggling of",
        "Wee",
        "Mini",
        "Kid",
        "Brood of",
        "Sire of",
    ];

    return options[Math.floor(Math.random() * options.length)];
}

function alienBabySuffix(){
    var options = [
        "brood",
        "sprogling",
        "sproglet",
        "eggling",
        "egglet",
        "pouchling",
        "pouchlet",
        "bambino",
        "youngling",
        "hatchlet",
        "hatchling",
        "sire",
        "pup",
        "offspring",
        "son of "+alienName(),
        "daughter of "+alienName(),
        "spawn of "+alienName(),
        "offspring of "+alienName(),
    ];

    return options[Math.floor(Math.random() * options.length)];
}


// function alienBabyName(){
//     var randomStart = start[Math.floor(Math.random() * start.length)];
//     var randomEnd = end[Math.floor(Math.random() * end.length)];
//
//     return randomStart + randomEnd;
// }

newAlienBabyName = function(){
    var final = "";
    var prefixChance = Math.floor(Math.random() * 100);

    if(prefixChance < 40){
        final =  alienBabyPrefix() + " " + alienName();
    } else if (prefixChance >= 40 && prefixChance < 80) {
        final =  alienName() + " " + alienBabySuffix();
    } else {
        alienName();
    }

    return final;
}

generateNew = function(){
    $(".alien-baby-name").each(function(){

        $(this).html("");

        $(this).prepend(newAlienBabyName());

    });
}

generateNew();