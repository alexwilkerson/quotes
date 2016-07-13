var colors;
var quotes;

var quoteCard = document.getElementById("quote-card");


var randomQuote = function() {
    console.log("random quote");
    quoteCard.className = "quote-card box-shadow deleting";
    setTimeout(function() {
        var parentOfCard = quoteCard.parentNode;
        parentOfCard.removeChild(quoteCard);
        var newCard = createNewCard();
        parentOfCard.appendChild(newCard);
        newCard.onclick = randomQuote;
    }, 400);
}

function createNewCard() {
    var newCard = document.createElement("figure");

    var quote = document.createElement("blockquote");

    var author = document.createElement("figcaption");

    var twitter = document.createElement("a");

    newCard.id = "quote-card";
    newCard.className = "quote-card box-shadow";
    newCard.style.color = "blue";
    
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

quoteCard.onclick = randomQuote;
