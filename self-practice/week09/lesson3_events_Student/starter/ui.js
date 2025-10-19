import { deleteQuote, addQuote, updateQuote, getAllQuotes } from "./quote"
// Lesson 3 - Events Starter

let quotes = getAllQuotes()

// Select DOM elements
const quoteList = document.getElementById('quote-list')
const form = documnet.getElementById('quoteForm')
const contentInput = document.getElementById('content')
const authorInput = document.getElementById('author')
const idInput = document.getElementById('quoteId')
const randomBtn = document.getElementById('randomBtn')
const randomDisplay = document.getElementById('randomQuoteDisplay')

function createQuoteElement(quote) {
  // a quote element example
  const { id, content, author } = quote

  const quoteel = document.createElement('div')
  const deletebutton = document.createElement('button')
  const editbtn = document.createElement('button')
  const contentel = document.createElement('p')
  const authoreel = document.createElement('p')

  contentel.textContent = content;
  authoreel.textContent = author;

  quoteel.dataset.id = id;
  deletebutton.dataset.id = id;
  deletebutton.textContent = "delete";
  deletebutton.classList.add('delete-btn')

  editbtn.dataset.id = id;
  editbtn.textContent = "Edit";
  editbtn.classList.add('edit-btn')

  quoteel.append(contentel, authoreel, deletebutton, editbtn)

  editbtn.addEventListener("click", () => {
    idInput.value = id;
    contentInput.value = content;
    authorInput.value = author;
  })

  deletebutton.addEventListener("click", () => deleteQuoteFromDOM(id))
}

// Add, edit, delete quote functions

function addQuoteToDOM(quote) {
  const sel = createQuoteElement(quote);
  quoteList.append(sel);
}
function updateQuoteInDOM(quote) {
  const id = idInput.value;
  const quoteelement = document.querySelector(`div[data-id='${id}']`)

  if (id && quoteelement) {
    const element = createQuoteElement(quote);
    quoteelement.replaceWith.quote;
  }
}

function deleteQuoteFromDOM(id) {
  const del = document.querySelector(`div[data-id='${id}']`)

  if (del) {
    del.remove()
    deleteQuote(id)
    quotes = getAllQuotes()
  }
}

function renderQuotes() {
  quoteList.replaceChildren()
  if (quotes.length > 0) quotes.forEach((p) => addQuoteToDOM(p))
}

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const quote = quotes[randomIndex]

  if (quotes.length < 1) {
    return randomDisplay.innerHTML = "<p>-- No quotes to show --</p>"
  }

  randomDisplay.innerHTML = `<p>"${quote.content}" — ${quote.author}</p>`
}

// Event listeners for form submission, edit, and delete clicks
randomBtn.addEventListener("click", showRandomQuote)
form.addEventListener("submit", (q) => {
  q.preventDefault()

  const content = contentInput.value
  const author = authorInput.value
  const id = parseInt(idInput.value)

  if (id) {
    const updateQuote = updateQuote(id, content, author)
    quotes = getAllQuotes()
    updateQuoteInDOM(updateQuote)
  } else {
    const quote = addQuote(content, author)
    quotes = getAllQuotes()
    addQuoteToDOM(quote)
  }

  form.reset()
  idInput.value = ""
})

renderQuotes()