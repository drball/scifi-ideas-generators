function gangAdjective() {
    var options = [
        "Dark",
        "Horrible",
        "Inglorious",
        "Peachy",
        "Faceless",
        "Metal",
        "Dancing",
        "Serious",
        "Northern",
        "Southern",
        "No-nonsense",
        "Strong",
        "Rabid",
        "Foul",
        "Blood",
        "Bloodthirsty",
        "Quick",
        "Bearded",
        "Laughing",
        "Angry",
        "Mucky",
        "Offensive",
        "Shocking",
        "Shady",
        "Infamous",
        "Shabby",
        "Devious",
        "Deadly",
        "Shoddy",
        "Vicious",
        "Proud",

    ];

    return options[Math.floor(Math.random() * options.length)];
}

function gangWord1() {
    var options = [
        "Onyx",
        "Sigma",
        "Pi",
        "Gold",
        "Cyber",
        "Iron",
        "Rusty",
        "Bros",
        "Brown",
        "Sapphire",
        "Amethyst",
        "Liver",
        "Titanium",
        "Carbide",
        "Muncher",
        "Destroyer",
        "Hells",
        "Hells",
        "Arctic",
        "Forest",
        "Downtown",
        "Ruby",
        "Diamond",
        "Pink",
        "Peaky",
        "Black",
        "Murky",
        "Murder",
        "Murder",
        "Cut-throat",
        "Arse",
        "Dark",
        "Baller",
        "Bearskin",
        "Copper",
        "Armenian",
        "Mexican",
        "Russian",
        "Spanish",
        "Chinese",
        "Cockney",
        "Asian",
        "Ozzy",
        "Irish",
        "Leaf",
        "Bush",
        "Viking",
        "Haircut",
        "Pirate",
        "Techno",
        "Heavens",
        "Drug",
        "Cocaine",
        "Stim",
        "Synth",
        "Crack",
        "Opium",
        "Motormouth",
        "Motorhead",
        "Motorbike",
        "Piston-head",
        "Petrol-head",
        "Dino",
        "Wolf",
        "White",
        "Grey",
        "Red",
        "Yellow",
        "Blue",
        "Crimson",
        "West-side",
        "East-side",
        "East-street",
        "West-street",
        "West-park",
        "East-park",
        "Biker Grove",
        "3rd street",
        "1st street",
        "Money",
        "Unfazed",
        "Vice",
        "Young",
        "Prison",
        "Plop",
        "Street",
        "Organized",
        "Streaking",
        "Demon",
        "Violet",
        "Snake",
        "Ivory",
        "Limbo",
        "Razor",
        "Rat",
        "Scouse",
        "Mouse",
        "Jackal",
        "Bear",
        "Lion",
        "Gorilla",
        "Eagle",
        "Hawk",
        "Sparrow",
        "Shadow",
        "Croc",
        "Pygmy",
        "Flame",
        "Alpha",
        "Beta",
        "Epsilon",
        "Guerrilla",
        "Spade",
        "Rock",
        "Stone",
        "Woke",
        "Shameful",
        "Singing",
        "Scurvy",
        "Couscous",
        "Lost",
        "Bald",
        "Bare-knuckle",

    ];

    return options[Math.floor(Math.random() * options.length)];
}

function gangWord2() {
    var options = [
        "Dreamers",
        "Army",
        "Arseholes",
        "Cobras",
        "Bears",
        "Gang",
        "Gang",
        "Gang",
        "Gang",
        "Gang",
        "Massive",
        "Destroyers",
        "Bludgers",
        "Wolves",
        "Fuckers",
        "Burglers",
        "Smugglers",
        "Preachers",
        "Swipers",
        "Bikers",
        "Grabbers",
        "Dicks",
        "Dickheads",
        "Angels",
        "Men",
        "Men",
        "Mandem",
        "Lads",
        "Lads",
        "Lasses",
        "Laddies",
        "Ladies",
        "Ladies",
        "Blinders",
        "Bastards",
        "Basterds",
        "Murderers",
        "Boys",
        "Boys",
        "Boyz",
        "Girls",
        "Girls",
        "Girlz",
        "Bandits",
        "Banditos",
        "Banditas",
        "Mob",
        "Mob",
        "Mobsters",
        "Brothers",
        "Brotherhood",
        "Beards",
        "Elves",
        "Elders",
        "Viceroys",
        "Aztecs",
        "Family",
        "Kings",
        "Cartel",
        "Ballers",
        "Squadren",
        "Prisoners",
        "Loonies",
        "Mods",
        "Modders",
        "Rockers",
        "Rednecks",
        "Triads",
        "Yakuza",
        "Sharks",
        "Miners",
        "Crew",
        "Cru",
        "Fists",
        "Cats",
        "Stallionz",
        "Slashers",
        "Syndicate",
        "Hoods",
        "Yardies",
        "Mafia",
        "Mafiya",
        "Dealers",
        "Drug Dealers",
        "Riders",
        "Skins",
        "Skinheads",
        "Biker Gang",
        "Hippies",
        "Mothers",
        "Killers",
        "Gunners",
        "Greasers",
        "Punishers",
        "Psychopaths",
        "Phantoms",
        "Crows",
        "Tribe",
        "Bloods",
        "Takers",
        "Reapers",
        "Soldiers",
        "Rats",
        "esq",
        "Posse",
        "Disciples",
        "Bounty Hunters",
        "Hunters",
        "Warriors",
        "Patrol",
        "Nationalists",

    ];

    return options[Math.floor(Math.random() * options.length)];
}

newGangName = function(){
    var final = "";
    var typeChance = Math.floor(Math.random() * 100);
    var prefixChance = Math.floor(Math.random() * 100);

    if (typeChance < 30) {
        final = gangAdjective() + " " + gangWord1() + " " + gangWord2();
    } else if(typeChance > 30 && typeChance <= 60) {
        final = gangAdjective() + " " + gangWord2();
    } else {
        final = gangWord1() + " " + gangWord2();
    }

    if (prefixChance < 40) {
        final = "The " + final;
    }

    return final;

}

generateNewGang = function(){
    $(".gang-name").each(function(){

        $(this).html("");

        $(this).prepend(newGangName());

    });
}

generateNewGang();