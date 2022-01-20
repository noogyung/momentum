// const axios = require("axios");
// const cherrio = require("cheerio");

// const quoteList ={
//     'quote':'',
//     'author':''
// }

// function getData(){
//     request("http://www.quotationspage.com/random.php", function(err, res, body){
//         const $ = cherrio.load(body);
//         const bodyList = $(".content dl").map(function (i, element){
//             quoteList[quote] = String($(element).find("dl:nth-of-type(1)").text());
//             quoteList[author] = String($(element).find("dl:nth-of-type(2)").text());

//             console.log(quoteList);
//         });
//     });
// }

// getData();


const quotes = [{
    quote:"tatdstsdtatsdst",
    author:"stststs"
}];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
