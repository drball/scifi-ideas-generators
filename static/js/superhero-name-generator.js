
function SuperheroFirst(){
    var options = [

    "Eager",
    "Mysterious",
    "Kind",
    "Fearless",
    "Deadly",
    "Super",
    "Cool",
    "Nimble",
    "Quick",
    "Fast",
    "Black",
    "Dark",
    "Light",
    "White",
    "Red",
    "Green",
    "Yellow",
    "Turquoise",
    "Pink",
    "Sage",
    "Bronze",
    "Teal",
    "Rouge",
    "Copper",
    "Acid",
    "Blue",
    "Orange",
    "Slick",
    "Beige",
    "Smooth",
    "Flying",
    "Hot",
    "Fancy",
    "Ice",
    "Macho",
    "Windy",
    "Vengeful",
    "Rightous",
    "Elegant",
    "Silver",
    "Golden",
    "Magnificent",
    "Strong",
    "Tough",
    "Huge",
    "Tiny",
    "Kind",
    "Uber",
    "Awesome",
    "Wonder",
    "Mighty",
    "Strong",
    "Cyber",
    "Jade",
    "Porcelain",
    "Earth",
    "Moon",
    "Ocean",
    "Sunbeam",
    "Lightning",
    "Atomic",
    "Invisible",
    "Flax",
    "Fur",

    ];

    return options[Math.floor(Math.random() * options.length)];
}

function SuperheroAdjective(){
    var options = [

        "Eager",
        "Intelligent",
        "Mysterious",
        "Kind",
        "Fearless",
        "Deadly",
        "Super",
        "Cool",
        "Nimble",
        "Quick",
        "Fast",
        "Black",
        "Dark",
        "Light",
        "White",
        "Red",
        "Green",
        "Yellow",
        "Blue",
        "Slick",
        "Smooth",
        "Flying",
        "Hot",
        "Fancy",
        "Ice",
        "Macho",
        "Windy",
        "Vengeful",
        "Rightous",
        "Elegant",
        "Bright",
        "Silver",
        "Golden",
        "Magnificent",
        "Strong",
        "Tough",
        "Fuzzy",
        "Huge",
        "Tiny",
        "Opaque",
        "Glowing",
        "Kind",
        "Uber",
        "Awesome",
        "Wonder",
        "Phenomenal",
        "Mighty",
        "Strong",
        "Robust",
        "Hardy",
        "Omnipotent",
        "Vegan",
        "Vegetarian",
        "Furry",
        "Elastic",
        "Electric",
        "Stretchy",
        "Wet",
        "Untouchable",
        "Infinite",
        "Invincible",
        "Unkillable",
        "Bulletproof",
        "Sprinting",
        "Mega",

    ];

    return options[Math.floor(Math.random() * options.length)];
}

function SuperheroNoun(){
    var options = [

        "Spider",
        "Flamingo",
        "Fog",
        "Storm",
        "Tornado",
        "Avalanche",
        "Earthquake",
        "Frog",
        "Shadow",
        "Spider",
        "Lion",
        "Tiger",
        "Truck",
        "Computer",
        "Mantis",
        "Ant",
        "Bat",
        "Vole",
        "Monkey",
        "Mouse",
        "Cat",
        "Dog",
        "Hamster",
        "Dinosaur",
        "Caveman",
        "Armadillo",
        "Moth",
        "Butterfly",
        "Guard",
        "Watchman",
        "Gecko",
        "Lizard",
        "Cheetah",
        "Llama",
        "Emu",
        "Griffin",
        "Scepter",
        "Warrior",
        "Hunter",
        "Crane",
        "Bug",
        "Magnolia",
        "Eclipse",
        "Poppy",
        "Tigress",
        "Shroud",
        "Viking",
        "Frost",
        "Gladiator",
        "Panther",
        "Barbarian",
        "Puma",
        "Fly",
        "Wasp",
        "Termite",
        "Mole",
        "Rock",
        "Grit",
        "Sponge",
        "Badger",
        "Newt",
        "Rat",
        "Turtle",
        "Anteater",
        "Marigold",
        "Sweater",
        "Plastic",
        "Kitten",
        "Star",
        "Mamba",
        "Snake",
        "Waterfall",
        "Viper",
        "Bumblebee",
        "Robot",
        "Bird",
        "Parrot",
        "Beast",
        "Eagle",
        "Crow",
        "Raptor",
        "Toad",
        "Bolt",
        "Wing",
        "Falcon",
        "Microbe",
        "Arrow",
        "Bullet",
        "Jaguar",
        "Hawk",
        "Canary",
        "Atom",
        "Flame",
        "Disaster",
        "Claw",
        "Squirrel",
        "Panda",
        "Widow",
        "Jellyfish",
        "Shark",
        "Conqueror",
        "Paladin",
        "Beaver",
        "Pigeon",
        "Wolf",

    ];

    return options[Math.floor(Math.random() * options.length)];
}

function SuperheroPrefix(){
    var options = [

        "Captain",
        "Ethereal",
        "Master",
        "Professor",
        "Doctor",
        "Mister",
        "Mister",
        "Mrs",
        "Miss",
        "Ms",
        "Hot",
        "Steel",
        "Lord",
        "Commander",
        "Sergeant",
        "General",
        "Agent",
        "Duke",
    ];

    return options[Math.floor(Math.random() * options.length)];
}

function SuperheroEnd(){
    var options = [

        "Man",
        "Man",
        "Boy",
        "Boy",
        "Girl",
        "Girl",
        "Woman",
        "Woman",
        "Professor",
        "Assassin",
        "Guard",
        "Mistress",
    ];

    return options[Math.floor(Math.random() * options.length)];
}

function SuperheroEndThe(){
    var options = [

        "Man",
        "Boy",
        "Girl",
        "Woman",
        "Thing",
        "Professor",
        "Assassin",
        "Guard",
        "Protector",
        "Sentinel",
        "Hunter",
        "Savior",
        "Avenger",
        "Killer",
        "Crusher",
        "Defender",
        "Angel",
        "Hero",
        "Ally",
        "Challenger",
        "Champ",
        "Searcher",
        "Seeker",
    ];

    return options[Math.floor(Math.random() * options.length)];
}

newSuperheroName = function(){
    var final = "";
    var typeChance = Math.floor(Math.random() * 100);

    if(typeChance <= 15){

        final = SuperheroNoun() + " " + SuperheroEnd();

    } else if(typeChance > 15 && typeChance <= 30){

        final = SuperheroPrefix() + " " + SuperheroNoun();

    } else if(typeChance > 30 && typeChance <= 50){

        final = SuperheroAdjective() + " " + SuperheroNoun();

    } else if(typeChance > 50 && typeChance <= 75){

        final = SuperheroFirst() + " " + SuperheroNoun();

    } else if(typeChance > 75 && typeChance <= 90){

        final = "The "+ SuperheroNoun() + " " + SuperheroEndThe();

    } else {
        final = "The "+ SuperheroAdjective() + " " + SuperheroNoun();
    }

    return final;
}

generateNewSuperheroName = function(){
    $(".superhero-name").each(function(){

        $(this).html("");

        $(this).prepend(newSuperheroName());

    });
}

generateNewSuperheroName();