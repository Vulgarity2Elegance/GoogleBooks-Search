import React from 'react'
import { Link } from "react-router-dom";
import { AppBar, Box, makeStyles, Toolbar, Typography } from "@material-ui/core"

const useStyles = makeStyles(() => ({
    AppBar: {
        backgroundColor: '#16264c'
    },
    items: {
        margin: '2rem',
        color: 'tan'
    }
}))

const menuItems = [
    {
      listText: "Search",
      listPath: "/",
    },
    {
      listText: "Save",
      listPath: "/save",
    },
  ];

const Navbar = () => {
    const classes = useStyles();
    return (
    <Box component='nav'>
        <AppBar position="static" className={classes.AppBar}>
            <Toolbar>
                <Typography variant='h4' style={{color: "tan"}}>
                    Google Books
                </Typography>             
                {menuItems.map((item, key) => (
                    <Typography className={classes.items} variant='body2' button='true' key={key} component={Link} to={item.listPath}>
                        {item.listText}
                    </Typography>
                ))}
            </Toolbar>
        </AppBar>
    </Box>
    )
}

export default Navbar
