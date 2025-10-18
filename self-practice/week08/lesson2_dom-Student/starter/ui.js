//ทำการ import function เข้ามา 
import { addQuote, getAllQuotes } from "./quote.js"

addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
addQuote('Do or do not. There is no try.', 'Yoda')
addQuote('Simplicity is the ultimate sophistication.', 'Leonardo da Vinci')

// Step 1: Create an array to hold quote objects
let quotes = getAllQuotes()

// Step 2: Select the DOM element where quotes will be rendered
const quoteList = document.getElementById('quote-list')

// Step 3: Define a function called renderQuotes()
// This function should:
// - Clear the quoteList element
// - Loop through the quotes array
// - For each quote, create a <p> element with content and author
// - Append each <p> to quoteList
function renderQuotes() {
    quoteList.innerHTML = ''
    quotes.forEach((q) => {
        const p = document.createElement('p')
        p.textContent = `${q.content} - ${q.author}`
        quoteList.appendChild(p)
    });
}

renderQuotes();
// Step 4: Add test quotes manually and call renderQuotes()
// Example:
// addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
// renderQuotes();
