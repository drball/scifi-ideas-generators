

var prefix = [
    "Mighty",
    "Mighty Empire of",
    "Ancient",
    "Faithful",
    "Republic of",
    "Republics of",
    "United Republics of",
    "Free Republic of",
    "Collective",
    "Collective Planets of",
    "Collective Realities of",
    "Federated States of",
    "Federated Planets of",
    "Federal Galaxies of",
    "Federal Worlds of",
    "United Federation of",
    "Confederation of",
    "Confederated States of",
    "Confederated Planets of",
    "Confederated Worlds of",
    "United Planets of",
    "United Kingdoms of",
    "Commonwealth of",
    "Free Commonwealth of",
    "New",
    "New",
    "Unified inner worlds of",
    "United outer worlds of",
    "United Nations of",
    "Free Nations of",
    "United Realities of",
    "Dominated planets of",
    "Subjugated planets of",
    "Synthetic",
    "Dominated",
    "Dominated Planets of",
    "Free Planets of",
    "Former Republic of",
    "Benevolent Republic of",
    "Realm of",
    "Dictatorship of",
    "Planetary Dictatorship of",
    "Empire of",
    "Empire of",
    "Ancient Empire of",
];

var suffix = [
    "Empire",
    "Empire",
    "Old Empire",
    "Consortium",
    "Dynasty",
    "Dynasty",
    "Dynasties",
    "Kingdom",
    "Kingdoms",
    "Collective",
    "Commonwealth",
    "Republic",
    "Emirates",
    "Empire & Principalities",
    "Planets",
    "Free Republic",
    "United Commonwealth",
    "Dawn",
    "Cooperative",
    "Coalition",
    "Nations",
    "Operation",
    "Province",
    "Establishment",
    "Jurisdiction",
    "United Planets",
    "Domain",
    "Power",
    "Federation",
    "Government",
    "Institution",
    "Operation",
    "Czardom",
    "Electorate",
    "Realm",
    "Autocracy",
    "Aristocracy",
    "Dictatorship",
    "Oligarchy",
    "Raj",
    "Caliphate",
    "Khanate",
    "League",
    "Khaganate",
    "Colonial Empire",
    "Sultanate",

];

newAlienEmpireName = function(){
    var final = "";
    var prefixChance = Math.floor(Math.random() * 100);
    var hyphenChance = Math.floor(Math.random() * 100);
    var randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];
    var randomSuffix = suffix[Math.floor(Math.random() * suffix.length)];

    if(hyphenChance < 80){
        final = alienNameStart() + alienNameEnd();
    } else {
        final = alienNameStart() + alienNameEnd() + "-" + alienNameEnd();
    }

    if(prefixChance < 40){
        final = "The " + randomPrefix + " " + final;
    }else {
        final = "The " + final + " " + randomSuffix;
    }

    return final;
}

generateNewEmpires = function(){
    $(".alien-empire-name").each(function(){

        $(this).html("");

        $(this).prepend(newAlienEmpireName());

    });
}

generateNewEmpires();