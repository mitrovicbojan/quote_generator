const quoteText = document.getElementById('quote')
      quoteAuthor = document.getElementById('quoteAuthor'),
      quoteBtn = document.getElementById('verse-btn');


function quoteRandom() {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        quoteText.textContent = data.content;
        quoteAuthor.textContent = `-- ${data.author}`;
      });
}

quoteRandom();
quoteBtn.addEventListener('click', () => {
    quoteRandom();
});
