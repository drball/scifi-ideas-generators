

var prefix = [
    "Captain",
    "Admiral",
    "Ambassador",
    "High Ambassador",
    "Subcommander",
    "Ser",
    "Colonel",
    "Colonel",
];

var longPrefix = [
    "The Mighty",
    "The Ancient",
    "The",
    "The High",
    "The Great",
];


var start = [
    "Ab",
    "Adr",
    "Arc",
    "Altis",
    "B",
    "B'",
    "Ba'",
    "Be'",
    "Bos",
    "Bine",
    "Blo",
    "Bol",
    "Bon",
    "Cat",
    "Ch",
    "Dar",
    "Edo",
    "Fer",
    "G",
    "Gal",
    "Glo",
    "Glob",
    "Grel",
    "Gro",
    "Gur",
    "Gutt",
    "Jada",
    "K",
    "Ka'",
    "Kay",
    "Kai",
    "Ke'",
    "Kla",
    "Kla",
    "Kr",
    "Lur",
    "Lux",
    "Ma",
    "Mesa",
    "Meta",
    "Mo",
    "Molz",
    "Mon",
    "Na",
    "Nel",
    "Nir",
    "Odor",
    "Olg",
    "Olk",
    "Osa",
    "Roy",
    "So",
    "Spa",
    "Stra",
    "Suda",
    "Tam",
    "Tamer",
    "Temer",
    "Tera",
    "Tom",
    "Tre",
    "Ustr",
    "V'",
    "Va'",
    "Vol",
    "Vrok",
    "Vul",
    "Wo",
    "Zey",

];

var end = [
    "ala",
    "alvak",
    "albag",
    "alorn",
    "ed",
    "ok",
    "ot",
    "zar",
    "aela",
    "aico",
    "aik",
    "ain",
    "an",
    "ala",
    "ato",
    "aveola",
    "bon",
    "bian",
    "cer",
    "cit",
    "eax",
    "ed",
    "etox",
    "edo",
    "egs",
    "eks",
    "engi",
    "ertoni",
    "etti",
    "eux",
    "gan",
    "gun",
    "juc",
    "kid",
    "kloren",
    "kro",
    "krut",
    "lan",
    "linn",
    "lit",
    "larm",
    "lambo",
    "lite",
    "nal",
    "nir",
    "nu",
    "oi",
    "ons",
    "ogorn",
    "oria",
    "orn",
    "oln",
    "org",
    "qun",
    "rn",
    "rn",
    "ro",
    "ron",
    "sin",
    "sloff",
    "tet",
    "tin",
    "tor",
    "turian",
    "urian",
    "uts",
    "zell",
    "zoik",
    "zok",
    "zon",
    "zuc",
];


function alienName(){
    var randomStart = start[Math.floor(Math.random() * start.length)];
    var randomEnd = end[Math.floor(Math.random() * end.length)];

    return randomStart + randomEnd;
}

function alienLastName(){
    var randomStart = start[Math.floor(Math.random() * start.length)];
    var randomEnd = end[Math.floor(Math.random() * end.length)];
    var typeChance = Math.floor(Math.random() * 100);

    if(typeChance < 25){
        var randomEnd2 = end[Math.floor(Math.random() * end.length)];

        return randomStart + randomEnd + randomEnd2;

    }else {
        return randomStart + randomEnd;
    }

}

newAlienSpeciesName = function(){
    var final = "";
    var typeChance = Math.floor(Math.random() * 100);
    var randomLongPrefix = longPrefix[Math.floor(Math.random() * longPrefix.length)];
    var randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];

    if(typeChance < 10){

        final = randomPrefix + " "+ alienName();

    }else if (typeChance >= 10 && typeChance < 20) {
        final = randomLongPrefix + " "+ alienName() + " of " + planetName();
    }else {
        final =  alienName() + " " + alienLastName();
    }

    return final;
}

generateNew = function(){
    $(".alien-name").each(function(){

        $(this).html("");

        $(this).prepend(newAlienSpeciesName());

    });
}

generateNew();