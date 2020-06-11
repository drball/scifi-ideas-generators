

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
    "Bax",
    "Be'",
    "Bos",
    "Bob",
    "Bine",
    "Blo",
    "Blub",
    "Bol",
    "Blib",
    "Bon",
    "Cat",
    "Cak",
    "Cac",
    "Ch",
    "Dar",
    "Edo",
    "Fer",
    "Flim",
    "G",
    "Gal",
    "Glo",
    "Glob",
    "Grel",
    "Gren",
    "Gro",
    "Gur",
    "Gob",
    "Gutt",
    "Gw",
    "Hel",
    "Hob",
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
    "Mob",
    "Molz",
    "Mon",
    "Na",
    "Nel",
    "Nir",
    "Odor",
    "Olg",
    "Olk",
    "Osa",
    "Pro",
    "Que",
    "Queeb",
    "Roy",
    "So",
    "Spa",
    "Stra",
    "Suda",
    "Squ",
    "Tam",
    "Tamer",
    "Temer",
    "Tera",
    "Tom",
    "Tre",
    "Ustr",
    "Uzon",
    "V'",
    "Va'",
    "Vol",
    "Vrok",
    "Vul",
    "Wo",
    "Zey",
    "Zom",
    "Zum",

];

var end = [
    "ala",
    "ah",
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
    "blob",
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
    "flen",
    "flam",
    "gan",
    "gun",
    "hun",
    "huru",
    "hura",
    "ill",
    "illit",
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
    "obu",
    "obb",
    "ons",
    "ogorn",
    "oria",
    "orn",
    "oln",
    "org",
    "og",
    "qun",
    "rn",
    "rn",
    "ro",
    "ron",
    "sin",
    "sloff",
    "tet",
    "tin",
    "tissi",
    "tor",
    "turian",
    "urian",
    "uts",
    "zell",
    "zoik",
    "zok",
    "zon",
    "zuc",
    "zula",
    "zulu",
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