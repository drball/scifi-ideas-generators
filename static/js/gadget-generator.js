var output = $("#generated-names");
var num = 10;

var thingAdjective = [
    "aft",
    "argon",
    "backup",
    "barium",
    "beryllium",
    "bionic",
    "faulty",
    "faulty carbon",
    "bottom",
    "boron",
    "cadmium",
    "cadmium II",
    "carbon",
    "carbon 12",
    "cerium",
    "closest",
    "chromium",
    "chlorine",
    "damaged",
    "delta",
    "deltonium",
    "dilithium",
    "dorsal",
    "erbium",
    "front",
    "gamma",
    "graviton",
    "germanium",
    "grease resistant",
    "hyperdrive",
    "hyper sensitive",
    "iron",
    "ionic",
    "isotopic",
    "iridium alloy",
    "kryptonian",
    "lithium",
    "manganese",
    "molecular",
    "mercury",
    "nanowave",
    "nitrogen",
    "nitronium",
    "neutonium",
    "neon",
    "nuclear",
    "optronic",
    "osmium",
    "overheating",
    "plasma",
    "port",
    "positronic",
    "primary and auxiliary",
    "promethium",
    "promethean",
    "platinum",
    "radial",
    "rear",
    "rear-side",
    "revolving",
    "side",
    "subatomic",
    "sensitive",
    "starboard",
    "tantulum",
    "teflon",
    "tungsten",
    "thera-magnetic",
    "torsional",
    "triolic",
    "tritonic",
    "ventral",
    "xenon",
    "zinc",
    "zirconium",
];


var thingDesc = [
    "FTL",
    "antigravity",
    "bipolar",
    "bubble",
    "caesium",
    "charge",
    "containment",
    "chroniton",
    "delta-wave",
    "dorsal",
    "electro-ceramic",
    "electro-plasma",
    "flow",
    "gamma-wave",
    "glob",
    "gluon",
    "ion",
    "magnesium",
    "microfilament",
    "neogenic",
    "phaser",
    "polar",
    "power",
    "pulse",
    "quantum shift",
    "ram",
    "ray",
    "rubidium",
    "vacuum",
    "warp",
    "wave",
    "quantum",
];

var thing = [
    "autosequencers",
    "booster",
    "booster amplifier",
    "bio-filter",
    "bio-containers",
    "bio-tubing",
    "brackets",
    "cannon",
    "cannon casings",
    "capacitor",
    "casing",
    "centrifuge",
    "circuits",
    "collector",
    "collectors",
    "compactor",
    "compactor motor",
    "containment field",
    "control circuit",
    "converter",
    "core",
    "core booster",
    "cruncher",
    "crystal",
    "crystal core",
    "drive",
    "drive grease",
    "driver",
    "drive plates",
    "drive pedals",
    "drive shaft",
    "emergency rocket",
    "energy core",
    "fetcher",
    "fragmentor",
    "flinger",
    "flipper",
    "finalising rockets",
    "generator",
    "housing",
    "housing lubriator",
    "impulser",
    "jumpdrive",
    "launcher",
    "landing struts",
    "landing barriers",
    "landing brackets",
    "landing cushion",
    "landing thrusters",
    "node",
    "node lubricator",
    "portal bracket",
    "portal drive",
    "portal generator",
    "portal housing",
    "processing node",
    "propulsion",
    "propulsion drive",
    "propulsion nullifyer",
    "propeller",
    "propeller bracket",
    "propeller housing",
    "ramscoop",
    "replacer",
    "replicator",
    "repeller",
    "rocket",
    "shell",
    "shift-scoop",
    "spore-housing",
    "spore container",
    "solar cells",
    "solar sails",
    "teleporter",
    "thruster",
    "transporter",
    "turbine",
    "collector",
];

//--always singular
var gadget = [
    "autosequencer",
    "cleaner",
    "collector",
    "compactor",
    "cleaner",
    "mop",
    "mopper",
    "degreaser",
    "steamer",
    "polisher",
    "container",
    "controller",
    "converter",
    "booster",
    "cruncher",
    "destabilizer",
    "defragmentor",
    "greaser",
    "driver",
    "pedal",
    "fetcher",
    "fragmentor",
    "flinger",
    "flipper",
    "gel",
    "generator",
    "lubricator",
    "impulser",
    "launcher",
    "limiter",
    "processor",
    "recorder",
    "replacer",
    "repeller",
    "scrubber",
    "shifter",
    "splitter",
    "stabilizer",
    "straightener",
    "inspector",
    "belt",
    "cart",
    "sled",
    "pointer",
    "stick",
    "device",
    "monitor",
    "heater",
    "blower",
    "dryer",
    "washer",
    "screwdriver",
    "wrench",
    "pliars",
    "scissors",
    "hammer",
    "mallet",
    "box",
    "plug",
    "wire",
    "connector",
    "sensor",
    "brush",
    "spooler",
    "timer",
];

generateNew = function () {
    output.html("");

    for (i = 0; i <= num; i++) {

        var final = "";

        var randomThingAdj = thingAdjective[Math.floor(Math.random() * thingAdjective.length)];
        var randomThingDesc = thingDesc[Math.floor(Math.random() * thingDesc.length)];
        var randomThing = thing[Math.floor(Math.random() * thing.length)];
        var randomGadget = gadget[Math.floor(Math.random() * gadget.length)];
        var typeChance = Math.floor(Math.random() * 100);

        if (typeChance <= 25){
            final = randomThingAdj + " " + randomThingDesc + " " + randomGadget;

        } else if(typeChance > 25 && typeChance <= 45) {
            final = randomThingDesc + " " + randomThing + " " + randomGadget;

        } else if(typeChance > 45 && typeChance <= 65) {
            final = randomThingAdj + " " + randomThing + " " + randomGadget;

        } else {
            final = randomThingAdj + " " + randomThingDesc + " " + randomThing + " " + randomGadget;
        }

        final = final.substr(0,1).toUpperCase() + final.substr(1);

        output.prepend("<p>"+final+"</p>");
    }

}

generateNew();