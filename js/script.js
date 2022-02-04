

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
    tag: "#software"
  },
  {
    quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
    source: 'Patrick McKenzie',
    citation: 'Twitter',
    year: 2016,
  }
];

/***
 * `getRandomNumber` function
***/

function getRandomNumber(numb) {
  var numb = Math.floor(Math.random() * numb);
  return numb;
}

/***
 * `getRandomQuote` function
***/
function getRandomQuote(array){
  var index = getRandomNumber(array.length);
  return quotes[index];
}


/***
 * `printQuote` function
***/
function printQuote(){
  let qObj = getRandomQuote(quotes);
  let htmlString = `<p class="quote">${qObj.quote}</p>
                    <p class="source">${qObj.source}`;

    if (qObj.hasOwnProperty('citation')) {
      htmlString += `<span class="citation"> ${qObj.citation}</span>`;
    }
    if ('year' in qObj) {
      htmlString += `<span class="year"> ${qObj.year}</span>`;
    }
    if (qObj.tag) {
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
  // rgb values set to give colors that contrast with white color font
  // rgd red value = 0 to 100, to infuse dark colors in the mix
  // rgb green value = 50 to 100, to infuse medium shade colors in the mix;
  // rgb blue value = 50 and 155 to infuse colors with more white in the mix;
  var rgb = `rgb(${getRandomNumber(101)}, ${getRandomNumber(101) + 50}, ${getRandomNumber(156) + 100}`;
  return rgb;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
 * loads a random quote on page load
***/
printQuote();

/***
 * generates a random quote after every 30 second loop
***/

let qGenerator = setInterval(printQuote, 30000);
