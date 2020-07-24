
function systemPrefix(){
    var options = [
        "Alpha",
        "Beta",
        "Gamma",
        "Ceti",
        "Picon",
        "Delta",
        "Epsilon",
        "Theta",
        "Zeta",
        "Omega",
        "Tau",
        "Nebulon",
        "Las",
        "Los",
        "La",
        "Far",
        "Deep",
        "Ultra",
        "Mega",
        "Super",
        "Über",
        "Omicron",
        "Sigma",
        "Kappa",
        "Rho",
        "Minor",
        "Major",
        "Greater",
        Math.floor(Math.random() * 300),
    ];

    return options[Math.floor(Math.random() * options.length)];
}

function systemName(){
    var options = [
        "Arf",
        "Alf",
        "Aeron",
        "Andromeda",
        "Apius",
        "Aquarius",
        "Ara",
        "Alpha Andromeda",
        "Alpha Centauri",
        "Alpha Persei",
        "Alcor",
        "Algol",
        "Antares",
        "Basri",
        "Behram",
        "Beta Picoris",
        "Boötes",
        "Cancri",
        "Canes Venatici",
        "Canis",
        "Capricorn",
        "Cassiopeia",
        "Castor",
        "Cebus",
        "Centaurus",
        "Ceti",
        "Cetus",
        "Columbus",
        "Coma Berenices",
        "Copurnicus",
        "Corona Borealis",
        "Corot",
        "Cygnus",
        "Cygni",
        "Dorado",
        "Draco",
        "Eridanus",
        "Eridanus",
        "Fikes",
        "Fornax",
        "Fomalhaut",
        "Gilese",
        "Goddard",
        "HD",
        "Hat",
        "Hercules",
        "Herculis",
        "Horologium",
        "Holbrook",
        "Hydra",
        "Hydrus",
        "Leo",
        "Leonis",
        "Libra",
        "Librae",
        "Lupus",
        "Luyten",
        "Lyra",
        "Mensa",
        "Mensae",
        "Monocerus",
        "Orion",
        "Pavo",
        "Pi Mensae",
        "Piccard",
        "Pictor",
        "Pisces",
        "Puppis",
        "Raleigh",
        "Reticulum",
        "Regulus",
        "Rho Corona Borealis",
        "Rosa",
        "Rouse",
        "Sagittarius",
        "Scorpius",
        "Serpens",
        "Sextan",
        "Spica",
        "Tau Geminorum",
        "Trappist",
        "Triangulum Australe",
        "Tucana",
        "Tyson",
        "Upsilon Andromedae",
        "Ursa Major",
        "Ursa Minor",
        "Ursae Majoris",
        "Vela",
        "Virgo",
        "Wasp",
        "Kepler",
        "Procyon",
        "Procyon",
        "Vorach",
        "Vorash",
        "Tobin",
        "Adara",
        "Doranda",
        "Copernicus",
        "Newton",
        "Ptolemy",
        "Hubble",
        "Herschel",
        "Sagan",
        "Einstein",
        "Messier",
        "Huygens",
        "Cannon",
        "Samos",
        "Laplace",
        "Burnell",
        "Bell",
        "Leavitt",
        "Penzias",
        "Payne",
        "Hawking",
        "Moore",
        "Rees",
        "Halley",
        "Burbidge",
        "Flamsteed",
        "Couper",
        "Marsden",
        "Gill",
        "Chandra",
        "Chan",
        "Chung",
        "Wickramasinghe",
        "Narlikar",
        "Brahmagupta",
        "Gupta",
        "Somayaji",
        "Bappu",
        "Ball",
        "Saha",
        "Das Gupta",
        "Lalla",
        "Jani",
        "Natarajan",
        "Subramaniam",
        "Fairall",
        "Knox",
        "Paraskevopoulos",
        "Weiss",
        "Wilkins",
        "Llewelyn",
        "Gomez",
        "Evans",
        "Myanmar",
        "Dilhan",
        "Eryurt",
    ];

    return options[Math.floor(Math.random() * options.length)];
}

function systemSuffix(){
    var options = [
        "Expanse",
        "Expanse",
        "Expanse",
        "Nebula",
        "Nebula",
        "Stellar Nursery",
        "Passage",
        "Pass",
        "Phenomenon",
        "Space",
        "Sector",
        "Sector",
        "Sector",
        "Zone",
        "Zone",
        "Region",
        "Region",
        "Quadrant",
        "Quadrant",
        "Territory",
        "Belt",
        "Field",
        "Section",
        "Vicinity",
        "Proximity",
        "Cluster",
        "Cluster",
        "Spiral",
        "Halo Zone",
        "Coronal Stream",
        "Pulsar System",
        "Cloud Node",
        "Supercluster",
        "Vortex",
        "Star System",
        "Cluster System",
        Math.floor(Math.random() * 350) + " System",
    ];

    return options[Math.floor(Math.random() * options.length)];
}

newStarSystemName = function(){

    var final = "";
    var type = Math.floor(Math.random() * 100);
    var suffixType = Math.floor(Math.random() * 100);
    var theChance = Math.floor(Math.random() * 100);

    if(type <= 35){
        final = planetName();
    } else if (type > 35 && type <= 65){
        final = systemPrefix() + " " + planetName();
    } else if (type > 65 && type <= 85){
        final = planetName() + " " + planetName();
    } else {
        final = systemName();
    }

    if(suffixType <= 80){
        final += " " + systemSuffix();
    } else {
        final += " System";
    }

    if(theChance <= 75){
        final = "The " + final;
    }

    return final;
}

generateAll = function(){


    $(".star-system-name").each(function(){

        $(this).html("");

        $(this).prepend(newStarSystemName());

    });
}

generateAll();