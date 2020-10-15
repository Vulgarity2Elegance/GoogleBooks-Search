import React from 'react'
import {  Container, Grid,  Paper,  } from '@material-ui/core'
import Book from "./Book"

function Results(props) {
    const books = props.books

    return(
    <Container maxWidth='lg'>
        <Paper style={{marginTop: 25, backgroundColor: '#16264c'}}>
        <Grid container justify='space-evenly'>
        {books.map((book) => {
            const key = book.id
             const title = book.volumeInfo.title
             const subtitle = book.volumeInfo.subtitle
             const authors= book.volumeInfo.authors
             const description= book.volumeInfo.description
             const picture= book.volumeInfo.imageLinks.thumbnail
             const url= book.volumeInfo.infoLink
            return(
                <Book key={key} title={title} subtitle={subtitle} authors={authors} description={description} picture={picture} url={url} />
            ) 
        })}
        </Grid>
        </Paper>
    </Container>
    )
}

export default Results