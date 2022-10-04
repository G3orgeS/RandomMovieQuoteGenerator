const quote = function(){
    const quotes = [{

    quote: "Frankly, my dear, I don't give a damn.",
    movie: "- GONE WITH THE WIND"
},
{
    quote: "I'm going to make him an offer he can't refuse.",
    movie: "- THE GODFATHER"
},
{
    quote: "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
    movie: "- ON THE WATERFRONT"
},
{
    quote: "Toto, I've got a feeling we're not in Kansas anymore.",
    movie: "- WIZARD OF OZ"
},
{
    quote: "Here's looking at you, kid",
    movie: "- CASABLANCA"
},
{
    quote: "Go ahead, make my day",
    movie: "- SUDDEN IMPACT"
},
{
    quote: "All right, Mr. DeMille, I'm ready for my closeup.",
    movie: "- SUNSET BLVD."
},
{
    quote: "May the Force be with you.",
    movie: "- STAR WARS "
},
{
    quote: "Fasten your seatbelts. It's going to be a bumpy night.",
    movie: "- ALL ABOUT EVE"
},
{
    quote: "You talking to me?",
    movie: "- TAXI DRIVER"
},
{
    quote: "What we've got here is failure to communicate.",
    movie: "- COOL HAND LUKE"
},
{
    quote: "I love the smell of napalm in the morning",
    movie: "- APOCALYPSE NOW"
},
{
    quote: "Love means never having to say you're sorry",
    movie: "- LOVE STORY"
},
{
    quote: "The stuff that dreams are made of",
    movie: "- MALTESE FALCON"
},
{
    quote: "E.T. phone home.",
    movie: "- E.T. THE EXTRATERRESTRIAL"
},
{
    quote: "They call me Mister Tibbs!",
    movie: "- IN THE HEAT OF THE NIGHT"
},
{
    quote: "Rosebud.",
    movie: "- CITIZEN KANE"
},
{
    quote: "Made it, Ma! Top of the world!",
    movie: "- WHITE HEAT"
},
{
    quote: "I'm as mad as hell, and I'm not going to take this anymore!",
    movie: "- NETWORK"
},
{
    quote: "Louis, I think this is the beginning of a beautiful friendship.",
    movie: "- CASABLANCA"
},
{
    quote: "A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.",
    movie: "- SILENCE OF THE LAMBS"
},
{
    quote: "Bond. James Bond.",
    movie: "- DR. NO"
},
{
    quote: "There's no place like home.",
    movie: "- WIZARD OF OZ"
},
{
    quote: "I am big! It's the pictures that got small.",
    movie: "- SUNSET BLVD."
},
{
    quote: "Show me the money!",
    movie: "- JERRY MAGUIRE"
},
{
    quote: "Why don't you come up sometime and see me?",
    movie: "- SHE DONE HIM WRONG"
},
{
    quote: "I'm walking here! I'm walking here!",
    movie: "- MIDNIGHT COWBOY"
},
{
    quote: "Play it, Sam. Play 'As Time Goes By.'",
    movie: "- CASABLANCA"
},
{
    quote: "You can't handle the truth!",
    movie: "- A FEW GOOD MEN"
},
{
    quote: "I want to be alone.",
    movie: "- GRAND HOTEL"
},
{
    quote: "After all, tomorrow is another day!",
    movie: "- GONE WITH THE WIND"
},
{
    quote: "Round up the usual suspects.",
    movie: "- CASABLANCA"
},
{
    quote: "I'll have what she's having",
    movie: "- WHEN HARRY MET SALLY"
},
{
    quote: "You know how to whistle, don't you, Steve? You just put your lips together and blow.",
    movie: "- TO HAVE AND HAVE NOT"
},
{
    quote: "You're gonna need a bigger boat.",
    movie: "- JAWS"
},
{
    quote: "Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!",
    movie: "- TREASURE OF THE SIERRA MADRE,"
},
{
    quote: "I'll be back.",
    movie: "- TERMINATOR"
},
{
    quote: "Today, I consider myself the luckiest man on the face of the earth.",
    movie: "- PRIDE OF THE YANKEES"
},
{
    quote: "If you build it, he will come",
    movie: "- FIELD OF DREAMS"
},
{
    quote: "Mama always said life was like a box of chocolates. You never know what you're gonna get.",
    movie: "- FORREST GUMP"
},
{
    quote: "We rob banks.",
    movie: "- BONNIE AND CLYDE"
},
{
    quote: "We'll always have Paris.",
    movie: "- CASABLANCA"
},
{
    quote: "I see dead people.",
    movie: "- SIXTH SENSE"
},
{
    quote: "Stella! Hey, Stella!",
    movie: "- A STREETCAR NAMED DESIRE"
},
{
    quote: "Oh, Jerry, don't let's ask for the moon. We have the stars.",
    movie: "- VOYAGER"
},
{
    quote: "Shane. Shane. Come back!",
    movie: "- SHANE"
},
{
    quote: "Well, nobody's perfect.",
    movie: "- SOME LIKE IT HOT"
},
{
    quote: "It's alive! It's alive!",
    movie: "- FRANKENSTEIN"
},
{
    quote: "Houston, we have a problem.",
    movie: "- APOLLO 13"
},
{
    quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
    movie: "- DIRTY HARRY"
},
{
    quote: "You had me at 'hello.'",
    movie: "- JERRY MAGUIRE"
},
{
    quote: "One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know",
    movie: "- ANIMAL CRACKERS"
},
{
    quote: "There's no crying in baseball!",
    movie: "- LEAGUE OF THEIR OWN"
},
{
    quote: "La-dee-da, la-dee-da.",
    movie: "- ANNIE HALL"
},
{
    quote: "A boy's best friend is his mother.",
    movie: "- PSYCHO"
},
{
    quote: "Greed, for lack of a better word, is good",
    movie: "- WALL STREET"
},
{
    quote: "Keep your friends close, but your enemies closer.",
    movie: "- THE GODFATHER II"
},
{
    quote: "As God is my witness, I'll never be hungry again.",
    movie: "- GONE WITH THE WIND"
},
{
    quote: "Well, here's another nice mess you've gotten me into!",
    movie: "- SONS OF THE DESERT"
},
{
    quote: "Say 'hello' to my little friend!",
    movie: "- SCARFACE"
},
{
    quote: "What a dump.",
    movie: "- BEYOND THE FOREST"
},
{
    quote: "Gentlemen, you can't fight in here! This is the War Room!",
    movie: "- DR. STRANGELOVE"
},
{
    quote: "Elementary, my dear Watson.",
    movie: "- ADVENTURES OF SHERLOCK HOLMES,"
},
{
    quote: "Take your stinking paws off me, you damned dirty ape.",
    movie: "- PLANET OF THE APES"
},
{
    quote: "Here's Johnny!",
    movie: "- THE SHINING"
},
{
    quote: "They're here! ",
    movie: "- POLTERGEIST"
},
{
    quote: "Is it safe?",
    movie: "- MARATHON MAN"
},
{
    quote: "Forget it, Jake, it's Chinatown.",
    movie: "- CHINATOWN"
},
{
    quote: "Hasta la vista, baby",
    movie: "- TERMINATOR 2: JUDGMENT DAY"
},
{
    quote: "Open the pod bay doors, HAL.",
    movie: "- 2001: A SPACE ODYSSEY"
},
{
    quote: "Yo, Adrian!",
    movie: "- ROCKY"
},
{
    quote: "Oh, no, it wasn't the airplanes. It was Beauty killed the Beast",
    movie: "- KING KONG"
},
{
    quote: "My precious.",
    movie: "- LORD OF THE RINGS: TWO TOWERS,"
},
{
    quote: "A martini. Shaken, not stirred.",
    movie: "- GOLDFINGER"
},
{
    quote: "I feel the need — the need for speed!",
    movie: "- TOP GUN"
},
{
    quote: "Nobody puts Baby in a corner.",
    movie: "- DIRTY DANCING"
},
{
    quote: "I'm king of the world!",
    movie: "- TITANIC"
},
{
    quote: "Snap out of it!",
    movie: "- MOONSTRUCK"
}



// let arrayIndex = Math.floor(Math.random() * quotes.length);
// document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
// document.getElementById("author").innerHTML = quotes[arrayIndex].author;
];

let arrayNr = Math.floor(Math.random() * quotes.length);

document.getElementById("quotes").innerHTML = quotes[arrayNr].quote;

document.getElementById("movie").innerHTML = quotes[arrayNr].movie;

}();


