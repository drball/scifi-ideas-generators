

var adjectives = [
    "6-legged",
    "8-legged",
    "Human-like",
    "aggressive",
    "amphibian",
    "ancient",
    "apelike",
    "asexual",
    "beautiful",
    "bisexual",
    "black",
    "bright white",
    "bright yellow",
    "brown",
    "blue",
    "burrowing",
    "bulbous",
    "carnivorous",
    "carnivorous",
    "calm",
    "cat-like",
    "cheeky",
    "clumsy",
    "color-blind",
    "colourful",
    "cow-like",
    "curious",
    "cute",
    "deer-like",
    "dense",
    "dim-witted",
    "dinosaur-like",
    "dog-like",
    "egg-laying",
    "facist",
    "floating",
    "fishy, underwater",
    "fruit-like",
    "gentle",
    "genetically enhanced",
    "gooey",
    "hairy",
    "hairless",
    "hard-shelled",
    "hard-skinned",
    "humanoid",
    "incestuous",
    "intelligent",
    "invertibrate",
    "jellyfish",
    "limbless",
    "motionless",
    "near-sentient",
    "nocturnal",
    "non-intelligent",
    "octopus-like",
    "optimistic",
    "panther-like",
    "parasitic",
    "peaceful",
    "predatory",
    "rabbit-like",
    "rodent",
    "rodent-like",
    "scorpion-like",
    "selfish",
    "sentient",
    "serene, tree-like",
    "shape-shifters",
    "shy",
    "short-sighted",
    "slimy",
    "slow-moving",
    "soft",
    "strange",
    "sticky",
    "super intelligent",
    "telekinetic",
    "telepathic",
    "terrifying",
    "time-travelling",
    "tiny",
    "tough skinned",
    "transparent",
    "mammalian",
    "mammalian",
    "multi-dimensional",
    "mauve",
    "ugly",
    "urchin",
    "vicious",
    "whale-like",
    "wolf-like",
    "worm-like",
    "winged",
    "yellow",
    "completely talentless",
    "useless",
    "wobbly",
];

var typeOfSpecies = [
    "aliens",
    "aliens",
    "aliens",
    "amphibians",
    "anthropods",
    "apes",
    "arachnids",
    "avians",
    "bacteria",
    "beetles",
    "beings",
    "birds",
    "blobs",
    "bovids",
    "bovines",
    "brachiopod",
    "canines",
    "cats",
    "cats",
    "changelings",
    "clouds",
    "clouds",
    "creatures",
    "creatures",
    "crustacians",
    "centipede",
    "cyborgs",
    "cyclopes",
    "dinosaurs",
    "dogs",
    "echiniderms",
    "felines",
    "fish",
    "herbivores",
    "holograms",
    "humanoids",
    "hypochondriacs",
    "insects",
    "leeches",
    "lizards",
    "mammals",
    "mammals",
    "molluscs",
    "molluscs",
    "plants",
    "plants",
    "rattlesnakes",
    "reptiles",
    "rodents",
    "slugs",
    "snakes",
    "sponges",
    "starfish",
    "tardigrades",
    "worms",
    "worms",
    "urchins",
    "pinnipeds"
];

var start = [
    "A race of",
    "A race of",
    "A species of",
    "They are",
    "These are",
];

//--skills - giant slugs with ....
var skills = [
    "binocular vision",
    "extraordinary physical strength",
    "three horns on their head",
    "red eyes",
    "blue eyes",
    "poisonous spines on their heads",
    "multiple limbs",
    "no limbs",
    "one giant horn",
    "one sharp horn",
    "3 eyes",
    "telescopic vision",
    "light-emitting skin",
    "empathic abilities",
    "telepathic abilities",
    "tough skin",
    "a hard shell",
    "a deadly venomous bite",
    "a soft underbelly",
    "bushy mustaches",
    "big bushy beards",
    "thin legs",
    "large wings",
    "4 wings",
    "three eyes",
    "giant, thick legs",
    "three legs",
    "long tails",
    "long tails with deadly spikes on the end",
    "giant googley eyes",
    "large eyes on stalks",
    "muscular abdomens",
    "powerful legs",
    "powerful jaws",
    "sharp claws",
    "dexterous fingers",
    "3 fingers on each hand",
    "two sets of teeth",
    "flame-resistant skin",
    "a thick woolly coat",
    "white skin",
    "dark skin",
    "oily skin",
    "blistered skin, & puss-filled buboes caused by the planet's radiation",
    "twelve knees on each of their legs",
    "the ability to fly",
    "amazing eyesight",
    "fantastic eyesight in the dark",
    "fantastic hearing",
    "a high-pitched voice",
    "a low-pitched voice",
    "a deep voice",
    "no vocal chords. They communicate using sign-language",
    "razor-sharp leg-hair",
    "a warm coat of fur",
    "protective spines",
    "acid for blood",
    "2,670 teeth",
    "razor-sharp teeth",
    "a keen eye for a bargain",
    "constant hunger for carbon",
    "constant hunger for alcohol",
    "constant hunger for silicon",
    "constant hunger for beef",
    "giant teeth",
    "giant molars",
    "giant fangs",
    "giant ears",
    "very small ear holes",
    "very small ear lobes",
    "large, hairy ears",
    "slender necks",
    "wide hips",
    "chunky arms",
    "bright stripes",
    "dark spots",
    "infrared vision",
    "no ears",
    "trunk-like noses",
    "super-human strength",
    "4 eyelids",
    "yellow eyes & purple skin",
    "no visible genitalia. They reproduce through spores",
    "a giant nose",
    "no nose, so they can't smell",
    "horns",
    "flanges",
    "loose flanges",
    "iridescent scales",
    "green scales",
    "flaky skin",
    "smooth skin",
    "skin as hard as steel",
    "a giant, protruding jaw",
    "a sloped forehead",
    "exterior lungs",
    "genitalia on their head",
    "noses on their bottom",
    "a keen sense of smell",
    "hairy eyeballs",
    "transparent eyelids, so they can see predators while blinking",
    "360-degree vision",
    "heads that can rotate 350 degrees",
    "thick necks",
    "incredible thin necks",
    "incredible thin arms",
    "weak elbows",
    "weak legs",
    "weak arms",
    "incredible upper-body strength",
    "incredibly strong bones",
    "incredibly strong bones, sometimes these are used as a building material",
    "detachable limbs",
    "a detachable tail",
];


var they = [
    "only live 3 years",
    "live for over 100 years",
    "live for over 2000 years",
    "eat their own babies",
    "live in caves, deep under the planet's surface",
    "live in wooden huts",
    "secrete an oily mucus that keeps their skin from drying out",
    "mate for life",
    "punish political prisoners by removing their vocal chords",
    "are governed by a monarchy",
    "are governed by a religious hierarchy",
    "are governed by a religious hierarchy",
    "each have a unique superpower",
    "have been made infertile due to high levels of pollution, & will soon become extinct",
    "are governed by a council of scientists",
    "are ruled by a facist dictator",
    "are ruled by a bald facist dictator",
    "are ruled by a dictator with strange hair",
    "are ruled by another species",
    "live in a communist society",
    "live peacefully with nature",
    "fight among other warring factions",
    "kill each other for sport",
    "never stop growing",
    "are so light, they float above the ground",
    "only live for 20 days",
    "only live for 60 days",
    "only live long enough to reproduce",
    "secrete poisonous toxins",
    "secrete a sweet smell to attract a mate",
    "build nests made from hair to attract a mate",
    "periodically hunt & eat type of smaller creature on their planet",
    "only eat once a year, & sleep for 10 days after eating",
    "only eat twice a year",
    "have to eat every 40 minutes, or they'll starve & die",
    "have to drink every 30 minutes, or they'll die",
    "consider eating in public to be impolite",
    "live in herds",
    "live in small herds called 'pods'",
    "live in small herds called 'gobs'",
    "all live a giant tower",
    "live alone",
    "are mostly nomadic",
    "live in metal houses",
    "live in floating houses",
    "live on floating rafts",
    "live in wooden houses",
    "can naturally create pearls, which they trade with offworlders",
    "breathe methane",
    "love biscuits",
    "love eating fish",
    "love eating peanuts",
    "love coffee",
    "love bathing in coffee",
    "love bathing in chocolate",
    "love drinking tea made from ground bones",
    "love playing tricks on their family",
    "eat only one type of fruit that lives nearby",
    "eat insects",
    "eat small mammals",
    "farm & eat small avians",
    "disintegrate if injured",
    "have no anus, & never defecate",
    "have 4 anusses",
    "have 2 mouths",
    "reproduce asexually",
    "easily burn in sunlight",
    "cannot survive in oxygen-rich atmospheres",
    "have a society & culture very similar to the ancient Vikings from Earth",
    "have no homeworld, & attack spaceships throughout the galaxy",
    "don't require an atmosphere to breathe, & can survive in the vacuum of space",
    "can bite through the hull of a spaceship",
    "can eat a motor vehicle in one mouthful",
    "can drink acid, but only for a bet",
    "all mostly live on islands of one lake that covers 4/5 of their planet's surface",
    "live in swampy bogs",
    "live in dry holes",
    "live on damp sponges",
    "live in hammocks attached to a tall rock-face",
    "believe that only money can buy them a place in the afterlife",
    "believe that only kindness can get them a place in the afterlife",
    "believe that inflicting pain on others is the only way to defer old age",
    "feel no pain",
    "are extremely sensitive to pain",
    "are extremely ticklish",
    "express their emotions through the excretion of variously colored bodily fluids",
    "wear chainmail & use crystalline weapons",
    "wear armour made of hardened saliva",
    "wear clothes made of hair",
    "don't wear clothes",
    "don't wear clothes on leap years",
    "only wear clothes in winter",
    "wear iron chainmail & use primitive weapons",
    "wear leather made from the skins of their enemies, & use carved clubs as weapons",
    "have a sticky tongue which can be projected to catch prey",
    "smell like potassium",
    "can lose up to a quarter of their body weight when they defecate",
    "mostly live on moons around populated planets",
    "travel the galaxy by hitchiking",
    "love to gamble",
    "are excellent at all sports",
    "love to play games",
    "are obsessed with gadgetry",
    "produce silk from glands in their abdomens",
    "change colour when angry",
    "are extremely hostile towards all species but their own",
];

//-- new sentence - about society, etc
var quirk = [
    "When their home-world was destroyed by a supernova over a hundred years ago, they conquered a nearby planet & made it their home, enslaving the native population.",
    "Sex is extremely important in their society, & is used as a form of social ranking. Highly successful individuals who are deemed to contribute more to society are permitted to have multiple spouses, while ordinary citizens are only permitted to have one. Taking more sexual partners than your social rank permits is a criminal offense & is punishable by castration. Those who are unable to find a sexual partner are given government support, therapy, &amp; disability benefits.",
    "Sex is extremely important in their society, & is used as a form of social ranking.",
    "Once an individual has left their home-world, they never permitted to return due to fear of contamination.",
    "Their claws are strong enough to open a can of peaches. They love canned peaches.",
    "Their claws are strong enough to tear through steel.",
    "Their jaws are strong enough to bite through steel.",
    "They have an opposable thumb.",
    "They don't have control over their limbs, so use telekinesis to move items.",
    "Technologically behind, this species is slow, dimwitted & lacks a lot of natural social grace.",
    "Often, they are made slaves by other species.",
    "For some unknown reason, they find death to be outrageously funny. Perhaps it is a coping mechanism.",
    "A social taboo forbids them to speak directly with members of other species.",
    "A social taboo forbids them to speak directly with members of the opposite sex.",
    "A social taboo forbids them to show their faces in public.",
    "They shed their skin once a year.",
    "They shed their skin once a month.",
    "They drink a wine fermented from their own droppings. The drink is a powerful intoxicant. While originally used for ceremonial purposes, it has since become a popular recreational drug",
    "They live in a utopia & utilize a primitive form of light technology.",
    "Their warriors follow a very honorable code, like that of a disciplined samurai or knight.",
    "They have no form of government.",
    "They have never invented religion.",
    "They have never invented sausages.",
    "They have never invented sandwiches.",
    "They have only recently invented the burrito.",
    "The most rich members of society ritually go on a pilgrimage to a waterfall in the mountains whenever there is an eclipse",
    "The oldest members of the society are ritually slaughtered & fed to the young.",
    "The oldest members of the society are sent to die in the wilderness.",
    "The society is ruled by a council of eldars.",
    "The society is ruled by a council of businessmen.",
    "The society is ruled by the military.",
    "The majority live in treehouses in the forest.",
    "They have three genders.",
    "They have three genders. It takes all three to create an offspring.",
    "The majority live in trees.",
    "The majority live underground.",
    "The majority live in caverns, deep below the planet's crust.",
    "The majority live near lava pools for warmth.",
    "They drink from the same pool they defecate into.",
    "They drink from an ancient pool which is thought to extend their life.",
    "They ritually bathe in a ceremonial lake that has become so polluted that it kills 200 people a day.",
    "Their government believes that all members of society should be equal, & they actively redistribute wealth from the rich to the poor.",
    "Their species has been around for over a millennia, & has established a multi-star empire.",
    "They have driven every other species on their planet to extinction.",
    "They have driven almost every insect species on their planet to extinction, causing an ecological catastrophy.",
    "They recently had a revolution where the richest members of society were killed, & the wealth was redistributed.",
    "They can heal twice as fast as a Human",
    "Naturally-occurring algae under their skin allows them to photosynthesize sunlight.",
    "Chlorophyll in their skin allows them to photosynthesize sunlight.",
    "When sleeping, they create a cocoon, which they eat the next day.",
    "To breed, they need to lay their eggs in the corpse of another creature.",
    "They lay eggs on a beach, & abandon them, so never know who their offspring is.",
    "When breeding, the male normally doesn't survive.",
    "Only half survive into adulthood.",
    "Only a tenth of children survive into adulthood.",
    "They live in herds.",
    "They hunt in packs.",
    "They hunt for sport, despite eating a vegan diet.",
    "They are vegans, except for 1 day a month.",
    "They make cheese from the mothers milk. This fetches a high price in interstellar markets.",
    "They live in packs, & have a social hierarchy like a pack of wolves.",
    "They live in wooden huts.",
    "They often mate for life.",
    "They mostly mate for life.",
    "They spawn young every 20 days.",
    "They spend most of their free time gardening.",
    "The majority live in transparent towers made from crystal.",
    "When fully grown, an individual has to move away from the herd to find more food.",
    "When fully grown, an individual is encouraged to travel & learn more about the other cultures on the planet.",
    "When an individual reaches a certain age, they plant themselves in fertile ground & remain there for the rest of their life.",
    "They are extremely resilient, but have one weakness that luckily nobody has found yet.",
    "They are extremely tolerant of cold weather, but will melt in the heat.",
    "They turn into spirits when they die, & can continue to communicate with the living.",
    "They build large monoliths, but nobody knows why.",
    "They have a symbiotic relationship with a parasitic life-form, without which they are unable to breed. There are only a small number of these parasites, & they are allocated by a government body.",
    "Females of this species often live twice as long as the males.",
    "Males of this species often live twice as long as the females, unless killed in combat.",
    "They sleep upside down like a bat.",
    "They have invented technology that they would now be useless without.",
    "Culturally, they are divided into clans. Each clan is run by a married couple.",
    "They reproduce only once in their lives & seek to destroy all life in the universe.",
    "The whole entire planet is under one planetary rule by a fair royal family. They have special soldiers known only as Guardians - the most powerful people in the universe.",
    "They are governed by a council of elders which makes important decisions based on a game of chance.",
    "They evolved in a different galaxy.",
    "The atmosphere of their planet has become toxic due to centuries of war & pollution. The rich now live inside large bio-domes, safe from the deadly effects of breathing the atmosphere, while the poor are forced to live outside",
    "There is a huge divide between the rich & the poor.",
    "Their currency is the bones of their ancestors.",
    "They use shiny stones for currency.",
    "They use leaves for currency. Inflation is astronomical in autumn.",
    "They use contactless payments.",
    "They still use chip & pin payments.",
    "They invented the credit card before they invented the wheel.",
    "They never invented the wheel.",
    "Their language consists mostly of swearwords.",
    "They keep rocks as pets.",
    "They eat rodents.",
    "They are ruled by an emotionally-unstable King.",
    "They are ruled by a gentle Queen.",
    "They are ruled by a kind, supportive King.",
    "They are ruled by a democratically-elected leader.",
    "They are symbolically ruled by a democratically-elected fruit.",
    "When reaching adulthood, the males have to spend time surviving in the desert.",
    "A mother will give birth into another creature's nest, so that she doesn't have to take care of it.",
    "A mother abandons her offspring just after birth. It will be raised by the father.",
    "Their mating rituals are long & arduous.",
    "They recycle everything & produce no waste.",
    "They live in houses made from recycled waste.",
    "They live in mud huts.",
    "Their favourite food is difficult to produce.",
    "Their religion demands daily sacrifices.",
    "Their culture demands they should die in battle.",
    "Their religion requires scented candles to be burned.",
    "Their education system doesn't teach the atrocities of their past.",
    "Their education system teaches that they're superior to all other lifeforms.",
    "They believe themselves superior to all other lifeforms.",
    "They are natural actors & their homeworld has a thriving movie industry.",
    "They are natural thespians.",
    "Their culture is based around a barter system.",
    "Their currency is personal favours.",
    "Their currency is based around sexual favours.",
    "Their only currency is gold.",
    "Their only currency is temporal crystals.",
    "Their main philosophy is to be kind to each other.",
    "Their main philosophy is to accumulate as much wealth as possible.",
    "Their homeworld is rich with gold, which they use to build houses.",
    "Their homeworld is rich with copper, which they use to build housing & clothes.",
    "The main continent on their homeworld is rich with silver, which they use to build hospitals.",
    "Weak members of their society are thought to be unholy, & are killed.",
    "Babies born in the third month of the year are thought to be evil & are sent to a prison camp.",
    "Babies born in the winter are burned as fuel.",
    "Old members of their society are often burned as fuel.",
    "Old members of their society are cherished.",
    "When they die, they turn to stone.",
    "They can't live without robot helpers.",
    "They can't live without their slaves.",
    "They have an extremely low-tech civilization and do not build their own starships, but they have been known to hitchhike on alien trading vessels.",
    "The entire species is addicted to a plant pollon that is common on their world. The microscopic pollen is carried on the wind and reaches every island and continent.",
    "They naturally produce a chemical that can be used to cure many different illnesses. Because of this, many members of their species have been captured by another race and used for medical experiments.",
    "They have latent telepathic abilities and live in the thick atmosphere of a carbon dioxide rich gas giant.",
    "As a mating ritual, they give the disembodied head of their enemy as a gift to their mate.",
    "There is nothing they value higher than tupperware.",
    "Their society is organized into several religious factions, each ruled by either a high priestess or a council of religious elders. Some religious groups actively promote the ritual killing of other life forms.",
    "They prefer not to leave their home-world and use holographic representations of themselves to explore the galaxy instead.",
    "They believe in an all-knowing creator god called Essaran and are obsessed with spreading the word of their religion to members of other alien races.",
    "They evolved to find shelter in the discarded shells of other creatures, much like a hermit crab. In their modern, industrialized society, they manufacture high-tech, personalized shells equipped with a variety of computerized gadgets.",
    "Their tails continue growing throughout their entire lives, and the length of an individual’s tail can be a good indicator of age.",
    "Their government routinely assassinates members of society that are deemed to be dangerous to the safety of others. It is seen as their responsibility to do so.",
    "These time-travelers originate in the distant future. When their home-world was destroyed by a natural disaster, they traveled millions of years back in time to found a new empire in the here & now. Having long ago mastered the intricacies of time-travel, they now sell the ability to alter history to other species. The price for this service is extremely high, & they of course make sure that any changes will not adversely affect their own history.",
    "Their culture is highly competitive and places a great deal of emphasis on competitive sports and games. Most individuals play some form of sport, whether it is a physical game or an intellectual game. Contact sports are extremely popular, as are games of strategy. Their leaders are selected by way of a sporting tournament. In order to win a position in the government, players must prove themselves in a variety of different sports, including both physical and mental challenges..",
];

var summary = [
    "are not known to be harmful to Humans",
    "are not known to be harmful to Humans",
    "are not known to be dangerous to Humans",
    "are not known to be dangerous to visitors",
    "are tolerant of Humans",
    "are incredibly argumentative",
    "have never encountered a Human",
    "have never left their planet",
    "are thought to be extinct",
    "are mostly harmless",
    "are mostly harmless",
    "are mostly harmless",
    "are harmless",
    "are allergic to water",
    "are vicious when cornered",
    "can be vicious when startled",
    "are poisonous when eaten by Humans",
    "die when breeding",
    "explode if stabbed",
    "only live 3 years",
    "only live for a single rotation of their planet",
    "only live one season",
    "hibernate over their planet's long winter",
    "eat their own faeces",
    "eat their own babies",
    "are the most deadly creature on their planet",
    "are considered extremely dangerous",
    "are considered extremely dangerous",
    "are considered dangerous to pets",
    "are extremely dangerous",
    "are extremely dangerous",
    "don’t pose a threat",
    "only pose a mild threat",
    "are dangerous if touched",
    "live in caves, deep under the planet's surface",
    "are extremely tasty, & are considered a delicacy across the quadrant",
    "invented spaghetti a thousand years before Humans",
    "visited Earth 300 years ago but regarded it as 'unworthy of note'",
    "are friendly to Humans",
    "are kept as pets for more advanced lifeforms",
    "can smell blood, & are extremely attracted to it",
    "are attracted to Human blood",
    "are absolute lunatics",
    "are incredibly stupid",
    "cannot fend for themselves in the wild",
    "can run move faster than light",
    "are reasonably good at tennis",
    "are reasonably good at operating heavy machinery, & this has become their major talent",
    "smell like sulphur",
    "smell like strawberries",
    "taste like chicken",
    "are almost extinct",
    "went extinct over 100 years ago, but their memory lives on in wooden carvings",
    "became extinct over 100 years ago, but their civilisation can be viewed using virtual realty simulations",
    "evolved into beings of pure energy over 10 years ago, leaving their towns & cities empty",
    "are very welcoming to tourists & want to encourage more people to visit them",
    "are very gentle creatures",
    "are very thoughtful creatures that enjoy conversation",
    "are in danger of extinction & in need of conservation",
    "are thriving",
    "need a new planet, as theirs is in danger",
    "are trying to evacuate their planet, as it's falling into a black hole",
    "have just discovered space travel",
    "have just invented spacecraft capable of FTL travel",
    "have just invented guns",
    "have just invented a new controversial religion",
    "have just invented the combustion engine",
    "never invented the combustion engine",
    "are very keen to trade with offworlders",
    "are very keen to understand space travel",
    "are quickly destroying their habitat & need to expand to a new planet",
    "can only survive on planets in a binary-star system",
    "are to be avoided, as currently there is a plague on their homeworld",
    "are to be avoided at all costs",
    "are a peaceful civilization, dedicated to creative & leisure pursuits, such as art, music, dance & topiary. They have advanced scientific knowledge & an evolved sense of morality"
];






newAlienSpeciesDescription = function(){

    var final = "";
    var they2Chance = Math.floor(Math.random() * 100);
    var quirkChance = Math.floor(Math.random() * 100);
    var typeChance = Math.floor(Math.random() * 100);
    var summaryChance = Math.floor(Math.random() * 100);
    var randomStart = start[Math.floor(Math.random() * start.length)];
    var randomTypeOfSpecies = typeOfSpecies[Math.floor(Math.random() * typeOfSpecies.length)];
    var randomSkills = skills[Math.floor(Math.random() * skills.length)];
    var randomAdjectives = adjectives[Math.floor(Math.random() * adjectives.length)];
    var randomThey = they[Math.floor(Math.random() * they.length)];
    var randomQuirk = quirk[Math.floor(Math.random() * quirk.length)];
    var randomSummary = summary[Math.floor(Math.random() * summary.length)];

    if(typeChance < 25){

        final = randomStart + " " + randomAdjectives + " " + randomTypeOfSpecies + " with " + randomSkills;
    } else if (typeChance <= 25 && typeChance < 50 ){
        final = randomStart + " " + randomTypeOfSpecies + " with " + randomSkills;
    } else if (typeChance <= 50 && typeChance < 75 ){
        final = randomAdjectives + " " + randomTypeOfSpecies + " who " + randomThey;
    } else {
        final = randomAdjectives + " " + randomTypeOfSpecies + " who have " + randomSkills;
    }

    if(they2Chance < 50){
        var randomThey2 = they[Math.floor(Math.random() * they.length)];
        final = final + ". They " + randomThey2;
    }

    final = final.substr(0,1).toUpperCase() + final.substr(1) + ".";

    if(quirkChance < 70){
        final = final + " " + randomQuirk;
    } else if (quirkChance >= 70 && quirkChance < 80) {
        final = final + " " + randomQuirk;

        var randomQuirk = quirk[Math.floor(Math.random() * quirk.length)];
        final = final + " " + randomQuirk;
    }

    if(summaryChance < 50){
        final = final + " They " + randomSummary + ".";
    }

    return final;
}

generateNew = function(){
    $(".alien-species-description").each(function(){

        $(this).html("");

        $(this).prepend(newAlienSpeciesDescription());

    });
}

generateNew();



