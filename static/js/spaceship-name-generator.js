var output = $("#generated-names");
var num = 30;

var prefix = [
    "HMS",
    "HMS",
    "USS",
    "USS",
    "USS",
    "JMC",
    "STS",
    "IKS",
    "SS",
    "ISV",
    "UNS",
    "EAS"
];

var names = [
    "Æthelwulf",
    "Æthelred",
    "Aion",
    "Aegean",
    "Agamemnon",
    "Agrippa",
    "Ajax",
    "Akira",
    "Andromeda",
    "Anubis",
    "Apollo",
    "Ares",
    "Archer",
    "Archimedes",
    "Argo",
    "Ariane",
    "Artemis",
    "Arthur",
    "Asimov",
    "Asteria",
    "Athena",
    "Atwood",
    "Atlantis",
    "Atlantic",
    "Banshee",
    "Basilisk",
    "Beetle",
    "Beluga",
    "Barracuda",
    "Calypso",
    "Comet",
    "Daedalus",
    "Defiant",
    "Deliverance",
    "Delta",
    "Demeter",
    "Discovery",
    "Drifter",
    "Endeavor",
    "Enterprise",
    "Fireball",
    "Firefly",
    "Fortitude",
    "Gamma",
    "Gallimimus",
    "Gibson",
    "Goole",
    "Hades",
    "Harlequin",
    "Hellbound",
    "Hellhound",
    "Hera",
    "Hercules",
    "Hermes",
    "Hestia",
    "Hypnos",
    "Hood",
    "Horn",
    "Hornet",
    "Hypnos",
    "Icarus",
    "Iksha",
    "Intruder",
    "Iris",
    "Kasimov",
    "Kulakov",
    "Liberty",
    "Liberator",
    "Leviathan",
    "Lucifer",
    "Lucius",
    "Manhattan",
    "Mermaid",
    "Millennium",
    "Centenary",
    "Morabito",
    "Nakhimov",
    "Nebulon",
    "Nemesis",
    "Nexus",
    "Nova",
    "Nostromo",
    "Nimitz",
    "Olympia",
    "Olympic",
    "Pantheon",
    "Pegasus",
    "Pegasus",
    "Prometheus",
    "Perseus",
    "Perilous",
    "Phoenix",
    "Poseidon",
    "Pike",
    "Piranha",
    "Planet",
    "Prince",
    "Pulsar",
    "Pontus",
    "Razor",
    "Reliant",
    "Roberts",
    "Ryvius",
    "Santa Maria",
    "Saturn",
    "Saratoga",
    "Scimitar",
    "Scorpio",
    "Serenity",
    "Sovereign",
    "Starfarer",
    "Stargazer",
    "Stegosaurus",
    "Swordfish",
    "Thor",
    "Thorn",
    "Tigershark",
    "Tyrannosaurus",
    "Tyche",
    "Unicorn",
    "Uranus",
    "Vanguard",
    "Vengeance",
    "Verne",
    "Vision",
    "Vortex",
    "Vulcan",
    "Wasp",
    "Western",
    "Whitestar",
    "Wyvern",
    "Xerxes",
    "Yamato",
    "Yantar",
    "Zeus"
];

var lastName = [
    "1",
    "Antigua",
    "Barge",
    "Battleship",
    "Bomber",
    "Corsair",
    "Corvette",
    "Cruiser",
    "Crusader",
    "Crusader",
    "Defence",
    "Destroyer",
    "Dodo",
    "Dreadnought",
    "Drifter",
    "Dwarf",
    "Dwarfstar",
    "Essex",
    "Explorer",
    "Explorer",
    "Express",
    "Falcon",
    "Flyer",
    "Forge",
    "Fortress",
    "Freelancer",
    "Gold",
    "Gulf",
    "Hawk",
    "Hulk",
    "II",
    "IV",
    "Lander",
    "Leviathan",
    "Martyr",
    "Midget",
    "Moonlander",
    "Morabito",
    "Nirvana",
    "Nebula",
    "Nova",
    "Observer",
    "One",
    "Patrol Ship",
    "Privateer",
    "Raider",
    "Resistence",
    "Revenger",
    "Reaver",
    "Rikers",
    "Rocket",
    "Scow",
    "Silver",
    "Shark",
    "Star",
    "Starfighter",
    "Sun",
    "Talon",
    "Thunder",
    "Trawler",
    "Transporter",
    "Triumph",
    "Unicorn",
    "Vega",
    "Vortex",
    "Warrior",
    "Wanderer",
    "Wisp",
    "Widow",
    "Vector",
    "XL",
    "XL5"
];

var verbs = [
    "Black",
    "Blackstone",
    "Blue",
    "Blazing",
    "Dark",
    "Deadly",
    "Death",
    "Delta",
    "Eastern",
    "Epsilon",
    "Flying",
    "Gamma",
    "Giant",
    "Goddess",
    "Golden",
    "Great",
    "Grey",
    "Half",
    "Heart of",
    "Jupiter",
    "Lavish",
    "Mighty",
    "Nova",
    "Neptune",
    "Mars",
    "Real",
    "Red",
    "Royal",
    "Silent",
    "Stealthy",
    "Stolen",
    "Slim",
    "Wandering",
    "Western",
    "Wisp's",
    "White",
    "Yellow",
    "Zero",
];

generateAll = function(){
    output.html("");

    for (i = 0; i <= num; i++) {
        output.prepend("<p>"+spaceshipNameWithThe()+"</p>");
    }
}

spaceshipName = function(){
    var final = "";
    var type = Math.floor(Math.random() * 100);
    var prefixChance = Math.floor(Math.random() * 100);
    var randomName = names[Math.floor(Math.random() * names.length)];
    var randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    var randomLastName = lastName[Math.floor(Math.random() * lastName.length)];
    var randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];

    if(type <= 25){
        final = randomVerb + " " + randomName;

    } else if (type > 25 && type <= 55){

        if(prefixChance > 50){
            final = randomName;
        } else {
            final = randomPrefix + " " + randomName;
        }

    } else if (type > 55 && type <= 75){

        if(prefixChance <= 30){
            final = randomPrefix + " " + randomVerb + " " + randomLastName;
        } else if (prefixChance > 30 && prefixChance < 60) {
            final = randomVerb + " " + randomLastName;
        } else {
            final = randomVerb + " " + randomLastName;
        }

    } else {
        final = randomName;
    }

    return final;
}

spaceshipNameWithThe = function(){

    var prefixChance = Math.floor(Math.random() * 100);

    if(prefixChance <= 50){
        final = "The " + spaceshipName();
    } else {
        final = spaceshipName();
    }


    return final;
}

generateAll();