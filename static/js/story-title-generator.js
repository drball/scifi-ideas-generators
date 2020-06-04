var output = $("#generated-names");
var num = 30;

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
];

//--singular noun
var single = [
    "Alien",
    "Monster",
    "City",
    "Creature",
    "Town",
    "Galaxy",
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
    "Dwarfstar",
    "Start",
    "Son",
    "Sun",
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
    "Old Earth",
    "Dead Earth",
    "Planet X",
    "Hubble",
    "Mir",
    "ISS",
    "Burrito",
    "Jetpack",
    "Moonman",
    "Rocket",
    "Atlas",
    "Zion",
    "Omega",
    "Alpha",
    "Failing",
    "Science",
    "Theory",
    "Portal",
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
    "Spacebattles",
    "Plague",
    "Rockets",
    "Spaceships",
    "Beams",
    "Streams",
    "Theories",
    "Portals",
    "Flags",
    "Rivers",
    "Seas",
];

var start = [
    "Asteroid of",
    "Comet",
    "The planet of",
    "Planet of",
    "Nebula of",
    "Galaxy of",
    "Planet of the",
    "Story of",
    "The Mystery of",
    "The Alien from",
    "The Man from",
    "The Man who went to",
    "The Woman who went to",
    "The Woman from",
    "The Oracle of",
    "The Oracle of",
    "The Circle of",
    "The End of",
    "The Death of",
    "Visiting",
    "Escaping",
    "A Fantastic",
    "A Trip to",
    "Surviving",
    "Waking up on",
    "Hungover on",
    "Exploring",
    "A pocket guide to",
    "Maps of",
]


generateNew = function () {
    output.html("");

    for (i = 0; i <= num; i++) {

        var final = "";
        var typeChance = Math.floor(Math.random() * 100);
        var randomWord1 = word1[Math.floor(Math.random() * word1.length)];
        var randomSingle = single[Math.floor(Math.random() * single.length)];
        var randomWord2Plural = word2Plural[Math.floor(Math.random() * word2Plural.length)];

        if (typeChance <= 35){
            final = randomWord1 + " " + randomSingle;
        } else if(typeChance > 35 && typeChance <= 65) {
            final = randomSingle + " of " + randomWord2Plural;
        } else if(typeChance > 65 && typeChance <= 75) {
            var number = Math.floor(Math.random() * 4000) + 2000;
            final = number + ": " + randomSingle + " " + randomWord2Plural;
        } else {
            //--get planet name parts from the planet name generator
            var randomPart1 = part1[Math.floor(Math.random() * part1.length)];
            var randomPart2 = part2[Math.floor(Math.random() * part2.length)];
            var randomStart = start[Math.floor(Math.random() * start.length)];
            final = randomStart + " " + randomPart1 + randomPart2;
        }

        output.prepend("<p>"+final+"</p>");
    }

}

generateNew();