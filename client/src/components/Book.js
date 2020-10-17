import React, { useState } from 'react'
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core'
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InfoIcon from '@material-ui/icons/Info';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';

function Book(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
            margin: "5rem 1rem 5rem 1rem",
            flexGrow: '1',
            maxWidth: '400',
            backgroundColor: 'tan'
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        image: {
            width: 128,
            height: 196
        },
      }));

    const classes = useStyles()

    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    const [icon, setIcon] = useState(<FavoriteBorderSharpIcon/>);
    const handleIconClick = () => {
        setIcon(<FavoriteIcon/>)
    }
    const {title, subtitle, authors, picture, description, url} = props;

    return(
        <Card className={classes.root}>
            <CardMedia component='img' className={classes.image} image={picture} title={title} />
            <CardHeader
            title={title}
            subheader={authors}/>
            <CardContent variant='caption'>
            {subtitle}
            </CardContent>
            <CardActions>
                <IconButton aria-label='save' onClick={handleIconClick}>
                    {icon}
                </IconButton>
                <IconButton aria-label='info' href={url} target='_blank'>
                    <InfoIcon/>
                </IconButton>
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography style={{color: '#16264c'}} variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default Book