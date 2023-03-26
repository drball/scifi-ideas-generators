var output = $("#generated-names");
var num = 20;

var suffix = [
    "the foul",
    "the bloodthirsty",
    "the savage",
    "the cruel",
    "the unlucky",
    "the mad",
    "the fearless",
    "the ruthless",
    "the undying",
    "the invincible",
    "the unyielding",
    "the tough",
    "the terrible",
    "the oily",
    "the smelly",
    "the clever",
    "the clean",
    "the filthy",
    "the kind",
    "the slimy",
    "the mischievous",
    "the trickster",
    "the thief",
    "the sneaky",
    "the hidden",

];

var firstNames = [
    "Azog",
    "Bodag",
    "Borak",
    "Brazag",
    "Brok",
    "Griznak",
    "Guk",
    "Gulrok",
    "Halak",
    "Karg",
    "Kraduk",
    "Kruk",
    "Kurlak",
    "Lurzog",
    "Magruk",
    "Mogg",
    "Muck",
    "Narg",
    "Ogor",
    "Parg",
    "Rak",
    "Rok",
    "Snak",
    "Srog",
    "Targ",
    "Tuk",
    "Ulak",
    "Varg",
    "Xog",
    "Xug",
    "Xuk",
    "Zog",
    "Zrog",
    "Zuk",
    "Zuke"
];

var consonants = [
    "B",
    "Br",
    "C",
    "Cr",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "Kr",
    "L",
    "M",
    "N",
    "P",
    "Pr",
    "Qu",
    "R",
    "S",
    "Sr",
    "St",
    "Sp",
    "T",
    "Tr",
    "V",
    "W",
    "Wr",
    "Y",
    "X",
    "Z",
];

var firstAfterConsonant = [

    "al",
    "aduk",
    "adop",
    "arg",
    "ak",
    "ex",
    "ek",
    "on",
    "ohn",
    "ofur",
    "og",
    "ok",
    "op",
    "arp",
    "ap",
    "arg",
    "ark",
    "uk",
    "up",
    "ump",
    "ug",
    "ur",
    "utt",
    "oss",
    "omm",
    "ik",
    "zok",
    "og",
    "op",
    "ik",
    "ok",
    "uk",
    "elch",
];

var firstPart1 = [
    "Az",
    "As",
    "Bo",
    "But",
    "Dod",
    "Com",
    "Ir",
    "War",
    "Wool",
    "Kel",
    "Sand",
    "Spin",
    "Mac",
    "Mar",
    "Kras",
    "Nur",
    "Krol",
    "Bef",
    "Thos",
    "Het",
    "Brout",
    "Brun",
    "Bal",
    "Bag",
    "But",
    "Thor",
    "Rug",
    "Bog",
    "Bor",
    "Bod",
    "Gir",
    "Man",
    "Jon",
    "Har",
    "Jo",
    "Ra",
    "Rak",
    "Go",
    "Griz",
    "Zak",
];

var firstPart2 = [
    "lug",
    "ik",
    "zok",
    "zak",
    "og",
    "op",
    "ik",
    "ok",
    "uk",
    "nak",
];

generateNew = function(){
    output.html("");

    for (i = 0; i <= num; i++) {
        var suffixChance = Math.floor(Math.random() * 100);
        var firstTypeChance = Math.floor(Math.random() * 100);

        var first = "";
        var final = "";

        //--first name
        if(firstTypeChance <= 40){
            //--using consonant
            var randomConsonant = consonants[Math.floor(Math.random() * consonants.length)];
            var randomFirstAfterConsonant = firstAfterConsonant[Math.floor(Math.random() * firstAfterConsonant.length)];

            first = randomConsonant + randomFirstAfterConsonant;
        } else if (firstTypeChance > 40 && firstTypeChance <= 80) {
            //--2 part name
            var randomFirstPart1 = firstPart1[Math.floor(Math.random() * firstPart1.length)];
            var randomFirstPart2 = firstPart2[Math.floor(Math.random() * firstPart2.length)];

            first = randomFirstPart1 + randomFirstPart2;

        } else {
            //--choose from name list
            var randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
            first = randomFirst;
        }

        final =  first;

        //--does it have a suffix?
        if(suffixChance < 20){
            var randomSuffix = suffix[Math.floor(Math.random() * suffix.length)];
            final =  final + " " + randomSuffix;
        }

        output.prepend("<p>"+final+"</p>");
    }

}

generateNew();
