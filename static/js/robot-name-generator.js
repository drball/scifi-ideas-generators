var output = $("#generated-names");
var num = 30;

var prefix = [
    "Artificial",
    "Autonomous",
    "Autonomous",
    "Autonomous",
    "Automated",
    "Automated",
    "Deadly",
    "Crushing",
    "Self-guiding",
    "Sensory",
    "Global",
    "Primitive",
    "Unified",
    "Networked",
    "Un-networked",
    "Disconnected",
    "Self-Reliant",
];

var firstName = [
    "Aaran", "Abel", "Abir", "Abraham", "Abu", "Adam", "Adam", "Adam", "Addison", "Adie", "Aedan", "Aedin", "Aiden", "Al", "Alan", "Alastair", "Albert", "Alec", "Alessandro", "Alex", "Alexander", "Alexei", "Alexx", "Alexa", "Alf", "Alfred", "Alistair", "Allan", "Allen", "Allesandro", "Allister", "Ally", "Alphonse", "Altyiab", "Alum", "Alvern", "Alvin", "Alyas", "Amaan", "Aman", "Amani", "Ambanimoh", "Ameer", "Amgad", "Ami", "Amin", "Amir", "Ammaar", "Ammar", "Ammer", "Amolpreet", "Amos", "Amrinder", "Amrit", "Amro", "Anay", "Andrea", "Andreas", "Andrei", "Andrejs", "Andrew", "Andy", "Anees", "Anesu", "Angel", "Angelo", "Angus", "Anir", "Anis", "Anish", "Anmolpreet", "Annan", "Anndra", "Anselm", "Anthony", "Anthony-John", "Antoine", "Anton", "Antoni", "Antonio", "Antony", "Antonyo", "Anubhav", "Aodhan", "Aon", "Aonghus", "Apisai", "Arafat", "Aran", "Arandeep", "Arann", "Aray", "Arayan", "Archibald", "Archie", "Arda", "Ardal", "Ardeshir", "Areeb", "Areez", "Aref", "Arfin", "Argyle", "Argyll", "Ari", "Aria", "Arian", "Arihant", "Aristomenis", "Aristotelis", "Arjuna", "Arlo", "Armaan", "Arman", "Armen", "Arnab", "Arnav", "Arnold", "Aron", "Aronas", "Arran", "Arrham", "Arron", "Arryn", "Arsalan", "Artem", "Arthur", "Artur", "Arturo", "Arun", "Arunas", "Arved", "Arya", "Aryan", "Aryankhan", "Aryian", "Aryn", "Asa", "Asfhan", "Ash", "Ashlee-jay", "Ashley", "Ashton", "Ashton-Lloyd", "Ashtyn", "Ashwin", "Asif", "Asim", "Aslam", "Asrar", "Ata", "Atal", "Atapattu", "Ateeq", "Athol", "Athon", "Athos-Carlos", "Atli", "Atom", "Attila", "Aulay", "Aun", "Austen", "Austin", "Avani", "Averon", "Avi", "Avinash", "Avraham", "Awais", "Awwal", "Axel", "Ayaan", "Ayan", "Aydan", "Ayden", "Aydin", "Aydon", "Ayman", "Ayomide", "Ayren", "Ayrton", "Aytug", "Ayub", "Ayyub", "Azaan", "Azedine", "Azeem", "Azim", "Aziz", "Azlan", "Azzam", "Azzedine", "Babur", "Bader", "Badr", "Badsha", "Bailee", "Bailey", "Bailie", "Bailley", "Baillie", "Baley", "Balian", "Banan", "Barath", "Barkley", "Barney", "Baron", "Barrie", "Barry", "Basher", "Baxter", "Baye", "Bayley", "Beau", "Beinn", "Bekim", "Believe", "Ben", "Bendeguz", "Benedict", "Benjamin", "Benjamyn", "Benji", "Benn", "Bennett", "Benny", "Benoit", "Bentley", "Berkay", "Bernard", "Bertie", "Bevin", "Bezalel", "Bhaaldeen", "Bharath", "Bilal", "Bill", "Billy", "Binod", "Bjorn", "Blaike", "Blaine", "Blair", "Blaire", "Blake", "Blazej", "Blazey", "Blessing", "Blue", "Blyth", "Bo", "Boab", "Bob", "Bobby", "Bobby-Lee", "Bodhan", "Boedyn", "Bogdan", "Bohbi", "Bony", "Bowen", "Bowie", "Boyd", "Bracken", "Brad", "Bradan", "Braden", "Bradley", "Bradlie", "Bradly", "Brady", "Bradyn", "Braeden", "Braiden", "Brajan", "Brandan", "Branden", "Brandon", "Brandonlee", "Brandon-Lee", "Brandyn", "Brannan", "Brayden", "Braydon", "Braydyn", "Breandan", "Brehme", "Brendan", "Brendon", "Brendyn", "Breogan", "Bret", "Brett", "Briaddon", "Brian", "Brodi", "Brodie", "Brody", "Brogan", "Broghan", "Brooke", "Brooklin", "Brooklyn", "Bruce", "Bruin", "Bruno", "Brunon", "Bryan", "Bryce", "Bryden", "Brydon", "Brydon-Craig", "Bryn", "Brynmor", "Bryson", "Buddy", "Bully", "Burak", "Burhan", "Butali", "Butchi", "Byron", "Cabhan", "Cadan", "Cade", "Caden", "Cadon", "Cadyn", "Caedan", "Caedyn", "Cael", "Caelan", "Caelen", "Cahl", "Cai", "Caidan", "Caiden", "Cailin", "Cain", "Caine", "Cairn", "Cal", "Calan", "Calder", "Cale", "Calean", "Caleb", "Calen", "Caley", "Calib", "Calin", "Callahan", "Callan", "Callan-Adam", "Calley", "Callie", "Callin", "Callum", "Callun", "Callyn", "Calum", "Calum-James", "Calvin", "Cambell", "Camerin", "Cameron", "Campbel", "Campbell", "Camron", "Caolain", "Caolan", "Carl", "Carlo", "Carlos", "Carrich", "Carrick", "Carson", "Carter", "Carwyn", "Casey", "Casper", "Cassy", "Cathal", "Cator", "Cavan", "Cayden", "Cesar", "Chad", "Copper Chad", "Copper Chang", "Charles", "Charley", "Charlie", "Copper Charlye", "Chester", "Copperchest", "Chris", "Copper Chris", "Christopher", "Ciaran", "Copper Ciaran", "Copper Clayton", "CopperClement", "CopperClifford", "CopperClyde", "Cobie", "Copper Coby", "Codey", "Copper Conan", "Copper Connor", "Cosmo",  "Craig", "Copper Curtis", "Curtis", "Cyrus", "Copper Craig", "Dafydd", "Dailey", "Daimhin", "Daithi", "Dakota", "Daksh", "Dale", "Dalong", "Dalton", "Damian", "Damien", "Damon", "Dan", "Danar", "Dane", "Danial", "Daniel", "Daniele", "Daniel-James", "Daniels", "Daniil", "Danish", "Daniyal", "Danniel", "Danny", "Dante", "Danyal", "Danyil", "Danys", "Daood", "Dara", "Darach", "Daragh", "Darcy", "D'arcy", "Dareh", "Daren", "Darien", "Darius", "Darl", "Darn", "Darrach", "Darragh", "Darrel", "Darrell", "Darren", "Darrie", "Darrius", "Darroch", "Darryl", "Darryn", "Darwyn", "Daryl", "Daryn", "Daud", "Daumantas", "Davi", "David", "David-Jay", "David-Lee", "Davie", "Davis", "Davy", "Dawid", "Dawson", "Dawud", "Dayem", "Daymian", "Deacon", "Deagan", "Dean", "Deano", "Decklan", "Declain", "Declan", "Declyan", "Declyn", "Dedeniseoluwa", "Deecan", "Deegan", "Deelan", "Deklain-Jaimes", "Del", "Demetrius", "Denis", "Deniss", "Dennan", "Dennin", "Dennis", "Denny", "Dennys", "Denon", "Denton", "Denver", "Denzel", "Deon", "Derek", "Derick", "Derin", "Dermot", "Derren", "Derrie", "Derrin", "Derron", "Derry", "Derryn", "Deryn", "Deshawn", "Desmond", "Dev", "Devan", "Devin", "Devlin", "Devon", "Devrin", "Devyn", "Dex", "Dexter", "Dhani", "Dharam", "Dhavid", "Dhyia", "Diarmaid", "Diarmid", "Diarmuid", "Didier", "Diego", "Digby", "Dilan", "Dilano", "Dillan", "Dillon", "Dimitri", "Dinaras", "Dion", "Dissanayake", "Dmitri", "Doire", "Dolan", "Domanic", "Domenico", "Domhnall", "Dominic", "Dominick", "Dominik", "Donald", "Donnacha", "Donnie", "Dorian", "Dougal", "Douglas", "Dougray", "Drakeo", "Dre", "Dregan", "Drew", "Dugald", "Duncan", "Duriel", "Dustin", "Dylan", "Dylan-Jack", "Dylan-James", "Dylan-John", "Dylan-Patrick", "Dylin", "Dyllan", "Dyllan-James", "Dyllon", "Eadie", "Eagann", "Eamon", "Eamonn", "Eason", "Eassan", "Easton", "Ebow", "Ed", "Eddie", "Eden", "Ediomi", "Edison", "Eduardo", "Eduards", "Edward", "Edwin", "Edwyn", "Eli", "Elijah", "Eliot", "Elliot", "Elliott", "Ellis", "Emanuel", "Emerson", "Emil", "Emile", "Emir", "Emlyn", "Emmanuel", "Emmet", "Eng", "Eniola", "Enis", "Ennis", "Enrico", "Enrique", "Eoghan", "Eoin", "Eric", "Erik", "Eriz", "Ernie-Jacks", "Eroni", "Eryk", "Eshan", "Essa", "Esteban", "Ethan", "Etienne", "Etinosa", "Euan", "Eugene", "Evan", "Evann", "Ewan", "Ewen", "Ewing", "Exodi", "Ezekiel", "Ezra", "Faheem", "Faisal", "Fawaz", "Fawkes", "Faysal", "Fearghus", "Feden", "Felix", "Fergal", "Fergie", "Fergus", "Ferre", "Fezaan", "Fiachra", "Fikret", "Filip", "Filippo", "Finan", "Findlay", "Findlay-James", "Finlay", "Finley", "Finn", "Finnan", "Finnean", "Finnen", "Finnlay", "Finnley", "Fintan", "Fionn", "Firaaz", "Fletcher", "Flint", "Florin", "Flyn", "Flynn", "Fodeba", "Folarinwa", "Forbes", "Forgan", "Forrest", "Fox", "Francesco", "Francis", "Francisco", "Franciszek", "Franco", "Frank", "Frankie", "Franklin", "Franko", "Fraser", "Frazer", "Fred", "Freddie", "Frederick", "Fruin", "Fyn", "Fynn", "Gabriel", "Gallagher", "Gareth", "Garren", "Garrett", "Garry", "Gary", "Gavin", "Gavin-Lee", "Gene", "Geoff", "Geoffrey", "Geomer", "Geordan", "Geordie", "George", "Georgia", "Gerard","Gideon", "Gil", "Gio", "Girijan", "Girius", "Gjan", "Glascott", "Glen", "Glenn", "Gordon", "Grady", "Graeme", "Graham", "Grahame", "Grant", "Grayson", "Greg", "Gregor", "Gregory", "Gurwinder", "Gus", "Gustav", "Guthrie", "Guy", "Gytis", "Habeeb", "Hadji", "Hadyn", "Hagun", "Haiden", "Haider", "Hamad", "Hamid", "Hamish", "Hamza", "Hamzah", "Han", "Hansen",, "Hari", "Harikrishna", "Haris", "Harish", "Harjeevan", "Harjyot", "Harlee", "Harleigh", "Harley", "Harman", "Harnek", "Harold", "Haroon", "Harper", "Harri", "Harrington", "Harris", "Harrison", "Harry", "Harvey", "Harvie", "Harvinder", "Hasan", "Haseeb", "Hashem", "Hashim", "Hayden", "Haydn", "Haydon", "Haydyn", "Hcen", "Hector", "Heddle", "Heidar", "Heini", "Hendri", "Henri", "Henry", "Herbert", "Heyden", "Hiro", "Hirvaansh", "Hishaam", "Hogan", "Honey", "Hong", "Hope", "Hopkin", "Hosea", "Howard", "Howie", "Hristomir", "Hubert", "Hugh", "Hugo", "Humza", "Hunter", "Husnain", "Hussain", "Hussan", "Hussnain", "Hussnan", "Hyden", "Iagan", "Iain", "Ian", "Ibraheem", "Ibrahim", "Idahosa", "Idrees", "Idris", "Iestyn", "Ieuan", "Igor", "Ihtisham", "Ijay", "Ikechukwu", "Ikemsinachukwu", "Ilyaas", "Ilyas", "Iman", "Immanuel", "Inan", "Indy", "Ines", "Innes", "Ioannis", "Ireayomide", "Ireoluwa", "Irvin", "Irvine", "Isa", "Isaa", "Isaac", "Isaiah", "Isak", "Isher", "Ishwar", "Isimeli", "Isira", "Ismaeel", "Ismail", "Israel", "Issiaka", "Ivan", "Ivar", "Izaak", "J", "Jaay", "Jac", "Jace", "Jack", "Jacki", "Jackie", "Jack-James", "Jackson", "Jacky", "Jacob", "Jacques", "Jad", "Jaden", "Jadon", "Jadyn", "Jae", "Jagat", "Jago", "Jaheim", "Jahid", "Jahy", "Jai", "Jaida", "Jaiden", "Jaidyn", "Jaii", "Jaime", "Jai-Rajaram", "Jaise", "Jak", "Jake", "Jakey", "Jakob", "Jaksyn", "Jakub", "Jamaal", "Jamal", "Jameel", "Jameil", "James", "James-Paul", "Jamey", "Jamie", "Jan", "Jaosha", "Jardine", "Jared", "Jarell", "Jarl", "Jarno", "Jarred", "Jarvi", "Jasey-Jay", "Jasim", "Jaskaran", "Jason", "Jasper", "Jaxon", "Jaxson", "Jay", "Jaydan", "Jayden", "Jayden-James", "Jayden-Lee", "Jayden-Paul", "Jayden-Thomas", "Jaydn", "Jaydon", "Jaydyn", "Jayhan", "Jay-Jay", "Jayke", "Jaymie", "Jayse", "Jayson", "Jean", "Jean-Lewis", "Jean-Pierre", "Jebadiah", "Jed", "Jedd", "Jedidiah", "Jeemie", "Jeevan", "Jeffrey", "Jensen", "Jenson", "Jensyn", "Jeremy", "Jerome", "Jeronimo", "Jerrick", "Jerry", "Jesse", "Jesuseun", "Jeswin", "Jevan", "Jeyun", "Jez", "Jia", "Jian", "Jiao", "Jimmy", "Jincheng", "JJ", "Joaquin", "Joash", "Jock", "Jody", "Joe", "Joeddy", "Joel", "Joey", "Joey-Jack", "Johann", "Johannes", "Johansson", "John", "Johnathan", "Johndean", "Johnjay", "John-Michael", "Johnnie", "Johnny", "Johnpaul", "John-Paul", "John-Scott", "Johnson", "Jole", "Jomuel", "Jon", "Jonah", "Jonatan", "Jonathan", "Jonathon", "Jonny", "Jonothan", "Jon-Paul", "Jonson", "Joojo", "Jordan", "Jordi", "Jordon", "Jordy", "Jordyn", "Jorge", "Joris", "Jorryn", "Josan", "Josef", "Joseph", "Josese", "Josh", "Joshiah", "Joshua", "Josiah", "Joss", "Jostelle", "Joynul", "Juan", "Jubin", "Judah", "Jude", "Jules", "Julian", "Julien", "Jun", "Junior", "Jura", "Justan", "Justin", "Justinas", "Kaan", "Kabeer", "Kabir", "Kacey", "Kacper", "Kade", "Kaden", "Kadin", "Kadyn", "Kaeden", "Kael", "Kaelan", "Kaelin", "Kaelum", "Kai", "Kaid", "Kaidan", "Kaiden", "Kaidinn", "Kaidyn", "Kaileb", "Kailin", "Kain", "Kaine", "Kainin", "Kainui", "Kairn", "Kaison", "Kaiwen", "Kajally", "Kajetan", "Kalani", "Kale", "Kaleb", "Kaleem", "Kal-el", "Kalen", "Kalin", "Kallan", "Kallin", "Kalum", "Kalvin", "Kalvyn", "Kameron", "Kames", "Kamil", "Kamran", "Kamron", "Kane", "Karam", "Karamvir", "Karandeep", "Kareem", "Karim", "Karimas", "Karl", "Karol", "Karson", "Karsyn", "Karthikeya", "Kasey", "Kash", "Kashif", "Kasim", "Kasper", "Kasra", "Kavin", "Kayam", "Kaydan", "Kayden", "Kaydin", "Kaydn", "Kaydyn", "Kayleb", "Kaylem", "Kaylum", "Kayne", "Kaywan", "Kealan", "Kealon", "Kean", "Keane", "Kearney", "Keatin", "Keaton", "Keavan", "Keayn", "Kedrick", "Keegan", "Keelan", "Keelin", "Keeman", "Keenan", "Keenan-Lee", "Keeton", "Kehinde", "Keigan", "Keilan", "Keir", "Keiran", "Keiren", "Keiron", "Keiryn", "Keison", "Keith", "Keivlin", "Kelam", "Kelan", "Kellan", "Kellen", "Kelso", "Kelum", "Kelvan", "Kelvin", "Ken", "Kenan", "Kendall", "Kendyn", "Kenlin", "Kenneth", "Kensey", "Kenton", "Kenyon", "Kenzeigh", "Kenzi", "Kenzie", "Kenzo", "Kenzy", "Keo", "Ker", "Kern", "Kerr", "Kevan", "Kevin", "Kevyn", "Kez", "Khai", "Khalan", "Khaleel", "Khaya", "Khevien", "Khizar", "Khizer", "Kia", "Kian", "Kian-James", "Kiaran", "Kiarash", "Kie", "Kiefer", "Kiegan", "Kienan", "Kier", "Kieran", "Kieran-Scott", "Kieren", "Kierin", "Kiern", "Kieron", "Kieryn", "Kile", "Killian", "Kimi", "Kingston", "Kinneil", "Kinnon", "Kinsey", "Kiran", "Kirk", "Kirwin", "Kit", "Kiya", "Kiyonari", "Kjae", "Klein", "Klevis", "Kobe", "Kobi", "Koby", "Koddi", "Koden", "Kodi", "Kodie", "Kody", "Kofi", "Kogan", "Kohen", "Kole", "Konan", "Konar", "Konnor", "Konrad", "Koray", "Korben", "Korbyn", "Korey", "Kori", "Korrin", "Kory", "Koushik", "Kris", "Krish", "Krishan", "Kriss", "Kristian", "Kristin", "Kristofer", "Kristoffer", "Kristopher", "Kruz", "Krzysiek", "Krzysztof", "Ksawery", "Ksawier", "Kuba", "Kurt", "Kurtis", "Kurtis-Jae", "Kyaan", "Kyan", "Kyde", "Kyden", "Kye", "Kyel", "Kyhran", "Kyie", "Kylan", "Kylar", "Kyle", "Kyle-Derek", "Kylian", "Kym", "Kynan", "Kyral", "Kyran", "Kyren", "Kyrillos", "Kyro", "Kyron", "Kyrran", "Lachlainn", "Lachlan", "Lachlann", "Lael", "Lagan", "Laird", "Laison", "Lakshya", "Lance", "Lancelot", "Landon", "Lang", "Lasse", "Latif", "Lauchlan", "Lauchlin", "Laughlan", "Lauren", "Laurence", "Laurie", "Lawlyn", "Lawrence", "Lawrie", "Lawson", "Layne", "Layton", "Lee", "Leigh", "Leigham", "Leighton", "Leilan", "Leiten", "Leithen", "Leland", "Lenin", "Lennan", "Lennen", "Lennex", "Lennon", "Lennox", "Lenny", "Leno", "Lenon", "Lenyn", "Leo", "Leon", "Leonard", "Leonardas", "Leonardo", "Lepeng", "Leroy", "Leven", "Levi", "Levon", "Levy", "Lewie", "Lewin", "Lewis", "Lex", "Leydon", "Leyland", "Leylann", "Leyton", "Liall", "Liam", "Liam-Stephen", "Limo", "Lincoln", "Lincoln-John", "Lincon", "Linden", "Linton", "Lionel", "Lisandro", "Litrell", "Liyonela-Elam", "LLeyton", "Lliam", "Lloyd", "Lloyde", "Loche", "Lochlan", "Lochlann", "Lochlan-Oliver", "Lock", "Lockey", "Logan", "Loghan", "Lokesh", "Loki", "Lomond", "Lorcan", "Lorenz", "Lorenzo", "Lorne", "Loudon", "Loui", "Louie", "Louis", "Loukas", "Lovell", "Luc", "Luca", "Lucais", "Lucas", "Lucca", "Lucian", "Luciano", "Lucien", "Lucus", "Luic", "Luis", "Luk", "Luka", "Lukas", "Lukasz", "Luke", "Lukmaan", "Luqman", "Lyall", "Lyle", "Lyndsay", "Lysander", "Maanav", "Maaz", "Mac", "Macallum", "Macaulay", "Macauley", "Macaully", "Machlan", "Maciej", "Mack", "Mackenzie", "Mackenzy", "Mackie", "Macsen", "Macy", "Madaki", "Maddison", "Maddox", "Madison", "Madison-Jake", "Madox", "Mael", "Magnus", "Mahan", "Mahdi", "Mahmoud", "Maias", "Maison", "Maisum", "Maitlind", "Majid", "Makensie", "Makenzie", "Makin", "Maksim", "Maksymilian", "Malachai", "Malachi", "Malachy", "Malakai", "Malakhy", "Malcolm", "Malik", "Malikye", "Malo", "Ma'moon", "Manas", "Maneet", "Manmohan", "Manolo", "Manson", "Mantej", "Manuel", "Manus", "Marc", "Marc-Anthony", "Marcel", "Marcello", "Marcin", "Marco", "Marcos", "Marcous", "Marcquis", "Marcus", "Mario", "Marios", "Marius", "Mark", "Marko", "Markus", "Marley", "Marlin", "Marlon", "Maros", "Marshall", "Martin", "Marty", "Martyn", "Marvellous", "Marvin", "Marwan", "Maryk", "Marzuq", "Mashhood", "Mason", "Mason-Jay", "Masood", "Masson", "Matas", "Mateusz", "Mathew", "Mathias", "Mathu", "Mathuyan", "Mati", "Matt", "Matteo", "Matthew", "Matthew-William", "Matthias", "Max", "Maxim", "Maximilian", "Maximillian", "Maximus", "Maxwell", "Maxx", "Mayeul", "Mayson", "Mazin", "Mcbride", "McCaulley", "McKade", "McKauley", "McKay", "McKenzie", "McLay", "Meftah", "Mehmet", "Mehraz", "Meko", "Melville", "Meshach", "Meyzhward", "Micah", "Michael", "Michael-Alexander", "Michael-James", "Michal", "Michat", "Micheal", "Michee", "Mickey", "Miguel", "Mika", "Mikael", "Mikee", "Mikey", "Mikhail", "Mikolaj", "Miles", "Millar", "Miller", "Milo", "Milos", "Milosz", "Mir", "Mirza", "Mitch", "Mitchel", "Mitchell", "Moad", "Moayd", "Mobeen", "Modoulamin", "Modu", "Mohamad", "Mohamed", "Mohammad", "Mohammad-Bilal", "Mohammed", "Mohanad", "Mohd", "Momin", "Momooreoluwa", "Montague", "Montgomery", "Monty", "Moore", "Moosa", "Moray", "Morgan", "Morgyn", "Morris", "Morton", "Moshy", "Motade", "Moyes", "Msughter", "Mighty Mohammed", "Muhammad", "Muhammed", "Muir", "Munachi", "Muneeb", "Mungo", "Munir", "Munmair", "Munro", "Murdo", "Murray", "Murrough", "Murry", "Musa", "Musse", "Mustafa", "Mustapha", "Myles", "Mylo", "Nabeel", "Nadeem", "Nader", "Nagib", "Naif", "Nairn", "Narvic", "Nash", "Nasser", "Nassir", "Natan", "Nate", "Nathan", "Nathanael", "Nathanial", "Nathaniel", "Nathan-Rae", "Nawfal", "Nayan", "Neco", "Neil", "Nelson", "Neo", "Neshawn", "Nevan", "Nevin", "Ngonidzashe", "Nial", "Niall", "Nicholas", "Nick", "Nickhill", "Nicki", "Nickson", "Nicky", "Nico", "Nicodemus", "Nicol", "Nicolae", "Nicolas", "Nidhish", "Nihaal", "Nihal", "Nikash", "Nikhil", "Niki", "Nikita", "Nikodem", "Nikolai", "Nikos", "Nilav", "Niraj", "Niro", "Niven", "Noah", "Noel", "Nolan", "Norman", "Odynn", "Oily Odin", "Oisin", "Olaf", "Oily Olaf", "Olaoluwapolorimi", "Oily Ollie", "Olie", "Oliver", "Olivier", "Ollie", "Omar", "Oily Omar", "Oran", "Orin", "Orlando", "Orrick", "Oliy Orlando", "Orson", "Oscar", "Oswald", "Otto", "Owen", "Owyn", "Oz", "Ozzy", "Pablo", "Pacey", "Paolo", "Pardeepraj", "Parkash", "Parker", "Pascoe", "Pasquale", "Patrick", "Patrick-John", "Patrikas", "Patryk", "Paul", "Pavit", "Pawel", "Pawlo", "Pearce", "Pearse", "Pearsen", "Pedram", "Pedro", "Peirce", "Peiyan", "Pele", "Peni", "Peter", "Pootling Phillip", "Philip", "Pierce", "Pieter", "Pietro",  "Precious", "Prentice", "Presley", "Preston", "Quinn", "Raegan", "Rafael", "Rusty Rafferty", "Rafferty", "Rafi", "Raheem", "Rahil", "Rahim", "Rahman", "Ralfs", "Ralph", "Ramanas", "Rusty Rana", "Ramone", "Ramsay", "Ray", "Raymond", "Rayne", "Rusty Ray", "Raza", "Reace", "Reagan", "Reean", "Reece", "Reed", "Reegan", "Rees", "Reese", "Rusty Regean", "Rusty Reggie", "Regean", "Reggie",  "Reid", "Reigan", "Reilly", "Reily", "Reis", "Remo", "Remy","Reno", "Reo", "Reuben", "Rusty Reuben", "Reynold", "Rheyden", "Rhuan", "Rhuaridh", "Rhudi", "Rhy", "Rhys",  "Rhyse", "Riach", "Rian", "Rusty Rian", "Riccardo", "Ricco", "Rusty Ricco", "Richard", "Richey", "Richie", "Ricky", "Rico", "Ridley", "Rusty Rikki", "Rikki", "Riley", "Rio", "Ritchie", "Rob", "Robbi", "Robbie", "Robby", "Robert", "Rusty Robert", "Robin", "Rocco", "Roddy", "Rusty Rocco", "Rodrigo", "Rogerme", "Rogan", "Roger", "Rusty Roger", "Rohan", "Rusty Rohan", "Rusty Ron", "Rusty Rory", "Ronald", "Ronan", "Ronan-Benedict", "Ronin", "Ronnie", "Rooke", "Roray", "Rori", "Rusty Rory", "Rory", "Roshan", "Ross", "Rusty Ross", "Rossi", "Rowan", "Rusty Roy", "Roy", "Rusty Robin", "Ruben", "Rubhan", "Rubin", "Rubyn", "Rusty Rudy", "Rudy", "Rufus", "Rui", "Rusty Rupert", "Rupert", "Russell", "Rusty Russell", "Ryan", "Ryder", "Rusty Ryan", "Rusty Ryhs", "Rylan", "Ryley", "Rusty Ryley", "Ryo", "Rusty Rho", "Saffi", "Saghun", "Sahaib", "Sahbian", "Sahil", "Saif", "Saifaddine", "Saim", "Sajid", "Sajjad", "Salahudin", "Salman", "Salter", "Salvador", "Sam", "Saman", "Samar", "Samarjit", "Samatar", "Sambrid", "Sameer", "Sami", "Samir", "Sami-Ullah", "Samual", "Samuel", "Samuela", "Samy", "Sanaullah", "Sandro", "Sandy", "Sanfur", "Sanjay", "Santiago", "Santino", "Satveer", "Saul", "Saunders", "Savin", "Sayad", "Sayeed", "Sayf", "Scot", "Scott", "Scott-Alexander", "Seaan", "Seamas", "Seamus", "Sean", "Seane", "Sean-James", "Sean-Paul", "Seb", "Sebastian", "Sebastien", "Sergei", "Sergio", "Seth", "Sethu", "Shaun", "Shaun-Paul", "Silver Shaun", "Silver Shaye", "Silver Shayne", "Silver Sidney", "Silas", "Silver Simon", "Sinai", "Skye", "Silver Spencer", "Stanley", "Silver Stanley",
    "Data", "Robbie", "Robert", "GH-7", "Droideka", "Pixel", "Holmes", "Sherlock", "Thing", "Bit", "Brainstorm", "Unity", "Spark", "Sparky", "Copper", "Clank", "Bolt", "Screw", "Metal Mickey", "Metal Mike", "Metal Mohammed", "Metal Martin", "Metallic Mark", "Metal Marigold", "Metallic Mary", "Metal Mia", "Metallic Madeline", "Metal Margaret", "Titanium Tony", "Titanium Trevor", "Metal Mel", "Titanium Tanya", "Titanium Tiffany", "Titanium Teresa", "Titanium Tyla", "Titanium Tilly", "Titanium Tess", "Titanium Terry", "Copper Carl", "Copper Clara", "Copper Clarence", "Copper Chloe", "Optimus", "Drodo", "Drono",
];

var job = [
    "Analyzer",
    "Archiveer",
    "Authenticator",
    "Automator",
    "Bender",
    "Driller",
    "Sanitation",
    "Enforcer",
    "Education",
    "Emergency",
    "Encryption",
    "Encryptor",
    "Cleaning",
    "Compiler",
    "Compiling",
    "Compressor",
    "Cleansing",
    "Washing",
    "Waste Disposal",
    "Shepherding",
    "Escort",
    "Protection",
    "Confidence",
    "Byte",
    "Processing",
    "Firewall",
    "Loader",
    "Mechanism",
    "Matrix",
    "Technician",
    "Driver",
    "Info",
    "Safety",
    "Info Collector",
    "Input Collector",
]

var type = [
    "Droid",
    "Droid",
    "Drone",
    "Device",
    "Device",
    "Emulator",
    "Emulator",
    "Encoder",
    "Bot",
    "Bot",
    "Bot",
    "Robot",
    "Robot",
    "Robot",
    "Android",
    "Android",
    "Mech",
    "Mech",
    "Machine",
    "Machine",
    "Entity",
    "Thing",
    "Bit",
    "Golem",
    "Simulator",
    "Scrambler",
]

var part1 = [
    "Arc",
    "A",
    "Am",
    "An",
    "Ant",
    "Aer",
    "Aeria",
    "Ar",
    "Aria",
    "Av",
    "Ba",
    "Ban",
    "Bant",
    "Bar",
    "Be",
    "Bi",
    "Bro",
    "Bo",
    "Bon",
    "B’",
    "Ca",
    "Camp",
    "Carr",
    "Ce",
    "Cer",
    "Ci",
    "Clo",
    "Chur",
    "Cold",
    "Con",
    "Coper",
    "Corr",
    "Cu",
    "Cy",
    "C’",
    "Da",
    "Dark",
    "De",
    "Del",
    "Deep",
    "Dep",
    "Der",
    "Dikar",
    "Du",
    "E",
    "Ea",
    "El",
    "Er",
    "Exo",
    "Far",
    "Fur",
    "Fung",
    "Galad",
    "Gunt",
    "Gren",
    "H",
    "Hub",
    "Har",
    "Ib",
    "Iv",
    "Jan",
    "Ko",
    "K'",
    "Kaan",
    "Khan",
    "Lad",
    "Leg",
    "Lo",
    "Lo",
    "Lone",
    "Long",
    "L'",
    "Ll'",
    "Majest",
    "Maz",
    "Mer",
    "Merc",
    "Miran",
    "Mun",
    "Nar",
    "Nad",
    "Night",
    "Nir",
    "Nit",
    "Nib",
    "Non",
    "No",
    "Ox",
    "Oz",
    "Pa",
    "Pan",
    "Pert",
    "Plane",
    "Plu",
    "Plo",
    "Pr",
    "Pra",
    "Pran",
    "Por",
    "Pool",
    "Pling",
    "Rem",
    "Sai",
    "S'",
    "So'",
    "Sat",
    "Sen",
    "Sev",
    "Shan",
    "Shandak",
    "Siden",
    "Sizen",
    "Sot",
    "Sot Ank",
    "Sot Lo",
    "Scar",
    "Steep",
    "Suil",
    "Sul",
    "Sum",
    "Sva",
    "T",
    "Tha",
    "Than",
    "Than Dok",
    "Thry",
    "Trel",
    "Treep",
    "Ter Threp",
    "Tol",
    "Ur",
    "Uran",
    "Vak",
    "Ven",
    "Ver",
    "Viv",
    "Vul",
    "Won",
    "Wo",
    "Win",
    "War",
    "Wun",
    "X",
    "Xy",
    "Zing",
];

var part2 = [
    "addon",
    "adon",
    "aldi",
    "aka",
    "aleko",
    "alis",
    "alla",
    "alos",
    "an",
    "aran",
    "ara",
    "arth",
    "atoid",
    "avera",
    "budram",
    "can",
    "cania",
    "cania",
    "cury",
    "chil",
    "chin",
    "con",
    "da",
    "dai",
    "daleko",
    "dalekon",
    "doria",
    "dikar",
    "eko",
    "ella",
    "elos",
    "elius",
    "elerth",
    "elialia",
    "eria",
    "era",
    "enella",
    "erebus",
    "es",
    "esh",
    "eaux",
    "ebus",
    "eus",
    "eran",
    "fall",
    "far",
    "finer",
    "illa",
    "il",
    "ill",
    "idian",
    "inax",
    "iman",
    "itas",
    "ius",
    "iza",
    "iru",
    "kail",
    "kien",
    "las",
    "lax",
    "lak",
    "lok",
    "los",
    "lox",
    "lon",
    "nar",
    "nia",
    "nor",
    "nt",
    "ntos",
    "oid",
    "oin",
    "ol",
    "omi",
    "on",
    "ong",
    "opa",
    "olok",
    "os",
    "oros",
    "orox",
    "orkon",
    "ovin",
    "ox",
    "pid",
    "pod",
    "reus",
    "rock",
    "rog",
    "ryn",
    "sea",
    "shaa",
    "tan",
    "tara",
    "ton",
    "to",
    "tos",
    "udros",
    "um",
    "umi",
    "uram",
    "urn",
    "ury",
    "urdan",
    "us",
    "utlis",
    "va",
    "vas",
    "vav",
    "vin",
    "vis",
    "viz",
    "za",
    "al",
]

var suffix = [
    "Alpha",
    "Beta",
    "Gamma",
    "Kappa",
    "Sigma",
    "Prime",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
    "E1", "B2", "C3", "D4"
]

generateNew = function () {
    output.html("");

    for (i = 0; i <= num; i++) {

        var final = "";
        var typeChance = Math.floor(Math.random() * 100);
        var prefixChance = Math.floor(Math.random() * 100);
        var suffixChance = Math.floor(Math.random() * 100);
        var randomName = firstName[Math.floor(Math.random() * firstName.length)];
        var randomJob = job[Math.floor(Math.random() * job.length)];
        var randomType = type[Math.floor(Math.random() * type.length)];
        var randomPart1 = part1[Math.floor(Math.random() * part1.length)];
        var randomPart2 = part2[Math.floor(Math.random() * part2.length)];
        var randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];
        var randomSuffix = suffix[Math.floor(Math.random() * suffix.length)];

        if (typeChance <= 20){
            final = randomJob + " " + randomName;
        } else if(typeChance > 20 && typeChance <= 40) {
            final = randomName + "bot";
        } else if(typeChance > 40 && typeChance <= 70) {
            final = randomJob + " " + randomType;
        } else if(typeChance > 70 && typeChance <= 90) {
            final = randomType + " " + randomName;
        } else {
            final = randomPart1 + randomPart2 + "bot";
        }

        if (prefixChance <= 60) {
            final = randomPrefix + " " + final;
        }

        if (suffixChance <= 50){
            final = final + " " + randomSuffix;
        } else if(suffixChance > 50 && suffixChance <= 70) {
            final = final + " " + Math.floor(Math.random() * 700);
        }

        output.prepend("<p>"+final+"</p>");
    }

}

generateNew();