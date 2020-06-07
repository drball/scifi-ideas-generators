var output = $("#generated-names");
var num = 10;

var todoVerb = [
    "bypass",
    "calibrate",
    "clean",
    "charge",
    "charge up",
    "connect up",
    "completely resynchronize",
    "rebuild",
    "de-clutter",
    "decrease power to",
    "decrease power to",
    "de-materialize",
    "de-polorize",
    "degauss",
    "de-scale",
    "de-scramble",
    "decontaminate",
    "destroy",
    "detach",
    "divert power to",
    "divert power away from",
    "eject",
    "energize",
    "fluctuate",
    "fix",
    "increase power to",
    "increase power to",
    "increase the variance of",
    "increase the power of",
    "invert",
    "install",
    "jump-start",
    "magnatize",
    "polorize",
    "purge",
    "re-attenuate",
    "re-invert",
    "re-route",
    "realign",
    "reboot",
    "rebuild",
    "repipe the plasma to",
    "replace",
    "re-route emergency power through",
    "re-route emergency power to",
    "re-route energy to",
    "re-route power through",
    "reset","restart",
    "resynchronize",
    "scrub",
    "scrap",
    "synchronize",
    "uncrumple",
    "unscrew",
    "unspam",
];

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
    "furthest",
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

var who = [
    "I need to",
    "I should",
    "We need to",
    "We should",
    "They need to",
    "You need to",
    "You should",
    "Don't forget to",
]

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
    "bio-filter",
    "bio-containers",
    "brackets",
    "cannon",
    "capacitor",
    "casing",
    "centrifuge",
    "circuits",
    "collector",
    "collectors",
    "compactor",
    "containment field",
    "control circuit",
    "convertor",
    "core",
    "cruncher",
    "crystal",
    "crystal core",
    "drive",
    "drive plates",
    "drive pedals",
    "drive shaft",
    "emergency rocket",
    "energy core",
    "flinger",
    "gel",
    "gel core",
    "generator",
    "housing",
    "jumpdrive",
    "launcher",
    "landing struts",
    "landing brackets",
    "limiter",
    "portal drive",
    "portal generator",
    "propulsion",
    "propeller",
    "ramscoop",
    "replacer",
    "replicator",
    "repeller",
    "rocket",
    "scrubber",
    "shell",
    "shifter",
    "splitter",
    "spore-housing",
    "spore container",
    "stabilizer",
    "straighteners",
    "solar cells",
    "solar sails",
    "teleporter",
    "teleporter pads",
    "thruster",
    "thruster housings",
    "thrusters",
    "thrust engine",
    "transporter",
    "transporter beams",
    "turbine",
    "collector",
    "collector brackets",
];

var problemAdj = [
    "nanowave",
    "nanoparticle",
];

var problem = [
    "a temporal anomaly",
    "a neutrino surge",
    "a plasma surge",
    "a quantum surge",
    "a quantum breakdown",
    "a destabilization",
    "an antimatter particle trace",
    "a slight variance",
    "a slight field variance",
    "nanowave frequency shift",
    "an anomolous power spike",
    "an anomolous power signature",
    "a series of nanowave pulse signatures",
    "a control malfunction",
];

var problemStart = [
    "There's",
    "I'm detecting",
    "You notice"
]

generateNew = function () {
    output.html("");

    for (i = 0; i <= num; i++) {

        var final = "";
        var typeChance = Math.floor(Math.random() * 100);
        var randomWho = who[Math.floor(Math.random() * who.length)];
        var randomTodoVerb = todoVerb[Math.floor(Math.random() * todoVerb.length)];
        var randomThingAdj = thingAdjective[Math.floor(Math.random() * thingAdjective.length)];
        var randomThingDesc = thingDesc[Math.floor(Math.random() * thingDesc.length)];
        var randomThing = thing[Math.floor(Math.random() * thing.length)];

        if (typeChance <= 30){
            final = randomWho + " " + randomTodoVerb + " the " + randomThingAdj + " " + randomThingDesc + " " + randomThing + ".";

        } else if(typeChance > 30 && typeChance <= 60) {

            final = randomWho + " " + randomTodoVerb + " the " + randomThingAdj + " " + randomThingDesc + " " + randomThing + ".";

            randomThingAdj = thingAdjective[Math.floor(Math.random() * thingAdjective.length)];
            randomThingDesc = thingDesc[Math.floor(Math.random() * thingDesc.length)];
            randomThing = thing[Math.floor(Math.random() * thing.length)];

            final = "The " + randomThingAdj + " " + randomThingDesc + " is offline. " + final;

        } else  {
            var randomProblemStart = problemStart[Math.floor(Math.random() * problemStart.length)];
            var randomProblem = problem[Math.floor(Math.random() * problem.length)];

            final = randomProblemStart + " " + randomProblem + " in the " + randomThingAdj + " " + randomThingDesc + " " + randomThing + ".";

            var prefixChance = Math.floor(Math.random() * 100);

            if (prefixChance <= 50){
                randomThingAdj = thingAdjective[Math.floor(Math.random() * thingAdjective.length)];
                randomThingDesc = thingDesc[Math.floor(Math.random() * thingDesc.length)];
                randomThing = thing[Math.floor(Math.random() * thing.length)];

                final = final + " " + randomWho + " " + randomTodoVerb + " the " + randomThingDesc + " " + randomThing + ".";
            }

        }

        output.prepend("<p>“"+final+"”</p>");
    }

}

generateNew();