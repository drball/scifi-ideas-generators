


function yourLocation(){
    var options = [
        "your favourite coffee shop",
        "your local pub",
        "your local shop",
        "your favourite bar",
        "your favourite tavern",
        "your favourite restaurant",
        "your home",
        "your town",
        "your city",
        "your planet",
        "your country",
        "your region",
        "an island you're visiting",
        "the town where your parents live",
        "the town you're visiting",
        "the city you're visiting",
        "the country you're visiting",
        "a planet you're visiting",

    ];
    return options[Math.floor(Math.random() * options.length)];
}

function enemiesResolution(){
    var options = [
        "fight back",
        "defeat them",
        "escape",
        "find a way to get rid of them",
        "kill them all",
        "find their weakness & use it against them",


    ];
    return options[Math.floor(Math.random() * options.length)];
}

function locationToVisit(){
    var options = [
        "a lava planet",
        "a dyson-sphere",
        "a planet where it rains acid",
        "a nebula",
        "a spacestation",
        "a derelict spaceship",
        "a virtual reality simulation",
        "a parallel universe",
        "the upper atmosphere of a gas giant",
        "the rings of Saturn",
        "an abandoned moon",
        "the jungle",
        "the jungle of an alien planet",
        "the swamp of a tropical world",
        "a swamp",
        "a desert",
        "a cave",
        "a furniture shop",
        "a restaurant",
        "a coffee shop",
        "a zoo",
        "a Dinosaur zoo",
        "Mars",
        "Neptune",
        "Pluto",
        "deep space",
        "an alien planet called "+planetName(),
        "a planet called "+planetName(),
        "a bizarre world called "+planetName(),
        "a dimension called "+planetName(),
        "a fantasy world called "+planetName(),
        "a space station orbiting a planet called "+planetName(),
        "a space station orbiting Jupiter",
        "a space station orbiting a distant star",
        "Jupiter's largest moon",
        "a distant city",
        "New York",
        "Los Angeles",
        "the desert",
        "the jungle",
        "a volcano",
        "the north pole",
        "the south pole",
        "Africa",
        "Iran",
        "Iraq",
        "Canada",
        "Europe",
        "Russia",
        "Australia",
        "Madagascar",
        "Kenya",
        "an uninhabited island",
        "a mysterious cave",
        "an underwater cave",
        "an underwater shipwreck",
        "a deserted prison",
        "a factory",
        "an empty warehouse",
        "a castle",
        "Atlantis",
        "The Moon",

    ];
    return options[Math.floor(Math.random() * options.length)];
}

function basicBaddies(){

    //--to be prefixed by "alien ..."
    var options = [
        "frogs",
        "toads",
        "trolls",
        "monsters",
        "snails",
        "slugs",
        "spiders",
        "otters",
        "worms",
        "snakes",
        "dinosaurs",
        "rabbits",
        "insects",
        "Nazis",
        "sharks",
        "hamsters",
        "wolves",
        "scorpions",

    ];
    return options[Math.floor(Math.random() * options.length)];
}

function baddies(){
    var options = [
        "aliens",
        "aliens from the planet "+planetName(),
        "alien creatures",
        "alien monsters",
        "alien spiders",
        "radicals",
        "extremists",
        "trolls",
        "tigers",
        "panthers",
        "giant rats",
        "terrorists",
        "terrorists from the planet "+planetName(),
        "monsters",
        "spiders",
        "bats",
        "mosquitos",
        "angry apes",
        "angry monkeys",
        "sewer rats",
        "snakes",
        "dinosaurs",
        "vikings",
        "an enemy army",
        "monsters from the planet "+planetName(),
        "monsters from a dimension called "+planetName(),
        "an army from a dimension called "+planetName(),
        "winged monsters",
        "invisible monsters",
        "ice monsters",
        "zombies",
        "zombies that can run",
        "fire monsters",
        "Puritans",
        "anarchists",
        "genetically-modified monsters",
        "cats",
        "body snatchers",
        "aliens how look like Humans",
        "ghosts",
        "evil spirits",
        "robots",
        "enemies",
        "Nazis",
        "Ancient Egyptians",
        "scorpions",
        "giant worms",
        "mind-control slugs",
        "alien " + basicBaddies(),
        "space " + basicBaddies(),
        "robot " + basicBaddies(),
        "ghost " + basicBaddies(),
        "giant " + basicBaddies(),

    ];
    return options[Math.floor(Math.random() * options.length)];
}




function thingToDeliver(){
    var options = [

        "a lost pet",
        "money",
        "a new computer",
        "a new gadget",
        "a powerful object",
        "a mysterious alien artifact",
        "a mysterious ancient artifact",
        "an ancient artifact",
        "an ancient weapon",
        "an alien weapon",
        "some medicine",
        "important medicine",
        "something valuable",
        "some components",
        "fresh water",
        "food",
        "something rare",
        "a weapon",
        "payment",
        "gold",
        "gems",
        "a shipment of rare materials",
        "a shipment of valuable crystals",
        "a container of valuable materials",
        "a container of chemicals",
        "a vial of chemicals",
        "a box of fresh fish",
        "a crate of beer",
        "a rare box of strawberries",
        "a rare pet",
        "supplies",
        "some supplies",
        "something to help them",
        "something they need",
        "some weapons to keep them safe",
        "some weapons for protection",
        "some weapons to help them fight the "+baddies(),
        "something that can help them defeat the "+baddies(),
        "the ingredients for an antidote",
        "the raw ingredients to create a medicine",
        "an Amazon parcel",
        "a television",
        "an elixir",
        "alien technology",
        "alien weapons",
        "a guide on defeating "+baddies(),
    ]

    return options[Math.floor(Math.random() * options.length)];
}

function vip(){
    var options = [

        "your parents",
        "your mum",
        "your dad",
        "your brother",
        "your sister",
        "a dying man",
        "a dying woman",
        "a dying pet",
        "a doctor",
        "an engineer",
        "a scientist",
        "a sick patient",
        "a pregnant woman",
        "a pregnant woman about to give birth",
        "someone who can help you",
        "your boss",
        "your mentor",
        "your teacher",
        "a friend",
        "an important person",
        "an important leader",
        "an important figure",
        "an important celebrity",
        "a warrior",
        "the President",
        "the Prime Minister",
        "the Queen",
        "the King",
    ]

    return options[Math.floor(Math.random() * options.length)];
}


generateIdea = function(){
    var final = "";

    var type = Math.floor(Math.random() * 11); //--num should be 1 greater than the amount of switch

    switch (type) {
        case 0:
            final =  yourLocation() + " gets invaded by " + baddies() + ", you must " + enemiesResolution() + ".";
            break;

        case 1:
            final =  yourLocation() + " gets taken over by " + baddies() + ", you must " + enemiesResolution() + ".";
            break;

        case 2:
            final =  "You must go on a journey to visit " + vip() + " and take them " + thingToDeliver() + ".";
            break;

        case 3:
            final =  vip() + " is sick & needs you to help them by finding " + thingToDeliver() + ".";
            break;

        case 4:
            final =  "You need to rescue " + vip() + " from " + baddies() + ".";
            break;

        case 5:
            final =  "You need to visit " + locationToVisit() + " to collect " + thingToDeliver() + ".";
            break;

        case 6:
            final =  "You need to visit " + locationToVisit() + " to deliver a message. On the way, you encounter " + baddies() + ".";
            break;

        case 7:
            final =  "You wake up on a planet called " + planetName() + " & have no idea why you're there. You're surrounded by "+ baddies() + ".";
            break;

        case 8:
            final =  "You're far from home & need to fight some "+ baddies() + ".";
            break;

        case 9:
            final =  baddies() + " have caused havoc in " + yourLocation() + ", you must chase them & bring them to justice.";
            break;

        case 10:
            final =  baddies() + " have kidnapped " + vip() + ", & will only release them if you help them bring them something important from " + locationToVisit() + ".";
            break;

        case 11:
            final =  "You accidentally travel to " + locationToVisit() + ".";
            break;
    }

    final = final.substr(0,1).toUpperCase() + final.substr(1);

    return final;
}

generateAll = function () {
    $(".story-idea").each(function(){

        $(this).html("");

        $(this).prepend(generateIdea());

    });

}

$(document).ready(function() {
    generateAll();
});



