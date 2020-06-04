

// var place = [
//     "Alabama",
//     "Basingstoke",
//     "Colchester",
//     "Derby",
// ];

var locationStart = [
    "On a high-gravity world",
    "On a low-gravity world",
    "On a low-gravity planet",
    "On a lava planet",
    "On a planet with constant storms",
    "On a planet with electrical storms",
    "On a methane-rich planet",
    "On a gas-giant",
    "On a dwarf planet",
    "On a hostile planet",
    "On a dyson-sphere",
    "On a ring world",
    "On an orbital tether",
    "On a carbon-neutral planet",
    "On a carbon-rich planet",
    "On a potassium-rich planet",
    "On a acid planet",
    "On a planet where it rains acid",
    "Inside a nebula",
    "Inside a wormhole",
    "Inside a black hole",
    "In a dark bog",
    "Shrunk down inside someone's intestines",
    "Orbiting a black hole",
    "In a dream",
    "In a dream world",
    "In a virtual reality simulation",
    "In a computer program",
    "In a holographic projection",
    "In a parallel universe",
    "In the bowels of a giant alien",
    "In the clouds of an alien planet",
    "In the upper atmosphere of a gas giant",
    "On the rings of Saturn",
    "On the rings of a Saturn-like planet",
    "On an icy world",
    "On an icy moon",
    "On an abandoned planet",
    "On an abandoned moon",
    "On the homeworld of a deadly alien",
    "In the jungle",
    "In the jungle of an alien planet",
    "In the swamp of a tropical world",
    "In a swamp",
    "In the desert",
    "In the deserts of Mars",
    "On Mars",
    "On Neptune",
    "On Pluto",
    "In deep space",
    "On a tidally locked world with a thin atmosphere",
    "On a desert world with high gravity",
];

var planetType = [
    "jungle",
    "desert",
    "lava",
    "water",
    "forest",
    "swamp",
    "dead",
    "robot",
    "rocky",
    "low-gravity",
    "high-gravity",
    "methane",
    "desserted",
    "lonely",
];

var placeType = [
    "planet",
    "moon",
    "gas giant",
    "asteroid",
    "planetoid",
    "comet",
    "prison planet",
    "robot planet",
    "spacestation",
    "derelict",
    "spaceship",
    "submarine",
]

var creature = [
    "alien",
    "alien",
    "alien creature",
    "alien mouse",
    "alien spider",
    "cat",
    "lion",
    "tiger",
    "panther",
    "hamster",
    "rat",
    "mouse",
    "monster",
    "creature",
    "spider",
    "bat",
    "tarantula",
    "mosquito",
    "elephant",
    "honey bee",
    "water vole",
    "horse",
    "ape",
    "monkey",
    "sewer rat",
    "snake",
    "dinosaur",
    "black widow spider",
    "time travelling victorian man",
    "viking",
];

var specialAbility = [
    "see through walls",
    "fly",
    "climb walls",
    "resurrect",
    "move through walls like a ghost",
    "detach limbs",
    "kill people with a single thought",
    "recover from a great fall",
    "jump really high",
    "read people's minds",
    "see people's inner desires",
    "communicate telepathically",
    "predict the weather",
    "lift buildings",
    "swim like a shark",
    "tunnel underground",
    "punch through metal",
    "bite through metal",
    "drink acid",
    "eat loads without ever getting fat",
    "hover",
    "turn invisible",
    "teleport",
    "make dreams come true",
    "make visions come to life",
    "run faster than a car",
    "run at 200mph",
    "heal people just by touching",
    "talk to animals",
    "make 3 wishes which come true",
    "shrink down really small",
    "turn into a large monster",
    "turn into a wolf",
    "turn into a hamster",
    "turn into a giant spider",
    "turn into a giant lion",
    "turn into a tiger",
    "turn into an elephant",
];

var peoplePlural = [
    "alien ambassadors",
    "spaceship captains",
    "scientists",
    "dentists",
    "doctors",
    "humanoid hamsters",
    "dinosaurs",
    "aliens",
    "kings",
    "princes",
    "knights",
    "ambassadors",
    "con men",
    "alien scientists",
    "explorers",
    "alien explorers",
    "alien wizards",
    "alien doctors",
    "alien abductors",
    "Humans",
    "average Humans",
    "teenagers",
    "normal teenagers",
    "teenagers with special powers",
    "Humans with special abilities",
    "superheroes",
    "schoolteachers",
    "millionaires",
    "young boys",
    "young girls",
    "old men",
    "old women",
    "ex-zombies",
    "injured people",
    "rich explorers",
    "astronauts",
    "military generals",
    "humanoid animals",
    "vampires",
    "unemployed people",
    "sports fans",
    "athletes",
    "black men",
    "black women",
    "white guys",
    "white women",
    "hispanic men",
    "hispanic women",
    "asian women",
    "drug dealers",
    "soldiers",
    "overweight people",
    "neanderthals",
    "time travellers",
    "celebrity chefs",
    "celebrities",
    "footballers",
    "computer programmers",
    "webdesigners",
    "delivery drivers",
    "genetically enhanced apes",
    "talking dogs",
    "kittens",
    "puppies",
    "super intelligent cats",
    "idiots",
    "stoners",
    "god-like beings",
    "alien emperors",
    "clones",
    "members of a cult",
    "3rd level technicians",
    "repair staff",
    "cleaners",
    "dolphins",
];

var challenge = [
    "compete with each other",
    "fight each other",
    "fight with each other",
    "try to kill each other",
    "try to murder each other",
    "fight for custody",
    "fight a legal battle",
    "risk death",
    "risk a dangerous assault course",
    "perform a deadly series of challenges",
    "go to war",
    "go on a risky journey",
    "risk everything",
    "dangerously fight each other",
    "play a dangerous game",
];

var goal = [
    "in a race to build their own spaceships",
    "over the heir to throne of a vast intergalactic empire",
    "for the hand of a beautiful woman",
    "for the love of a beautiful alien",
    "for the safety of their families",
    "for a new home after their homeworld was destroyed",
    "for a lover",
    "for an alien lover",
    "for the hand of an alien heir",
    "for marriage to a rich alien",
    "for marriage to a powerful alien",
    "to save their brother",
    "to save their sibling",
    "to save their daughters",
    "to save their friend",
    "to save their spouses",
    "to save their pets",
    "to bring their spouses back to life",
];

//--must come after "a"
var personType = [
    "spaceship captain",
    "scientist",
    "dentist",
    "doctor",
    "humanoid hamster",
    "friendly alien",
    "king",
    "prince",
    "knight",
    "Human ambassador",
    "con man",
    "foreign scientist",
    "mad scientist",
    "explorer",
    "brave explorer",
    "wizard",
    "Human",
    "normal Human",
    "teenager",
    "normal teenager",
    "teenager with special powers",
    "Human with special abilities",
    "superhero",
    "schoolteacher",
    "millionaire",
    "young boy",
    "young girl",
    "old man",
    "old woman",
    "rich explorer",
    "successful astronaut",
    "trainee astronaut",
    "military general",
    "humanoid animal",
    "vampire",
    "jobless person",
    "sports fan",
    "professional athlete",
    "black man",
    "black woman",
    "white guy",
    "white woman",
    "hispanic man",
    "hispanic woman",
    "drug dealer",
    "soldier",
    "clinically obese person",
    "neanderthal",
    "time traveller",
    "celebrity chef",
    "celebrity",
    "footballer",
    "robot",
    "computer programmer",
    "webdesigner",
    "delivery driver",
    "genetically enhanced ape",
    "talking dog",
    "kitten",
    "puppy",
    "super intelligent cat",
    "fool",
    "stoner",
    "god-like being",
    "powerful emperor",
    "clone",
    "3rd level technician",
    "cleaner",
    "talking dolphin",
];

//--comes after "a"
machineType = [
    "toaster",
    "kitchen oven",
    "microwave",
    "computer",
    "laptop",
    "calculator",
    "printer",
    "laserjet printer",
    "1990s laserjet printer",
    "1990s laptop",
    "1960s computer mainframe",
    "supercomputer",
    "potato",
    "smartphone",
    "Nokia 3310",
    "tumble dryer",
    "washing machine",
    "gas hob",
    "vacuum cleaner",
]

function randomPlaceType(){
    return placeType[Math.floor(Math.random() * placeType.length)];
}

function randomLocationStart(){
    return locationStart[Math.floor(Math.random() * locationStart.length)];
}

function randomPlanetType(){
    return planetType[Math.floor(Math.random() * planetType.length)];
}

function randomCreature(){
    return creature[Math.floor(Math.random() * creature.length)];
}

function randomSpecialAbility(){
    return specialAbility[Math.floor(Math.random() * specialAbility.length)];
}

function randomPeoplePlural(){
    return peoplePlural[Math.floor(Math.random() * peoplePlural.length)];
}

function randomChallenge(){
    return challenge[Math.floor(Math.random() * challenge.length)];
}

function randomGoal(){
    return goal[Math.floor(Math.random() * goal.length)];
}

function randomPersonType(){
    var typeChance = Math.floor(Math.random() * 10);

    if (typeChance < 5){
        return personType[Math.floor(Math.random() * personType.length)];
    } else {
        return machineType[Math.floor(Math.random() * machineType.length)];
    }
}

generateIdea = function(){
    var final = "";

    var type = Math.floor(Math.random() * 10);

    switch (type) {
        case 0:
            final = randomLocationStart() + ", the crew of <i>the " + spaceshipName() +"</i> explores the ruins of an ancient civilization.";
            break;

        case 1:
            final = "After doing battle with an enemy spaceship in a remote star system, <i>the " + spaceshipName() +"</i> crash-lands on a " + randomPlanetType() + " planet. When the surviving crew scout the area around the crash site, they are surprised to discover that the enemy vessel has also crashed. The two crews will have to work together if they are to survive.";
            break;

        case 2:
            final = characterName() + " was on a path to obscurity, until they were bitten by a radioactive " + randomCreature() + " & developed the ability to "+ randomSpecialAbility() +".";
            break;

        case 3:
            final = "Two " + randomPeoplePlural() + " become stranded on a "+ randomPlanetType() + " " + randomPlaceType() + ". When they run out of supplies, one is forced to eat the other in order to survive.";
            break;

        case 4:
            final = "A story about two " + randomPeoplePlural() + " who "+ randomChallenge() + " " + randomGoal() + ".";
            break;

        case 5:
            final = "An android begins to experience memories of a past life in which it was a " + randomPersonType() + ".";
            break;

        case 5:
            final = ".";
            break;
    }

    return final;
}

generateAll = function () {
    $(".story-idea").each(function(){

        $(this).html("");

        $(this).prepend(generateIdea());

    });

}

generateAll();