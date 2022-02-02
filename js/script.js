/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
let quotes = [
  {
    quote: 'A program is never less than 90% complete, and never more than 95% complete.',
    source: 'Terry Baker',
    citation: 'softwarequotes.com',
    year: 2016,
  },
  {
    quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    source: 'Martin Golding',
    citation: 'softwarequotes.com',
    year: 2018,
  },
  {
    quote: "Real programmers don't comment their code. If it was hard to write, it should be hard to understand.",
    source: 'unknown',
    citation: 'devglan.com',
    year: null,
  },
  {
    quote: "Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
    source: 'Linus Torvalds',
    citation: 'devglan.com',
    year: 2008,
  },
  {
    quote: "Your mind is programmable - if you're not programming your mind, else will program it for you.",
    source: 'Jeremy Hammond',
    citation: 'devglan.com',
    year: 2014,
    tag: "#program"
  },
  {
    quote: 'The function of a good software is to make the complex appear to be simple.',
    source: 'Grady Booch',
    citation: 'devglan.com',
    year: 2003,
    tag: "#software"
  },
  {
    quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
    source: 'Patrick McKenzie',
    citation: 'Twitter',
    year: 2016,
  }
];
let colors = ['#023e8a', '#4d908e', '#ca6702', '#2d6a4f', '#EC7063', '#AF7AC5', '#5DADE2', '#48C9B0', '#58D68D', '#F7DC6F', '#F8C471', '#F0B27A', '#E59866', '#3498DB', '#1ABC9C', '#D35400'];

/***
 * `getRandomNumber` function
***/

function getRandomNumber(array) {
  var numb = Math.floor(Math.random() * array.length);
  return numb;
}

/***
 * `getRandomQuote` function
***/
function getRandomQuote(array){
  var index = getRandomNumber(array);
  return quotes[index];
}


/***
 * `printQuote` function
***/
function printQuote(){
  let qObj = getRandomQuote(quotes);
  let htmlString = `<p class="quote">${qObj.quote}</p>
      <p class="source">${qObj.source}`;

    if (qObj.citation != undefined) {
      htmlString += `<span class="citation"> ${qObj.citation}</span>`;
    }
    if (qObj.year != undefined || qObj.year != null) {
      htmlString += `<span class="year"> ${qObj.year}</span>`;
    }
    if (qObj.tag != undefined) {
      htmlString += `<span class="tag"> ${qObj.tag}</span></p>`;
    }
    htmlString += `</p>`;

    document.getElementById('quote-box').innerHTML = htmlString;
    document.body.style.backgroundColor = `${randomColor()}`;
}

/***
 * function to change background color on every click to generate random quote
***/

function randomColor() {
  var index = getRandomNumber(colors);
  return colors[index];
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
 * load a random quote on load
***/
printQuote();
