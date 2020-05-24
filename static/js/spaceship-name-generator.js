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
    "Lucifer",
    "Lucius",
    "Manhattan",
    "Mermaid",
    "Morabito",
    "Nakhimov",
    "Nebulon",
    "Nemesis",
    "Nexus",
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
    "Dreadnought",
    "Drifter",
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
    "Midget",
    "Moonlander",
    "Morabito",
    "Nirvana",
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
    "Star",
    "Starfighter",
    "Sun",
    "Thunder",
    "Trawler",
    "Transporter",
    "Triumph",
    "Unicorn",
    "Vega",
    "Warrior",
    "Wisp",
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
    "Mighty",
    "Real",
    "Red",
    "Royal",
    "Stolen",
    "Slim",
    "Western",
    "White",
    "Yellow",
    "Zero",
];

generateNew = function(){
    output.html("");

    for (i = 0; i <= num; i++) {

        var final = "";
        var type = Math.floor(Math.random() * 100);
        var prefixChance = Math.floor(Math.random() * 100);
        var randomName = names[Math.floor(Math.random() * names.length)];
        var randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
        var randomLastName = lastName[Math.floor(Math.random() * lastName.length)];
        var randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];

        if(type <= 25){
            final = "The " + randomVerb + " " + randomName;

        } else if (type > 25 && type <= 55){

            if(prefixChance > 50){
                final = "The " + randomName;
            } else {
                final = "The " + randomPrefix + " " + randomName;
            }

        } else if (type > 55 && type <= 75){

            if(prefixChance <= 30){
                final = "The " + randomPrefix + " " + randomVerb + " " + randomLastName;
            } else if (prefixChance > 30 && prefixChance < 60) {
                final = randomVerb + " " + randomLastName;
            } else {
                final = "The " + randomVerb + " " + randomLastName;
            }

        } else {
            final = randomName;
        }

        output.prepend("<p>"+final+"</p>");
    }

}

generateNew();