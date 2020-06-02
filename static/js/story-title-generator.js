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
];

//--singular noun
var single = [
    "City",
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
];

//--a plural noun
var word2Plural = [
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
    "Glory",
    "Saturn",
    "Nebula",
    "Jupiter",
    "Mars",
    "Pluto",
    "Old Earth",
    "Dead Earth",
    "Planet X",
    "Hubble",
    "Mir",
    "ISS",
    "Runners",
    "Speeders",
    "Knights",
    "Rebels"
];


generateNew = function () {
    output.html("");

    for (i = 0; i <= num; i++) {

        var final = "";
        var typeChance = Math.floor(Math.random() * 100);
        var randomWord1 = word1[Math.floor(Math.random() * word1.length)];
        var randomSingle = single[Math.floor(Math.random() * single.length)];
        var randomWord2Plural = word2Plural[Math.floor(Math.random() * word2Plural.length)];

        if (typeChance <= 50){
            final = randomWord1 + " " + randomSingle;
        } else if(typeChance > 50 && typeChance <= 100) {
            final = randomSingle + " of " + randomWord2Plural;
        } else {

        }

        output.prepend("<p>"+final+"</p>");
    }

}

generateNew();