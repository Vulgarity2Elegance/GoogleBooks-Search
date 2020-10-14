import axios from 'axios'

export const API = {
    // Make Ajax calls to Google Book API
    async getBooks(q) {
        const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${q}`)
        return books
    }
}