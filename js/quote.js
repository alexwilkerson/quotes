var colors = [ "#de3d83", "#f54123", "#e4bd0b", "#6e7f29", "#2677bb", "#f77e5e",
               "#37bbe4", "#fe9f97", "#635045", "#b7c7bd"];
var quotes = [ 
                "Accept everything just the way it is.",
                "Do not seek pleasure for its own sake.",
                "Do not give preference to anything among all things.",
                "Think lightly of yourself and deeply of the world.",
                "Be detached from desire your whole life.",
                "Do not regret what you have done.",
                "Never be jealous.",
                "Never let yourself be saddened by a separation.",
                "Resentment and complaint are appropriate neither for oneself nor others.",
                "Do not let yourself be guided by the feeling of lust or love.",
                "Do not seek elegance and beauty in all things.",
                "Be indifferent to where you live.",
                "Do not pursue the taste of good food.",
                "Do not hold on to possessions you no longer need.",
                "Do not act following customary beliefs.",
                "Do not collect weapons or practice with weapons beyond what is useful.",
                "Do not fear death.",
                "Do not seek to possess either goods or fiefs for your old age.",
                "Respect Buddha and the gods without counting on their help.",
                "You may abandon your own body but you must preserve your honor.",
                "Never stray from the way."
              ];

var randomColor = function() {
    return colors[Math.floor(Math.random() * colors.length)];
}

var randomQuoteString = function() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

var quoteCard = document.getElementById("quote-card");
var walking = document.getElementById("walking");

var randomQuote = function(event) {
    if (event.propertyName==="transform"){
        var parentOfCard = quoteCard.parentNode;
        parentOfCard.removeChild(quoteCard);
        quoteCard = createNewCard();
        parentOfCard.appendChild(quoteCard);
        // quoteCard.style.webkitTransform = "translateX(100vw)";
        // quoteCard.style.transform = "translateX(100vw)";
        quoteCard.className = "quote-card box-shadow new";
        var randColor = randomColor();
        quoteCard.style.background = randColor;
        walking.style.color = randColor;
        window.setTimeout(function() {
           quoteCard.style.webkitTransform = "translateX(0)";
           quoteCard.style.transform = "translateX(0)";
        }, 50); // used to enable transisition reset
    }
}

var moveLeft = function() {
    quoteCard.addEventListener("transitionend", randomQuote, false);
    walking.style.color = "#000";
    quoteCard.style.webkitTransform = "translateX(-100vw)";
    quoteCard.style.transform = "translateX(-100vw)";
}

function createNewCard() {
    var newCard = document.createElement("figure");

    var quote = document.createElement("blockquote");

    var author = document.createElement("figcaption");

    var twitter = document.createElement("a");

    newCard.id = "quote-card";
    newCard.className = "quote-card box-shadow";
    newCard.onclick = moveLeft;

    var randQuote = randomQuoteString();
    quote.innerText = randQuote;

    author.className = "quote-author";
    author.innerHTML = "&mdash; Miyamoto Musashi";

    twitter.innerHTML = "<i class=\"fa fa-twitter twitter-logo text-shadow\"></i>";
    twitter.href = encodeURI("https://twitter.com/intent/tweet?text=\"" + randQuote + "\" -Miyamoto Musashi");
    twitter.id = "twitter";
    twitter.onclick = function(event) {
        event.stopPropagation(); // prevents parent from being clicked
    }

    newCard.appendChild(quote);
    newCard.appendChild(author);
    newCard.appendChild(twitter);

    return newCard;
}

var initialRandomQuote = randomQuoteString();
document.getElementsByTagName("blockquote")[0].innerHTML = initialRandomQuote;
var initialRandomColor = randomColor();
quoteCard.style.background = initialRandomColor;
document.getElementById("twitter").href = encodeURI("https://twitter.com/intent/tweet?text=\"" + initialRandomQuote + "\" -Miyamoto Musashi");
walking.style.color = initialRandomColor; 


quoteCard.onclick = moveLeft;
document.getElementById("twitter").onclick = function(event) {
    event.stopPropagation();
}
console.log(randomColor());
