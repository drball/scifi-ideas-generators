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
    "Adelphi",
    "Aegean",
    "Afonso",
    "African Queen",
    "Agamemnon",
    "Agrippa",
    "Ahwahnee",
    "Aion",
    "Ajax",
    "Akira",
    "Akagi",
    "Almagro",
    "Andromeda",
    "Antares",
    "Angel of Alnar",
    "Anger Management",
    "Angryshark",
    "Anubis",
    "Apollo",
    "Archer",
    "Archimedes",
    "Ares",
    "Argo",
    "Argon",
    "Armstrong",
    "Ariane",
    "Artemis",
    "Arthur",
    "Asimov",
    "Asteria",
    "Athena",
    "Atlantic",
    "Atlantis",
    "Atwood",
    "Atlantis",
    "Aurora",
    "Avarice",
    "Baffin",
    "Ballistic Betty",
    "Banshee",
    "Barbery Coast",
    "Barracuda",
    "Barth",
    "Basilisk",
    "Bastion",
    "Beagle",
    "Beetle",
    "Beluga",
    "Bellerophon",
    "Berlin",
    "Biddeford",
    "Billings",
    "Big Bethel",
    "Black Humour",
    "Blackbird",
    "Blackburn",
    "Blazing Aces",
    "Bolsover",
    "Bouman",
    "Bounty Star",
    "Bounty",
    "Budapest",
    "Brave",
    "Britain",
    "Bruce",
    "Burckhardt",
    "Burnham",
    "Buran",
    "Burton",
    "Byrd",
    "Calypso",
    "Cairo",
    "Carolina",
    "Caminha",
    "Cavendish",
    "Celtic",
    "Centaur",
    "Centenary",
    "Challenger",
    "Charleston",
    "Chardin",
    "Chirikov",
    "Chlorine",
    "Chekov",
    "Cochrane",
    "Coleman",
    "Chukhnovsky",
    "Chun",
    "Chyron",
    "Columbus",
    "Columbia",
    "Concord",
    "Crockett",
    "Comet",
    "Conti",
    "Cortés",
    "Cousteau",
    "Crazy",
    "Cunha",
    "Curry",
    "Daedalus",
    "Defiance",
    "Defiant",
    "Deliverance",
    "Delta",
    "Destiny",
    "Demeter",
    "Dezhnev",
    "Discovery",
    "Drake",
    "Drifter",
    "Eagle",
    "Earhart",
    "Ellsworth",
    "Emissary",
    "Einstein",
    "Endeavor",
    "Engel",
    "Enterprise",
    "Erskine",
    "Escobar",
    "Equicon",
    "Everest",
    "Exeter",
    "Excalibur",
    "El-Baz",
    "Farragut",
    "Farenheit",
    "Fawcett",
    "Fernandes",
    "Fearless",
    "Fiennes",
    "Firebird",
    "Fireball",
    "Firefly",
    "Fortitude",
    "Fortunado",
    "Fortune",
    "Foxfire",
    "Frobisher",
    "Fleming",
    "Gallimimus",
    "Gamma",
    "Gagarin",
    "Galaxy",
    "Gander",
    "Gerlache",
    "Gettysburg",
    "Gremlin",
    "Greyhound",
    "Grissom",
    "Gibson",
    "Gonzalo",
    "Goole",
    "Guerrero",
    "Ghandi",
    "Hades",
    "Hannu",
    "Harlequin",
    "Haste",
    "Havanna",
    "Hearne",
    "Hedin",
    "Hellbound",
    "Hellhound",
    "Hera",
    "Hercules",
    "Hermes",
    "Herodotus",
    "Hestia",
    "Himilco",
    "Hippalus",
    "Hood",
    "Hoover",
    "Horn",
    "Hornet",
    "Humboldt",
    "Hypnos",
    "Icarus",
    "Iksha",
    "Intruder",
    "Iris",
    "Ironclad",
    "Intrepid",
    "Kasimov",
    "Kelvin",
    "Kintan",
    "Kolchak",
    "Kozlov",
    "Krusenstern",
    "Kulakov",
    "Kyushu",
    "Leviathan",
    "Lexington",
    "Leeds",
    "Liberator",
    "Liberty",
    "Livingston",
    "Lucifer",
    "Lucius",
    "Manoa",
    "Magellan",
    "Makemake",
    "Maryland",
    "Mayflower",
    "Mangel",
    "Manhattan",
    "Mendes",
    "Menezes",
    "Mermaid",
    "Merrimac",
    "Milan",
    "Mulan",
    "Millennium",
    "Morabito",
    "Morris",
    "Mustang",
    "Naddoddur",
    "Nakhimov",
    "Nebulon",
    "Nemesis",
    "Nexus",
    "Nimitz",
    "Nina",
    "Nobel",
    "Noronha",
    "Nostromo",
    "Nova",
    "Nowak",
    "Oberth",
    "Odyssey",
    "Ogden",
    "Olympia",
    "Olympic",
    "Orellana",
    "Orinoco",
    "Pantheon",
    "Paramount",
    "Pasteur",
    "Pathfinder",
    "Pearce",
    "Pegasus",
    "Pegasus",
    "Perilous",
    "Perseus",
    "Perseus",
    "Phoenix",
    "Piccard",
    "Pike",
    "Pinto",
    "Piranha",
    "Pizarro",
    "Planet",
    "Pontus",
    "Potemkin",
    "Popov",
    "Poseidon",
    "Prince",
    "Princeton",
    "Prometheus",
    "Proxima",
    "Pryor",
    "Pulsar",
    "Pérez",
    "Rae",
    "Razor",
    "Reliant",
    "Ripper",
    "Rio Grande",
    "Roberts",
    "Rodrigues",
    "Ross",
    "Rotten",
    "Rubruck",
    "Rubicon",
    "Rudanovsky",
    "Rustah",
    "Rutledge",
    "Ryvius",
    "Sabine",
    "Sacagawea",
    "Santa Maria",
    "Saratoga",
    "Sarychev",
    "Saturn",
    "Sauma",
    "Sentinel",
    "Schouten",
    "Scimitar",
    "Scorpio",
    "Scott",
    "Scovill",
    "Semeonis",
    "Sequeira",
    "Serenity",
    "Shackleton",
    "Silver",
    "Smurgis",
    "Soper",
    "Sovereign",
    "Springfield",
    "Sioux",
    "Starfarer",
    "Stargazer",
    "Stegosaurus",
    "Stein",
    "Sturt",
    "Swordfish",
    "Thor",
    "Thorn",
    "Tigershark",
    "Titan",
    "Trinity",
    "Tranquility",
    "Tripoli",
    "Tyche",
    "Tyrannosaurus",
    "Unicorn",
    "Ulysses",
    "Uranus",
    "Vanguard",
    "Valiant",
    "Vengeance",
    "Venture",
    "Verne",
    "Victor",
    "Victory",
    "Vision",
    "Vortex",
    "Voyager",
    "Vulcan",
    "Wasp",
    "Welshman",
    "Western",
    "Wellington",
    "Wyoming",
    "Whitestar",
    "Wyvern",
    "Xerxes",
    "Yamato",
    "Yantar",
    "Yeager",
    "Yellowstone",
    "Yuri",
    "Yuri Gagarin",
    "Zapata",
    "Zeus",
    "Zhukov",
];

var lastName = [
    "1",
    "2",
    "02",
    "03",
    "X",
    "X0",
    "XR3",
    "XD1",
    "ZR99",
    "ZR101",
    "Z101",
    "RD301",
    "XR44",
    "Antigua",
    "Ambition",
    "Aces",
    "Barge",
    "Bird",
    "Battleship",
    "Bastion",
    "Beast",
    "Betty",
    "Bomber",
    "Bounty",
    "Corsair",
    "Corvette",
    "Cruiser",
    "Crusader",
    "Crusader",
    "Courage",
    "Defence",
    "Devil",
    "Destroyer",
    "Dodo",
    "Dreadnought",
    "Drifter",
    "Dreams",
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
    "Fury",
    "Gauntlet",
    "Granite",
    "Gold",
    "Gulf",
    "Hawk",
    "Hulk",
    "II",
    "Insurgent",
    "IV",
    "Lander",
    "Lattuce",
    "Leviathan",
    "Maiden",
    "Martyr",
    "Midget",
    "Moonlander",
    "Morabito",
    "Nirvana",
    "Nebula",
    "Nova",
    "Observer",
    "One",
    "Patriot",
    "Patrol Ship",
    "Privateer",
    "Predator",
    "Raider",
    "Resistence",
    "Revenger",
    "Reaver",
    "Rikers",
    "Rising",
    "Rocket",
    "Scow",
    "Silver",
    "Shark",
    "Star",
    "Starfighter",
    "Stalker",
    "Sun",
    "Talon",
    "Tilman",
    "Thunder",
    "Trawler",
    "Traveller",
    "Transporter",
    "Triumph",
    "Trinity",
    "Unicorn",
    "Vega",
    "Vortex",
    "Warrior",
    "Wanderer",
    "Wisp",
    "Widow",
    "Vector",
    "XL",
    "XL5",
    "Reign",
    "Haiku",
    "Tooth",
    "Toxin",
    "Mistress",
    "Needle",
    "Sue",
    "Sally",
    "or Bust",
    "Iron",
    "Severity",
    "Zarco",
];

var verbs = [
    "Black",
    "Black",
    "Blackstone",
    "Blue",
    "Blazing",
    "Brave",
    "Booming",
    "Crazy",
    "Crimson",
    "Cold",
    "Dark",
    "Deadly",
    "Death",
    "Delta",
    "Drowned",
    "Eastern",
    "Epsilon",
    "Free",
    "Fresh",
    "Flying",
    "Gamma",
    "Galloping",
    "Giant",
    "Goddess",
    "Golden",
    "Great",
    "Grey",
    "Half",
    "Heart of",
    "Hubward",
    "Icy",
    "Ice",
    "Jupiter",
    "Lavish",
    "Lone",
    "Mighty",
    "Nova",
    "Nova",
    "Naughty",
    "Neptune",
    "Northern",
    "Mars",
    "Majestic",
    "Manilla",
    "Obsidian",
    "Oberon",
    "Patriotic",
    "Real",
    "Rimward",
    "Red",
    "Royal",
    "Silent",
    "Stealthy",
    "Stolen",
    "Slim",
    "Scrap",
    "Southerm",
    "Swift",
    "Starlight",
    "Star of",
    "Scrap",
    "The Flying",
    "Wandering",
    "Western",
    "Wisp's",
    "White",
    "Wild",
    "Velocity",
    "Yellow",
    "Yukon",
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

    if(type <= 30){
        final = randomVerb + " " + randomName;

    } else if (type > 30 && type <= 65){

        if(prefixChance > 50){
            final = randomName;
        } else {
            final = randomPrefix + " " + randomName;
        }

    } else if (type > 65 && type <= 85){

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