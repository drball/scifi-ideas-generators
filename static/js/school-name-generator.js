
function schoolTypeEnd(){
    var options = [

    "Academy",
    "Academy",
    "Learning Academy",
    "Learning Center",
    "Academy School",
    "Academy School",
    "Boys School",
    "Girls School",
    "Girls Academy",
    "Boys Academy",
    "Old College",
    "College",
    "Military School",
    "Military Academy",
    "University",
    "Charter School",
    "Center",
    "Kindergarten",
    "High",
    "High",
    "Junior High",
    "Junior High",
    "Education Center",
    "Education Institute",
    "High School",
    "Middle School",
    "Charter School",
    "Technical School",
    "Technical College",
    "Music School",
    "Middle School",
    "Grammar School",
    "Elementary",
    "Elementary School",
    "Navy Academy",
    "Institute",
    "Institute",
    "Learning Institute",
    "Scholarly Institute",
    "Secondary School",
    "School",
    "Conservatory",
    "Engineering Academy",
    "Science Academy",
    "Scientific Academy",
    "Faith School",
    "Catholic School",
    "Christian School",
    "Islamic School",
    "Islamic High School",
    "Polytechnic",
    "CE School",
    "Primary Academy",
    "Primary Academy",
    "Lower School",
    "Lower School",
    "Upper School",
    "Upper School",
    "Primary School",
    "Primary School",
    "CofE School",
    "Montessori School",
    "Separatist School",
    "Day School",
    "Schoolhouse",
    "Pre-School",
    "Nursery",
    "Academic Nursery",
    ];

    return options[Math.floor(Math.random() * options.length)];
}
function place(){
    var options = [
        "Evergreen",
        "Pacific",
        "Sundown",
        "Copper",
        "Lincoln",
        "Redwood",
        "Middlesborough",
        "Coventry",
        "Ryder",
        "Patriot",
        "Faith",
        "Linton",
        "Linmouth",
        "Green",
        "Dirt",
        "Colville",
        "York",
        "Chester",
        "Central",
        "Hunter",
        "Open",
        "Cardinham",
        "Calstock",
        "Probus",
        "Holy",
        "Ridgeview",
        "Summer",
        "Oyster",
        "Canyon",
        "Lakewood",
        "Rutherford",
        "Golden Sierra",
        "Independence",
        "Waterfall",
        "Maple",
        "Foothill",
        "Pleasant",
        "Silver",
        "Mountain",
        "West",
        "East",
        "North",
        "Cloud",
        "Pine",
        "Oak",
        "Ash",
        "Kent",
        "Walnut",
        "South",
        "Boscastle",
        "Otley",
        "Maple",
        "Coral",
        "Ramble",
        "Grange",
        "Knob",
        "Liberty",
        "Freedom",
        "Scholarly",
        "Scholastic",
        "Truthful",
        "Spring",
        "Andreas",
        "Franco",
        "Stalin",
        "Cheswell",
        "Chesterford",
        "Alexandria",
        "Sponge",
        "Berlin",
        "Chicago",
        "Mountain",
        "Farm",
        "Valley",
        "Cloud",
        "Hilltop",
        "Estuary",
        "Ocean",
        "Pond",
        "Knowledge",
        "Enterprise",
        "Value",
        "Highland",
        "Lismore",
        "Harmony",
        "Garmony",
        "Castlebay",
        "Dalness",
    ];

    return options[Math.floor(Math.random() * options.length)];
}

function placeEnd(){
    var options = [
        "Cove",
        "Grove",
        "Beach",
        "Town",
        "Dale",
        "Vale",
        "Village",
        "Inner City",
        "Leaves",
        "Hills",
        "Hill",
        "End",
        "Forest",
        "Field",
        "County",
        "Cliff",
        "Valley",
        "Fields",
        "Coast",
        "Shores",
        "Woods",
        "Haven",
        "View",
        "Park",
        "Lake",
        "Grove",
        "Springs",
        "Shelter",
        "Owls",
        "Bay",
    ];

    return options[Math.floor(Math.random() * options.length)];
}

function for1(){
    var options = [
        "International",
        "Future",
        "Intellectual",
        "Scientific",
        "Scholastic",
        "Advanced",
        "Mediocre",
        "Intelligent",
        "Empowering",
    ];

    return options[Math.floor(Math.random() * options.length)];
}

function for2(){
    var options = [
        "Strivers",
        "Excellence",
        "Businessmen",
        "Businesswomen",
        "Leaders",
        "Thinkers",
        "Free-thinkers",
        "Visionaries",
        "Equality",
        "Innovation",
        "Dreamers",
        "Greatness",
        "Potency",
        "Learning",
        "Education",
        "Capability",
        "Aptitude",
        "Comprehension",
        "Capacity",
        "Dexterity",
        "Talents",
        "Competency",
        "Resourcefulness",
    ];

    return options[Math.floor(Math.random() * options.length)];
}

function forSingle(){
    var options = [
        "The Disenfranchised",
        "Youngsters",
        "The Gifted",
        "The Ungifted",
        "The Poor",
        "The Morally Destitute",
        "Intellectuals",
        "Law",
        "Art",
        "The Arts",
        "Innovation",
        "Excellence",
        "Maritime Law",
        "Business Law",
        "The Mentally Disabled",
        "The Disabled",
        "The Blind",
        "The Deaf",
        "Warlocks",
        "Gifted " + peopleType(),
        "Talented " + peopleType(),
        "Intellectual "+ peopleType(),
        "Artistic "+ peopleType(),
        "Academic "+ peopleType(),
        peopleType(),
        peopleType(),
    ];

    return options[Math.floor(Math.random() * options.length)];
}

function peopleType(){
    var options = [
        "Girls",
        "Boys",
        "Strong-Willed Individuals",
        "Idiots",
        "Individuals",
        "Youngsters",
        "Children",
        "Individuals",
        "Businessmen",
        "Businesswomen",
        "Lawyers",
        "Builders",
        "Pilots",
        "Mutants",
        "Mutant " + newSimpleAlienSpeciesName(),
        "Aliens",
        "Alien Migrants",
        "Offworlders",
        "Extra-Terrestrials",
        "Zombies",
        "Witches",
        "Wizards",
        "Witches & Wizards",
        "Werewolves",
        "Witches & Werewolves",
        newSimpleAlienSpeciesName(),
        "Young " + newSimpleAlienSpeciesName(),
    ];

    return options[Math.floor(Math.random() * options.length)];
}

function namePrefix(){
    var options = [
        "Saint",
        "St",
        "Admiral",
        "Professor",
        "Dr",
    ];

    return options[Math.floor(Math.random() * options.length)];
}

function schoolOf() {
    var options = [
        "Witchcraft & Wizardry",
        "Witchcraft",
        "Magic",
        "Magic & Wonder",
        "Science & Technology",
        "Geography",
        "Engineering & Maths",
        "Combat & Defence",
        "The Dark Arts",
        "Self Defence",
        "Fine Art",
        "Modern Art",
        "Xenobiology",
        "Biology",
        "Veterinary Sciences",
        "Disease Control",
        "Military History",
        "Academic Learning",
        newSimpleAlienSpeciesName() + " Study",
        "Studying " + newSimpleAlienSpeciesName(),
    ];

    return options[Math.floor(Math.random() * options.length)];
}


newSchoolName = function(){
    var final = "";
    var suffixChance = Math.floor(Math.random() * 100);
    var typeChance = Math.floor(Math.random() * 100);

    if(typeChance <= 35){
        final = place() + " " + schoolTypeEnd();

    } else if(typeChance > 35 && typeChance <= 70){
        final = place() + " " + placeEnd() + " " + schoolTypeEnd();
    } else {
        var personPrefixChance = Math.floor(Math.random() * 100);

        if(personPrefixChance <= 30){
            final = namePrefix() + " " + characterName() + "'s " + schoolTypeEnd();
        } else {
            final = "The "+ characterName() + " " + schoolTypeEnd();
        }
    }

    if(suffixChance <= 30){

        var suffixType = Math.floor(Math.random() * 100);

        if(suffixType <= 40){
            final += " for " + for1() + " " + for2();
        } else if(typeChance > 40 && typeChance <= 80){
            final += " for " + forSingle();
        } else {
            final += " of " + schoolOf();
        }

    }

    return final;
}

generateNewSchools = function(){
    $(".school-name").each(function(){

        $(this).html("");

        $(this).prepend(newSchoolName());

    });
}

generateNewSchools();