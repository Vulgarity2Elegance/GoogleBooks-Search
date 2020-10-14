import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import Search from "../components/Search"
import {API} from "../utils/API"

function Home() {
    const [query, setQuery] = useState("")
    const handleInputChange = e => {setQuery(e.target.value)}

    const handleFormSubmit = async e => {
        e.preventDefault()
        setQuery('')
        const result = await API.getBooks(query)
        console.log(result)
    }

    return (
        <Box component='div'>
            <Search 
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            query={query}
            />
        </Box>
    )
}

export default Home