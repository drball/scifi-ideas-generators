var output = $("#generated-names");
var num = 25;

var femaleFirstNames = [
    "Аleksandra",
    "Astrid",
    "Аlina",
    "Ada",
    "Ava",
    "Аlyona",
    "Аnatoliyа",
    "Аngelina",
    "Аnna",
    "Аnzhelika",
    "Annika",
    "Еlena",
    "Еlla",
    "Еlla-Rose",
    "Еlla-May",
    "Еlenor",
    "Еliza",
    "Еlizaveta",
    "Еvgeniyа",
    "Еvа",
    "Кristinа",
    "Каrinа",
    "Каterinа",
    "Мilа",
    "Маrinа",
    "Маriyа",
    "Маrketа",
    "Маryа",
    "Маrина",
    "Маylа",
    "Оksаnа",
    "Оliviya",
    "Оlеgа",
    "Оlеksandrа",
    "Оlеksаndrа",
    "Оlеnа",
    "Aaliyah",
    "Abby",
    "Abigail",
    "Adalyn",
    "Addison",
    "Adeline",
    "Agnieszka",
    "Ai",
    "Aiko",
    "Aimei",
    "Akane",
    "Aleksandra",
    "Alexa",
    "Alexandra",
    "Alice",
    "Alina",
    "Allison",
    "Alyssa",
    "Amalia",
    "Amanda",
    "Amber",
    "Amelia",
    "Amélie",
    "An",
    "Ana",
    "Anastasia",
    "Andrea",
    "Angel",
    "Angelina",
    "Anling",
    "Anna",
    "Anne",
    "Annelies",
    "Antonia",
    "Aria",
    "Ariana",
    "Arianna",
    "Ashley",
    "Aubrey",
    "Audrey",
    "Aurora",
    "Aurélie",
    "Autumn",
    "Ava",
    "Avery",
    "Aya",
    "Bailey",
    "Bao",
    "Barbara",
    "Beata",
    "Bea",
    "Beatrice",
    "Bella",
    "Bethany",
    "Bianca",
    "Bihua",
    "Bin",
    "Bo",
    "Bojing",
    "Breanna",
    "Brianna",
    "Bridget",
    "Brittany",
    "Brooke",
    "Brooklyn",
    "Caitlin",
    "Camila",
    "Cara",
    "Carla",
    "Carly",
    "Carmen",
    "Caroline",
    "Cassandra",
    "Cat",
    "Cath",
    "Cathy",
    "Catarina",
    "Cate",
    "Catherine",
    "Cecilia",
    "Changying",
    "Charlotte",
    "Chen",
    "Cheng",
    "Chiara",
    "Chie",
    "Chika",
    "Chiyo",
    "Chloe",
    "Christina",
    "Chun",
    "Claire",
    "Clara",
    "Colette",
    "Cora",
    "Cornelia",
    "Courtney",
    "Cristina",
    "Dandan",
    "Danielle",
    "Daria",
    "Denisa",
    "Destiny",
    "Diana",
    "Dinа",
    "Dongmei",
    "Dorota",
    "Dаriyа",
    "Edith",
    "Eiko",
    "Eleanor",
    "Elena",
    "Eleonora",
    "Eliana",
    "Elisabeth",
    "Elizabeth",
    "Ella",
    "Ellie",
    "Elouise",
    "Elvira",
    "Emery",
    "Emi",
    "Emilia",
    "Emily",
    "Emma",
    "Erica",
    "Erin",
    "Erina",
    "Estelle",
    "Eva",
    "Evelyn",
    "Everly",
    "Fabienne",
    "Fang",
    "Fangfang",
    "Fanny",
    "Fei",
    "Feng",
    "Fenghua",
    "Fengjuan",
    "Fenping",
    "Fiona",
    "Francesca",
    "Françoise",
    "Fumiko",
    "Gabby",
    "Gabriela",
    "Gabriella",
    "Gabrielle",
    "Gaia",
    "Galina",
    "Genesis",
    "Gianna",
    "Girlie",
    "Giselle",
    "Grace",
    "Greta",
    "Gui",
    "Guiying",
    "Hailey",
    "Haiyan",
    "Haiying",
    "Hanako",
    "Hanna",
    "Hannah",
    "Harper",
    "Haruka",
    "Harumi",
    "Hazel",
    "Heather",
    "Hikari",
    "Hina",
    "Hiroko",
    "Hitomi",
    "Hua",
    "Huifang",
    "Huiling",
    "Huiqin",
    "Huixiang",
    "Huiying",
    "Hélène",
    "Ines",
    "Ingrid",
    "Irina",
    "Irinа",
    "Isabella",
    "Isabelle",
    "Isla",
    "Ivana",
    "Ivy",
    "Izumi",
    "Izаbеlа",
    "Jacqueline",
    "Jade",
    "Jana",
    "Jasmin",
    "Jasmine",
    "Jenna",
    "Jennifer",
    "Jian",
    "Jie",
    "Jill",
    "Jing",
    "Jingjing",
    "Joana",
    "Joanna",
    "Jocelyn",
    "Jordan",
    "Josephine",
    "Juan",
    "Julia",
    "Julie",
    "Jun",
    "Kaede",
    "Kaitlyn",
    "Kana",
    "Kanako",
    "Kanon",
    "Kaori",
    "Kara",
    "Kasumi",
    "Kat",
    "Katarina",
    "Katarzyna",
    "Kate",
    "Katy",
    "Katelyn",
    "Katharina",
    "Katherine",
    "Katie",
    "Katja",
    "Kayla",
    "Kazue",
    "Keiko",
    "Kendra",
    "Kennedy",
    "Kiko",
    "Kimiko",
    "Kinsley",
    "Klara",
    "Kotone",
    "Krissy",
    "Kristen",
    "Krystal",
    "Kumi",
    "Kumiko",
    "Kyoko",
    "Lan",
    "Lara",
    "Laura",
    "Lauren",
    "Laya",
    "Layla",
    "Lea",
    "Leah",
    "Lei",
    "Leila",
    "Lena",
    "Leticia",
    "Li",
    "Lia",
    "Liang",
    "Lidia",
    "Lidiyа",
    "Lifen",
    "Lifeng",
    "Lihua",
    "Lili",
    "Liliana",
    "Lillian",
    "Lily",
    "Lilly",
    "Limei",
    "Lin",
    "Lina",
    "Linda",
    "Lindsey",
    "Ling",
    "Lisa",
    "Livia",
    "Lorena",
    "Luana",
    "Lucia",
    "Lucie",
    "Lucy",
    "Ludmila",
    "Luisa",
    "Luna",
    "Lydia",
    "Lаrа",
    "Mackenzie",
    "Maddie",
    "Madeline",
    "Madelyn",
    "Madison",
    "Magda",
    "Magdalena",
    "Maja",
    "Makayla",
    "Makenna",
    "Maki",
    "Makiko",
    "Malgorzata",
    "Mami",
    "Mana",
    "Manami",
    "Mari",
    "Maria",
    "Mariana",
    "Marianna",
    "Marie",
    "Mariko",
    "Marina",
    "Marissa",
    "Martina",
    "Mary",
    "Matilde",
    "Maya",
    "Megan",
    "Megumi",
    "Melanie",
    "Melinda",
    "Mia",
    "Michele",
    "Mihoko",
    "Mikayla",
    "Miki",
    "Mila",
    "Mio",
    "Miranda",
    "Miriam",
    "Misaki",
    "Miyu",
    "Molly",
    "Monika",
    "Morgan",
    "Nadia",
    "Nagisa",
    "Nana",
    "Nanami",
    "Naoko",
    "Naomi",
    "Nat",
    "Natalia",
    "Natalie",
    "Nathalie",
    "Natsuko",
    "Nevaeh",
    "Nicole",
    "Nina",
    "Ninа",
    "Noemi",
    "Nora",
    "Nova",
    "Nаdezhdа",
    "Nаdin",
    "Nаtаlyа",
    "Olga",
    "Olivia",
    "Paige",
    "Paisley",
    "Paula",
    "Paulina",
    "Penelope",
    "Petra",
    "Peyton",
    "Pia",
    "Piper",
    "Polinа",
    "Quinn",
    "Rachael",
    "Rachel",
    "Rebecca",
    "Renata",
    "Riley",
    "Rita",
    "Rosa",
    "Rosanna",
    "Ruby",
    "Sabine",
    "Sabrina",
    "Sadie",
    "Samantha",
    "Sandra",
    "Sara",
    "Sarah",
    "Savannah",
    "Sally",
    "Scarlett",
    "Selena",
    "Serena",
    "Serenity",
    "Simona",
    "Skylar",
    "Sofia",
    "Sonia",
    "Sophia",
    "Sophie",
    "Stefanie",
    "Stella",
    "Stephanie",
    "Susanna",
    "Svetlana",
    "Sydney",
    "Tania",
    "Tanya",
    "Taylor",
    "Tiffany",
    "Trinity",
    "Tina",
    "Valentina",
    "Vanessa",
    "Veronica",
    "Veronika",
    "Victoria",
    "Viktоriyа",
    "Violet",
    "Vаlentinа",
    "Vаleriya",
    "Vаleriyа",
    "Vаleryа",
    "Vеronikа",
    "Vеrа",
    "Wendy",
    "Whitney",
    "Willow",
    "Winnie",
    "Zoe",
    "Zoey",
    "Zooey",

];

var femaleFirstNamePart1 = [
    "Em",
    "Ell",
    "Zo",
    "Will",
    "Vio",
    "Vic",
    "Val",
    "Van",
    "Say",
    "Lil",
    "Feng",
    "Pan",
    "Kim",
    "Kam",
    "Cam",
    "Stef",
    "Lin",
    "Am",
    "Bo",
    "Eliz",

];

var femaleFirstNamePart2 = [
    "ly",
    "my",
    "let",
    "lett",
    "ette",
    "elle",
    "ela",
    "ella",
    "ily",
    "illie",
    "ery",
    "ille",
    "feng",
    "chi",
    "cho",
    "lin",
    "ling",
    "ya",
    "ina",
    "lina",
    "lana",
    "arya",
    "ya",
    "iya",
    "ica",
    "iyo",
    "ika",
    "rina",
    "niya",
    "vita",

];

generateFemaleFirstName = function() {
    var typeChance = Math.floor(Math.random() * 100);
    var randomFirstName = femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)];
    var randomFirstNamePart1 = femaleFirstNamePart1[Math.floor(Math.random() * femaleFirstNamePart1.length)];
    var randomFirstNamePart2 = femaleFirstNamePart2[Math.floor(Math.random() * femaleFirstNamePart2.length)];

    if (typeChance <= 20){
        return randomFirstNamePart1 + randomFirstNamePart2;
    } else {
        return randomFirstName;
    }
}

generateFemaleFullNames = function(){
    output.html("");

    for (i = 0; i <= num; i++) {

        output.prepend("<p>"+generateFemaleFirstName() + " " + generateLastName() + "</p>");
    }
}

generateFemaleFullNames();
