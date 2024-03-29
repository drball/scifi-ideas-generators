
function randomFoodAdj(){
    var option = [
        "meat-flavoured",
        "assorted",
        "barbecue-style",
        "breaded",
        "compacted",
        "vitro-farmed",
        "BBQ",
        "\"BBQ\"",
        "pre-formed",
        "tenderized",
        "textured",
        "industrial",
        "mass-produced",
        "truffled",
        "edible",
        "sliced",
        "dolphin-free",
        "dolphin-friendly",
        "foil-packed",
        "tinned",
        "meat-free",
        "diced",
        "putrefy",
        "organic",
        "\"organic\"",
        "semi-organic",
        "plasma-grilled",
        "mostly-organic",
        "vegan",
        "mostly-vegan",
        "barely-vegan",
        "110% vegan",
        "80% vegan",
        "\"Vegan\"",
        "dairy-free",
        "\"Dairy-free\"",
        "tasty",
        "\"Tasty\"",
        "germinated",
        "baked",
        "quadratic",
        "freeze-dried",
        "freeze-dried",
        "dessicated",
        "dehydrated",
        "lightly dusted",
        "sweetened",
        "unsweetened",
        "non sweetened",
        "artificially-sweetened",
        "artificially-flavored",
        "artificially-textured",
        "textured",
        "synthesized",
        "mashed",
        "mushed",
        "hydrogenized",
        "flourless",
        "dry",
        "dry",
        "moist",
        "moist",
        "pasteurized",
        "spicy",
        "frozen",
        "caffeinated",
        "bite-sized",
        "re-flavored",
        "medical-grade",
        "non medical-grade",
        "recycled",
        "antibiotic",
        "antiseptic",
        "preserved",
        "isotonic",
        "creamy",
        "\"Creamy\"",
        "hydro-farmed",
        "water-injected",
        "insect-dusted",
        "chocolate-flavoured",
        "smoked",
        "tinned",
        "\"Smoked\"",
        "geodesic",
        "carbonated",
        "chlorinated",
        "rechlorinated",
        "dechlorinated",
        "miniaturised",
        "irradiated",
        "solarian",
        "sheep-friendly",
        "trout-friendly",
        "beef-flavoured",
        "battered",
        "caramelized",
        "fresh",
        "freshly made",
        "\"Fresh\"",
        "concentrated",
        "authentic",
        "\"Authentic\"",
        "fizzy",
        "popping",
        "Einstein's",
        "sizzling",
        "decaffeinated",
        "crunchy",
        "\"Crunchy\"",
        "vacuum-packed",
        "foil-sealed",
        "fluorinated",
        "fortified",
        "vitamin-free",
        "sugar-free",
        "zero-g",
        "bananna-flavoured",
        "strawberry-flavoured",
        "\"Strawberry-flavoured\"",
        "frozen",
        "lemonated",
        "Cantonese",
        "farmed",
        "oxygenated",
        "decontaminated",
        "powdered",
        "natural",
        "baconated",
        "gluten-free",
        "squeezy",
        "raspberry-flavoured",
        "chicken-flavoured",
        "seaweed-flavoured",
        "fish-flavoured",
        "trout-flavoured",
        "sea-soaked",
        "gravy-soaked",
        "boiled",
        "boiled",
        "steamed",
        "steamed",
        "sweaty",
        "melted",
        "pulped",
        "microwavable",
        "malignant",
        "\"Natural\"",
        "\"Iced\"",
        "reconstituted",
        "ground",
    ];

    return option[Math.floor(Math.random() * option.length)];
}

function randomFoodIngredient(){
    //--singular
    var option = [
        "cannibis",
        "fibre",
        "octopus",
        "beef",
        "beef",
        "fritters",
        "panda",
        "chicken",
        "chicken",
        "lamb",
        "lamb",
        "pork",
        "pork",
        "ham",
        "lettuce",
        "whale",
        "nebula",
        "sloth",
        "lion",
        "dog",
        "mollusc",
        "llama",
        "grog",
        "muscle",
        "gristle",
        "snail",
        "snail",
        "parasite",
        "asteroid parasite",
        "weevil",
        "rat",
        "spacerat",
        "space-pest",
        "space-worm",
        "duckling",
        "duck",
        "mutton",
        "sugar",
        "goat",
        "protein",
        "Chinese",
        "Russian",
        "carbohydrate",
        "chocolate",
        "cocoa",
        "carrot",
        "parsnip",
        "parsley",
        "egg",
        "tomato",
        "oxo",
        "gravy",
        "\"gravy\"",
        "carbon",
        "seaweed",
        "flavour",
        "fruit",
        "\"fruit\"",
        "sustenance",
        "dinosaur",
        "housecat",
        "liquidized",
        "salmon",
        "shark",
        "pig",
        "antelope",
        "Chickenish",
        "swan",
        "cabbage",
        "pepper",
        "salt",
        "fish",
        "algae",
        "jackfruit",
        "dolphin",
        "termite",
        "aquafaba",
        "seitan",
        "fructose",
        "mayonaise",
        "water",
        "chilli",
        "asbestos",
        "soymilk",
        "cheese",
        "tofu",
        "tempah",
        "vegetable",
        "vegetarian",
        "mostly vegetarian",
        "tahini",
        "jam",
        "coconut",
        "dust",
        "dirt",
        "asteroid",
        "hair",
        "lime",
        "moose",
        "lemon",
        "insect",
        "beetle",
        "onion",
        "veal",
        "moon",
        "MSG",
        "pea",
        "spam",
        "placenta",
        "marine",
    ];

    return option[Math.floor(Math.random() * option.length)];
}

function randomFoodType(){
    //--always plural
    var option = [
        "soup",
        "loops",
        "sticks",
        "batons",
        "sparkles",
        "nuggets",
        "tubes",
        "loaf",
        "steak",
        "steak",
        "jelly",
        "crunch",
        "nodes",
        "burgers",
        "burgers",
        "flush",
        "wellington",
        "mash",
        "beef",
        "solution",
        "ham",
        "livers",
        "rinds",
        "tumors",
        "cake",
        "scraps",
        "wontons",
        "pancakes",
        "fruit",
        "carrot",
        "nuts",
        "fingers",
        "kebab",
        "fish",
        "lettuce",
        "gems",
        "pasta",
        "risotto",
        "conchiglie",
        "sauce",
        "torte",
        "paste",
        "cream",
        "\"cream\"",
        "lick",
        "\"meat\"",
        "meat",
        "kibble",
        "freighter",
        "moose",
        "patty",
        "pie",
        "squares",
        "shavings",
        "meatfish",
        "meatfish",
        "chunks",
        "legs",
        "sausages",
        "batons",
        "waffles",
        "lattuces",
        "cobs",
        "baps",
        "sandwiches",
        "sandwiches",
        "megaplums",
        "lasagne",
        "spaghetti",
        "pudding",
        "dust",
        "curry",
        "bits",
        "pills",
        "noodles",
        "injection",
        "parcels",
        "hotwings",
        "locusts",
        "shapes",
        "logs",
        "sweets",
        "lozenges",
        "flakes",
        "shards",
        "sheets",
        "drops",
        "jelly",
        "juice",
        "slices",
        "mini-quiche",
        "chips",
        "biscuits",
        "puffs",
        "rings",
        "crisps",
        "treats",
        "snacks",
        "gas",
        "paste in a tube",
    ];

    return option[Math.floor(Math.random() * option.length)];
}

function randomSimpleFood(){
    //--used as a side order
    return randomFoodIngredient() + " " + randomFoodType();
}

function randomFoodPrefix(){
    var option = [
        "A shipment of",
        "A container of",
        "A sachet of",
        "A sachet of",
        "A pill of",
        "A dermal patch of",
        "A takeaway delivery of",
        "An emergency supply of",
        "An emergency ration pack of",
        "Dr Zee's",
        "Admiral Tang's",
        "Mother Quambag's",
        "Mr Geosak's",
        "Kaltok's finest",
        "The robot chef's finest",
        "The synthesizer's best",
        "Seaman Steve's",
        "Orbital",
        "Gulliver's",
        "Recycled",
        "Cydonian",
        "Orbital Paul's",
    ];

    return option[Math.floor(Math.random() * option.length)];
}

function randomFoodSuffix(){
    var option = [
        "with fries",
        "with a side-order of "+randomSimpleFood(),

    ];

    return option[Math.floor(Math.random() * option.length)];
}

function randomFoodPart1(){
    var option = [
        "astro",
        "bio",
        "luna",
        "Earth",
        "neo",
        "hyper",
        "space",
        "cyclo",
        "delta",
        "gamma",
        "cyber",
        "oxtail",
        "carbo",
        "aqua",
        "octo",
        "vitro",
        "pseudo",
        "oxo",
        "netro",

    ];

    return option[Math.floor(Math.random() * option.length)];
}

function randomFoodPart2(){
    var option = [
        "nutrient",
        "beetle",
        "bacon",
        "pork",
        "loaf",
        "noodles",
        "supplement",
        "nuts",
        "meat",
        "algae",
        "beef",
        "protein",
        "haggis",
        "hexagons",
        "gammon",
        "oxygen",
        "floss",
        "o-beef",

    ];

    return option[Math.floor(Math.random() * option.length)];
}

generateIdea = function(){

    final = "";
    var typeChance = Math.floor(Math.random() * 100);
    var prefixChance = Math.floor(Math.random() * 100);
    var suffixChance = Math.floor(Math.random() * 100);

    if(typeChance < 65){
        final = randomFoodAdj() + " " + randomFoodIngredient() + " " + randomFoodType();
    } else {
        final = randomFoodAdj() + " " + randomFoodPart1() + "-" + randomFoodPart2();
    }

    if(prefixChance < 25){
        final = randomFoodPrefix() + " " + final;
    }

    if(suffixChance < 25){
        final = final + " " + randomFoodSuffix();
    }

    final = final.substr(0,1).toUpperCase() + final.substr(1);

    return final + ".";
}

generateAll = function () {
    $(".single-line").each(function(){

        $(this).html("");

        $(this).prepend(generateIdea());

    });

}

generateAll();