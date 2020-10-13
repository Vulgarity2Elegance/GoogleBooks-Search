import React from "react"
import { Container, makeStyles, Paper, Typography } from '@material-ui/core'
import Image from "../assets/bg-img.png"

const useStyles = makeStyles({
    heroContainer: {
        height: 250,
        backgroundImage: `url(${Image})`,    
        marginTop: 25  
    },
    title: {
        color: 'tan',
        textAlign: "center"
    }
})

const Title = () => {
    const classes = useStyles();
    return (
      <Container maxWidth='lg'> 
        <Paper className={classes.heroContainer}>
             <Typography className={classes.title} variant='h2'>
                React Google Books Search
            </Typography>
            <Typography className={classes.title} variant='h5'>
                Search for and Save Books of Interest
            </Typography> 
        </Paper>
      </Container>
    )
}

export default Title