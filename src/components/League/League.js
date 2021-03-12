import React from 'react';
import './League.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';





const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Team = (props) => {
    const classes = useStyles();


    const { strLeague, strSport } = props.leagues; //idLeague,
    console.log(props.leagues);
    return (

        <div>
            <Card className={classes.root}>          
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://www.thesportsdb.com/images/media/league/fanart/xpwsrw1421853005.jpg/preview"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h3">
                            {strLeague}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Sport type:  {strSport}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" color="secondary">
                        Show Details
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Team;