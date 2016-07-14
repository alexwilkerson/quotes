var colors;
var quotes;

var quoteCard = document.getElementById("quote-card");

var randomQuote = function(event) {
    if (event.propertyName==="transform"){
        var parentOfCard = quoteCard.parentNode;
        parentOfCard.removeChild(quoteCard);
        quoteCard = createNewCard();
        parentOfCard.appendChild(quoteCard);
        // quoteCard.style.webkitTransform = "translateX(100vw)";
        // quoteCard.style.transform = "translateX(100vw)";
        quoteCard.className = "quote-card box-shadow new";
        window.setTimeout(function() {
           quoteCard.style.webkitTransform = "translateX(0)";
           quoteCard.style.transform = "translateX(0)";
        }, 1000); // used to enable transisition reset
    }
}

var moveLeft = function() {
    quoteCard.addEventListener("transitionend", randomQuote, false);
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
