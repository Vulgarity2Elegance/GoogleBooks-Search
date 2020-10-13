import React, { useState } from 'react'
import { Box, Button, Container, Grid, Paper, TextField} from "@material-ui/core"
import { makeStyles, withStyles } from '@material-ui/styles'
import SearchIcon from "@material-ui/icons/SearchRounded"

const useStyles = makeStyles({
    search: {
        marginTop: 25,
        backgroundColor: '#16264c'
    },

})

const InputField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "tan",
      },
      "& label": {
        color: "tan",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "tan",
        },
        "&:hover fieldset": {
          borderColor: "tan",
        },
        "&.Mui-focused fieldset": {
          borderColor: "tan",
        },
      },
    },
  })(TextField);

const Search = () => {
    const classes = useStyles()
    const [data, setData] = useState()
    return (
    <Container maxWidth='lg'>
        <Paper className={classes.search}>
            <Box component='form'>
                <Grid item style={{display: 'flex', justifyContent: 'space-around'}}>
                    <InputField
                    fullWidth={true}
                    label="Search for Books of Interest..."
                    variant='filled'
                    inputProps={{ style: { color: "tomato" } }}
                    margin="dense"
                    size="small"/>
                    <Button variant='text' endIcon={<SearchIcon/>} color='secondary'/>  
                </Grid>
            </Box>
        </Paper>
    </Container>
    )
}

export default Search