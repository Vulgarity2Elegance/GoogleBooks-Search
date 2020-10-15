import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import Search from "../components/Search"
import {API} from "../utils/API"
import Results from "../components/Results"

function Home() {
    const [bookState, setBookState] =useState([]);

    const [query, setQuery] = useState("")
    const handleInputChange = e => {setQuery(e.target.value)}

    const handleFormSubmit = async e => {
        e.preventDefault()
        setQuery('')
        const results = await API.getBooks(query)
        const books = results.data.items
        if (books) {
            setBookState(books)
        }
        console.log(books)
    }

    return (   
        <Box component='div'>
            <Search 
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            query={query}
            />
            <Results books={bookState}/>
        </Box>

    )
}

export default Home