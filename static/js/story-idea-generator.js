

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

var simpleSetting = [
    "on a spacestation",
    "aboard a spaceship",
    "on an alien planet",
    "on a farming colony",
]

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
    "colony",
    "human colony",
    "moon",
    "gas giant",
    "asteroid",
    "planetoid",
    "comet",
    "prison planet",
    "robot planet",
    "spacestation",
    "farm",
    "theme park",
    "factory",
    "cavern",
    "castle",
    "fortress",
    "derelict",
    "spaceship",
    "underwater base",
    "island",
    "continent",
    "world",
];

var placeAdjective = [
    "an agricultural",
    "an alien",
    "a far away",
    "a distant",
    "a mysterious",
    "a dark",
    "a snow covered",
    "a desserted",
    "an abandoned",
    "an uncharted",
    "a friendly",
    "a commercial",
    "a millionaire's",
    "a privately owned",
    "an expensive",
    "a rich",
    "a hot",
    "a cold",
    "an unexplored",
    "a nearby",
    "a newly discovered",
]

var creature = [
    "alien",
    "alien",
    "alien creature",
    "alien mouse",
    "alien spider",
    "black labrador",
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
    "poodle",
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
    "fly faster than a plane",
    "absorb water",
    "turn to fire",
    "turn into water",
    "conjure tornadoes",
    "conjure food out of thin air",
    "run at 200mph",
    "heal people just by touching them",
    "walk on water",
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
    "control people's actions",
];

var peoplePlural = [
    "3rd level technicians",
    "Humans with special abilities",
    "Humans",
    "angels",
    "alien abductors",
    "alien doctors",
    "alien emperors",
    "alien explorers",
    "alien scientists",
    "alien wizards",
    "aliens",
    "ambassadors",
    "asian women",
    "astronauts",
    "athletes",
    "biologists",
    "brothers",
    "black men",
    "black women",
    "cats",
    "celebrities",
    "celebrity chefs",
    "cleaners",
    "clones",
    "computer programmers",
    "con men",
    "cyborgs",
    "delivery drivers",
    "dentists",
    "dinosaurs",
    "doctors",
    "dolphins",
    "drug dealers",
    "ex-zombies",
    "explorers",
    "footballers",
    "gamers",
    "Youtubers",
    "geography teachers",
    "genetically enhanced apes",
    "god-like beings",
    "hispanic men",
    "hispanic women",
    "humanoid animals",
    "humanoid hamsters",
    "idiots",
    "injured people",
    "kings",
    "kittens",
    "knights",
    "members of a cult",
    "maths teachers",
    "military generals",
    "millionaires",
    "neanderthals",
    "normal teenagers",
    "nurses",
    "old men",
    "old women",
    "overweight people",
    "princes",
    "puppies",
    "reality TV stars",
    "repair staff",
    "rich explorers",
    "robots",
    "schoolgirls",
    "schoolteachers",
    "scientists",
    "soldiers",
    "spaceship captains",
    "sports fans",
    "stoners",
    "superheroes",
    "talking dogs",
    "teenagers with special powers",
    "teenagers",
    "time travellers",
    "unemployed people",
    "vampires",
    "vikings",
    "webdesigners",
    "white guys",
    "white women",
    "young boys",
    "young girls",
    "alien ambassadors",
];

var challenge = [
    "compete with each other",
    "compete",
    "go head to head",
    "battle",
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
    "play dirty",
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
    "for mining rights on the planet Mars",
    "for mining rights on a newly discovered planet",
    "to mine resources from a moon",
    "to build the best robot",
    "in a race to build the best spacestation",
];

//--must come after "a"
var personTypeMale = [
    "3rd level technician",
    "DJ",
    "Human ambassador",
    "Human with special abilities",
    "Human",
    "TV presenter",
    "male archaeologist",
    "young astronomer",
    "brave explorer",
    "captain",
    "celebrity chef",
    "celebrity",
    "cleaner",
    "clinically obese person",
    "clone",
    "computer programmer",
    "con man",
    "delivery driver",
    "dentist",
    "doctor",
    "drug dealer",
    "pioneer",
    "prisoner",
    "pilgrim",
    "fool",
    "footballer",
    "foreign scientist",
    "friendly alien",
    "genetically enhanced ape",
    "god-like being",
    "hispanic man",
    "humanoid animal",
    "humanoid hamster",
    "gadget inventor",
    "jobless person",
    "king",
    "knight",
    "mad scientist",
    "military general",
    "millionaire",
    "neanderthal",
    "normal Human",
    "normal teenager",
    "nurse",
    "kind old man",
    "powerful emperor",
    "prince",
    "professional athlete",
    "puppy",
    "rich explorer",
    "robot",
    "schoolteacher",
    "scientist",
    "soldier",
    "sports fan",
    "stoner",
    "student",
    "spaceship captain",
    "successful astronaut",
    "super intelligent cat",
    "superhero",
    "talking dog",
    "talking dolphin",
    "talkshow host",
    "teenager with special powers",
    "teenager",
    "time traveller",
    "trainee astronaut",
    "vampire",
    "viking",
    "webdesigner",
    "white guy",
    "wizard",
    "young boy",
];

var personAdjective = [
    "a witty",
    "a drug-addicted",
    "a tired",
    "a dejected",
    "a busy",
    "a bored",
    "a dangerous",
    "a grumpy",
    "a cheeky",
    "an average",
    "an alien",
    "a normal",
    "a well-loved",
    "a flamboyant",
    "a robot",
    "a sad",
    "a grieving",
    "an unhappy",
    "a gay",
    "a heterosexual",
    "an assertive",
    "a troubled",
    "a haunted",
    "an unhealthy",
    "an overweight",
    "a dying",
]

var peopleAdjective = [
    "robot",
    "cyborg",
    "goth",
    "educated",
    "alien",
    "android",
    "non-humanoid",
    "dying",
    "miserable",
    "flamboyant",
    "drug-addicted",
    "busy",
    "holographic",
    "AI",
    "robotic",
    "super intelligent",
    "average",
]

//--comes after "a"
var machineType = [
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
];

var searchFor = [
    "his missing sister",
    "his missing brother",
    "his missing boyfriend",
    "his missing girlfriend",
    "his missing wife",
    "his missing husband",
    "his estranged parents",
    "his kidnapped children",
    "his lost children",
    "his long lost brother",
    "his long lost sister",
    "his favourite gadget",
    "his lost pet",
    "a mortgage",
    "money",
    "refuge",
    "a place to live",
    "a place to escape",
    "a spaceship",
    "a good meal",
    "a new computer",
    "a new gadget",
    "love",
    "power",
    "fame",
    "a powerful ally",
    "a powerful object",
    "a mysterious alien artifact",
    "a mysterious ancient artifact",
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

function randomPersonTypeMale(){
    return personTypeMale[Math.floor(Math.random() * personTypeMale.length)];
}

function randomMachineType(){
    return machineType[Math.floor(Math.random() * machineType.length)];
}

function randomPersonAdjective(){
    return personAdjective[Math.floor(Math.random() * personAdjective.length)];
}

function randomPeopleAdjective(){
    return peopleAdjective[Math.floor(Math.random() * peopleAdjective.length)];
}

function randomPlaceAdjective(){
    return placeAdjective[Math.floor(Math.random() * placeAdjective.length)];
}

function randomRomanceConclusion() {
    romanceConclusion = [
        "run away together",
        "declare war on their culture",
        "protest with deadly weapons",
        "dismantle their society & culture",
        "escape the planet",
        "escape on a spaceship",
        "live online in a virtual reality fantasy world",
        "murder their parents",
        "clone themselves",
        "escape to the homeworld of their deadliest enemy",
        "escape to a dangerous planet",
        "escape to a parallel universe",
        "upload their memories into robots",
        "live underground",
    ];

    return romanceConclusion[Math.floor(Math.random() * romanceConclusion.length)];
}

function randomSearchFor(){
    return searchFor[Math.floor(Math.random() * searchFor.length)];
}

function randomMaleEnding(){

    var personEnding = [
        "he's kidnapped by pirates",
        "he's kidnapped by mermaids",
        "he's kidnapped by aliens",
        "he's kidnapped by enemies from the past",
        "he's kidnapped by ghosts",
        "he's chased by ghosts",
        "he's chased by monsters",
        "he becomes entangled in a cult",
        "he becomes a target for a mercenary",
        "he meets a mysterious alien",
        "he falls in love with an alien",
        "he becomes trapped in a pit",
        "he ends up owing money to a gang",
        "he becomes involved in a murder",
        "he's mysteriously killed, & his sister has to investigate",
        "he goes missing, & the space police have to investigate",
    ];

    return personEnding[Math.floor(Math.random() * personEnding.length)];
}

function randomExploreThing(){

    var exploreThing = [
        "the ruins of an ancient civilization",
        "the palace of an abandoned civilization",
        "the wreckage of an abandoned spaceship",
        "the bones of a dead alien giant",
        "the bones of dead alien dinosaurs",
        "the fossilized remains of a monster",
        "an abandoned spaceship",
        "an abandoned spacestation",
        "an abandoned colony",
        "an alien solar system",
        "an alien moon",
        "an uncharted moon",
        "a jungle planet",
        "an island of mysterious creatures",
    ];

    return exploreThing[Math.floor(Math.random() * exploreThing.length)];
}

function randomKnownPlanet(){

    var planet = [
        "Mercury",
        "Mars",
        "Venus",
        "the Moon",
        "Saturn",
        "Uranus",
        "Titan",
        "Europa",
        "Ganymede",
        "Io",
        "Charon",
        "Pluto",
        "Phobos",
        "Titania",
        "the sun",
        "Hyperion",
        "Miranda",
        "Ceres",
        "Neptune",
    ];

    return planet[Math.floor(Math.random() * planet.length)];
}

function randomOfficialGroup(){

    var group = [
        "Libyans",
        "US Government",
        "US Military",
        "US Government",
        "UK Government",
        "UK Government",
        "Earth Federation",
        "European Union",
        "European Space Agency",
        "Chinese Government",
        "Russians",
        "Australian Military",
        "Indian Military",
        "Air Force",
        "Space Force",
        "US Navy",
        "US Air Force",
        "UK Armed Forces",
        "RAF",
        "United Earth Government",
    ];

    return group[Math.floor(Math.random() * group.length)];
}

function randomDoing(){

    var options = [
        "building a portal to another universe",
        "building a giant weapon",
        "building a hospital",
        "building a time machine",
        "having a party",
        "building an invasion fleet",
        "growing giant monsters",
        "growing crops",
        "building spaceships",
        "building a fleet of hospital ships that will cure the galaxy",
        "building a portal to Hell",
        "experimenting on Humans",
        "experimenting with creating alien-Human crossbreeds",
        "enslaving the native population",
        "creating drugs",
        "building giant robots",
        "cloning soldiers",
        "there to defend the Earth from another hostile species",
    ];

    return options[Math.floor(Math.random() * options.length)];
}

function randomANoun(){
    //--has to be something we refer to as "it"

    var options = [
        "an android",
        "an alien",
        "an albatross",
        "a robot",
        "a sex robot",
        "a missile",
        "an artificial intelligence",
        "a cyborg",
        "a cyborg rabbit",
        "a cyborg killing machine",
        "an emotionless military robot",
        "a hologram",
        "a programmed VR character",
        "a recycled robot",

    ];

    return options[Math.floor(Math.random() * options.length)];
}

function randomSetting(){

    return simpleSetting[Math.floor(Math.random() * simpleSetting.length)];
}

function randomJobEnding(){
    var options = [
        "who fight crime by night",
        "who discover a new species of spider",
        "who accidentally allow a virus-infected monkey escape into a populated area",
        "who accidentally kill the only doctor that can cure their illness",
        "who solve mysteries",
        "who realise their neighbour is an alien",
        "who discover a crashed alien spaceship",
        "who invent a new technology that the world isn't prepared for",
        "who discover a powerful cult that attempts to wipe out all life in the universe simultaneously",
        "who create a robot that with real feelings",
        "whose new pet is a little bit unusual...",
        "who join the military & are ordered on a suicide mission",
        "who are ordered to bomb their hometown to save it from aliens",
        "who realise their friends brains have been taken over by a parasite",
        "who become separated on an alien planet, & have to find each other",
        "who work on a spaceship that starts to crash",
        "who are abducted by aliens & forced to work on a labour camp",
        "who fall through a wormhole & can't find their way home",
        "who fight in the resistance against the aliens who invaded their planet",
        "who try to assassinate the President",
        "who save a hospital from invaders",
        "who have to invent a cure for a virus that's killing everyone",
        "who build a robot & train it to be their ideal partner",
        "who lead an uprising against the state",
        "who become deities for an alien race",
        "who become popstars on an alien planet",
        "whose friends turn to stone & they have to figure out why",
        "whose family all die",
        "who didn't do enough to save their planet",
        "who fight monsters. When they lose hope they commit suicide",
        "who fight with a laser sword",
        "who have to investigate crimes on an alien planet",
        "who discover a portal to Hell",
        "who meet a scientist who things she can bring dead people back to life",
        "who meet a genie who grants each 3 wishes",
        "who enter a driving competition",
        "who enter a marathon",
        "who stay at home, watching as the world burns",
        "whose parents reveal themselves to be from a distant planet",
        "whose mother fights for their survival, but dies, leaving them alone & scared",
        "on a spacestation, without any water",
        "who are kidnapped by idiots",
        "who are abducted by stoner aliens",
        "who accidentally kill the Russian President",
        "who accidentally launch a nuke",
        "who enter a dancing competition against the galaxy",
        "who discover a time machine",
        "who use a time machine to kill their parents",
        "who use a time machine to save their parents",
        "who use a time machine to try & kill each other's parents",
        "who travel to the future",
        "who travel to 18th century England",
        "who travel to 12th century China",
        "who travel to 18th century Africa",
        "who travel to 15th century France",
        "who use a time machine to fight in World War 2",
        "who try to kill Hitler",
        "who try to kill President Trump",
        "who try to kill Pol Pot",
        "who meet Stalin",
        "who meet Elvis",
        "who meet Marilyn Monroe",
        "who inspire Einstein",
        "who inspire the Wright brothers",
        "who meet Garrett Morgan",
        "who accidentally kill Alan Turing & have to continue his invention",
        "who doesn't know that one of them is an alien shapeshifter",
        "who lost their memories",
        "who climb a mountain",
    ];

    return options[Math.floor(Math.random() * options.length)];
}

function randomPrison(){

    var option = [
        "in a maximum security prison",
        "on a cold ice planet",
        "in a virtual reality construct",
        "in a damp cave",
        "in a pit",
        "in an abandoned soviet prison",
        "in a Chinese internment camp",
        "in a Japanese internment camp",
        "in a British internment camp",
        "in an American internment camp",
        "in a volcano",
        "in an alien prison cell",
        "in an alien pit",
        "in the brig of a spacestation",
        "in the hold of an alien spaceship",
        "in a terrorist camp",
        "in a terrorist prison cell",
        "in a cage",
        "on an abandoned spaceship",
        "on an alien planet",
        "on an deserted planet with no food",
    ];

    return option[Math.floor(Math.random() * option.length)];
}

function randomTrapped(){
    var option = [
        "finds himself trapped",
        "is kidnapped & imprisoned",
        "is imprisoned by terrorists",
        "is trapped",
    ];

    return option[Math.floor(Math.random() * option.length)];
}

function randomEscapeEnd(){
    var option = [
        "he tries to build a time machine using scrap components",
        "he tries to build a weapon using what he can find laying around",
        "he builds a powerful robot suit using scrap components",
        "he telepathically chats with a helpful alien",
        "he calls for help, but is surprised when a telepathic alien answers",
        "he is rescued by a friendly alien",
        "he is rescued by a friendly creature. They become best friends",
        "he builds a teleporter using instructions scratched into the wall",
        "he builds a weapon using instructions scratched into the wall",
        "he finds a tunnel built by underground creatures",
        "he is guided through a tunnel by a mysterious voice",
        "he is interrogated & probed by aliens",
        "he meets another captive & they become lovers",
        "he meets another captive & they work together to escape",
        "he builds a robot for companionship",
        "he is imprisoned for 15 years, then realises it was all an implanted memory for a crime he committed",
        "he starts to evolve into something different",
        "he meets other captives & starts to build an army",
        "he becomes friends with a ghost",

    ];

    return option[Math.floor(Math.random() * option.length)];
}

function randomRobotEnd(){

    var option = [
        "The robots eventually build their own community & take command of their own destiny",
        "The robots to build a weapon out of the wreckage of the spaceship & force the Humans to work for them",
        "The robots build a more powerful robot, & worship it as a god",
        "The robots come under the spell of an alien race",
        "The robots become translators for an indigenous alien race",
        "A rescue attempt is launched, but is thwarted by the robots",
        "They become best friends",
        "The robots build a teleporter, but need the Humans to collect the raw materials",
        "The robots find instructions carved into a cave wall, & start to build what is inscribed",
        "The robots dig a tunnel for them all to take shelter",
        "The robots cannot talk, so they all have to speak in sign language",
        "They all become lovers",
        "The robots become overprotective of the Humans, & kill all indigenous wildlife",
        "They discover the robots have been programmed with the memories of dead people",
        "The robots misunderstand their core objectives & feed the Humans until they die of obesity",
        "The robots discover they are slaves, so build an army of new robots, repair the spaceship, & wage war on the company that sent them there",
        "When she spaceship flies back home, nobody is prepared for the horrors inside",
        "When she spaceship wreckage is discovered 7 years later, the mystery of what happened is uncovered in a series of blood-soaked diary entries",
        "They survive for 7 years, & when the Humans become sick & die, the robots have to save them",
        "They survive, but when the Humans become sick the robots gradually replace their organs & limbs with robot parts",
        "When their enemies come to steal the robots, the Humans have to protect them",
    ];

    return option[Math.floor(Math.random() * option.length)];

}

function randomHumansFate(){
    var option = [
        "use Humans as slaved",
        "save the planet from itself",
        "destroy all our weapons & force us to live in peace",
        "heal all our sick. For a price",
        "force us into servitude",
        "assimilate them into their culture",
        "use Humans as breeding stock",
        "do experiments on us",
        "let us join their intergalactic Federation",
        "destroy us & claim the planet as their own",
        "kill a half of the population to prevent overcrowding",
        "give us their advanced technology as long as we give them 10,000 people to use as slaves",
        "give us the cure for all our most deadly illnesses, but in return we must allow them to kill 1,000 people",
        "nuke our planet unless we give them 3,000 children to take away with them",
        "live among us",
    ];

    return option[Math.floor(Math.random() * option.length)];
}

generateIdea = function(){
    var final = "";

    var type = Math.floor(Math.random() * 18);

    switch (type) {
        case 0:
            final = randomLocationStart() + ", the crew of <i>The " + spaceshipName() +"</i> explores " + randomExploreThing() + ".";
            break;

        case 1:
            final = "After doing battle with an enemy spaceship in a remote star system, <i>The " + spaceshipName() +"</i> crash-lands on a " + randomPlanetType() + " planet. When the surviving crew scout the area around the crash site, they are surprised to discover that the enemy vessel has also crashed. The two crews will have to work together to survive.";
            break;

        case 2:
            final = characterName() + " was on a path to obscurity, until they were bitten by a radioactive " + randomCreature() + " & developed the ability to "+ randomSpecialAbility() +".";
            break;

        case 3:
            final = "Two " + randomPeoplePlural() + " become stranded on a "+ randomPlanetType() + " " + randomPlaceType() + ". When they run out of supplies, one is forced to eat the other to survive.";
            break;

        case 4:
        case 5:
            final = "A story about two " + randomPeoplePlural() + " who "+ randomChallenge() + " " + randomGoal() + ".";
            break;

        case 6:
            var typeChance = Math.floor(Math.random() * 10);
            var person = "";

            if (typeChance < 5){
                person = randomPersonTypeMale();
            } else {
                person = randomMachineType();
            }

            final = randomANoun() + " begins to experience memories of a past life in which it was a " + person + ".";
            break;

        case 7:
        case 8:
            var typeChance = Math.floor(Math.random() * 10);
            var person = "";

            if (typeChance < 3){
                person = randomPersonAdjective() + " " + randomPersonTypeMale();
            } else {
                person = "a " + randomPersonTypeMale();
            }

            final = "When " + person + " travels to " + randomPlaceAdjective() + " " + randomPlaceType() + " in search of " + randomSearchFor() + ", " + randomMaleEnding() + ".";
            break;

        case 9:
            final = "When two " + randomPeopleAdjective() + " " + randomPeoplePlural() + " fall in love, they are forbidden to see each other. They decide to " + randomRomanceConclusion() + ".";
            break;

        case 10:
            var planet = randomKnownPlanet();
            final = "An unknown alien intelligence establishes a base on "+ planet +". Unable to communicate with the aliens, the "+ randomOfficialGroup() +" send a small team to deal with the threat. Before they are able to destroy the base, the team learn what the aliens are really doing on " + planet +"; they are " + randomDoing() + ".";
            break;

        case 11:
            final = "After a number of suspicious deaths " + randomSetting() + ", "+randomPersonAdjective() + " " + randomPersonTypeMale() + " is suspected of murder.";
            break;

        case 12:
        case 13:
            final = "A story about two "+ randomPeoplePlural() + " " + randomJobEnding() + ".";
            break;

        case 14:
        case 15:
            var typeChance = Math.floor(Math.random() * 10);
            var person = "";
            if (typeChance < 3){
                person = randomPersonAdjective() + " " + randomPersonTypeMale();
            } else {
                person = "a " + randomPersonTypeMale();
            }

            final = "When " + person + " " + randomTrapped() + " " + randomPrison() + ", " + randomEscapeEnd() + ".";
            break;

        case 16:
            final =  "A ship carrying a cargo of deactivated robots crash-lands on a " + randomPlanetType() + " planet. Only two of the crew survive, but they activate the robots to help them survive. " + randomRobotEnd() + ".";
            break;

        case 17:
            final =  "A large alien armada arrives in Earth orbit. The aliens broadcast a message to the world, saying that they intend to " + randomHumansFate() + ".";
            break;

        case 18:
            final =  "A large alien armada arrives in Earth orbit. The aliens broadcast a message to the world, saying that they intend to " + randomHumansFate() + ".";
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