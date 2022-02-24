

var prefix = [
    "Captain",
    "President",
    "General",
    "Colonel",
    "Commander",
    "King",
    "Queen",
    "Dark",
    "Bloody",
    "Lord",
    "Grotty",
    "Dangerous",
    "Nasty",
];

var longPrefix = [
    "The Mighty",
    "The Ancient",
    "The",
    "The High",
    "Great",
    "The Nasty",
    "The Dark",
    "The High Lord",
];


var start = [
    "Ab",
    "Ar",
    "Adr",
    "Arc",
    "And",
    "Altis",
    "B'",
    "Ba'",
    "Bax",
    "Be'",
    "Ber",
    "Bos",
    "Bob",
    "Bop",
    "Borg",
    "Berg",
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
    "Fat",
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
    "Grot",
    "Gw",
    "Hap",
    "Hel",
    "Hell",
    "Hob",
    "Hon",
    "Jada",
    "Jed",
    "Jar",
    "Jud",
    "Jur",
    "Jizz",
    "K",
    "Ka'",
    "Kack",
    "Kat",
    "Kay",
    "Kai",
    "Ke'",
    "Kla",
    "Kla",
    "Kip",
    "Kik",
    "Klup",
    "Klum",
    "Klop",
    "Kr",
    "Kro",
    "Lo",
    "Lur",
    "Lux",
    "Ma",
    "Mar",
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
    "Sit",
    "Sik",
    "Spa",
    "Stra",
    "Suda",
    "Swamp",
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
    "Volder",
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
    "cow",
    "crow",
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
    "face",
    "fark",
    "flam",
    "flen",
    "flim",
    "flom",
    "fuk",
    "gan",
    "glak",
    "gon",
    "gorn",
    "gun",
    "grots",
    "gong",
    "gogo",
    "gongon",
    "hop",
    "hound",
    "hun",
    "hura",
    "huru",
    "hut",
    "ill",
    "illit",
    "jar",
    "jaz",
    "jan",
    "jed",
    "jo",
    "jos",
    "juc",
    "jud",
    "jid",
    "jin",
    "jis",
    "jiz",
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
    "pit",
    "plop",
    "pik",
    "qun",
    "rew",
    "rev",
    "revon",
    "rn",
    "rn",
    "ro",
    "ron",
    "rop",
    "rop",
    "rot",
    "saw",
    "sin",
    "shart",
    "shark",
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

var suffix = [
    "the unclean",
    "the filthy",
    "the dirty",
    "the bastard",
    "the arsehole",
    "the dick",
    "the horrible",
    "the murderer",
    "the naughty",
    "the haughty",
    "the nasty",
    "the fat",
    "the terrible",
    "the raven",
    "the untrustworthy",
    "hellbourne",
];

var place = [
    "the dark realm",
    "the underworld",
    "hell",
    "the swamp",
    "the underworld",
    "the dark zone",
    "the dark empire",
    "the dead",
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

    }else if (typeChance >= 10 && typeChance < 15) {
        final = randomLongPrefix + " "+ alienName() + " of " + planetName();
    }else if (typeChance >= 15 && typeChance < 25) {
        var placeName = place[Math.floor(Math.random() * place.length)];
        final = alienName() + " of " + placeName;
    }else if (typeChance >= 25 && typeChance < 35) {
        var randomSuffix = suffix[Math.floor(Math.random() * suffix.length)];
        final = alienName() + " " + randomSuffix;
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