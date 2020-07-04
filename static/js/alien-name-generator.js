

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
    "And",
    "Altis",
    "B",
    "B'",
    "Ba'",
    "Bax",
    "Be'",
    "Bos",
    "Bob",
    "Bop",
    "Bor",
    "Bine",
    "Bing",
    "Blar",
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
    "Din",
    "Dop",
    "Dud",
    "Edo",
    "Fer",
    "Flim",
    "G",
    "Gal",
    "Gar",
    "Geb",
    "Glo",
    "Glob",
    "Grel",
    "Gren",
    "Gro",
    "Gur",
    "Gob",
    "Gor",
    "Gutt",
    "Gw",
    "Hap",
    "Hel",
    "Hob",
    "Hon",
    "Jada",
    "Jed",
    "Jar",
    "Jud",
    "Jur",
    "K",
    "Ka'",
    "Kack",
    "Kat",
    "Kay",
    "Kai",
    "Ke'",
    "Kla",
    "Kla",
    "Klup",
    "Klum",
    "Klop",
    "Kr",
    "Kro",
    "Lo",
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
    "Tac",
    "Tad",
    "Temer",
    "Ted",
    "Tera",
    "Tom",
    "Top",
    "Tre",
    "Ustr",
    "Uzon",
    "V'",
    "Va'",
    "Vod",
    "Vop",
    "Vol",
    "Vrok",
    "Vul",
    "Wo",
    "Zey",
    "Zom",
    "Zop",
    "Zum",

];

var end = [
    "ala",
    "aela",
    "ah",
    "aico",
    "aik",
    "ain",
    "ala",
    "albag",
    "alg",
    "alorn",
    "alvak",
    "an",
    "arg",
    "ato",
    "aveola",
    "bag",
    "bip",
    "bian",
    "bing",
    "blag",
    "blob",
    "bon",
    "bong",
    "cat",
    "cer",
    "cit",
    "cot",
    "cut",
    "eax",
    "ed",
    "ed",
    "edo",
    "egs",
    "eks",
    "engi",
    "erd",
    "ertoni",
    "etox",
    "etti",
    "eux",
    "flam",
    "flen",
    "flim",
    "flom",
    "gan",
    "gon",
    "gun",
    "gong",
    "gogo",
    "gongon",
    "hop",
    "hun",
    "hura",
    "huru",
    "hut",
    "ill",
    "illit",
    "jar",
    "jan",
    "jed",
    "jo",
    "jos",
    "juc",
    "jud",
    "jid",
    "jin",
    "jis",
    "kid",
    "koo",
    "kop",
    "kloren",
    "kro",
    "krut",
    "klet",
    "klep",
    "klot",
    "klop",
    "lambo",
    "lan",
    "larm",
    "ley",
    "linn",
    "lily",
    "lit",
    "lite",
    "lorm",
    "nal",
    "nir",
    "nol",
    "nu",
    "obb",
    "obu",
    "og",
    "ogorn",
    "oi",
    "ok",
    "oln",
    "ons",
    "org",
    "oria",
    "orn",
    "ot",
    "qun",
    "rew",
    "rn",
    "rn",
    "ro",
    "ron",
    "rop",
    "rop",
    "rot",
    "sin",
    "so",
    "sor",
    "sloff",
    "tet",
    "tin",
    "tissi",
    "tor",
    "turian",
    "urian",
    "uts",
    "uth",
    "zad",
    "zar",
    "zed",
    "zell",
    "zoik",
    "zo",
    "zok",
    "zon",
    "zod",
    "zop",
    "zuc",
    "zut",
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