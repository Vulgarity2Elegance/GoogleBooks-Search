import React from "react"
import { Container, makeStyles, Paper} from '@material-ui/core'
import Image from "../assets/bg-img.png"

const useStyles = makeStyles({
    heroContainer: {
        height: 250,
        backgroundImage: `url(${Image})`,    
        marginTop: 25  
    }
})

const Title = () => {
    const classes = useStyles();
    return (
      <Container maxWidth='lg'> 
        <Paper className={classes.heroContainer} />
      </Container>
    )
}

export default Title