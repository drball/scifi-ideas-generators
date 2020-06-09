
function raceFirst(){
    var options = [
        "Pro",
        "Galactic",
        "International",
        "Lunar",
        "Thunder",
        "Lightning",
        "Volcano",
        "Nocturnal",
        "Formula X",
        "Formula XL",
        "Formula XXL",
        "Full Throttle",
        "Advanced",
        "Prime",
        "Diamond",
        "Platinum",
        "Mars",
        "Venus",
        "Mercury",
        "Earth",
        "Saturn",
        "Outlaw",
        "Premium",
        "Ultra",
        "Mega",
        "Rocketgeddon",
        "Electrogeddon",
        "All-Electric",
        "Full Voltage",
        "Super",
        "Über",
        "Far-out",
        "Excessive",
        "Excessively-violent",
        "Deadly",
        "Extreme",
        "Radical",
        "Great",
        "Hot",
        "Millennium",
        "Rebel",
        "Illegal",
        planetName() + " Coast",
        planetName() + " Beach",
        planetName() + " Volcano",
        planetName() + " Sector",
        planetName() + " Harbour",
        planetName() + " Track",
        planetName() + " Passage",
        planetName() + " Run",
        planetName() + " Pass",
        planetName() + " Beach",
        planetName() + " Plains",
        planetName() + " Mountain",
        planetName(),
        planetName(),
    ];

    return options[Math.floor(Math.random() * options.length)];
}

function raceType(){
    var options = [
        "Karting",
        "Drag Racing",
        "Junior",
        "Racing",
        "Rocket Racing",
        "Jetpack",
        "Touring",
        "Rocket",
        "Rocket Run",
        "Kessel Run",
        "Velocity",
        "Warp",
        "Transwarp",
        "Ultrawarp",
        "Wormhole",
        "Hyperspace",
        "Run",
        "Bionic",
        "Subatomic",
        "Spinner",
        "Fury Road",
        "Thunderdome",
        "Chunderdome",
        "Outlaw",
        "Supercross",
        "Supercar",
        "Super-Rocket",
        "Killteam",
        "Hot-Rod",
        "Dragster",
        "Drifting",
        "Rush",
        "Racer",
        "Force",
        "Speedster",
        "Pod",
        "Speeder",
        "Hovercar",
        "Hover",
        "Ion-Sled",
        "Skimmer",
        "Skiff",
        "Riff",
        "Tub",
        "Scow",
        planetName(),

    ];

    return options[Math.floor(Math.random() * options.length)];
}

function raceChampionship(){
    var options = [
        "Championship",
        "World Championship",
        "Galactic Championship",
        "League",
        "World Series",
        "Galactic Series",
        "Superleague",
        "Ultraleague",
        "Megaleague",
        "Death League",
        "All Star League",
        "Cup",
        "Endurance Cup",
        "Endurance League",
        "Mini Superleague",
        "Race",
        "Ultra Race",
        planetName() + " Race",
    ];

    return options[Math.floor(Math.random() * options.length)];
}

newMotorsportRaceName = function(){

    return "The " + raceFirst() + " " + raceType() + " " + raceChampionship();
}

generateNew = function(){
    $(".race-name").each(function(){

        $(this).html("");

        $(this).prepend(newMotorsportRaceName());

    });
}

generateNew();