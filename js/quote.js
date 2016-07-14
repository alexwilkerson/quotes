var colors;
var quotes;

var quoteCard = document.getElementById("quote-card");

var randomQuote = function(event) {
    if (event.propertyName==="left"){
        var parentOfCard = quoteCard.parentNode;
        parentOfCard.removeChild(quoteCard);
        quoteCard = createNewCard();
        parentOfCard.appendChild(quoteCard);
        window.setTimeout(function() {
            quoteCard.className = "quote-card box-shadow";
        }, 50); // used to enable transisition reset
    }
}

var moveLeft = function() {
    quoteCard.addEventListener("transitionend", randomQuote, false);
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

    quote.innerText = "this is all a test";

    author.className = "quote-author";

    twitter.innerHTML = "<i class=\"fa fa-twitter twitter-logo text-shadow\"></i>";
    twitter.href = "#";

    newCard.appendChild(quote);
    newCard.appendChild(author);
    newCard.appendChild(twitter);

    return newCard;
}

quoteCard.onclick = moveLeft;
