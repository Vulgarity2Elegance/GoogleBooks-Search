import React from 'react'
import { Box, Button, Container, Grid, Paper, TextField} from "@material-ui/core"
import { withStyles } from '@material-ui/styles'
import SearchIcon from "@material-ui/icons/SearchRounded"

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

function Search(props) {
  return (
    <Container maxWidth='lg'>
        <Paper style={{marginTop: 25, backgroundColor: "#16264c"}}>
            <Box component='form' onSubmit={props.handleFormSubmit}>
                <Grid item style={{display: 'flex', justifyContent: 'space-around'}}>
                    <InputField
                    value={props.query}
                    onChange={props.handleInputChange}
                    type='text'
                    fullWidth={true}
                    label="Search for Books of Interest..."
                    variant='filled'
                    inputProps={{ style: { color: "tomato" } }}
                    margin="dense"
                    size="small"/>
                    <Button type={"submit"} variant='text' endIcon={<SearchIcon/>} color='secondary'/>  
                </Grid>
            </Box>
        </Paper>
    </Container>
    )
}

export default Search