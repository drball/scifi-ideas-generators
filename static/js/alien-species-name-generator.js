

var prefix = [
    "Mighty",
    "Ancient",
    "Faithful",
    "Mysterious",
    "Giant",
    "Repulsive",
    "Abandoned",
    "Bog",
    "Underground",
    "Burrowing",
    "Primordial",
    "Prehistoric",
    "Ethereal",
    "Microscopic",
    "Symbiotic",
    "Speckled",
    "Shapeless",
    "Immortal",
    "Aquatic",
    "Great",
    "old",
];

function alienNameStart(){
    var options = [
        "Ab",
        "Adr",
        "Arc",
        "B'",
        "Ba'",
        "Be'",
        "Bos",
        "Bine",
        "Blo",
        "Bol",
        "Bon",
        "Cat",
        "Dar",
        "Edo",
        "Fer",
        "G",
        "Glo",
        "Glob",
        "Grel",
        "Gro",
        "Gur",
        "Jada",
        "Ka'",
        "Kay",
        "Kai",
        "Ke'",
        "Kla",
        "Kla",
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

    return options[Math.floor(Math.random() * options.length)];
}

function alienNameEnd(){
    var options = [
        "'ala",
        "'ed",
        "'ok",
        "'ots",
        "'zed",
        "aela",
        "aico",
        "aik",
        "ain",
        "ajoren",
        "ala",
        "ato",
        "aveola",
        "bon",
        "bians",
        "cers",
        "cit",
        "eax",
        "ed",
        "eds",
        "egs",
        "eks",
        "engi",
        "ertoni",
        "etti",
        "eux",
        "gan",
        "guns",
        "juc",
        "kid",
        "kloren",
        "kro",
        "kruts",
        "lan",
        "lit",
        "lites",
        "nals",
        "nirs",
        "nu",
        "ois",
        "ons",
        "orian",
        "orn",
        "qun",
        "rn",
        "rn",
        "ro",
        "ron",
        "sian",
        "tet",
        "tions",
        "tors",
        "turian",
        "urian",
        "uts",
        "zell",
        "zoik",
        "zoks",
        "zon",
        "zuc",
        'irans',
    ];
    return options[Math.floor(Math.random() * options.length)];
}

function alienNameEndPlural() {
    var options = [
        "aelans",
        "bees",
        "bles",
        "guns",
        "ons",
        "tors",
        "cers",
        "eds",
        "egs",
        "engi",
        "eks",
        "zoks",
        "gers",
        "gors",
        "gees",
        "jers",
        "jeks",
        "gex",
        "ors",
        "rons",
        "rods",
        "sions",
        "uns",
        "urns",
        "lorians",
        'irans',
        "bulans",
        "pans",
        "pons",
        "pods",
        "ponds",
    ];
    return options[Math.floor(Math.random() * options.length)];
}

function newSimpleAlienSpeciesName(){
    var randomStart = start[Math.floor(Math.random() * start.length)];
    var randomEnd = end[Math.floor(Math.random() * end.length)];

    return randomStart + randomEnd;
}

newAlienSpeciesName = function(){
    var final = "";
    var prefixChance = Math.floor(Math.random() * 100);
    var hyphenChance = Math.floor(Math.random() * 100);
    var randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];

    if(prefixChance < 10){
        if(hyphenChance < 50){
            final = "The " + alienNameStart() + alienNameEnd();
        } else {
            final = "The " + randomPrefix + " "+ alienNameStart() + alienNameEndPlural();
        }

    }else {
        if(hyphenChance < 15){
            final =  alienNameStart() + alienNameEnd() + "-" + alienNameEndPlural();
        }else {
            final =  alienNameStart() + alienNameEnd();
        }
    }

    return final;
}

generateNew = function(){
    $(".alien-species-name").each(function(){

        $(this).html("");

        $(this).prepend(newAlienSpeciesName());

    });
}

generateNew();