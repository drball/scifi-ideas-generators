var output = $("#generated-names");
var num = 20;

//--description
var word1 = [
    "Artificial",
    "Autonomous",
    "Automated",
    "Deadly",
    "Crushing",
    "Global",
    "Primitive",
    "Unified",
    "Networked",
    "Disconnected",
    "Galactic",
    "Bionic",
    "Dead",
    "Deadly",
    "Missing",
    "Zodiac",
    "Shadows",
    "Obsidian",
    "Sinking",
    "Space",
    "Red",
    "Unusual",
    "Blue",
    "Facist",
    "Dark",
    "Light",
    "Grey",
    "Orwellian",
    "Rising",
    "Bringing",
    "Raising",
    "Silent",
    "Solar",
    "Silencing",
    "Destroying",
    "Grim",
    "Dark",
    "Operation",
    "Walking",
    "Smoking",
    "Puzzle",
    "Noble",
    "Furry",
];

//--singular noun
var single = [
    "Alien",
    "Monster",
    "City",
    "Creature",
    "Town",
    "Galaxy",
    "Dragon",
    "Vortex",
    "Bone",
    "Laser",
    "Battle",
    "Massacre",
    "Invasion",
    "Blade",
    "Knight",
    "Light",
    "Dark",
    "Trooper",
    "Rebel",
    "Runner",
    "Dwarf",
    "Start",
    "Son",
    "Sun",
    "Snake",
    "Planet",
    "Moon",
    "Nebula",
    "Comet",
    "Sausage",
    "Spaceship",
    "Starship",
    "Dinosaur",
    "Sandwich",
    "Saturn",
    "Nebula",
    "Jupiter",
    "Mars",
    "Titan",
    "Pluto",
    "Dead Earth",
    "Burrito",
    "Chef",
    "Jetpack",
    "Moonman",
    "Rocket",
    "Atlas",
    "Zion",
    "Ham",
    "Cheese",
    "Omega",
    "Alpha",
    "Failing",
    "Science",
    "Theory",
    "Portal",
    "Game",
    "Clash",
    "Kingdom",
    "Vampire",
    "Kart",
    "Racing",
    "Beast",
    "Fort",
    "Castle",
    "Card",
    "Sword",
    "Lance",
    "Gun",
    "Rifle",
    "Fox",
    "Goat",
    "Llama",
    "Toad",
    "Bear",
    "Squirrel",
    "Battlefield",
    "Pizza",
    "Man",
    "Train",
    "Car",
    "Express",
];

//--a plural noun
var word2Plural = [
    "Biscuits",
    "Cities",
    "Towns",
    "Dust",
    "Galaxies",
    "Vortex",
    "Bones",
    "Lasers",
    "Battles",
    "Massacres",
    "Invasions",
    "Honour",
    "Honor",
    "Dignity",
    "Nobility",
    "Hope",
    "Glory",
    "Runners",
    "Speeders",
    "Knights",
    "Rebels",
    "Moons",
    "Asteroids",
    "Darkness",
    "Command",
    "Sabers",
    "Gunfights",
    "Battles",
    "Plague",
    "Rockets",
    "Spaceships",
    "Beams",
    "Streams",
    "Theories",
    "Thrones",
    "Kingdoms",
    "Portals",
    "Flags",
    "Rivers",
    "Islands",
    "Seas",
    "Zombies",
    "Vampires",
    "Alphas",
    "Duty",
    "Karts",
    "Monsters",
    "Animals",
    "Kings",
    "Queens",
    "Warriors",
    "Rifles",
    "Dragons",
    "Vikings",
    "Pirates",
    "Ninjas",
    "Ogres",
    "Squirrels",
    "Motors",
];

//-singular concept
var word2Concept = [
    "Crossing",
    "Flight",
    "Runner",
    "Fandango",
    "Dawn",
    "Night",
    "Knight",
    "Cleaning",
    "Destruction",
    "Ops",
    "Walks",
    "Escape",
    "Highway",
    "Gunfire",
    "Armour",
    "Eights",
    "Hearts",
    "Craft",
    "Dance",
    "Puzzle",
    "Troops",
    "Legends",
    "Murder",
    "Fury",
    "Encounter",
    "Hazard",
];

var start = [
    "Asteroid of",
    "Isle of",
    "Island of",
    "Comet",
    "The planet of",
    "Planet of",
    "Nebula of",
    "Galaxy of",
    "Planet of the",
    "Story of",
    "The Mystery of",
    "The Secret of",
    "The End of",
    "The Death of",
    "Visiting",
    "Escaping",
    "Surviving",
    "Exploring",
    "Maps of",
    "Journey to",
    "Call of",
    "Clash of",
    "Mission for",
    "Fortress of",
    "Escape the",
    "Super",
    "Return of the",
    "Battle of",
    "Fight the",
    "Flight of",
]


generateNew = function () {
    output.html("");

    for (i = 0; i <= num; i++) {

        var final = "";
        var typeChance = Math.floor(Math.random() * 100);
        var randomWord1 = word1[Math.floor(Math.random() * word1.length)];
        var randomSingle = single[Math.floor(Math.random() * single.length)];
        var randomWord2Plural = word2Plural[Math.floor(Math.random() * word2Plural.length)];
        var randomWord2Concept = word2Concept[Math.floor(Math.random() * word2Concept.length)];
        var randomStart = start[Math.floor(Math.random() * start.length)];

        //--get planet name parts from the planet name generator
        var randomPart1 = part1[Math.floor(Math.random() * part1.length)];
        var randomPart2 = part2[Math.floor(Math.random() * part2.length)];

        if (typeChance <= 20){
            final = randomWord1 + " " + randomSingle;
        } else if(typeChance > 20 && typeChance <= 30) {
            final = randomSingle + " of " + randomWord2Plural;
        } else if(typeChance > 30 && typeChance <= 40) {
            console.log("sdafas");
            final = randomPart1 + randomPart2 + " " + randomWord2Concept;
        } else if(typeChance > 40 && typeChance <= 60) {
            final = randomSingle + " " + randomWord2Plural;
        } else if(typeChance > 60 && typeChance <= 70) {
            final = randomSingle + " " + randomWord2Concept;
        } else if(typeChance > 70 && typeChance <= 80) {
            final = randomStart + " " + randomWord2Plural;
        } else {
            final = randomStart + " " + randomPart1 + randomPart2;
        }

        output.prepend("<p>"+final+"</p>");
    }

}

generateNew();