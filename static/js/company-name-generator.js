
function companyWord(){
    var options = [
        "Griffin",
        "Mercury",
        "Mars",
        "Venus",
        "Pluto",
        "Earth",
        "Terra",
        "Æthelwulf",
        "Æthelred",
        "Adelphi",
        "Aegean",
        "Afonso",
        "Agamemnon",
        "Agrippa",
        "Ahwahnee",
        "Aion",
        "Ajax",
        "Akagi",
        "Akira",
        "Almagro",
        "Andromeda",
        "Antares",
        "Anubis",
        "Apollo",
        "Archer",
        "Archimedes",
        "Ares",
        "Arkwright",
        "Argo",
        "Argon",
        "Ariane",
        "Armstrong",
        "Artemis",
        "Arthur",
        "Asimov",
        "Asteria",
        "Athena",
        "Atlantic",
        "Atlantis",
        "Atwood",
        "Aurora",
        "Avarice",
        "Baffin",
        "Banshee",
        "Barracuda",
        "Barth",
        "Basilisk",
        "Bastion",
        "Beagle",
        "Beetle",
        "Bellerophon",
        "Beluga",
        "Berlin",
        "Biddeford",
        "Billings",
        "Blackbird",
        "Blackburn",
        "Bolsover",
        "Bouman",
        "Bounty",
        "Brave",
        "Britain",
        "Bruce",
        "Budapest",
        "Buran",
        "Burckhardt",
        "Burnham",
        "Burton",
        "Byrd",
        "Cairo",
        "Calypso",
        "Caminha",
        "Carolina",
        "Cavendish",
        "Celtic",
        "Centaur",
        "Centenary",
        "Challenger",
        "Chardin",
        "Charleston",
        "Chekov",
        "Champion",
        "Chirikov",
        "Chlorine",
        "Chukhnovsky",
        "Chun",
        "Chyron",
        "Cobra",
        "Cochrane",
        "Coleman",
        "Columbia",
        "Columbus",
        "Comet",
        "Concord",
        "Condor",
        "Conti",
        "Cortés",
        "Coral Sea",
        "Cousteau",
        "Crazy",
        "Crockett",
        "Cryogenics",
        "Cunha",
        "Curry",
        "Daedalus",
        "Defiance",
        "Defiant",
        "Deliverance",
        "Delta",
        "Demeter",
        "Destiny",
        "Dezhnev",
        "Diamond",
        "Discovery",
        "Drake",
        "Dragon",
        "Drifter",
        "Eagle",
        "Earhart",
        "Einstein",
        "Ellsworth",
        "Emissary",
        "Endeavor",
        "Engel",
        "Enterprise",
        "Equicon",
        "Erikson",
        "Erskine",
        "Escobar",
        "Everest",
        "Excalibur",
        "Exeter",
        "Farenheit",
        "Farragut",
        "Fawcett",
        "Fearless",
        "Fernandes",
        "Fiennes",
        "Fireball",
        "Firebird",
        "Firefly",
        "Fleming",
        "Fortitude",
        "Fortunado",
        "Fortune",
        "Foxfire",
        "Frobisher",
        "Gagarin",
        "Galaxy",
        "Gallimimus",
        "Gamma",
        "Gander",
        "Gerlache",
        "Gettysburg",
        "Ghandi",
        "Gibson",
        "Gonzalo",
        "Goole",
        "Gremlin",
        "Greyhound",
        "Grissom",
        "Guerrero",
        "Hades",
        "Hannu",
        "Harlequin",
        "Haste",
        "Havanna",
        "Hearne",
        "Hedin",
        "Hellbound",
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
        "Hurricane",
        "Hunley",
        "Hypnos",
        "Icarus",
        "Iksha",
        "Intrepid",
        "Intruder",
        "Iris",
        "Ironclad",
        "Janeway",
        "Javelin",
        "Kant",
        "Kasimov",
        "Kelvin",
        "Kintan",
        "Kingfisher",
        "Kilburn",
        "Kolchak",
        "Kozlov",
        "Krusenstern",
        "Kulakov",
        "Kyushu",
        "Lee",
        "Leeds",
        "Leviathan",
        "Lexington",
        "Leyte",
        "Liberty",
        "Livingston",
        "Logan",
        "Loki",
        "Lucifer",
        "Lucius",
        "Matador",
        "Magellan",
        "Makemake",
        "Mangel",
        "Manhattan",
        "Manoa",
        "Maryland",
        "Mayflower",
        "Mendes",
        "Menezes",
        "Mermaid",
        "Merrimac",
        "Milan",
        "Millennium",
        "Morabito",
        "Morris",
        "Monitor",
        "Mulan",
        "Mustang",
        "Naddoddur",
        "Nakhimov",
        "Nebulon",
        "Nexus",
        "Nimitz",
        "Nina",
        "Nobel",
        "Northern",
        "Noronha",
        "Nostromo",
        "Nova",
        "Nowak",
        "Oberth",
        "Odyssey",
        "Ogden",
        "Olympia",
        "Olympic",
        "Pantheon",
        "Paramount",
        "Pasteur",
        "Pathfinder",
        "Pearce",
        "Pegasus",
        "Perilous",
        "Perseus",
        "Perseus",
        "Pendragon",
        "Phoenix",
        "Piccard",
        "Pike",
        "Pinto",
        "Piranha",
        "Pizarro",
        "Planet",
        "Pontus",
        "Popov",
        "Poseidon",
        "Prince",
        "Princeton",
        "Prometheus",
        "Proxima",
        "Pryor",
        "Pulsar",
        "Pérez",
        "Python",
        "Ramses",
        "Razor",
        "Reliant",
        "Relentless",
        "Renegade",
        "Revere",
        "Roberts",
        "Rockford",
        "Rockton",
        "Ross",
        "Rubicon",
        "Rubruck",
        "Rudanovsky",
        "Rustah",
        "Rutledge",
        "Ryvius",
        "Sabine",
        "Sacagawea",
        "Saratoga",
        "Sarychev",
        "Saturn",
        "Sauma",
        "Schouten",
        "Scimitar",
        "Scorpio",
        "Scott",
        "Scovill",
        "Semeonis",
        "Sentinel",
        "Sequeira",
        "Serenity",
        "Shackleton",
        "Silver",
        "Sioux",
        "Smurgis",
        "Soper",
        "Sovereign",
        "Starfarer",
        "Stargazer",
        "Steg",
        "Stein",
        "Sturt",
        "Strutt",
        "Swordfish",
        "Thor",
        "Thorn",
        "Titan",
        "Tranquility",
        "Trinity",
        "Tsunami",
        "Turin",
        "Tyche",
        "Ulysses",
        "Unicorn",
        "Uranus",
        "Valiant",
        "Vanguard",
        "Vasa",
        "Vasily",
        "Vengeance",
        "Venture",
        "Verne",
        "Victoria",
        "Victory",
        "Vision",
        "Vortex",
        "Voltaire",
        "Voyager",
        "Warmachine",
        "Warspite",
        "Wasp",
        "Wellington",
        "Welshman",
        "Western",
        "Wolverine",
        "Whitestar",
        "Wyvern",
        "Xerxes",
        "Yamato",
        "Yantar",
        "Yeager",
        "Yellowstone",
        "Yeti",
        "Yuri",
        "Zapata",
        "Zeus",
        "Zeppelin",
        "Zhukov",
        "Alpha",
        "Beta",
        "Gamma",
        "Ceti",
        "Delta",
        "Epsilon",
        "Theta",
        "Zeta",
        "Omega",
        Math.floor(Math.random() * 350),
    ];

    return options[Math.floor(Math.random() * options.length)];
}

function companyPart1(){
    var options = [

        "Cryo",
        "Merc",
        "Merk",
        "Murk",
        "Happ",
        "Star",
        "Auto",
        "Autom",
        "Edu",
        "Griffin",
        "Mars",
        "Venus",
        "Pluto",
        "Earth",
        "Terra",
        "Æthelwulf",
        "Æthelred",
        "Æth",
        "Adel",
        "Aeg",
        "Alf",
        "Ag",
        "Ah",
        "Ajax",
        "Akagi",
        "Akira",
        "Almag",
        "And",
        "Ant",
        "Anu",
        "Anubis",
        "Archer",
        "Arch",
        "Ares",
        "Ark",
        "Argo",
        "Argon",
        "Ariane",
        "Arm",
        "Art",
        "As",
        "Ast",
        "At",
        "Atwood",
        "Aurora",
        "Baf",
        "Ban",
        "Bar",
        "Barth",
        "Bas",
        "Bast",
        "Beag",
        "Beetle",
        "Bel",
        "Bel",
        "Ber",
        "Bid",
        "Bill",
        "Black",
        "Bols",
        "Bouman",
        "Bounty",
        "Brave",
        "Brit",
        "Bruce",
        "Bud",
        "Buran",
        "Burck",
        "Burn",
        "Burt",
        "Burton",
        "Byrd",
        "Cairo",
        "Calypso",
        "Cam",
        "Carol",
        "Cave",
        "Celtic",
        "Centaur",
        "Cent",
        "Char",
        "Char",
        "Charles",
        "Chek",
        "Cham",
        "Champ",
        "Chiri",
        "Chlo",
        "Chuk",
        "Chun",
        "Chyron",
        "Cobra",
        "Coch",
        "Cole",
        "Colum",
        "Col",
        "Comet",
        "Concord",
        "Condor",
        "Conti",
        "Cor",
        "Cous",
        "Crazy",
        "Croc",
        "Cunha",
        "Cur",
        "Curry",
        "Cyber",
        "Def",
        "Del",
        "Delta",
        "Dem",
        "Dest",
        "Dez",
        "Disco",
        "Drake",
        "Drift",
        "Eagle",
        "Ear",
        "Earhart",
        "Ein",
        "Ells",
        "Emis",
        "End",
        "Eng",
        "Erik",
        "Erk",
        "Ers",
        "Ersk",
        "Esco",
        "Ev",
        "Ex",
        "Far",
        "Faw",
        "Fear",
        "Fern",
        "Fire",
        "For",
        "Fort",
        "Fox",
        "Fro",
        "Gag",
        "Gaga",
        "Galaxy",
        "Gal",
        "Gam",
        "Gan",
        "Ger",
        "Get",
        "Gib",
        "Gon",
        "Goole",
        "Grem",
        "Gremlin",
        "Grey",
        "Gris",
        "Grissom",
        "Had",
        "Hades",
        "Han",
        "Hannu",
        "Harl",
        "Has",
        "Haste",
        "Hav",
        "Hed",
        "Hell",
        "Hera",
        "Herc",
        "Herm",
        "Hermes",
        "Her",
        "Hero",
        "Hes",
        "Hest",
        "Him",
        "Hip",
        "Hood",
        "Ho",
        "Horn",
        "Hum",
        "Hur",
        "Hun",
        "Hyp",
        "Ic",
        "Icarus",
        "Ik",
        "Iksha",
        "Int",
        "Inter",
        "Intra",
        "Iris",
        "Iro",
        "Iron",
        "Jan",
        "Jav",
        "Kant",
        "Kas",
        "Kel",
        "Kin",
        "King",
        "Kil",
        "Kill",
        "Kilburn",
        "Kol",
        "Kolchak",
        "Koz",
        "Kozlov",
        "Krus",
        "Krust",
        "Kulakov",
        "Kyushu",
        "Lee",
        "Leeds",
        "Lev",
        "Lex",
        "Lexi",
        "Lexing",
        "Ley",
        "Leyte",
        "Lib",
        "Liberty",
        "Live",
        "Living",
        "Logan",
        "Loki",
        "Lucifer",
        "Lucius",
        "Mat",
        "Matador",
        "Mag",
        "Mage",
        "Magel",
        "Make",
        "Mangel",
        "Manoa",
        "Mary",
        "Maryland",
        "May",
        "Mayflower",
        "Mend",
        "Mendes",
        "Men",
        "Menz",
        "Merm",
        "Mer",
        "Merri",
        "Mil",
        "Milan",
        "Millennium",
        "Mora",
        "Mor",
        "Morris",
        "Mon",
        "Monitor",
        "Mulan",
        "Mul",
        "Mus",
        "Mustang",
        "Nad",
        "Neb",
        "Nebula",
        "Nex",
        "Nexus",
        "Nim",
        "Nimitz",
        "Nin",
        "Nina",
        "Nobel",
        "Nor",
        "No",
        "Nostromo",
        "Nov",
        "Nova",
        "Now",
        "Nowak",
        "Ob",
        "Oberth",
        "Odyssey",
        "Og",
        "Ogden",
        "Olympia",
        "Olympic",
        "Pan",
        "Pant",
        "Par",
        "Para",
        "Past",
        "Path",
        "Pea",
        "Peg",
        "Pega",
        "Per",
        "Peril",
        "Per",
        "Pers",
        "Pen",
        "Pho",
        "Pic",
        "Pike",
        "Pint",
        "Pinto",
        "Pir",
        "Piz",
        "Pizar",
        "Plan",
        "Planet",
        "Pon",
        "Pont",
        "Pop",
        "Popov",
        "Pos",
        "Pri",
        "Prince",
        "Prom",
        "Prox",
        "Proxima",
        "Pry",
        "Pul",
        "Pulsar",
        "Pér",
        "Py",
        "Ram",
        "Raz",
        "Razor",
        "Rel",
        "Ren",
        "Rev",
        "Reve",
        "Rob",
        "Robert",
        "Rock",
        "Rockton",
        "Ross",
        "Rubi",
        "Rub",
        "Ruby",
        "Rud",
        "Rus",
        "Rut",
        "Ry",
        "Sab",
        "Sac",
        "Saca",
        "Sara",
        "Sary",
        "Sat",
        "Saturn",
        "Sau",
        "Sch",
        "Sci",
        "Sco",
        "Scor",
        "Scot",
        "Sco",
        "Sem",
        "Sen",
        "Sent",
        "Sequ",
        "Ser",
        "Shack",
        "Silver",
        "Sioux",
        "Smurg",
        "Soper",
        "Sov",
        "Star",
        "Steg",
        "Stein",
        "Strut",
        "Sword",
        "Thor",
        "Tit",
        "Tran",
        "Trin",
        "Tri",
        "Tur",
        "Turin",
        "Uni",
        "Ura",
        "Val",
        "Van",
        "Vas",
        "Venge",
        "Vent",
        "Ver",
        "Vix",
        "Vic",
        "Vis",
        "Vor",
        "Volt",
        "Vol",
        "Voy",
        "War",
        "Wasp",
        "Well",
        "Welsh",
        "West",
        "Wolv",
        "Whit",
        "Wyv",
        "Xer",
        "Yam",
        "Yan",
        "Yea",
        "Yell",
        "Yuri",
        "Zap",
        "Zep",
        "Zhu",
        "Alp",
        "Bet",
        "Gam",
        "Cet",
        "Delt",
        "Ep",
        "Thet",
        "Zet",
        "Omeg",
    ];

    return options[Math.floor(Math.random() * options.length)];
}

function companyPart2(){
    var options = [

        "dyne",
        "corp",
        "co",
        "is",
        "ix",
        "motors",
        "nologies",
        "nology",
        "com",
        "comm",
        "comms",
        "wood",
        "ustries",
        "force",
        "curity",
        "tainment",
        "paq",
        "scape",
        "tide",
        "con",
        "conn",
        "soft",
        "tal",
        "osoft",
        "asoft",
        "sonic",
        "asonic",
        "osonic",
        "sonik",
        "tidez",
        "tides",
        "zon",
        "ason",
        "azon",
        "ations",
        "acians",
        "man",
        "mann",
        "mans",
        "men",
        "sys",
        "systems",
        "temic",
        "matic",
        "media",
        "es",
        "wares",
        "warez",
        "foods",
        "ustry",
        "ods",
        "os",
        "rods",
        "ustries",
        "uctions",
        "stems",
        "ways",
        "burys",
        "beat",
        "way",
        "life",
        "telligence",
        "tales",
        "works",
        "point",
        "bank",
        "banks",
        "worths",
        "point",
        "prises",
        "gold",
        "sleds",
        "worth",
        "ronics",
        "romics",
        "search",
        "corp",
        "Corp",
    ];

    return options[Math.floor(Math.random() * options.length)];
}

function companyEnd(){
    var options = [

        "Aggregates Ltd",
        "Atomic",
        "Acoustics",
        "Applications",
        "Arts",
        "Association",
        "Bionics",
        "Center",
        "Chemicals",
        "Components",
        "Corp",
        "Corporation",
        "Corporation",
        "Cybernetics",
        "Deliveries",
        "Dynamics",
        "Electrics",
        "Electronics",
        "Energies",
        "Energy",
        "Food",
        "Foods",
        "Galactic",
        "Global",
        "Group",
        "Holdings",
        "Inc",
        "Inc",
        "Incorporated",
        "Industrial",
        "Industries",
        "Industries",
        "International",
        "Interplanetary",
        "Interstellar",
        "LLP",
        "Limited",
        "Limited",
        "Ltd",
        "Ltd",
        "Logistics",
        "Multinational",
        "Networks",
        "Power",
        "Security",
        "Solutions",
        "Supplies",
        "Systems",
        "Units",
        "Co-operative",
        "UTC",
        "CIC",
        "Meats",
    ];

    return options[Math.floor(Math.random() * options.length)];
}

generateAcronym = function(){
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var acronym = "";
    var length = Math.floor(Math.random() * 2) + 3;

    for(i=0; i<length;i++){
        acronym += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return acronym;
}


companyName = function(){
    var final = "";
    var type = Math.floor(Math.random() * 100);
    var suffixChance = Math.floor(Math.random() * 10);

    if(type <= 5){
        final = planetName() + " of " + planetName();

    } else if (type > 10 && type <= 15){
        final = generateAcronym();

        if(suffixChance <=5){
            final += " " + companyEnd();
        }

    } else if (type > 15 && type <= 35){

        final = planetName() + companyPart2();

        if(suffixChance <=6){
            final += " " + companyEnd();
        }

    } else if (type > 35 && type <= 55){

        final = planetName() + " " + companyEnd();

    } else if (type > 55 && type <= 80){

        final = companyWord() + " " + companyEnd();

    } else {
        final = companyPart1() + companyPart2();

        if(suffixChance <=6){
            final += " " + companyEnd();
        }

    }

    return final;
}

generateAll = function () {
    $(".single-line").each(function(){

        $(this).html("");

        $(this).prepend(companyName());

    });
}


generateAll();