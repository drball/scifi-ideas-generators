

var prefix = [
    "Captain",
    "President",
    "General",
    "Colonel",
    "Commander",
    "Minister",
    "Bishop",
    "King",
    "Queen",
    "Dark",
    "Bloody",
    "Lord",
    "Lady",
    "Mistress",
    "Grotty",
    "Admiral",
    "Dangerous",
    "Nasty",
    "Dr.",
    "Professor",
    "Sergent",
    "Don",
    "Untrustworthy",
    "Stinking",
    "Foul",
    "Warty",
    "Ugly",
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
    "The ugly",
    "The evil",
];


var start = [
    "Ab",
    "Ar",
    "Ak",
    "Adr",
    "Arc",
    "And",
    "Altis",
    "B'",
    "Ba'",
    "Bak",
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
    "Dik",
    "Dip",
    "Dop",
    "Dud",
    "Edo",
    "Fat",
    "Fer",
    "Flim",
    "Fuk",
    "G",
    "Gal",
    "Gar",
    "Gak",
    "Geb",
    "Glo",
    "Glob",
    "Grel",
    "Gren",
    "Gro",
    "Gur",
    "Gob",
    "Gor",
    "Gok",
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
    "Kok",
    "Kla",
    "Kla",
    "Kid",
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
    "Nov",
    "Odor",
    "Olg",
    "Olk",
    "Osa",
    "Pro",
    "Puk",
    "Que",
    "Queeb",
    "Roy",
    "So",
    "Sit",
    "Sik",
    "Spa",
    "Slime",
    "Sov",
    "Stra",
    "Suda",
    "Swamp",
    "Slither",
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
    "Vlad",
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
    "bad",
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
    "chev",
    "chov",
    "chok",
    "cit",
    "cot",
    "cow",
    "crow",
    "cut",
    "dax",
    "dred",
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
    "kok",
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
    "spider",
    "slither",
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
    "worm",
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
    "the angry",
    "the unclean",
    "the filthy",
    "the dirty",
    "the bastard",
    "the arsehole",
    "the dick",
    "the horrible",
    "the cruel",
    "the foul",
    "the murderer",
    "the naughty",
    "the haughty",
    "the nasty",
    "the fat",
    "the terrible",
    "the raven",
    "the untrustworthy",
    "the unclean",
    "the unworthy",
    "hellbourne",
    "the rotten",
    "the crafty",
    "the destroyed",
    "the worst",
    "the liar",
    "the criminal",
    "the burgler",
    "the slaughterer",
    "the slicer",
    "the mauler",
    "the devourer",
    "the stomper",
    "the shit",
    "the fucker",
    "the awful",
    "the toad",
];

var place = [
    "the dark realm",
    "the underworld",
    "Hell",
    "the swamp",
    "the underworld",
    "the dark zone",
    "the dark empire",
    "the cavern",
    "the dead",
    "Chaos",
    "Death",
    "Mayhem",
    "Earthquakes",
    "snakes",
    "bastards",
    "wasps",
    "sharks",
    "worms",
    "sewers",
    "the sewer",
    "the pit",
    "your nightmares",
    "your worst nightmare",
    "shit",
    "the worst shit",
    "the toilet",
    "the slime",
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


    if(typeChance < 20){
        final = randomPrefix + " "+ alienName();
    }else if (typeChance >= 20 && typeChance < 30) {
        final = randomLongPrefix + " "+ alienName() + " of " + planetName();
    }else if (typeChance >= 30 && typeChance < 40) {
        var placeName = place[Math.floor(Math.random() * place.length)];
        final = alienName() + " of " + placeName;
    }else if (typeChance >= 40 && typeChance < 50) {
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