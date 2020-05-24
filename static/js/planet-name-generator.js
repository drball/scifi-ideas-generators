var output = $("#generated-names");
var num = 130;


var part1 = [
    "Arc", "sat", "clo", "plu",
    "mer", "nar", "lo", "rem", "Ea",
    "A", "B’", "Ba", "Be", "Bi", "Bo",
    "C’", "Ca",
    "Con", "Ce", "Ci", "Cu", "Da",
    "De", "Du", "Ven", "Ko", "Sat", "Nir", "Xy", "Ver", "Har", "Tha",
    "Suil", "Sul", "Pr", "Pra", "Pa",
    "Oz", "Miran", "Corr", "Leg", "Ar",
    "scar", "Aer", "Aeria",
    "Plane",
    "Aria",
    "Lo", "Ib", "Lad", "Maz", "Ven", "Merc", "Night", "Long", "Dark", "Cold", "Lone", "Far", "Deep", "Dep",
    "Cy", "Sai", "Camp", "H", "Coper",
    "Gren"
];

var part2 = [
    "al",
    "alis",
    "vis",
    "da", "urn", "to", "cury", "aka", "an", "vav", "vis", "viz", "idian", "oin", "ol", "arth", "ntos", "nor", "uram", "um", "tos", "vas", "omi", "umi", "vana", "nar", "itas", "rock", "trock", "ryn", "adon", "addon", "opia", "opa", "tan", "va", "gill", "lejos", "daleko", "budram", "aleko", "eko", "sea", "opia", "fall", "os", "es", "iza", "za", "lon", "ania", "onia", "arnia", "nia", "topia", "tropic", "ian", "ius", "eus", "ury", "us", "kail", "‘us", "‘am", "‘an", "can", "anella", "elius", "nicus", "iman", "atoid",
    "-o",
    "oid"
]

var prefix = [
    "Alpha",
    "Beta",
    "Gamma",
    "Delta",
    "The planet of",
    "The moon of",
    "New",
    "White",
    "East",
    "West",
    "North",
    "Old",
];

var suffix = [
    "Prime", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIV", "XV", "XVI", "world",
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