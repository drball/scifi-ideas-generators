var output = $("#generated-names");
var num = 30;


var part1 = [
    "Æ",
    "Arc",
    "A",
    "An",
    "Aer",
    "Aeria",
    "Ar",
    "Aria",
    "Ba",
    "Bar",
    "Be",
    "Bi",
    "Bo",
    "B’",
    "Ca",
    "Camp",
    "Ce",
    "Ci",
    "Clo",
    "Cold",
    "Con",
    "Coper",
    "Corr",
    "Cu",
    "Cy",
    "C’",
    "Da",
    "Dark",
    "De",
    "Deep",
    "Dep",
    "Dikar",
    "Du",
    "Ea",
    "Exo",
    "Far",
    "Gren",
    "H",
    "Hub",
    "Har",
    "Ib",
    "Jan",
    "Ko",
    "K'",
    "Lad",
    "Leg",
    "Lo",
    "Lo",
    "Lone",
    "Long",
    "L'",
    "Ll'",
    "Majest",
    "Maz",
    "Mer",
    "Merc",
    "Miran",
    "Mun",
    "Nar",
    "Night",
    "Nir",
    "Nit",
    "Nib",
    "Non",
    "Oz",
    "Pa",
    "Pan",
    "Plane",
    "Plu",
    "Pr",
    "Pra",
    "Rem",
    "Sai",
    "Sat",
    "Sat",
    "Scar",
    "Steep",
    "Suil",
    "Sul",
    "Tha",
    "Ven",
    "Ver",
    "Vul",
    "X'",
    "Xe'",
    "Xy",
];

var part2 = [
    "-o",
    "addon",
    "adon",
    "aka",
    "aleko",
    "alis",
    "an",
    "anella",
    "ania",
    "arnia",
    "arth",
    "atoid",
    "budram",
    "can",
    "cania",
    "cania",
    "cury",
    "con",
    "da",
    "daleko",
    "dalekon",
    "doria",
    "dikar",
    "eko",
    "elius",
    "elialia",
    "es",
    "eaux",
    "eus",
    "fall",
    "gania",
    "gill",
    "golia",
    "ian",
    "illian",
    "idian",
    "iman",
    "itas",
    "ius",
    "iza",
    "iru",
    "kail",
    "lejos",
    "lok",
    "lox",
    "lon",
    "miniar",
    "nar",
    "nia",
    "nicus",
    "nor",
    "ntos",
    "oid",
    "oin",
    "ol",
    "omi",
    "onia",
    "ornia",
    "ornania",
    "opa",
    "opia",
    "opia",
    "os",
    "rock",
    "ryn",
    "sea",
    "tan",
    "tania",
    "to",
    "tonia",
    "topia",
    "tos",
    "trock",
    "tropic",
    "um",
    "umi",
    "uram",
    "urn",
    "urrinia",
    "ury",
    "us",
    "va",
    "vana",
    "vas",
    "vav",
    "vis",
    "vis",
    "viz",
    "za",
    "‘am",
    "‘an",
    "‘us",
    "al",
]

var prefix = [
    "Alpha",
    "Beta",
    "Gamma",
    "Delta",
    "The planet of",
    "The moon of",
    "The ringed planet of",
    "The robot world of",
    "The mountainous planet of",
    "The lava world of",
    "New",
    "White",
    "East",
    "West",
    "North",
    "Old",
];

var suffix = [
    "Alpha",
    "Beta",
    "Gamma",
    "Prime",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
    "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIV", "XV", "XVI",
    "World", "Moon", "gas giant"
]

generateNew = function () {
    output.html("");

    for (i = 0; i <= num; i++) {

        var final = "";
        // var type = Math.floor(Math.random() * 100);
        var prefixChance = Math.floor(Math.random() * 100);
        var suffixChance = Math.floor(Math.random() * 100);
        var randomPart1 = part1[Math.floor(Math.random() * part1.length)];
        var randomPart2 = part2[Math.floor(Math.random() * part2.length)];
        var randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];
        var randomSuffix = suffix[Math.floor(Math.random() * suffix.length)];

        final = randomPart1 + randomPart2;

        if (prefixChance <= 20) {
            final = randomPrefix + " " + final;
        }

        if (suffixChance <= 25){
            final = final + " " + randomSuffix;
        } else if(suffixChance > 25 && suffixChance <= 50) {
            final = final + " " + Math.floor(Math.random() * 400);
        }


        output.prepend("<p>"+final+"</p>");
    }

}

generateNew();