

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

var start = [
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

var end = [
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

var endPlural = [
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
    "gees",
    "jers",
    "jeks",
    "gex",
    "ors",
    "sions",
    "uns",
    "lorians",
    'irans',
    "bulans",
    "pans",
    "pons"
];

newAlienSpeciesName = function(){
    var final = "";
    var prefixChance = Math.floor(Math.random() * 100);
    var hyphenChance = Math.floor(Math.random() * 100);
    var randomStart = start[Math.floor(Math.random() * start.length)];
    var randomEnd = end[Math.floor(Math.random() * end.length)];
    var randomEndPlural = endPlural[Math.floor(Math.random() * endPlural.length)];
    var randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];

    if(prefixChance < 10){
        if(hyphenChance < 50){
            final = "The " + randomStart + randomEnd;
        } else {
            final = "The " + randomPrefix + " "+ randomStart + randomEndPlural;
        }

    }else {
        if(hyphenChance < 15){
            final =  randomStart + randomEnd + "-" + randomEndPlural;
        }else {
            final =  randomStart + randomEnd;
        }
    }

    return "<p>"+final+"</p>";
}

generateNew = function(){
    $(".alien-species-name").each(function(){

        $(this).html("");

        $(this).prepend(newAlienSpeciesName());

    });
}

generateNew();