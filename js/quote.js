var colors;
var quotes;

var quoteCard = document.getElementById("quote-card");

    /*
var randomQuote = function() {
    console.log("random quote");
    var parentofCard = quoteCard.parentNode;
    quoteCard.className = "quote-card box-shadow deleting";
    quoteCard = createNewCard();
    document.getElementById("center").appendChild(quoteCard);
    quoteCard.className = "quote-card box-shadow";
    quoteCard = createNewCard();
    quoteCard.onclick = randomQuote;
    quoteCard.className = "quote-card box-shadow new";
    quoteCard.parentNode.appendChild(quoteCard);
    quoteCard.className = "quote-card box-shadow";
}*/

var randomQuote = function(event) {
    if (event.propertyName==="left"){
        console.log("randomQuote called");
        var parentOfCard = quoteCard.parentNode;
        parentOfCard.removeChild(quoteCard);
        quoteCard = createNewCard();
        parentOfCard.appendChild(quoteCard);
        quoteCard.className = "quote-card box-shadow";
    }
}

var moveLeft = function() {
    quoteCard.className = "quote-card box-shadow deleting";
}

function createNewCard() {
    var newCard = document.createElement("figure");

    var quote = document.createElement("blockquote");

    var author = document.createElement("figcaption");

    var twitter = document.createElement("a");

    newCard.id = "quote-card";
    newCard.className = "quote-card box-shadow new";
    newCard.onclick = moveLeft;
    newCard.addEventListener("transitionend", randomQuote, false);

    quote.innerText = "this is all a test";

    author.className = "quote-author";

    twitter.innerHTML = "<i class=\"fa fa-twitter twitter-logo text-shadow\"></i>";
    twitter.href = "#";

    newCard.appendChild(quote);
    newCard.appendChild(author);
    newCard.appendChild(twitter);

    return newCard;
}
// when figure is clicked
    // move figure offscreen
    // remove
    // add figure with random quote, and random color
    // move new firue on screen

quoteCard.onclick = moveLeft;
quoteCard.addEventListener("transitionend", randomQuote, false);
