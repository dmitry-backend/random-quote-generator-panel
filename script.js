const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don't let yesterday take up too much of today.",
  "You learn more from failure than from success.",
  "It's not whether you get knocked down, it's whether you get up.",
  "If you are working on something exciting, it will keep you motivated."
];

const quoteEl = document.getElementById("quote");
const newQuoteBtn = document.getElementById("newQuote");

let lastIndex = -1;

function getRandomQuote() {
  let index;

  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === lastIndex);

  lastIndex = index;
  return quotes[index];
}

newQuoteBtn.addEventListener("click", () => {
  quoteEl.textContent = getRandomQuote();
});
