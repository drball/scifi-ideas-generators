
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
    ];

    return options[Math.floor(Math.random() * options.length)];
}

function systemName(){
    var options = [
        "Aeron",
        "Andromeda",
        "Apius",
        "Aquarius",
        "Ara",
        "Beta Picoris",
        "Boötes",
        "Cancri",
        "Canes Venatici",
        "Canis",
        "Capricorn",
        "Cassiopeia",
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
        "Dorado",
        "Draco",
        "Eridanus",
        "Eridanus",
        "Fornax",
        "Gilese",
        "Goddard",
        "HD",
        "Hat",
        "Hercules",
        "Herculis",
        "Horologium",
        "Hydra",
        "Hydrus",
        "Leo",
        "Leonis",
        "Libra",
        "Librae",
        "Lupus",
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
        "Rho Corona Borealis",
        "Rosa",
        "Sagittarius",
        "Scorpius",
        "Serpens",
        "Sextan",
        "Tau Geminorum",
        "Trappist",
        "Triangulum Australe",
        "Tucana",
        "Upsilon Andromedae",
        "Ursa Major",
        "Ursa Minor",
        "Ursae Majoris",
        "Vela",
        "Virgo",
        "Wasp",
        "Kepler",

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
        "Quadrant",
        "Territory",
        "Belt",
        "Field",
        "Section",
        "Vicinity",
        "Proximity",
        "Cluster",
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
    } else if (type > 35 && type <= 70){
        final = systemPrefix() + " " + planetName();
    } else if (type > 70 && type <= 90){
        final = planetName() + " " + planetName();
    } else {
        final = systemName();
    }

    if(suffixType <= 75){
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