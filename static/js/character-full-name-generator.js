var output = $("#generated-full-names");
var num = 20;

function randomPrefix(){
    var option = [
        "Captain",
        "Admiral",
        "Ambassador",
        "High Ambassador",
        "Subcommander",
        "Colonel",
        "Commodore",
        "President",
        "General",
        "Constable",
        "Officer",
        "Reverend",
        "Minister",
        "Lieutenant",
        "Elder",
        "Professor",
        "Secretary",
    ];

    return option[Math.floor(Math.random() * option.length)];
}

var prefix = [

];

generateFullName = function() {
    var final = "";
    var typeChance = Math.floor(Math.random() * 100);
    var prefixChance = Math.floor(Math.random() * 100);


    if (typeChance <= 50){
        final =  generateFemaleFirstName() + " " + generateLastName();
    } else {
        final = generateMaleFirstName() + " " + generateLastName();
    }

    if(prefixChance < 40){
        final = randomPrefix() + " " + final;
    }

    return final;

}

generateFullNames = function(){
    output.html("");

    for (i = 0; i <= num; i++) {

        output.prepend("<p>"+generateFullName() + "</p>");
    }
}

generateFullNames();
