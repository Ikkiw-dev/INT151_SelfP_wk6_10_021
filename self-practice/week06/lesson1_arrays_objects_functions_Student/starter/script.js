const quotes = []
let nextId = 1
function addQuote(content, author) {
    const length = quotes.length
    const newquote = { id: nextId++, content, author }
    if (quotes.push(newquote) === length + 1) {
        return newquote
    }
    return undefined;
}

function deleteQuote(id) {
    const delqoutes = quotes.findIndex((i) => i.id === id)
    if (delqoutes !== -1) {
        quotes.splice(delqoutes, 1)
    }
    return delqoutes;
}

function updateQuote(id, content, author) {
    const upquotes = quotes.find((e) => e.id === id)
    if (upquotes) {
        upquotes.content = content;
        upquotes.author = author;
    }
    return upquotes;
}

function getAllQuotes() {
    const allqoutes = [...quotes]
    return allqoutes;
}

// Test your functions below
// TODO: Add 3 quotes using addQuote()
// TODO: Delete 1 quote using deleteQuote()
// TODO: Update 1 quote using updateQuote()
// TODO: Print all quotes using getAllQuotes()


// 6. Test your functions below

// Add 3 quotes
console.log(addQuote('Stay hungry, stay foolish.', 'Steve Jobs'))
console.log(addQuote('Do or do not. There is no try.', 'Yoda'))
console.log(
  addQuote('Simplicity is the ultimate sophistication.', 'Leonardo da Vinci')
)

// Delete 1 quote
console.log(deleteQuote(2))

// Update 1 quote
console.log(updateQuote(1, 'Stay hungry. Stay foolish.', 'Jobs'))

// Print all quotes
console.log(getAllQuotes())