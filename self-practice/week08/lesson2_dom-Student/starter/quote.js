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

export { addQuote, deleteQuote, updateQuote, getAllQuotes }
